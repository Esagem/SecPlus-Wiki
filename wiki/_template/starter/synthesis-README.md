---
title: Synthesis — Cross-Cutting Views
category: synthesis
tags: [synthesis, readme]
status: active
confidence: high
created: YYYY-MM-DD
updated: YYYY-MM-DD
---

# Synthesis — Cross-Cutting Views

> **STARTER FILE.** Copy to `synthesis/README.md` in the new wiki. Delete this header once placed.

Pages that span multiple objectives or capture wiki-wide state.

## Standing pages

| Page | Purpose |
|------|---------|
| `exam-blueprint.md` | Official syllabus, domain weighting, question-count targets |
| `vocab.md` | Master glossary — term, definition, objective, concept-link |
| `weak-areas.md` | Accumulated misses across quizzes and sessions; the re-study queue |
| `open-questions.md` | Things you didn't fully understand; revisit list |
| `lint-report.md` | Wiki health snapshots — schema drift, broken links, orphan pages, dated tables |

These five should exist from day one even if empty. Create them as `seed` status when bootstrapping the wiki.

## AARs (After-Action Reviews)

When something breaks badly enough to need a post-mortem — data loss, recurring tooling problem, persistent confusion about a topic — write an AAR.

Filename: `aar-YYYY-MM-DD.md` (the date of the AAR, not necessarily the date of the incident).

Use the structure in [[_template/starter/aar-template|aar-template.md]]:
- TL;DR
- What worked
- What failed (per-failure detail)
- Root cause
- Fix summary
- Forward rules
- Recovery plan
- Open questions

Link the AAR from `_index.md`'s Synthesis table when written. If the AAR surfaces durable forward rules, those rules should land in `_LLM-OPERATING.md` or `_QUESTION-AUTHORING.md` (whichever is the right home) so future sessions inherit them.

## What synthesis is *not*

- Not the place for objective-specific content. That goes in `objectives/`.
- Not the place for raw source material. That goes in `ingestion/`.
- Not a catch-all. New synthesis pages should justify themselves — what cross-cutting question does this page answer that no existing page does?
