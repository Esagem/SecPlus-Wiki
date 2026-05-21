---
title: "STUDY.md — Wiki Schema & Operating Guide"
category: synthesis
tags: [schema, operating-guide, meta]
status: active
confidence: high
owner: shared
created: 2026-05-21
updated: 2026-05-21
---

# STUDY.md — Wiki Schema & Operating Guide

> Operating manual for the **Security+ study wiki**. Any LLM connecting to the `secplus-wiki` MCP server MUST read this file first and follow its conventions.

---

## 0. What this wiki is

This wiki is the **knowledge base and study surface** for the CompTIA Security+ (SY0-701) exam. It exists so that:

- Raw lecture transcripts get distilled into clean, cross-referenced concept pages.
- Every exam objective has a page that indexes the concepts under it.
- Quiz banks live alongside the material they cover, so study sessions can pull the right questions at the right time.
- Each study session leaves a trace — what was covered, what was weak, what to revisit.

The wiki is the durable study artifact. Chat sessions come and go; what lands here is what survives.

---

## 1. What this wiki is *not*

- **Not a transcript archive.** Raw transcripts live under `transcripts/` and are treated as immutable source material. The LLM reads them and writes *about* them in `concepts/` and `objectives/`, never edits them.
- **Not Anki.** Quiz pages capture question banks for AI-generated quizzing sessions, not spaced-repetition cards. (Export to Anki is a downstream concern.)
- **Not a general cybersecurity reference.** Scope is the SY0-701 exam objectives. Tangents that don't map to an objective stay in `synthesis/` or get cut.

---

## 2. The two layers

- **Raw transcripts** (`transcripts/`) — auto-caption dumps from the Professor Messer SY0-701 playlist, one .md per objective, all `## ` headers per video. Immutable. The LLM reads these to build distilled pages elsewhere.
- **The wiki** — everything else. LLM-authored markdown: concept pages, objective pages, quiz banks, session notes, synthesis. The LLM owns this layer.

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
├── concepts/              # Atomic concept pages, one per concept (~150-300 expected)
│   ├── README.md
│   └── <concept-name>.md  # e.g. sql-injection.md, cia-triad.md, zero-trust.md
│
├── objectives/            # One page per exam objective (1.1, 1.2, …, 5.6)
│   ├── README.md
│   └── <N.N>.md           # indexes the concepts under that objective
│
├── quizzes/               # Question banks
│   ├── README.md
│   └── <topic>.md         # e.g. 1.4-cryptography.md, malware-types.md
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
    └── lint-report.md     # wiki health snapshots
```

Folders = categories. Filenames use `kebab-case.md` for concepts/quizzes, `N.N.md` for objectives, `YYYY-MM-DD-slug.md` for sessions.

---

## 4. Page conventions

### YAML front matter (required on every page)

```yaml
---
title: "Human-readable title"
category: <transcript|concept|objective|quiz|session|synthesis>
tags: [tag1, tag2]
status: <seed|draft|active|mature|retired>
confidence: <low|medium|high>
created: YYYY-MM-DD
updated: YYYY-MM-DD
# Optional, type-specific
objective: "1.4"            # for concept pages — which objective(s) this concept maps to
covers: ["1.4", "2.3"]      # for quiz pages — which objectives the bank covers
mastery: <weak|building|strong>  # for concepts — your self-assessment, updated by sessions
---
```

### Status lifecycle

- **seed** — stub with the topic name and TODO, no real content.
- **draft** — partial content, in flight.
- **active** — useful and maintained. The expected state for most pages.
- **mature** — comprehensive, stable, you've quizzed yourself on it and consistently nail it.
- **retired** — abandoned, kept for history (e.g. a concept reframing that turned out wrong).

### Confidence

How confident the page's content is **factually correct**, not how well you know it. Use `mastery` for self-knowledge.

- **low** — rough, possibly wrong, needs verification.
- **medium** — checked against one source.
- **high** — checked against transcript + another reference.

### Page-type templates

#### Concept page (`concepts/sql-injection.md`)

```markdown
---
title: "SQL Injection"
category: concept
tags: [injection, web, owasp-top-10]
status: active
confidence: high
objective: "2.3"
mastery: building
created: 2026-05-21
updated: 2026-05-21
---

