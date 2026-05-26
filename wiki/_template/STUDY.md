---
title: STUDY.md (TEMPLATE) — Wiki Schema & Operating Guide
category: synthesis
tags: [template, schema, operating-guide]
status: active
confidence: high
created: 2026-05-26
updated: 2026-05-26
---

# STUDY.md — Wiki Schema & Operating Guide

> **TEMPLATE FILE.** Copy this to the root of a new study wiki as `STUDY.md`, then do a global search-and-replace on the placeholders:
>
> - `{{SUBJECT}}` — long subject name, e.g. "AWS Certified Solutions Architect — Associate (SAA-C03)"
> - `{{SUBJECT_SHORT}}` — short name, e.g. "AWS SAA-C03"
> - `{{N_OBJECTIVES}}` — total number of objectives/topics in the syllabus
> - `{{DOMAIN_TABLE}}` — replace with the actual domain breakdown table
>
> Once substituted, delete this header block.

Operating manual for the **{{SUBJECT}} study wiki**. Any LLM connecting to this wiki's MCP server MUST read this file first, plus [[_LLM-OPERATING|_LLM-OPERATING.md]] (tool discipline), [[_QUESTION-AUTHORING|_QUESTION-AUTHORING.md]] (content rules), and [[_INGESTION|_INGESTION.md]] (source-ingestion strategy), and follow all four.

---

## 0. What this wiki is

This wiki is the **knowledge base and study surface** for {{SUBJECT}}. It exists so that:

- Raw source material gets distilled into clean, cross-referenced **objective pages**.
- Quiz banks live alongside the material they cover, so study sessions can pull the right questions at the right time.
- Each study session leaves a trace — what was covered, what was weak, what to revisit.

The wiki is the durable study artifact. Chat sessions come and go; what lands here is what survives.

## 1. What this wiki is *not*

- **Not a source archive.** Raw transcripts / textbook chapters / documentation dumps live under `transcripts/` (or similarly named) and are treated as immutable. The LLM reads them and writes *about* them in `objectives/`, never edits them.
- **Not Anki.** Quiz pages capture question banks for AI-quizzing sessions, not spaced-repetition cards.
- **Not a general reference.** Scope is the {{SUBJECT_SHORT}} syllabus. Tangents that don't map to an objective stay in `synthesis/` or get cut.

## 2. The two layers

- **Raw source** (`transcripts/` or similar) — immutable source material. The LLM reads these to build distilled pages elsewhere.
- **The wiki** — everything else. LLM-authored markdown: objective pages, quiz banks, session notes, synthesis. The LLM owns this layer.

## 3. Directory layout

```
wiki/
├── _index.md              # Master index. Rebuild on every meaningful change.
├── _log.md                # Append-only chronological log (auto-maintained).
├── STUDY.md               # This file.
├── _LLM-OPERATING.md      # Tool-discipline rules.
├── _QUESTION-AUTHORING.md # Quiz/practice-exam content rules.
├── _INGESTION.md          # Source-ingestion strategy.
├── README.md              # Top-of-repo orientation.
│
├── ingestion/             # Raw source material (immutable)
│   ├── README.md
│   ├── transcripts/       # video captions, lecture transcripts
│   ├── pdfs/              # study guide / practice test PDFs (extracted text)
│   ├── web/               # scraped articles, forum threads, Reddit posts
│   └── notes/             # study tips, hand-written notes, summaries
│
├── objectives/            # One page per syllabus objective — the distilled study material
│   ├── README.md
│   └── <topic-id>.md
│
├── quizzes/               # Question banks
│   ├── README.md
│   ├── _quiz-scaffold.md            # Shared engine — DO NOT edit per-quiz content here
│   ├── _practice-exam-scaffold.md   # Shared engine for full-length practice exams
│   ├── <topic-id>-<slug>.md         # per-objective banks
│   └── practice-exam-<x>.md         # full-length practice banks
│
├── sessions/              # Study session notes
│   ├── README.md
│   ├── quiz-logs/         # Auto-generated per-quiz attempt logs (don't hand-edit)
│   │   └── <baseName>.log.md
│   └── YYYY-MM-DD-<slug>.md
│
└── synthesis/             # Cross-cutting views
    ├── README.md
    ├── open-questions.md
    ├── weak-areas.md
    ├── exam-blueprint.md
    ├── lint-report.md
    ├── vocab.md
    └── aar-YYYY-MM-DD.md  # when incidents warrant a post-mortem
```

Folders are categories. Filenames use `<topic-id>.md` for objectives, `<topic-id>-<kebab-case>.md` or `practice-exam-<x>.md` for quizzes, `YYYY-MM-DD-slug.md` for sessions.

## 4. Page conventions

### YAML front matter (required on every authored page)

```yaml
---
title: Human-readable title
category: <objective|quiz|practice-exam|session|synthesis>
tags: [tag1, tag2]
status: <seed|draft|active|mature|retired>
confidence: <low|medium|high>
created: YYYY-MM-DD
updated: YYYY-MM-DD
# Optional, type-specific
covers: [1.4, 2.3]              # for quiz / practice-exam
mastery: <weak|building|strong> # for objective pages
---
```

