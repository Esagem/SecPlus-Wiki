// Shared types for the secplus-wiki MCP server.

export interface Env {
  GITHUB_TOKEN: string;
  GITHUB_OWNER: string;
  GITHUB_REPO: string;
  GITHUB_BRANCH: string;
  WIKI_PATH_PREFIX: string;
  AUTH_TOKEN?: string;
}

// JSON-RPC 2.0 shapes.
export interface JsonRpcRequest {
  jsonrpc: "2.0";
  id?: number | string | null;
  method: string;
  params?: any;
}

export interface JsonRpcResponse {
  jsonrpc: "2.0";
  id: number | string | null;
  result?: any;
  error?: { code: number; message: string; data?: any };
}

// MCP tool descriptor.
export interface ToolDef {
  name: string;
  description: string;
  inputSchema: { type: "object"; properties: Record<string, any>; required?: string[]; additionalProperties?: boolean };
  mutating: boolean;
  handler: (input: any, env: Env) => Promise<string>;
}

// A wiki page in memory.
export interface Page {
  path: string;          // relative to the wiki root, e.g. "concepts/sql-injection.md"
  content: string;       // full file content including front matter
  sha: string;           // GitHub blob SHA, used for concurrent-write detection
  frontMatter: Record<string, any>;
  body: string;          // content with front matter stripped
}

// Log entry parsed from _log.md.
export interface LogEntry {
  date: string;          // YYYY-MM-DD
  op: string;            // ingest | session | spec | lint | schema | write | edit | status | delete | study | quiz
  context: string;
  short: string;
  raw: string;           // original line
}

export const STATUS_VALUES = ["seed", "draft", "active", "mature", "planned", "retired", "superseded"] as const;
export const CONFIDENCE_VALUES = ["low", "medium", "high"] as const;
export type Status = typeof STATUS_VALUES[number];
export type Confidence = typeof CONFIDENCE_VALUES[number];