# SQL Injection

**One-line:** Inserting attacker-controlled SQL into a query string that an application later sends to the database, causing unintended database operations.

## How it works
…

## Common variants
- Inline / classic
- Blind (boolean-based, time-based)
- Out-of-band

## Defenses
- Parameterized queries / prepared statements (primary)
- Input validation (secondary)
- Least-privilege DB accounts

## Exam traps
- Don't confuse with command injection (different target, similar mechanic).
- "Stored procedures" only help if they themselves use parameterized inputs internally.

## Related
- [[concepts/cross-site-scripting|XSS]]
- [[concepts/input-validation|Input validation]]
- [[objectives/2.3|Objective 2.3 — Vulnerabilities]]

## Source
- [[transcripts/Section 2.3|Transcript §2.3 — SQL Injection]]
```

#### Objective page (`objectives/1.4.md`)

```markdown
---
title: "Objective 1.4 — Cryptographic Solutions"
category: objective
tags: [cryptography]
status: active
confidence: high
created: 2026-05-21
updated: 2026-05-21
---

# 1.4 — Cryptographic Solutions

CompTIA description: "Explain the importance of using appropriate cryptographic solutions."

## Concepts
- [[concepts/public-key-infrastructure|PKI]]
- [[concepts/encryption-symmetric|Symmetric encryption]]
- [[concepts/encryption-asymmetric|Asymmetric encryption]]
- [[concepts/key-exchange|Key exchange]]
- [[concepts/hashing-and-digital-signatures|Hashing & digital signatures]]
- …

## Quizzes
- [[quizzes/1.4-cryptography|1.4 — Cryptography quiz bank]]

## Source
- [[transcripts/Section 1.4|Transcript §1.4]]
```

#### Quiz page (`quizzes/1.4-cryptography.md`)

```markdown
---
title: "1.4 — Cryptography quiz bank"
category: quiz
tags: [cryptography, quiz]
status: active
confidence: high
covers: ["1.4"]
created: 2026-05-21
updated: 2026-05-21
---

# 1.4 — Cryptography quiz bank

A bank of question shapes for AI-generated quizzes. The LLM uses these as templates plus the concept pages to generate session-specific quiz questions. Track misses in [[synthesis/weak-areas|weak-areas]].

## Question shapes

### Conceptual
- What problem does <X> solve, and what does it cost?
- Where would you use <X> vs <Y>?
- What's the difference between <X> and <Y>?

### Scenario
- A user receives a signed email. Which key was used and at which step?
- An admin needs to encrypt data at rest on a SQL DB. Which approach?
- A cert is suddenly distrusted. What's the recovery procedure?

### Common exam traps
- TLS handshake step ordering (asymmetric for key exchange, symmetric for data).
- Hashing vs encryption vs encoding — what reverses, what doesn't.
- Cert vs key — what's public, what's secret, who signs what.

