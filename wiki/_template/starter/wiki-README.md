---
title: "{{SUBJECT_SHORT}} Study Wiki"
category: synthesis
tags: [readme, entry-point]
status: active
confidence: high
created: YYYY-MM-DD
updated: YYYY-MM-DD
---

# {{SUBJECT_SHORT}} Study Wiki

> **STARTER FILE.** Copy this to `README.md` at the new wiki's root. Replace `{{SUBJECT}}`, `{{SUBJECT_SHORT}}`, and `{{WIKI_NAME}}` with the subject and MCP server name. Update the dates. Delete this header block.

The knowledge base and study surface for **{{SUBJECT}}**, served via the `{{WIKI_NAME}}` MCP server.

## Quick start

Open this folder as an Obsidian vault to browse and edit interactively. The wiki MCP tools read and write here via the GitHub API.

- Start at [`_index.md`](./_index.md) — master table of contents
- Read [`STUDY.md`](./STUDY.md) for the operating schema and conventions
- Read [`_LLM-OPERATING.md`](./_LLM-OPERATING.md) before any AI-driven editing
- Read [`_QUESTION-AUTHORING.md`](./_QUESTION-AUTHORING.md) before authoring quiz questions
- Read [`_INGESTION.md`](./_INGESTION.md) before pulling in new source material

## Folder map

| Folder | Purpose |
|--------|---------|
| `ingestion/` | Raw source material — transcripts, PDFs, web scrapes, notes. Immutable once ingested. |
| `objectives/` | Distilled study material, one page per syllabus objective. The content you actually study from. |
| `quizzes/` | Per-objective question banks and full-length practice exams. |
| `sessions/` | Dated study session notes. Quiz attempt logs auto-saved under `sessions/quiz-logs/`. |
| `synthesis/` | Cross-cutting views: vocab, weak areas, exam blueprint, lint reports, AARs. |

## Requirements

- **Obsidian** with the **Dataview plugin** — required for quiz rendering. The quiz files use `dataviewjs` code blocks to render interactive question banks; without Dataview they appear as raw markdown.
- **MCP server access** — configured via the parent Claude session. The wiki's tools (`wiki_read`, `wiki_write`, `wiki_edit`, etc.) are how AI sessions interact with this wiki.

## What this wiki is *not*

- Not a source archive — see `ingestion/` for raw material, kept immutable
- Not Anki — the quizzes are for AI-quizzing sessions, not spaced-repetition cards
- Not a general reference — scope is {{SUBJECT_SHORT}}; tangents stay in `synthesis/` or get cut
