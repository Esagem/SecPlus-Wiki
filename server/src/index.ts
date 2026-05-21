// Cloudflare Worker entry point for the secplus-wiki MCP server.

import type { Env, JsonRpcRequest } from "./types";
import { handleRpc } from "./mcp";

function corsHeaders(): Record<string, string> {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, Mcp-Session-Id",
    "Access-Control-Expose-Headers": "Mcp-Session-Id",
  };
}

function isAuthed(request: Request, env: Env): boolean {
  if (!env.AUTH_TOKEN) return true;
  const h = request.headers.get("Authorization") ?? "";
  const m = h.match(/^Bearer\s+(.+)$/);
  return !!m && m[1] === env.AUTH_TOKEN;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }

    const url = new URL(request.url);

    // Health / human-readable landing.
    if (request.method === "GET" && url.pathname === "/") {
      return new Response(
        `secplus-wiki MCP server\n\nPOST /mcp with JSON-RPC 2.0 requests.\nSee SETUP.md for the connection URL and auth.\n`,
        { headers: { "Content-Type": "text/plain", ...corsHeaders() } },
      );
    }

    if (url.pathname !== "/mcp") {
      return new Response("Not found", { status: 404, headers: corsHeaders() });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: corsHeaders() });
    }

    let body: any;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders() },
      });
    }

    const authed = isAuthed(request, env);

    // Batched request: handle each, return array. Otherwise return single object.
    const reqs: JsonRpcRequest[] = Array.isArray(body) ? body : [body];
    const responses = await Promise.all(reqs.map(r => handleRpc(r, env, authed)));
    const filtered = responses.filter((r): r is NonNullable<typeof r> => r !== null);

    if (filtered.length === 0) {
      // Notifications only — return 202.
      return new Response(null, { status: 202, headers: corsHeaders() });
    }

    const payload = Array.isArray(body) ? filtered : filtered[0];
    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders() },
    });
  },
};
