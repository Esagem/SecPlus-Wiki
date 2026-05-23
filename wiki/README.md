---
title: Security+ Study Wiki — README
category: synthesis
tags: [meta, readme]
status: active
confidence: high
created: 2026-05-21
updated: 2026-05-23
---

# Security+ Study Wiki

The content folder of the `secplus-wiki` MCP knowledge base. Open this folder as an Obsidian vault for editing; the MCP server reads and writes here via the GitHub API.

Start at [`_index.md`](./_index.md). Read [`STUDY.md`](./STUDY.md) for the operating schema.

## Folder map

- `transcripts/` — raw Professor Messer SY0-701 auto-caption dumps. **Immutable.**
- `objectives/` — one page per exam objective (1.1, 1.2, …, 5.6). The distilled study material lives here.
- `quizzes/` — per-objective question banks and full-exam practice banks.
- `sessions/` — dated study session notes.
- `synthesis/` — cross-cutting views (weak areas, lint reports, exam blueprint, vocab, video index).

## How it stays consistent

- Every authored page has YAML front matter (see `STUDY.md §4`). Transcripts are exempt — they're auto-generated and immutable.
- Every change made through the MCP server is logged to `_log.md` automatically.
- All links use Obsidian-style explicit-path pipe syntax: `[[objectives/1.4|Objective 1.4]]`.
