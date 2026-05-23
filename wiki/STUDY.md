---
title: STUDY.md — Wiki Schema & Operating Guide
category: synthesis
tags: [schema, operating-guide, meta]
status: active
confidence: high
owner: shared
created: 2026-05-21
updated: 2026-05-23
---

# STUDY.md — Wiki Schema & Operating Guide

> Operating manual for the **Security+ study wiki**. Any LLM connecting to the `secplus-wiki` MCP server MUST read this file first and follow its conventions.

---

## 0. What this wiki is

This wiki is the **knowledge base and study surface** for the CompTIA Security+ (SY0-701) exam. It exists so that:

- Raw lecture transcripts get distilled into clean, cross-referenced **objective pages**.
- Quiz banks live alongside the material they cover, so study sessions can pull the right questions at the right time.
- Each study session leaves a trace — what was covered, what was weak, what to revisit.

The wiki is the durable study artifact. Chat sessions come and go; what lands here is what survives.

---

## 1. What this wiki is *not*

- **Not a transcript archive.** Raw transcripts live under `transcripts/` and are treated as immutable source material. The LLM reads them and writes *about* them in `objectives/`, never edits them.
- **Not Anki.** Quiz pages capture question banks for AI-generated quizzing sessions, not spaced-repetition cards. (Export to Anki is a downstream concern.)
- **Not a general cybersecurity reference.** Scope is the SY0-701 exam objectives. Tangents that don't map to an objective stay in `synthesis/` or get cut.

---

## 2. The two layers

- **Raw transcripts** (`transcripts/`) — auto-caption dumps from the Professor Messer SY0-701 playlist, one .md per objective, all `## ` headers per video. Immutable. The LLM reads these to build distilled pages elsewhere.
- **The wiki** — everything else. LLM-authored markdown: objective pages, quiz banks, session notes, synthesis. The LLM owns this layer.

---

## 3. Directory layout

```
wiki/
├── _index.md              # Master index. Rebuild on every meaningful change.
├── _log.md                # Append-only chronological log (auto-maintained).
├── STUDY.md               # This file.
├── README.md              # Top-of-repo orientation.
│
├── transcripts/           # Raw Professor Messer auto-caption dumps (immutable)
│   ├── README.md
│   └── Section 1.1.md … Section 5.6.md
│
├── objectives/            # One page per exam objective (1.1, 1.2, …, 5.6) — the distilled study material
│   ├── README.md
│   └── <N.N>.md
│
├── quizzes/               # Question banks
│   ├── README.md
│   ├── <N.N>-<topic>.md       # per-objective banks
│   └── practice-exam-<x>.md   # full-exam practice banks
│
├── sessions/              # Study session notes
│   ├── README.md
│   └── YYYY-MM-DD-<slug>.md
│
└── synthesis/             # Cross-cutting views
    ├── README.md
    ├── open-questions.md  # things you didn't fully understand; revisit list
    ├── weak-areas.md      # accumulated misses across quizzes/sessions
    ├── exam-blueprint.md  # the official objective breakdown + weighting
    ├── video-index.md     # master video lookup
    ├── vocab.md           # master glossary
    └── lint-report.md     # wiki health snapshots
```

Folders = categories (with one exception, see §4). Filenames use `N.N.md` for objectives, `<N.N>-<kebab-case>.md` or `practice-exam-<x>.md` for quizzes, `YYYY-MM-DD-slug.md` for sessions.

> **Note on the `concepts/` folder.** Earlier drafts of this schema had a separate `concepts/` directory for atomic concept pages. That was retired on 2026-05-23 — distilled content lives directly on each objective page. There is no concepts directory anymore.

