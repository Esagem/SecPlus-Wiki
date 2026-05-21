// Minimal GitHub REST client for the wiki.
// Uses fetch() directly — no octokit dependency, Workers-safe.

import type { Env } from "./types";

const API = "https://api.github.com";

function authHeaders(env: Env): Record<string, string> {
  return {
    "Authorization": `Bearer ${env.GITHUB_TOKEN}`,
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "secplus-wiki-mcp",
  };
}

// Resolve a wiki-relative path to a repo-relative path.
// "concepts/sql-injection.md" -> "wiki/concepts/sql-injection.md"
export function repoPath(env: Env, wikiPath: string): string {
  const clean = wikiPath.replace(/^\/+/, "");
  return env.WIKI_PATH_PREFIX ? `${env.WIKI_PATH_PREFIX}/${clean}` : clean;
}

// Strip the prefix back off — for displaying repo paths as wiki paths.
export function wikiPathFromRepo(env: Env, repoP: string): string {
  if (env.WIKI_PATH_PREFIX && repoP.startsWith(env.WIKI_PATH_PREFIX + "/")) {
    return repoP.slice(env.WIKI_PATH_PREFIX.length + 1);
  }
  return repoP;
}

interface ContentsFileResponse {
  type: "file";
  name: string;
  path: string;
  sha: string;
  size: number;
  content: string;  // base64
  encoding: "base64";
}

// GET /repos/{owner}/{repo}/contents/{path}
// Returns null on 404.
export async function getFile(env: Env, wikiPath: string): Promise<{ content: string; sha: string } | null> {
  const path = repoPath(env, wikiPath);
  const url = `${API}/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${encodeURIComponent(path).replace(/%2F/g, "/")}?ref=${env.GITHUB_BRANCH}`;
  const r = await fetch(url, { headers: authHeaders(env) });
  if (r.status === 404) return null;
  if (!r.ok) throw new Error(`GitHub getFile ${r.status}: ${await r.text()}`);
  const data = await r.json() as ContentsFileResponse;
  // GitHub returns base64 with line breaks; strip them before decoding.
  const b64 = data.content.replace(/\s+/g, "");
  const bytes = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
  const content = new TextDecoder("utf-8").decode(bytes);
  return { content, sha: data.sha };
}

// PUT /repos/{owner}/{repo}/contents/{path}
// sha is required when updating an existing file (omit on first create).
export async function putFile(env: Env, wikiPath: string, content: string, message: string, sha?: string): Promise<{ sha: string }> {
  const path = repoPath(env, wikiPath);
  const url = `${API}/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${encodeURIComponent(path).replace(/%2F/g, "/")}`;
  // btoa requires latin1; encode UTF-8 → bytes → latin1 first.
  const bytes = new TextEncoder().encode(content);
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  const b64 = btoa(bin);
  const body: any = { message, content: b64, branch: env.GITHUB_BRANCH };
  if (sha) body.sha = sha;
  const r = await fetch(url, {
    method: "PUT",
    headers: { ...authHeaders(env), "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (r.status === 409) throw new Error(`Concurrent-write conflict on ${wikiPath}: someone else modified it since your last read. Re-read and retry.`);
  if (!r.ok) throw new Error(`GitHub putFile ${r.status}: ${await r.text()}`);
  const data = await r.json() as { content: { sha: string } };
  return { sha: data.content.sha };
}

// DELETE /repos/{owner}/{repo}/contents/{path}
export async function deleteFile(env: Env, wikiPath: string, message: string, sha: string): Promise<void> {
  const path = repoPath(env, wikiPath);
  const url = `${API}/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${encodeURIComponent(path).replace(/%2F/g, "/")}`;
  const r = await fetch(url, {
    method: "DELETE",
    headers: { ...authHeaders(env), "Content-Type": "application/json" },
    body: JSON.stringify({ message, sha, branch: env.GITHUB_BRANCH }),
  });
  if (!r.ok) throw new Error(`GitHub deleteFile ${r.status}: ${await r.text()}`);
}

// GET /repos/{owner}/{repo}/git/trees/{branch}?recursive=1
// Returns all markdown files in the wiki, paths relative to wiki root.
export async function listAllPages(env: Env): Promise<{ path: string; sha: string }[]> {
  const url = `${API}/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/git/trees/${env.GITHUB_BRANCH}?recursive=1`;
  const r = await fetch(url, { headers: authHeaders(env) });
  if (!r.ok) throw new Error(`GitHub listAllPages ${r.status}: ${await r.text()}`);
  const data = await r.json() as { tree: { path: string; type: string; sha: string }[] };
  const prefix = env.WIKI_PATH_PREFIX ? env.WIKI_PATH_PREFIX + "/" : "";
  return data.tree
    .filter(e => e.type === "blob" && e.path.endsWith(".md") && (prefix === "" || e.path.startsWith(prefix)))
    .map(e => ({ path: wikiPathFromRepo(env, e.path), sha: e.sha }));
}

// Fetch raw file content by blob SHA. Cheaper than the contents endpoint when you already have the SHA.
export async function getBlob(env: Env, sha: string): Promise<string> {
  const url = `${API}/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/git/blobs/${sha}`;
  const r = await fetch(url, { headers: authHeaders(env) });
  if (!r.ok) throw new Error(`GitHub getBlob ${r.status}: ${await r.text()}`);
  const data = await r.json() as { content: string; encoding: "base64" };
  const b64 = data.content.replace(/\s+/g, "");
  const bytes = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
  return new TextDecoder("utf-8").decode(bytes);
}
