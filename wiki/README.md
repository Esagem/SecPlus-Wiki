# Security+ Study Wiki

The content folder of the `secplus-wiki` MCP knowledge base. Open this folder as an Obsidian vault for editing; the MCP server reads and writes here via the GitHub API.

Start at [`_index.md`](./_index.md). Read [`STUDY.md`](./STUDY.md) for the operating schema.

## Folder map

- `transcripts/` — raw Professor Messer SY0-701 auto-caption dumps. **Immutable.**
- `concepts/` — atomic concept pages, one per concept.
- `objectives/` — one page per exam objective (1.1, 1.2, …, 5.6).
- `quizzes/` — question banks.
- `sessions/` — dated study session notes.
- `synthesis/` — cross-cutting views (weak areas, lint reports, exam blueprint).

## How it stays consistent

- Every page has YAML front matter (see `STUDY.md §4`).
- Every change made through the MCP server is logged to `_log.md` automatically.
- All links use Obsidian-style explicit-path pipe syntax: `[[concepts/sql-injection|SQL Injection]]`.
