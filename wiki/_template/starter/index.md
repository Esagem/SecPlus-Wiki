---
title: "{{SUBJECT_SHORT}} Study Wiki — Master Index"
category: synthesis
tags: [index, master, navigation]
status: active
confidence: high
created: YYYY-MM-DD
updated: YYYY-MM-DD
---

# {{SUBJECT_SHORT}} Study Wiki — Master Index

> **STARTER FILE.** Copy this to `_index.md` at the wiki root. Replace placeholders, populate the tables as content lands, delete this header block.

## What this is

The knowledge base and study surface for **{{SUBJECT}}**. See [[STUDY|STUDY.md]] for the operating schema and [[_LLM-OPERATING|_LLM-OPERATING.md]] for tool-discipline rules. Before authoring questions, read [[_QUESTION-AUTHORING|_QUESTION-AUTHORING.md]]. Before ingesting sources, read [[_INGESTION|_INGESTION.md]].

**Current phase:** *describe what stage the wiki is in — initial ingestion, distillation in progress, quiz-bank building, pre-exam review, etc.*

---

## Ingestion

Raw source material. See [[ingestion/README|ingestion/README.md]] for conventions and [[_INGESTION|_INGESTION.md]] for the full strategy.

| Folder | Count | Notes |
|--------|-------|-------|
| [[ingestion/transcripts/README\|transcripts/]] | 0 | Video lectures, lecture transcripts |
| [[ingestion/pdfs/README\|pdfs/]] | 0 | Study guides, practice tests |
| [[ingestion/web/README\|web/]] | 0 | Scraped articles, forum threads |
| [[ingestion/notes/README\|notes/]] | 0 | Aggregated study tips |

---

## Objectives

One page per exam objective. The distilled study material. Track `mastery` in front matter.

| Objective | Title | Status | Mastery |
|-----------|-------|--------|---------|
| | | | |

Use `wiki_list(category="objectives")` to enumerate. See [[STUDY|STUDY.md §4]] for the page template.

---

## Quizzes

### Per-objective banks

Per-topic question banks. Each loads the shared `_quiz-scaffold.md` via a thin bootstrap. Files get auto-renamed with ` ✓` suffix on first-try ≥ 90% accuracy.

| Quiz | Covers |
|------|--------|
| | |

### Practice exams

Full-length practice exams (MCQs + PBQs). All load the shared `_practice-exam-scaffold.md`.

| Practice exam | Scope |
|---------------|-------|
| | |

See [[_QUESTION-AUTHORING|_QUESTION-AUTHORING.md]] before authoring.

---

## Sessions

Dated study session notes under `sessions/YYYY-MM-DD-<slug>.md`. Quiz attempt logs auto-saved under `sessions/quiz-logs/<baseName>.log.md` by the scaffold.

Recent sessions: *list as they accumulate, newest first.*

---

## Synthesis

| Page | Purpose |
|------|---------|
| [[synthesis/exam-blueprint\|Exam Blueprint]] | Official objectives + domain weighting |
| [[synthesis/vocab\|Vocab]] | Master glossary, sortable by term/concept/objective |
| [[synthesis/weak-areas\|Weak Areas]] | Accumulated misses across quizzes and sessions |
| [[synthesis/open-questions\|Open Questions]] | Things you didn't fully understand; revisit list |
| [[synthesis/lint-report\|Lint Report]] | Wiki health snapshots |

AARs (`aar-YYYY-MM-DD.md`) get added when incidents warrant a post-mortem. Link them from this table when written.

---

## Status legend

- **seed** — stub, no real content yet
- **draft** — partial content, in flight
- **active** — useful and maintained (default state for most pages)
- **mature** — comprehensive, stable, well-tested
- **retired** — abandoned; kept for history

## Confidence legend

- **low** — rough, possibly wrong, needs verification
- **medium** — checked against one source
- **high** — checked against the source + another reference

## Mastery legend (objective pages)

- **weak** — you miss questions on this routinely
- **building** — sometimes you get it, sometimes you don't
- **strong** — you nail it

## Link format

Explicit-path pipe syntax everywhere: `[[path/to/file|Display Text]]`. Prevents Obsidian phantom pages and keeps references unambiguous. See [[STUDY|STUDY.md §4]].