---

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
covers: [1.4, 2.3]              # for quiz / practice-exam — which objectives the bank covers
mastery: <weak|building|strong> # for objective pages — self-assessment, updated by sessions
---
```

Titles are unquoted by default. Wrap in quotes only if the title contains a literal colon.

**Transcripts are exempt** from front matter. Files under `transcripts/` are auto-generated dumps and ship with empty `---\n---` blocks. Don't edit them, don't lint them, don't add fields to them.

### Categories

Six categories in use:

- **transcript** — files under `transcripts/`. Auto-generated, immutable. Front matter exempt.
- **objective** — one page per exam objective (`objectives/N.N.md`). The distilled study material.
- **quiz** — per-objective question banks (`quizzes/N.N-<topic>.md`).
- **practice-exam** — full-exam practice banks (`quizzes/practice-exam-<x>.md`). Lives in `quizzes/` but is its own category because the scope and shape are different.
- **session** — dated study session notes (`sessions/YYYY-MM-DD-<slug>.md`).
- **synthesis** — cross-cutting views (`synthesis/*.md`, plus `_index.md`, `STUDY.md`).

### Status lifecycle

- **seed** — stub with the topic name and TODO, no real content.
- **draft** — partial content, in flight.
- **active** — useful and maintained. The expected state for most pages.
- **mature** — comprehensive, stable, you've quizzed yourself on it and consistently nail it.
- **retired** — abandoned, kept for history.

(The MCP tool also accepts `planned` and `superseded` for compatibility with the `cyber-wiki` schema; neither is in active use here.)

### Confidence

How confident the page's content is **factually correct**, not how well you know it. Use `mastery` for self-knowledge.

- **low** — rough, possibly wrong, needs verification.
- **medium** — checked against one source (e.g. the transcript).
- **high** — checked against transcript + another reference.

### Mastery

Your self-assessment of how well you know the material on a page. Lives on **objective pages**. Sessions flip it.

- **weak** — you miss questions on this routinely.
- **building** — sometimes you get it, sometimes you don't.
- **strong** — you nail it.

### Page-type templates

#### Objective page (`objectives/1.4.md`)

```markdown
---
title: Objective 1.4 — Cryptographic Solutions
category: objective
tags: [cryptography, 1.4]
status: active
confidence: medium
mastery: weak
created: 2026-05-21
updated: 2026-05-21
---

# 1.4 — Cryptographic Solutions

CompTIA description: *"Explain the importance of using appropriate cryptographic solutions."*

A short framing paragraph: what this objective is really testing, and how to think about it on the exam.

---

## <Major topic 1>
…distilled study material, tables, traps…

## <Major topic 2>
…

---

## How to read scenario questions
1. …
2. …

---

## Vocab
See [[synthesis/vocab|vocab]] filtered to objective `1.4`.

## Quizzes
- [[quizzes/1.4-cryptography|1.4 — Cryptography Quiz]]

## Source
- **<Video title>** — [▶ YouTube](URL) · [[transcripts/Section 1.4|transcript]] · Professor Messer · ~N min
- …

See [[synthesis/video-index|video-index]] for the master lookup.
```

#### Quiz page (`quizzes/1.4-cryptography.md`)

```markdown
---
title: 1.4 — Cryptography Quiz
category: quiz
tags: [quiz, cryptography, 1.4]
status: active
confidence: high
covers: [1.4]
created: 2026-05-21
updated: 2026-05-21
---

# 1.4 — Cryptography Quiz

Ten questions on the material from [[objectives/1.4|Objective 1.4]].

```dataviewjs
// question bank rendered as interactive quiz
```

---

## Misses log
- *(none yet)*
```

#### Practice-exam page (`quizzes/practice-exam-a.md`)

Same shape as a quiz page, with `category: practice-exam` and a `covers` list spanning many or all objectives.

#### Session note (`sessions/2026-05-21-cryptography-deep-dive.md`)

```markdown
---
title: 2026-05-21 — Cryptography deep dive
category: session
tags: [session, cryptography, 1.4]
status: active
confidence: high
created: 2026-05-21
updated: 2026-05-21
---

# 2026-05-21 — Cryptography deep dive

**Covered:** Objective 1.4, sections on PKI, symmetric vs asymmetric, key exchange.

**Quiz result:** 12 / 15.

**Missed:**
- Diffie-Hellman vs ECDH — confused which provides forward secrecy by default.
- ECC key-size equivalence to RSA.

**Updated:**
- [[objectives/1.4]] mastery `building` → `weak`.
- [[synthesis/weak-areas]] appended both misses.

**Next:** Re-quiz 1.4 in 3 days.
```

### Link format

Always use explicit-path pipe-syntax wikilinks: `[[objectives/1.4|Objective 1.4]]`. Prevents Obsidian phantom pages and keeps references unambiguous.

---

## 5. Core operations

### 5.1 Distill a transcript

When working a transcript section:

1. Read the transcript via `wiki_read("transcripts/Section X.Y.md")`.
2. Either create `objectives/X.Y.md` or refine it. The objective page is where distilled study material lives.
3. Update `_index.md` if anything new shows up at the category level.
4. `_log.md` auto-appends on every mutating call.

### 5.2 Run a study session

1. LLM reads the objective page (and any related ones via `wiki_read_many`).
2. LLM teaches / quizzes from the relevant `quizzes/<topic>.md` bank.
3. At session end, LLM writes `sessions/YYYY-MM-DD-<slug>.md` capturing covered, score, misses.
4. LLM `wiki_status_set`s mastery on the objective page(s).
5. LLM appends misses to `synthesis/weak-areas.md`.

### 5.3 Generate a quiz

1. LLM reads the relevant quiz bank + objective page.
2. Generates N questions in chat from the bank's shapes + objective content.
3. After answers, scores them.
4. Logs misses (see 5.2).

### 5.4 Pre-exam review

1. `wiki_search` or `wiki_list` for objective pages with `mastery: weak`.
2. Read those.
3. Run targeted quizzes on weak areas.
4. Run full practice exams (`quizzes/practice-exam-*.md`) to surface unknown-unknowns.

### 5.5 Lint

On demand, scan the wiki for health issues:

- Schema drift: front-matter fields/values that don't match this file.
- Broken wikilinks (target not on disk).
- Orphan pages (no inbound links from other pages — excluding READMEs and `_index.md`).
- Stale index (`_index.md` tables out of sync with the file tree).
- Quiz banks without `covers`, or with empty `covers`.
- Title mismatches between `objectives/README.md` and the actual objective pages.
- Uniform-value tells: every objective at the same `confidence` or `mastery` usually means the data is template-default, not real signal.

Output to `synthesis/lint-report.md` with a dated section.

---

## 6. Indexing and logging

- **`_index.md`** — master index. Tables grouped by category, every page on disk listed. Rebuild whenever a category gains or loses a page.
- **`_log.md`** — chronological, append-only. Every mutating MCP call auto-appends: `## [YYYY-MM-DD] <op> | <context> | <short>`. Ops: `write | edit | status | delete | session | quiz | lint | schema`. Use `wiki_log_tail` instead of reading the whole log.

---

## 7. Voice

- Precise and compact. Active voice. No hedging beyond what `confidence` already says.
- Every claim worth verifying gets a one-line source pointer to a transcript or other page.
- Tone: study notes for a sharp future-you, not a textbook for a beginner.
- No filler. A half-page topic that nails the mechanism beats three pages of vamping.

---

## 8. Working with the MCP tools

The server exposes these tools.

| Tool | When to use |
|------|-------------|
| `wiki_index` | First call for any non-trivial query. |
| `wiki_list` | Enumerate pages in a folder. |
| `wiki_read` | One page; pass `section="…"` for partial reads. |
| `wiki_read_many` | **Two or more pages.** Never sequence multiple `wiki_read` calls when this works. |
| `wiki_search` | BM25 search across all pages. Content terms, not meta words. |
| `wiki_write` | New page or rewrite of >~50% of an existing page. |
| `wiki_edit` | The default mutation tool. Smaller-than-rewrite changes. Refuses front-matter edits. |
| `wiki_status_set` | Status, confidence, owner, tags, mastery — anything in the YAML block. |
| `wiki_delete` | Genuine deletions. Defaults to refusing real pages; pass `force=true`. Prefer `status="retired"`. |
| `wiki_log_tail` | Recent log entries as structured data. |

### Decision rules

**Reading:**
- One section of one page → `wiki_read(page_path, section="…")`.
- Whole page → `wiki_read(page_path)`.
- 2+ pages → `wiki_read_many` (always).
- Content search → `wiki_search` first, then targeted reads.

**Writing:**
- New page → `wiki_write`.
- ≥50% rewrite → `wiki_write`.
- Smaller change → `wiki_edit` (multiple edits per call when applicable).
- Front matter only → `wiki_status_set` (never `wiki_edit` for this — it refuses).

**Concurrent-write detection:** All mutating tools include the file SHA from your last read. If the page was modified between read and write, GitHub returns 409 and the tool surfaces a clear error. The right response is **always**: re-read, integrate, retry. Never assume your edit is safe to retry blindly.

---

## 9. Evolution

This schema is co-evolved by you and the LLM. When a convention turns out to be wrong or a new one is needed, update this file and the change auto-appears in `_log.md`.
