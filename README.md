# secplus-wiki

A custom MCP knowledge base for CompTIA Security+ (SY0-701) study. GitHub-backed markdown wiki served by a Cloudflare Worker, mirroring the surface of Eli's `cyber-wiki`.

## What's in this repo

```
secplus-wiki/
├── README.md      ← you are here
├── SETUP.md       ← step-by-step deploy
│
├── server/        ← the MCP server (Cloudflare Worker, TypeScript)
│   ├── src/
│   │   ├── index.ts        Worker entry
│   │   ├── mcp.ts          JSON-RPC dispatch
│   │   ├── tools.ts        All 10 tools
│   │   ├── github.ts       GitHub REST client
│   │   ├── search.ts       BM25 search
│   │   └── types.ts        Shared types + schema enums
│   ├── package.json
│   ├── tsconfig.json
│   └── wrangler.toml       ← edit GITHUB_OWNER/REPO/BRANCH here
│
└── wiki/          ← the wiki content. Obsidian opens this as a vault.
    ├── _index.md           Master index — LLM's first read
    ├── _log.md             Append-only change log (auto-maintained)
    ├── STUDY.md            Operating schema for the LLM
    ├── README.md
    ├── transcripts/        Raw Professor Messer auto-caption dumps
    ├── concepts/           Atomic concept pages
    ├── objectives/         One page per exam objective (1.1 … 5.6)
    ├── quizzes/            Question banks
    ├── sessions/           Dated study session notes
    └── synthesis/          Cross-cutting views (weak areas, blueprint, lint)
```

## Tool surface (matches cyber-wiki)

| Tool | Purpose |
|------|---------|
| `wiki_index` | Master index — call first |
| `wiki_list` | List pages (optionally by folder) |
| `wiki_read` | Read a page, optionally one section |
| `wiki_read_many` | Batched read of N pages |
| `wiki_search` | BM25 across all pages |
| `wiki_write` | Create or rewrite a full page |
| `wiki_edit` | Targeted string-replace edits (refuses front-matter) |
| `wiki_status_set` | Front-matter-only mutations |
| `wiki_delete` | Delete a page (refuses real pages without force) |
| `wiki_log_tail` | Recent log entries as structured data |

## Quick start

```bash
# clone, point a new GitHub repo at the wiki/ folder, deploy the Worker, connect in Claude
# Full steps: SETUP.md
```
