---
title: Template — Bootstrap Guide for a New Study Wiki
category: synthesis
tags: [template, bootstrap, meta]
status: active
confidence: high
created: 2026-05-26
updated: 2026-05-26
---

# Template — Bootstrap Guide for a New Study Wiki

> The contents of this folder are the starting kit for a new subject-study wiki. Copy them into a new wiki's root, do the substitutions described below, and you have a working study surface that already incorporates every lesson from the SY0-701 build.

## What's in this folder

| File / folder | Purpose |
|--------------|---------|
| [[_template/_LLM-OPERATING\|_LLM-OPERATING.md]] | Tool-discipline rules for any AI editing the wiki. Read first. |
| [[_template/_QUESTION-AUTHORING\|_QUESTION-AUTHORING.md]] | Quiz/practice-exam content rules: length parity, distractor design, multi-select, chunked builds. Read before authoring any question. |
| [[_template/_INGESTION\|_INGESTION.md]] | Source-ingestion strategy: transcripts, PDFs, web scrapes, notes. Read before pulling external material into the wiki. |
| [[_template/STUDY\|STUDY.md]] | Parameterized schema. Copy to wiki root, substitute subject-specific bits. |
| [[_template/_quiz-scaffold\|_quiz-scaffold.md]] | Shared engine for per-topic quiz banks. localStorage state, Reset button, auto-✓ mastery, log persistence. |
| [[_template/_practice-exam-scaffold\|_practice-exam-scaffold.md]] | Shared engine for full-length practice exams. Same state-persistence story as the quiz scaffold, plus PBQ rendering, domain breakdown, comprehensive log entries. |
| `starter/` | Copy-paste content for the new wiki's root and per-folder READMEs: `wiki-README.md`, `index.md`, `log.md`, `ingestion-README.md`, `objectives-README.md`, `quizzes-README.md`, `sessions-README.md`, `synthesis-README.md`, `aar-template.md`. |
| `examples/` | Worked references. Currently: `example-quiz.md` (a complete 5-question quiz with the scaffold-loader bootstrap, demonstrating length parity, multi-select, and source attribution). |
| (this file) | The bootstrap guide. |

## The non-negotiables

These aren't options — getting them wrong on the SY0-701 wiki cost real rework. Bake them in from day one:

1. **Both quizzes AND practice exams load the shared scaffold.** The quiz scaffold and the practice-exam scaffold are the contract. Content files are small bootstraps (front matter + `questions` array + `pbqs` array + variable assignments + the scaffold-loader stub). They do not contain engine code. If an exam file grows past ~10 KB of code, the scaffold isn't absorbing what it should be. The 5 monolithic ~150 KB practice-exam files in secplus-wiki are the cautionary tale: every bug fix required editing all 5 separately, and the divergent inlined engines drifted from the per-objective quiz behavior (no state persistence, no Reset, thin logs). Don't repeat this. Use the scaffold from question one of practice exam one.
2. **Balance answer-choice lengths.** See [[_template/_QUESTION-AUTHORING|_QUESTION-AUTHORING.md §The single most important rule]]. The SY0-701 wiki's first 28 quizzes (1.1–4.4) had correct answers 2-4× longer than wrong ones — pick-the-longest was the optimal strategy. Quizzes 4.5–5.6 were rewritten to fix this. Don't ship a question without checking option-length parity.
3. **Read `_LLM-OPERATING.md` before any mutation.** Specifically the `wiki_edit` vs `wiki_write` rule. The 7 corrupted quizzes on the SY0-701 wiki on 2026-05-25 are the cautionary tale.

## Bootstrap sequence

1. **Create the new wiki repo / vault.** One folder, version-controlled if possible.
2. **Copy the seven root-level template files into the new wiki's root:** `_LLM-OPERATING.md`, `_QUESTION-AUTHORING.md`, `_INGESTION.md`, `STUDY.md`, plus `starter/wiki-README.md` (renamed to `README.md`), `starter/index.md` (renamed to `_index.md`), and `starter/log.md` (renamed to `_log.md`). Keep `_LLM-OPERATING.md`, `_QUESTION-AUTHORING.md`, and `_INGESTION.md` named exactly that.
3. **Move the two scaffolds into `quizzes/`:** `_quiz-scaffold.md` and `_practice-exam-scaffold.md`.
4. **Substitute placeholders.** Search and replace globally: `{{SUBJECT}}` (long subject name), `{{SUBJECT_SHORT}}` (short name), `{{WIKI_NAME}}` (MCP server name), `{{DOMAINS}}` if present, plus the `YYYY-MM-DD` date placeholders in front matter.
5. **Create the category folders and drop in per-folder READMEs** from `starter/`:
   - `ingestion/README.md` from `starter/ingestion-README.md`
   - `objectives/README.md` from `starter/objectives-README.md`
   - `quizzes/README.md` from `starter/quizzes-README.md`
   - `sessions/README.md` from `starter/sessions-README.md`
   - `synthesis/README.md` from `starter/synthesis-README.md`
   Create the empty subfolders too: `ingestion/{transcripts,pdfs,web,notes}/` and `sessions/quiz-logs/`.
6. **Seed the synthesis pages** as `seed` status: `exam-blueprint.md`, `vocab.md`, `weak-areas.md`, `open-questions.md`, `lint-report.md`. Even empty, they exist from day one so future sessions know where to put cross-cutting content.
7. **Keep `starter/aar-template.md` somewhere accessible.** It gets copied to `synthesis/aar-YYYY-MM-DD.md` when an incident warrants a post-mortem. Either leave it in `_template/starter/` or move it to `synthesis/_aar-template.md`.

