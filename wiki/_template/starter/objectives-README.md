---
title: Objectives — Distilled Study Material
category: objective
tags: [objectives, readme]
status: active
confidence: high
created: YYYY-MM-DD
updated: YYYY-MM-DD
---

# Objectives — Distilled Study Material

> **STARTER FILE.** Copy to `objectives/README.md` in the new wiki. Delete this header once placed.

One page per exam objective. This is the **distilled study material** — the actual content you study from. The raw input lives in `ingestion/`; this folder is the output of distillation.

## Filename

`<topic-id>.md` using the official syllabus's numbering scheme.

- SY0-701: `1.1.md` through `5.6.md`
- AWS SAA-C03: `1.1.md` through `4.x.md` (Domain.Objective format)
- For a non-numeric syllabus, use whatever IDs the official blueprint defines

When a quiz on this objective passes at ≥ 90% first-try accuracy, the scaffold auto-renames the file to `<id> ✓.md`. Don't manually add the ✓ — let the scaffold do it.

## Front matter

```yaml
---
title: <Topic ID> — <Topic Name>
category: objective
tags: [<topic-tag>, <topic-id>]
status: <seed|draft|active|mature|retired>
confidence: <low|medium|high>
mastery: <weak|building|strong>
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```

`mastery` is your self-assessment, separate from `confidence` (which is about whether the content is *correct*).

## Page template

See [[STUDY|STUDY.md §4 — Page-type templates → Objective page]] for the structural template. Each objective page has:

- Front matter + H1 title
- One-line official description quote
- Short framing paragraph (what this objective is really testing)
- Distilled content under `## ` major-topic sections
- `## How to read scenario questions` if the objective has common exam traps
- `## Vocab` linking to filtered view of `synthesis/vocab.md`
- `## Quizzes` listing the per-topic quiz file
- `## Source` listing the ingestion files this page was distilled from

## Distillation workflow

See [[STUDY|STUDY.md §5.1]] for the full workflow. In short: read from `ingestion/`, write to this folder, update `_index.md` when new objectives land.