## Misses log
*(LLM appends each session's missed questions here with date.)*
```

#### Session note (`sessions/2026-05-21-cryptography-deep-dive.md`)

```markdown
---
title: "2026-05-21 — Cryptography deep dive"
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
- ECC key-size equivalence to RSA (mismemorized 256-bit ECC ≈ 3072-bit RSA, not 2048).

**Updated:**
- [[concepts/key-exchange]] mastery `building` → `weak`.
- [[synthesis/weak-areas]] appended both misses.

**Next:** Re-quiz 1.4 in 3 days. Skim [[concepts/perfect-forward-secrecy]] before then.
```

### Rationale stays inline

When a concept page makes a claim that might mislead ("the *primary* defense for SQLi is parameterized queries"), say why in one line. The point of the wiki is durable understanding, not just notes.

### Link format

Always use explicit-path pipe-syntax wikilinks: `[[concepts/sql-injection|SQL Injection]]`. Prevents Obsidian phantom pages and keeps references unambiguous.

---

## 5. Core operations

### 5.1 Distill a transcript

When you (or the LLM) decide to work a transcript section:

1. Read the relevant transcript page via `wiki_read("transcripts/Section X.Y.md")`.
2. Identify the atomic concepts covered. Each `## ` heading in the transcript usually maps to one concept.
3. For each concept:
   - If a concept page exists, `wiki_edit` to add/refine.
   - Otherwise `wiki_write` a new concept page using the template above.
4. Update or create the objective page (`objectives/X.Y.md`) to list the concept.
5. Update `_index.md` if a new concept folder or category appears.
6. Append to `_log.md` is automatic on every mutating call.

A single section distillation may touch 10–20 pages. That's expected.

### 5.2 Run a study session

Working a topic in chat:

1. LLM reads the objective page + 5–15 concept pages (`wiki_read_many`).
2. LLM teaches / quizzes from the relevant `quizzes/<topic>.md` bank.
3. At session end, the LLM writes `sessions/YYYY-MM-DD-<slug>.md` capturing what was covered, score, misses.
4. LLM `wiki_status_set`s mastery on the concept pages that came up.
5. LLM appends misses to `synthesis/weak-areas.md`.

### 5.3 Generate a quiz

Either ad-hoc in a session, or scheduled spaced-repetition style:

1. LLM reads the relevant quiz bank + concept pages.
2. Generates N questions in chat — uses the bank's question shapes plus concept content.
3. After the user answers, scores them.
4. Logs misses (see 5.2).

### 5.4 Pre-exam review

A week or two out:

1. `wiki_search` or `wiki_list` for concept pages with `mastery: weak`.
2. Read those + their objective pages.
3. Run targeted quizzes on weak areas.
4. Update mastery as it shifts.

### 5.5 Lint

On demand, scan the wiki for health issues:

- Concept pages referenced from objective pages but unwritten (`status: planned` and empty).
- `seed` pages with no activity for 14+ days.
- Concept pages with no inbound links — orphans you can probably retire or fold in.
- Objective pages missing any of the transcript's atomic concepts.
- Quiz banks with no `covers` field.
- Contradictions between concept pages and the transcripts they cite.

Output to `wiki/synthesis/lint-report.md` with a dated section. Canonical use case for `wiki_read_many` + `wiki_edit`.

---

## 6. Indexing and logging

- **`_index.md`** — master index. Tables grouped by category. The first thing the LLM reads for any non-trivial query.
- **`_log.md`** — chronological, append-only. Every mutating MCP call auto-appends: `## [YYYY-MM-DD] <op> | <context> | <short>`. Ops: `write | edit | status | delete | session | quiz | lint | schema`. Use `wiki_log_tail` instead of reading the whole log.

---

## 7. Voice

- Precise and compact. Active voice. No hedging beyond what `confidence` already says.
- Every claim worth verifying gets a one-line source pointer to a transcript or other concept page.
- Tone: study notes for a sharp future-you, not a textbook for a beginner.
- No filler. A half-page concept that nails the mechanism beats three pages of vamping.

---

## 8. Working with the MCP tools

The server exposes ten tools. Same surface as `cyber-wiki`; same decision rules.

| Tool | When to use |
|------|-------------|
| `wiki_index` | First call for any non-trivial query. |
| `wiki_list` | Enumerate pages in a folder (e.g. `category="concepts"`). |
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

**Concurrent-write detection:** All mutating tools include the file SHA from your last read in their write. If the page was modified between read and write, GitHub returns 409 and the tool surfaces a clear error. The right response is **always**: re-read, integrate, retry. Never assume your edit is safe to retry blindly.

---

## 9. Evolution

This schema is co-evolved by you and the LLM. When a convention turns out to be wrong or a new one is needed, update this file and the change auto-appears in `_log.md`.