Titles are unquoted by default. Wrap in quotes only if the title contains a literal colon.

### Categories

- **transcript** — files under `transcripts/`. Auto-generated, immutable. Front-matter exempt.
- **objective** — one page per syllabus objective. The distilled study material.
- **quiz** — per-objective question banks.
- **practice-exam** — full-length practice banks. Same folder as `quiz`, different scope.
- **session** — dated study-session notes.
- **synthesis** — cross-cutting views (`synthesis/*.md`, plus `_index.md`, `STUDY.md`, `_LLM-OPERATING.md`, `_QUESTION-AUTHORING.md`, `_INGESTION.md`).

### Status lifecycle

- **seed** — stub, no real content yet.
- **draft** — partial content, in flight.
- **active** — useful and maintained. Expected state for most pages.
- **mature** — comprehensive, stable, you nail it on quizzes.
- **retired** — abandoned; kept for history.

### Confidence

How confident the page's content is **factually correct**, not how well you know it.

- **low** — rough, possibly wrong, needs verification.
- **medium** — checked against one source.
- **high** — checked against the source + another reference.

### Mastery (objective pages only)

Your self-assessment.

- **weak** — you miss questions on this routinely.
- **building** — sometimes you get it, sometimes you don't.
- **strong** — you nail it.

### Page-type templates

#### Objective page

```markdown
---
title: <Topic ID> — <Topic Name>
category: objective
tags: [<topic-tag>, <topic-id>]
status: active
confidence: medium
mastery: weak
created: YYYY-MM-DD
updated: YYYY-MM-DD
---

# <Topic ID> — <Topic Name>

Official description: *"<one-line from the spec>"*

Short framing paragraph: what this objective is really testing, and how to think about it.

---

## <Major topic 1>
...distilled study material, tables, traps...

## <Major topic 2>
...

---

## How to read scenario questions
1. ...
2. ...

---

## Vocab
See [[synthesis/vocab|vocab]] filtered to objective `<id>`.

## Quizzes
- [[quizzes/<topic-id>-<slug>|<Topic Name> Quiz]]

## Source
- ...
```

#### Quiz page

```markdown
---
title: <Topic ID> — <Topic Name> Quiz
category: quiz
tags: [quiz, <topic-tag>, <topic-id>]
status: active
confidence: high
covers: [<topic-id>]
created: YYYY-MM-DD
updated: YYYY-MM-DD
---

# <Topic ID> — <Topic Name> Quiz

N questions on the material from [[objectives/<topic-id>|Objective <topic-id>]].

```dataviewjs
const baseName = "<topic-id>-<slug>";
const questions = [
  { q: "...", opts: [{ t: "...", c: true,  w: "explanation" },
                     { t: "...", c: false, w: "explanation" }] },
  // ...
];
// Bootstrap: read _quiz-scaffold.md and run its code block
const scaffold = await app.vault.read(
  app.vault.getAbstractFileByPath("wiki/quizzes/_quiz-scaffold.md") ||
  app.vault.getAbstractFileByPath("quizzes/_quiz-scaffold.md")
);
const code = scaffold.match(/```javascript[ \t]*\r?\n([\s\S]*?)\r?\n[ \t]*```/)[1];
eval(code);
```
```

#### Practice-exam page

Same shape as a quiz page, but `category: practice-exam`, a `covers` list spanning many or all objectives, and the bootstrap loads `_practice-exam-scaffold.md` instead of `_quiz-scaffold.md`. The scaffold supports MCQs and PBQs (match-type and firewall-type by default; extend the scaffold for other PBQ types). For authoring rules — length parity, distractor design, multi-select, the chunked-build pattern for large exams — see [[_QUESTION-AUTHORING|_QUESTION-AUTHORING.md]] before writing questions.

#### Session note

```markdown
---
title: YYYY-MM-DD — <slug>
category: session
tags: [session, <topic-tag>]
status: active
confidence: high
created: YYYY-MM-DD
updated: YYYY-MM-DD
---

# YYYY-MM-DD — <slug>

**Covered:** <objectives/topics>

**Quiz result:** N / M

**Missed:**
- ...

**Updated:**
- [[objectives/<id>]] mastery `weak` → `building`.
- [[synthesis/weak-areas]] appended.

**Next:** <re-quiz / re-read / new objective>
```

### Link format

Always use explicit-path pipe-syntax wikilinks: `[[objectives/1.4|Objective 1.4]]`. Prevents Obsidian phantom pages and keeps references unambiguous.

## 5. Core operations

### 5.1 Distill source material

The core loop: raw sources in `ingestion/` get distilled into objective pages.

