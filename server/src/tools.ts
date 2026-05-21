// All 10 MCP tools for the Security+ study wiki.
// Surface matches cyber-wiki one-to-one.

import type { Env, ToolDef, LogEntry } from "./types";
import { STATUS_VALUES, CONFIDENCE_VALUES } from "./types";
import { getFile, putFile, deleteFile, listAllPages } from "./github";
import { search as bm25Search } from "./search";

// ---------- Front matter parsing / serialization ----------

function parseFrontMatter(content: string): { fm: Record<string, any>; body: string } {
  const m = content.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { fm: {}, body: content };
  const fm: Record<string, any> = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([a-zA-Z_][a-zA-Z0-9_-]*):\s*(.*)$/);
    if (!kv) continue;
    let val: any = kv[2].trim();
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
    else if (val.startsWith("[") && val.endsWith("]")) {
      val = val.slice(1, -1).split(",").map(s => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean);
    }
    fm[kv[1]] = val;
  }
  return { fm, body: content.slice(m[0].length) };
}

function serializeFrontMatter(fm: Record<string, any>): string {
  const order = ["title", "category", "tags", "status", "confidence", "owner", "superseded_by", "created", "updated"];
  const keys = [...order.filter(k => k in fm), ...Object.keys(fm).filter(k => !order.includes(k))];
  const lines = ["---"];
  for (const k of keys) {
    const v = fm[k];
    if (Array.isArray(v)) lines.push(`${k}: [${v.map(x => /[,\s]/.test(String(x)) ? `"${x}"` : x).join(", ")}]`);
    else if (typeof v === "string" && /[:#"]/.test(v)) lines.push(`${k}: "${v.replace(/"/g, '\\"')}"`);
    else lines.push(`${k}: ${v}`);
  }
  lines.push("---", "");
  return lines.join("\n");
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

// ---------- _log.md append ----------

async function appendLog(env: Env, op: string, context: string, short: string): Promise<void> {
  const line = `## [${today()}] ${op} | ${context} | ${short}\n`;
  const existing = await getFile(env, "_log.md");
  if (existing) {
    await putFile(env, "_log.md", existing.content + line, `log: ${op} ${context}`, existing.sha);
  } else {
    await putFile(env, "_log.md", `# Wiki change log\n\nAppended by the MCP server on every mutating call.\n\n${line}`, "init log");
  }
}

// ---------- Section extraction ----------

// Extract one or more named sections (markdown headers) from a page body, including subsections.
function extractSections(body: string, sections: string[]): { found: string[]; missing: string[] } {
  const headerLines: { line: number; level: number; title: string }[] = [];
  const lines = body.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^(#{1,6})\s+(.+?)\s*$/);
    if (m) headerLines.push({ line: i, level: m[1].length, title: m[2].trim() });
  }
  const found: string[] = [];
  const missing: string[] = [];
  for (const want of sections) {
    // Accept "Modes" (level-agnostic) or "## Modes" (pinned level).
    const pinnedLevel = (want.match(/^(#+)\s+/)?.[1].length) || 0;
    const wantTitle = want.replace(/^#+\s+/, "").trim().toLowerCase();
    const idx = headerLines.findIndex(h => h.title.toLowerCase() === wantTitle && (pinnedLevel === 0 || h.level === pinnedLevel));
    if (idx === -1) { missing.push(want); continue; }
    const start = headerLines[idx].line;
    const myLevel = headerLines[idx].level;
    // Find the next header at the same or shallower level — that's where this section ends.
    let end = lines.length;
    for (let j = idx + 1; j < headerLines.length; j++) {
      if (headerLines[j].level <= myLevel) { end = headerLines[j].line; break; }
    }
    found.push(lines.slice(start, end).join("\n").trimEnd());
  }
  return { found, missing };
}

// ---------- Tools ----------

const wiki_index: ToolDef = {
  name: "wiki_index",
  description: "Return the master index of the wiki (_index.md). Read this first for any non-trivial query.",
  inputSchema: { type: "object", properties: {}, additionalProperties: false },
  mutating: false,
  handler: async (_input, env) => {
    const f = await getFile(env, "_index.md");
    if (!f) throw new Error("_index.md not found");
    return f.content;
  },
};

const wiki_list: ToolDef = {
  name: "wiki_list",
  description: "List all wiki pages, optionally filtered by category folder (e.g. 'concepts', 'objectives').",
  inputSchema: {
    type: "object",
    properties: { category: { type: "string", description: "Optional category / folder prefix. Omit for all pages." } },
    additionalProperties: false,
  },
  mutating: false,
  handler: async (input, env) => {
    const pages = await listAllPages(env);
    const filtered = input.category
      ? pages.filter(p => p.path.startsWith(input.category.replace(/\/$/, "") + "/"))
      : pages;
    if (filtered.length === 0) return `No pages found${input.category ? ` under ${input.category}` : ""}.`;
    return filtered.map(p => p.path).sort().join("\n");
  },
};

const wiki_read: ToolDef = {
  name: "wiki_read",
  description: "Read a wiki page by path. Pass `section` to return just one (or several) sections. Pass `include_front_matter: false` to strip the YAML block.",
  inputSchema: {
    type: "object",
    properties: {
      page_path: { type: "string", description: "Path relative to the wiki root, e.g. 'concepts/sql-injection.md'." },
      section: { description: "Optional section name. String for one, array for several. Bare 'Modes' or pinned '## Modes'.", oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }] },
      include_front_matter: { type: "boolean", description: "Include the YAML front matter. Default true.", default: true },
    },
    required: ["page_path"],
    additionalProperties: false,
  },
  mutating: false,
  handler: async (input, env) => {
    const f = await getFile(env, input.page_path);
    if (!f) throw new Error(`Page not found: ${input.page_path}`);
    const { fm, body } = parseFrontMatter(f.content);
    let outBody = body;
    if (input.section) {
      const wanted = Array.isArray(input.section) ? input.section : [input.section];
      const { found, missing } = extractSections(body, wanted);
      if (found.length === 0) throw new Error(`Section(s) not found in ${input.page_path}: ${missing.join(", ")}`);
      outBody = found.join("\n\n");
      if (missing.length > 0) outBody += `\n\n<!-- missing sections: ${missing.join(", ")} -->`;
    }
    if (input.include_front_matter === false) return outBody;
    return serializeFrontMatter(fm) + outBody;
  },
};

const wiki_read_many: ToolDef = {
  name: "wiki_read_many",
  description: "Batched read of N pages. Provide `page_paths` (explicit list) OR `category` (folder), not both. Optional `section` filter applies to every page. Default max 10 pages, hard cap 25.",
  inputSchema: {
    type: "object",
    properties: {
      page_paths: { type: "array", items: { type: "string" }, description: "Explicit list of page paths." },
      category: { type: "string", description: "Folder prefix; reads every page under it. Mutually exclusive with page_paths." },
      section: { description: "Optional section filter, applied to every page.", oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }] },
      include_front_matter: { type: "boolean", default: true },
      max_pages: { type: "number", default: 10, description: "Hard cap 25." },
    },
    additionalProperties: false,
  },
  mutating: false,
  handler: async (input, env) => {
    const cap = Math.min(input.max_pages ?? 10, 25);
    let paths: string[] = [];
    if (input.page_paths && input.category) throw new Error("Pass page_paths OR category, not both.");
    if (input.page_paths) paths = input.page_paths.slice(0, cap);
    else if (input.category) {
      const all = await listAllPages(env);
      paths = all.filter(p => p.path.startsWith(input.category.replace(/\/$/, "") + "/")).map(p => p.path).slice(0, cap);
    } else throw new Error("Pass page_paths or category.");

    const results: any[] = [];
    const errors: any[] = [];
    for (const p of paths) {
      try {
        const f = await getFile(env, p);
        if (!f) { errors.push({ path: p, error: "not found" }); continue; }
        const { fm, body } = parseFrontMatter(f.content);
        let outBody = body;
        if (input.section) {
          const wanted = Array.isArray(input.section) ? input.section : [input.section];
          const { found, missing } = extractSections(body, wanted);
          if (found.length === 0) { errors.push({ path: p, error: `missing sections: ${missing.join(", ")}` }); continue; }
          outBody = found.join("\n\n");
        }
        const content = (input.include_front_matter === false) ? outBody : serializeFrontMatter(fm) + outBody;
        results.push({ path: p, content });
      } catch (e: any) {
        errors.push({ path: p, error: e.message });
      }
    }
    return JSON.stringify({ pages: results, errors }, null, 2);
  },
};

const wiki_search: ToolDef = {
  name: "wiki_search",
  description: "Full-text BM25 search across all wiki pages.",
  inputSchema: {
    type: "object",
    properties: {
      query: { type: "string", description: "Search query — content terms, not meta words." },
      top_n: { type: "number", default: 10 },
    },
    required: ["query"],
    additionalProperties: false,
  },
  mutating: false,
  handler: async (input, env) => bm25Search(env, input.query, input.top_n ?? 10),
};

const wiki_write: ToolDef = {
  name: "wiki_write",
  description: "Create or replace an entire page. Use only for new pages or rewrites of >~50% of an existing page; for smaller changes use wiki_edit.",
  inputSchema: {
    type: "object",
    properties: {
      page_path: { type: "string" },
      content: { type: "string", description: "Full file content including YAML front matter." },
      changelog_entry: { type: "string", description: "Optional short description for _log.md. Auto-generated if omitted." },
    },
    required: ["page_path", "content"],
    additionalProperties: false,
  },
  mutating: true,
  handler: async (input, env) => {
    const existing = await getFile(env, input.page_path);
    const verb = existing ? "rewrote" : "created";
    const { sha } = await putFile(env, input.page_path, input.content, `write: ${input.page_path}`, existing?.sha);
    await appendLog(env, "write", input.page_path, input.changelog_entry ?? `${verb} page`);
    return `${verb} ${input.page_path} (sha ${sha.slice(0, 7)}).`;
  },
};

const wiki_edit: ToolDef = {
  name: "wiki_edit",
  description: "Patch a page by replacing exact strings. Transactional: if any edit fails to match uniquely, none are applied. Refuses any edit that touches YAML front matter — use wiki_status_set for that.",
  inputSchema: {
    type: "object",
    properties: {
      page_path: { type: "string" },
      edits: {
        type: "array",
        items: {
          type: "object",
          properties: {
            old_str: { type: "string", description: "Exact string to replace. Must occur exactly once." },
            new_str: { type: "string", description: "Replacement (empty string to delete)." },
          },
          required: ["old_str", "new_str"],
        },
        minItems: 1,
      },
      changelog_entry: { type: "string", description: "Optional short description for _log.md." },
    },
    required: ["page_path", "edits"],
    additionalProperties: false,
  },
  mutating: true,
  handler: async (input, env) => {
    const f = await getFile(env, input.page_path);
    if (!f) throw new Error(`Page not found: ${input.page_path}`);

    // Determine the front matter span so we can reject overlapping edits.
    const fmMatch = f.content.match(/^---\n[\s\S]*?\n---\n?/);
    const fmEnd = fmMatch ? fmMatch[0].length : 0;

    let working = f.content;
    for (let i = 0; i < input.edits.length; i++) {
      const { old_str, new_str } = input.edits[i];
      const idx = working.indexOf(old_str);
      if (idx === -1) throw new Error(`Edit ${i + 1}: old_str not found.`);
      if (working.indexOf(old_str, idx + 1) !== -1) throw new Error(`Edit ${i + 1}: old_str matches multiple locations; make it more specific.`);
      if (idx < fmEnd) throw new Error(`Edit ${i + 1}: targets the YAML front matter. Use wiki_status_set instead.`);
      working = working.slice(0, idx) + new_str + working.slice(idx + old_str.length);
    }
    const { sha } = await putFile(env, input.page_path, working, `edit: ${input.page_path}`, f.sha);
    await appendLog(env, "edit", input.page_path, input.changelog_entry ?? `${input.edits.length} edit(s)`);
    return `Applied ${input.edits.length} edit(s) to ${input.page_path} (sha ${sha.slice(0, 7)}).`;
  },
};

const wiki_status_set: ToolDef = {
  name: "wiki_status_set",
  description: "Mutate a page's YAML front matter only. Validates against the schema (status, confidence values).",
  inputSchema: {
    type: "object",
    properties: {
      page_path: { type: "string" },
      status: { type: "string", enum: STATUS_VALUES as unknown as string[] },
      confidence: { type: "string", enum: CONFIDENCE_VALUES as unknown as string[] },
      owner: { type: "string" },
      tags: { type: "array", items: { type: "string" } },
      superseded_by: { type: "string" },
      changelog_entry: { type: "string" },
    },
    required: ["page_path"],
    additionalProperties: false,
  },
  mutating: true,
  handler: async (input, env) => {
    const f = await getFile(env, input.page_path);
    if (!f) throw new Error(`Page not found: ${input.page_path}`);
    const { fm, body } = parseFrontMatter(f.content);
    const changes: string[] = [];
    for (const k of ["status", "confidence", "owner", "tags", "superseded_by"]) {
      if (input[k] !== undefined) {
        changes.push(`${k}: ${fm[k] ?? "—"} → ${Array.isArray(input[k]) ? `[${input[k].join(", ")}]` : input[k]}`);
        fm[k] = input[k];
      }
    }
    if (changes.length === 0) throw new Error("No front-matter fields supplied.");
    fm.updated = today();
    const newContent = serializeFrontMatter(fm) + body;
    const { sha } = await putFile(env, input.page_path, newContent, `status: ${input.page_path}`, f.sha);
    await appendLog(env, "status", input.page_path, input.changelog_entry ?? changes.join("; "));
    return `Updated front matter on ${input.page_path} (sha ${sha.slice(0, 7)}):\n${changes.map(c => "  " + c).join("\n")}`;
  },
};

const wiki_delete: ToolDef = {
  name: "wiki_delete",
  description: "Permanently delete a wiki page. Refuses non-test-looking pages unless force=true. Prefer wiki_status_set(status='retired') for stale design material.",
  inputSchema: {
    type: "object",
    properties: {
      page_path: { type: "string" },
      force: { type: "boolean", default: false },
      changelog_entry: { type: "string" },
    },
    required: ["page_path"],
    additionalProperties: false,
  },
  mutating: true,
  handler: async (input, env) => {
    const f = await getFile(env, input.page_path);
    if (!f) throw new Error(`Page not found: ${input.page_path}`);
    const looksLikeTest = /(^|\/)(test|scratch|tmp|temp)[-_/]/.test(input.page_path);
    if (!looksLikeTest && !input.force) throw new Error(`Refusing to delete ${input.page_path} without force=true. Consider wiki_status_set(status='retired') instead.`);
    await deleteFile(env, input.page_path, `delete: ${input.page_path}`, f.sha);
    await appendLog(env, "delete", input.page_path, input.changelog_entry ?? "page deleted");
    return `Deleted ${input.page_path}.`;
  },
};

const wiki_log_tail: ToolDef = {
  name: "wiki_log_tail",
  description: "Recent entries from _log.md as structured records, optionally filtered by op or date.",
  inputSchema: {
    type: "object",
    properties: {
      n: { type: "number", default: 20, description: "Max number of entries." },
      op: { type: "string", description: "Filter by op (e.g. 'edit', 'write', 'status')." },
      since: { type: "string", description: "ISO date — only include entries on or after this date." },
      until: { type: "string", description: "ISO date — only include entries on or before this date." },
    },
    additionalProperties: false,
  },
  mutating: false,
  handler: async (input, env) => {
    const f = await getFile(env, "_log.md");
    if (!f) return "No log entries yet.";
    const entries: LogEntry[] = [];
    for (const line of f.content.split("\n")) {
      const m = line.match(/^## \[(\d{4}-\d{2}-\d{2})\] ([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*(.+)$/);
      if (!m) continue;
      entries.push({ date: m[1], op: m[2].trim(), context: m[3].trim(), short: m[4].trim(), raw: line });
    }
    let filtered = entries;
    if (input.op) filtered = filtered.filter(e => e.op === input.op);
    if (input.since) filtered = filtered.filter(e => e.date >= input.since);
    if (input.until) filtered = filtered.filter(e => e.date <= input.until);
    const sliced = filtered.slice(-1 * (input.n ?? 20));
    return JSON.stringify(sliced, null, 2);
  },
};

export const ALL_TOOLS: ToolDef[] = [
  wiki_index,
  wiki_list,
  wiki_read,
  wiki_read_many,
  wiki_search,
  wiki_write,
  wiki_edit,
  wiki_status_set,
  wiki_delete,
  wiki_log_tail,
];

export function findTool(name: string): ToolDef | undefined {
  return ALL_TOOLS.find(t => t.name === name);
}
