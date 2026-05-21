// Minimal BM25 scoring over wiki pages.
// Loads all pages once per call, builds an in-memory index, returns top N matches.
// For ~100-500 pages this completes in <2s on a Worker. Cache later if needed.

import type { Env } from "./types";
import { listAllPages, getBlob } from "./github";

interface Doc {
  path: string;
  title: string;
  content: string;
  tokens: string[];
  termFreq: Map<string, number>;
  length: number;
}

const STOPWORDS = new Set([
  "the","a","an","and","or","but","if","then","else","when","at","by","for","with","about","against",
  "between","into","through","during","before","after","above","below","to","from","up","down","in","out",
  "on","off","over","under","again","further","is","are","was","were","be","been","being","have","has",
  "had","do","does","did","of","that","this","these","those","it","its","as","not","no","so","such","than",
  "too","very","can","will","just","also","i","you","he","she","we","they","what","which","who","whom",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/```[\s\S]*?```/g, " ")        // strip code blocks
    .replace(/`[^`]*`/g, " ")               // strip inline code
    .replace(/[^a-z0-9\s\-_]/g, " ")        // alphanumerics + a couple connectors
    .split(/\s+/)
    .filter(t => t.length > 2 && !STOPWORDS.has(t));
}

function extractTitle(content: string, fallback: string): string {
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (fmMatch) {
    const t = fmMatch[1].match(/^title:\s*"?([^"\n]+)"?$/m);
    if (t) return t[1].trim();
  }
  const h1 = content.match(/^#\s+(.+)$/m);
  if (h1) return h1[1].trim();
  return fallback;
}

function snippet(content: string, queryTokens: string[], maxLen = 240): string {
  const body = content.replace(/^---\n[\s\S]*?\n---\n+/, "");
  const lc = body.toLowerCase();
  let bestIdx = -1;
  for (const t of queryTokens) {
    const i = lc.indexOf(t);
    if (i >= 0 && (bestIdx < 0 || i < bestIdx)) bestIdx = i;
  }
  if (bestIdx < 0) return body.slice(0, maxLen).trim().replace(/\s+/g, " ");
  const start = Math.max(0, bestIdx - 60);
  return (start > 0 ? "…" : "") + body.slice(start, start + maxLen).trim().replace(/\s+/g, " ") + "…";
}

export async function search(env: Env, query: string, topN = 10): Promise<string> {
  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) return "No searchable tokens in query.";

  const pages = await listAllPages(env);
  const docs: Doc[] = [];
  // Fetch blobs in parallel — Workers will cap concurrency naturally.
  const contents = await Promise.all(pages.map(p => getBlob(env, p.sha).catch(() => "")));
  for (let i = 0; i < pages.length; i++) {
    const content = contents[i];
    if (!content) continue;
    const tokens = tokenize(content);
    const termFreq = new Map<string, number>();
    for (const t of tokens) termFreq.set(t, (termFreq.get(t) ?? 0) + 1);
    docs.push({
      path: pages[i].path,
      title: extractTitle(content, pages[i].path),
      content,
      tokens,
      termFreq,
      length: tokens.length,
    });
  }
  if (docs.length === 0) return "No pages found.";

  // BM25 parameters.
  const k1 = 1.5;
  const b = 0.75;
  const avgdl = docs.reduce((s, d) => s + d.length, 0) / docs.length;

  // Document frequency for each query term.
  const df = new Map<string, number>();
  for (const t of queryTokens) {
    df.set(t, docs.filter(d => d.termFreq.has(t)).length);
  }

  const N = docs.length;
  const scored = docs.map(d => {
    let score = 0;
    for (const t of queryTokens) {
      const tf = d.termFreq.get(t) ?? 0;
      if (tf === 0) continue;
      const dfT = df.get(t) ?? 0;
      const idf = Math.log(1 + (N - dfT + 0.5) / (dfT + 0.5));
      const norm = tf * (k1 + 1) / (tf + k1 * (1 - b + b * d.length / avgdl));
      score += idf * norm;
    }
    return { doc: d, score };
  })
  .filter(r => r.score > 0)
  .sort((a, b) => b.score - a.score)
  .slice(0, topN);

  if (scored.length === 0) return `No matches for "${query}".`;

  const lines: string[] = [`Found ${scored.length} matches for "${query}":\n`];
  for (const r of scored) {
    lines.push(`### ${r.doc.title}`);
    lines.push(`Path: \`${r.doc.path}\`  ·  Score: ${r.score.toFixed(2)}`);
    lines.push(snippet(r.doc.content, queryTokens));
    lines.push("");
  }
  return lines.join("\n");
}