That's the scaffolding. From here, the content phase begins: ingest source material per `_INGESTION.md`, distill into `objectives/`, write quiz banks per `_QUESTION-AUTHORING.md`, run study sessions, accumulate `synthesis/` views.

**Smoke test the scaffold before authoring real content.** Copy `examples/example-quiz.md` into `quizzes/`, open it in Obsidian, and confirm the questions render. If they do, the scaffold-loader path is correct and you're clear to author real quizzes. If they don't, the failure is in scaffold placement or Obsidian Dataview setup, not in your content — fix that first.

## What's worth keeping vs. revising per-subject

### Keep as-is

- **`_LLM-OPERATING.md`** verbatim. The tool-discipline rules are subject-independent.
- **Quiz scaffold mechanics** (state persistence, Reset, auto-✓). The questions in your quiz files will differ per subject; the engine should not.
- **Practice-exam scaffold mechanics** (state persistence, Reset, PBQ rendering, domain breakdown, log content). Same logic.
- **Front-matter conventions** (`status`, `confidence`, `mastery`, `category`, `tags`, `created`, `updated`).
- **Status lifecycle** (`seed → draft → active → mature → retired`).
- **Link format** (explicit-path pipe syntax everywhere).

### Adapt per-subject

- **Domains and objectives.** Subject-specific. List them in `STUDY.md` and in `_index.md`.
- **PBQ types.** The Sec+ practice-exam scaffold supports `match` and `firewall` types. Other subjects might need different question formats — extend the scaffold rather than inlining new engine code in individual exam files.
- **Pass benchmark.** The Sec+ practice-exam scaffold uses 83% as the visual pass line (CompTIA's scaled ~750/900). Override per subject.
- **Auto-✓ threshold.** The quiz scaffold marks at ≥ 90% first-try accuracy. Tune if needed.
- **Voice and depth.** Some subjects benefit from longer explanations; others reward terseness. `STUDY.md §7` covers this — adjust the guidance to fit.

## What this template absorbed

Lessons baked into this template that you don't need to re-learn:

1. **Practice exams use the shared scaffold from day one.** Not inlined engines. (The SY0-701 wiki had 5 monolithic ~150 KB practice-exam files; bug fixes required editing all 5 separately and the engines drifted from the per-objective scaffold. The new `_practice-exam-scaffold.md` makes that a one-edit job.)
2. **State persists across reloads.** Both per-topic quizzes and full practice exams use localStorage so closing the tab, accidentally reloading, or grading-then-coming-back doesn't wipe the work.
3. **Reset button is in the UI.** Not just clearing localStorage manually.
4. **Log entries record picks + correct answers.** Not just question numbers. The log is a usable learning artifact, not a to-do list.
5. **Auto-✓ rename on mastery.** When a per-topic quiz is passed cleanly the first try, the file (and the corresponding objective page) get a `✓` suffix. Visible in the file tree and in `_index.md`. Practice exams don't auto-✓; they're meant to be retaken.
6. **`_LLM-OPERATING.md` is at the root.** Any AI connecting to the wiki sees the tool-discipline rules immediately.
7. **`_QUESTION-AUTHORING.md` is at the root.** Length-parity, distractor-reuse, multi-select, and chunked-build rules documented before the first quiz is written.
8. **The `wiki/` vault-path gotcha is handled.** The scaffolds check both `wiki/quizzes/...` and `quizzes/...` paths because the wiki tool surfaces paths relative to `wiki/` but Obsidian's vault APIs see paths from vault root. For reads via wikilinks the distinction doesn't matter, but for writes via `app.vault.create/modify` it does. The scaffolds get this right; if you write your own auxiliary scripts that touch the vault, follow the same pattern.
9. **The scaffold-extraction regex is CRLF-tolerant.** Early bootstrap stubs used `match(/```javascript\n([\s\S]*?)\n```/)` which failed on files with CRLF line endings. The corrected pattern `/```javascript[ \t]*\r?\n([\s\S]*?)\r?\n[ \t]*```/` works in both. Use the corrected form in any new bootstrap stub.
10. **Sidecar log files instead of self-modification.** Each quiz writes its attempt log to `sessions/quiz-logs/<baseName>.log.md` rather than appending to the quiz file itself. Avoids the file changing under the running scaffold.
11. **Chunked-build pattern for large practice exams.** When ~100 KB of question data won't fit in one `wiki_write` or `wiki_edit`, write a skeleton with an `__INSERT_QUESTIONS_HERE_DO_NOT_EDIT__` sentinel, then replace the sentinel via `wiki_edit` in 2-4 chunks. Documented in `_QUESTION-AUTHORING.md`.
12. **One objective page per topic, no separate `concepts/` folder.** Earlier drafts of the SY0-701 schema had atomic `concepts/` pages distinct from objectives. Retired 2026-05-23 — distilled content lives directly on objective pages. Simpler navigation, fewer files, no orphan-management overhead.

## What to do if something seems wrong

If you find yourself wanting to deviate from any of the conventions above, that's fine — but write down the deviation in `STUDY.md §9 (Evolution)` before doing it. The secplus-wiki has a `synthesis/aar-2026-05-26.md` modeling the post-incident analysis pattern; future deviations should produce similar artifacts when they cause friction.

## Related

- [[../STUDY|secplus-wiki's STUDY.md]] — working reference for the schema this template parameterizes
- [[../synthesis/aar-2026-05-26|secplus-wiki AAR — 2026-05-25 corruption incident]] — the post-mortem that motivated several of this template's choices
