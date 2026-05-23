---
title: Lint Report
category: synthesis
tags: [maintenance, health]
status: active
confidence: high
created: 2026-05-21
updated: 2026-05-23
---

# Lint Report

Snapshots of wiki health. Each `## ` section is a lint pass on a date.

What lint passes check (see [[STUDY|STUDY §5.5]]):

- Schema drift: front-matter fields or values that don't match `STUDY.md §4`.
- Broken wikilinks.
- Orphan pages (no inbound links).
- Stale index (`_index.md` out of sync with the file tree).
- Quiz banks missing or empty `covers`.
- Title mismatches between `objectives/README.md` and the actual objective pages.
- Uniform-value tells (every page at the same `confidence` or `mastery`).

---

## [2026-05-23] — first real pass

**Scope:** 106 pages on disk (1 README at root + `_index.md`, `_log.md`, `STUDY.md` + 28 objectives + 33 quizzes + 29 transcripts + 6 synthesis pages + 5 folder READMEs).

### Critical findings (now fixed)

- **`_index.md` was severely stale.** Its Objectives table listed only `1.1`, and its Quizzes table only `1.1-controls`, but 28 objective pages and 33 quiz pages exist on disk. "Current phase" copy said *"Objective and concept pages not yet written"* and *"Remaining 27 objectives not yet written"* — both false. → **Fixed:** rebuilt `_index.md` with complete tables and fresh phase copy.

- **`README.md` had empty front matter** (`---\n---` with no fields). → **Fixed:** added proper front matter.

- **`concepts/` folder retired** per user direction (2026-05-23). Distilled material lives directly on objective pages now. → **Fixed:** deleted `concepts/README.md`; STUDY.md, `_index.md`, root `README.md`, and `objectives/README.md` updated to remove concepts references.

### Schema drift (now formalized in STUDY)

The schema in `STUDY.md §4` disagreed with actual practice on several axes. Rather than retrofit 30+ pages to match the old template, I updated STUDY to match the practice where the practice was sensible. **All resolved in the 2026-05-23 STUDY rewrite:**

- **`mastery` on objective pages.** All 28 objective pages carry `mastery: weak`; STUDY documented `mastery` as concept-only. → STUDY now permits `mastery` on objective pages (objectives are the durable unit of self-assessment in the no-concepts model).
- **`practice-exam` as a category.** 5 practice exams used `category: practice-exam`, which wasn't in STUDY's enumerated set. → STUDY now lists `practice-exam` as a first-class category alongside `quiz`.
- **Transcripts have empty front matter.** All 29 transcript files ship with `---\n---` (no fields). They're auto-generated and immutable per STUDY §1. → STUDY §4 now explicitly exempts transcripts from front-matter requirements.
- **`covers` quote style.** 31/33 quiz pages used unquoted IDs (`covers: [1.1]`) where the template said quoted (`covers: ["1.4"]`). → STUDY's template updated to use unquoted IDs, matching practice. (The page list is recorded below for reference; no per-page changes required.)
- **Title quoting.** STUDY's template showed quoted titles; the entire wiki uses unquoted. → STUDY's template updated to unquoted by default.

### `objectives/README.md` title column (now fixed)

The README's "28 objectives" table used CompTIA's short-form names, but each objective page's `title:` field used a slightly different descriptive form. 14 of 28 disagreed. → **Fixed:** README table rewritten to match each page's actual title exactly.

| Objective | Old README label | New (= page title) |
|---|---|---|
| 2.1 | Threat Actors and Motivations | Threat Actors |
| 2.4 | Indicators of Malicious Activity | Malicious Activity |
| 2.5 | Mitigation Techniques | Mitigation Techniques for Security |
| 3.1 | Security Architecture | Architecture and Infrastructure Models |
| 3.2 | Enterprise Infrastructure | Secure Enterprise Infrastructure |
| 3.3 | Protecting Data | Data Protection |
| 4.1 | Computing Resources | Securing Computing Resources |
| 4.4 | Security Monitoring | Security Alerting and Monitoring |
| 4.5 | Enhancing Enterprise Capabilities | Enterprise Capabilities to Enhance Security |
| 4.9 | Investigation Data | Data Sources for Investigation |
| 5.3 | Third-Party Risk | Third-party Risk |
| 5.4 | Compliance | Compliance and Privacy |
| 5.5 | Audits and Assessments | Audits and Penetration Tests |
| 5.6 | Security Awareness | Security Awareness and Training |

### Empty front-matter fields on practice exams (partially fixed)

`quizzes/practice-exam-d.md` and `quizzes/practice-exam-e.md` shipped with empty `tags:` and empty `covers:` fields.

- **`tags`** → **Fixed** via `wiki_status_set` on both: now `[practice-exam, full-exam, sy0-701]`.
- **`covers`** → **Not fixed.** Tool-API gap: `wiki_status_set` doesn't expose `covers`, and `wiki_edit` refuses front-matter edits. Fixing requires a `wiki_write` over the full 110KB file, which is disproportionate to the value. Both pages cover all 28 objectives based on their bodies; resolve by either (a) adding `covers` to `wiki_status_set`'s schema, or (b) doing the full rewrite next time these files are touched for any other reason.

### Orphan pages (now resolved)

`practice-exam-c.md`, `practice-exam-d.md`, `practice-exam-e.md` had no inbound wikilinks. → **Fixed:** the rebuilt `_index.md` now lists all five practice exams in a dedicated table.

### Uniform-value tells (informational)

- Every objective page is `confidence: medium` and `mastery: weak`. Expected for a freshly drafted batch — these are template defaults that haven't been touched by an actual session yet. Both should diverge as sessions run.

### Content gaps (informational, no longer "issues")

- **0 session notes.** Sessions populate as the user studies. Not an error.
- **0 concept pages.** No longer applicable — `concepts/` was retired.

### Remaining items

| Item | Why it's open |
|---|---|
| `covers` empty on `practice-exam-d` and `practice-exam-e` | Tool-API gap (`wiki_status_set` doesn't expose `covers`); intentional to skip |
| All objectives at `confidence: medium`, `mastery: weak` | Will resolve naturally as sessions run |
| `synthesis/vocab.md` not opened in this pass | ~190KB; lint pass focused on structural issues, not vocab content drift |
| `_log.md` not lint-checked | Auto-maintained by the MCP server; lint exempt |

### Tool gap to flag

`wiki_status_set` currently accepts: `status, confidence, owner, tags, superseded_by`. It does **not** accept `covers` (needed by quiz / practice-exam pages) or `mastery` (now valid on objective pages per the STUDY update). Both are common front-matter fields that should be settable without a full `wiki_write`. Worth a tool extension.

---

## [2026-05-21] — initial bootstrap

Wiki is fresh; nothing to lint yet. Next lint pass should fire after the first round of transcript distillation.