1. **Source comes from `ingestion/`.** Read the relevant ingestion file(s) via `wiki_read` or `wiki_read_many`. Sources are immutable — you read, you don't edit them. See [[_INGESTION|_INGESTION.md]] for how sources get into `ingestion/` in the first place.
2. **Create or refine `objectives/<topic-id>.md`.** The objective page is where the distilled study material lives. One page per syllabus objective.
3. **Cite sources in the objective page's `## Source` section.** Wikilink back to the ingestion files that informed this objective — makes traceability obvious and lets the LLM cross-check claims against original material when authoring quizzes.
4. **Update `_index.md`** if anything new shows up at the category level (new objective added, status change worth tracking, etc.).
5. **Note any conflicts.** If two sources disagreed during distillation, mention it in the objective page and add a one-line entry to `synthesis/open-questions.md` if the conflict isn't yet resolved.

A single objective's distillation may touch one objective page plus light edits to `_index.md` and `synthesis/vocab.md`. That's the expected scope.

### 5.2 Run a study session

1. Read the objective page(s) via `wiki_read_many`.
2. Teach / quiz from the relevant `quizzes/<topic-id>-<slug>.md` bank.
3. At session end, write `sessions/YYYY-MM-DD-<slug>.md`.
4. `wiki_status_set` mastery on the objective page.
5. Append misses to `synthesis/weak-areas.md`.

### 5.3 Author a quiz bank or practice exam

1. **Read [[_QUESTION-AUTHORING|_QUESTION-AUTHORING.md]] first.** Length parity, distractor design, multi-select handling, the chunked-build pattern for large practice exams — these rules exist because we've already gotten them wrong on the SY0-701 wiki.
2. Read the relevant objective page(s) for source material.
3. **For a per-topic quiz:** `wiki_write` a new file at `quizzes/<topic-id>-<slug>.md` with the front matter, intro, and a `dataviewjs` block containing `baseName`, the `questions` array, and the standard scaffold-loader stub. See the Quiz page template above.
4. **For a practice exam:** same shape but with `category: practice-exam`, a `covers` list spanning many objectives, `pbqs` and `examLabel` and `domainNames` variables, and the practice-exam-scaffold loader. If the question payload is ~100 KB or larger, use the chunked-build pattern (skeleton page + sentinel + chunked `wiki_edit` replacements) per `_QUESTION-AUTHORING.md`.
5. Update `_index.md` to list the new file.
6. Run the quality checklist at the bottom of `_QUESTION-AUTHORING.md` before considering the bank done.

### 5.4 Pre-exam review

1. `wiki_search` or `wiki_list` for objectives with `mastery: weak`.
2. Read those.
3. Run targeted quizzes on weak areas.
4. Run full practice exams to surface unknown-unknowns.

### 5.5 Lint

On demand, scan for: schema drift, broken wikilinks, orphan pages, stale `_index.md` tables, quiz banks without `covers`, uniform-value tells (every page at the same `confidence` usually means template-default, not real signal).

Output to `synthesis/lint-report.md` with a dated section.

## 6. Indexing and logging

- **`_index.md`** — master index. Tables grouped by category, every page on disk listed. Rebuild whenever a category gains or loses a page.
- **`_log.md`** — chronological, append-only. Every mutating MCP call auto-appends. Use `wiki_log_tail` instead of reading the whole log.

## 7. Voice

- Precise and compact. Active voice. No hedging beyond what `confidence` already says.
- Every claim worth verifying gets a one-line source pointer.
- Tone: study notes for a sharp future-you, not a textbook for a beginner.
- No filler.

## 8. Working with the MCP tools

See **[[_LLM-OPERATING|_LLM-OPERATING.md]]** for operational rules (tool selection, read-before-write, when to use `wiki_edit` vs `wiki_write`) and **[[_QUESTION-AUTHORING|_QUESTION-AUTHORING.md]]** for quiz/practice-exam content rules. Both files are mandatory reading; this section just summarizes the tools.

| Tool | When to use |
|------|-------------|
| `wiki_index` | First call for any non-trivial query. |
| `wiki_list` | Enumerate pages in a folder. |
| `wiki_read` | One page; pass `section="..."` for partial reads. |
| `wiki_read_many` | **Two or more pages.** Default for multi-page reads. |
| `wiki_search` | BM25 search across pages. Content terms, not meta words. |
| `wiki_write` | New page or genuine ≥50% rewrite. See _LLM-OPERATING §1 pre-flight checklist. |
| `wiki_edit` | **Default mutation tool.** Smaller-than-rewrite changes. Refuses front-matter edits. |
| `wiki_status_set` | Anything in the YAML block. |
| `wiki_delete` | Genuine deletions — force=true required for non-test pages. Prefer `wiki_status_set(status="retired")` for stale material. |
| `wiki_log_tail` | Recent log entries as structured data. |

## 9. Evolution

This schema is co-evolved by you and the LLM. When a convention turns out to be wrong or a new one is needed, update this file. When a friction or failure justifies an AAR, write one in `synthesis/aar-YYYY-MM-DD.md` and link it from `_index.md`.
