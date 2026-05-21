// MCP JSON-RPC 2.0 handler for the Streamable HTTP transport.

import type { Env, JsonRpcRequest, JsonRpcResponse } from "./types";
import { ALL_TOOLS, findTool } from "./tools";

const SERVER_INFO = { name: "secplus-wiki", version: "0.1.0" };
const PROTOCOL_VERSION = "2024-11-05";

function ok(id: any, result: any): JsonRpcResponse { return { jsonrpc: "2.0", id, result }; }
function err(id: any, code: number, message: string): JsonRpcResponse { return { jsonrpc: "2.0", id, error: { code, message } }; }

export async function handleRpc(req: JsonRpcRequest, env: Env, isAuthed: boolean): Promise<JsonRpcResponse | null> {
  const id = req.id ?? null;
  try {
    switch (req.method) {
      case "initialize":
        return ok(id, {
          protocolVersion: PROTOCOL_VERSION,
          capabilities: { tools: {} },
          serverInfo: SERVER_INFO,
        });

      case "initialized":
      case "notifications/initialized":
        // Notifications get no response.
        return null;

      case "ping":
        return ok(id, {});

      case "tools/list":
        return ok(id, {
          tools: ALL_TOOLS.map(t => ({
            name: t.name,
            description: t.description,
            inputSchema: t.inputSchema,
          })),
        });

      case "tools/call": {
        const { name, arguments: args } = req.params ?? {};
        const tool = findTool(name);
        if (!tool) return err(id, -32602, `Unknown tool: ${name}`);
        if (tool.mutating && env.AUTH_TOKEN && !isAuthed) {
          return err(id, -32001, "Authentication required for mutating tools. Provide Authorization: Bearer <token>.");
        }
        try {
          const out = await tool.handler(args ?? {}, env);
          return ok(id, { content: [{ type: "text", text: out }] });
        } catch (e: any) {
          return ok(id, { content: [{ type: "text", text: `Error: ${e.message}` }], isError: true });
        }
      }

      default:
        return err(id, -32601, `Method not found: ${req.method}`);
    }
  } catch (e: any) {
    return err(id, -32603, `Internal error: ${e.message}`);
  }
}
