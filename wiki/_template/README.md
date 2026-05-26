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

| File | Purpose |
|------|---------|
| [[_template/_LLM-OPERATING\|_LLM-OPERATING.md]] | Tool-discipline rules for any AI editing the wiki. Read first. |
| [[_template/_QUESTION-AUTHORING\|_QUESTION-AUTHORING.md]] | Quiz/practice-exam content rules: length parity, distractor design, multi-select, chunked builds. Read before authoring any question. |
| [[_template/STUDY\|STUDY.md]] | Parameterized schema. Copy to wiki root, substitute subject-specific bits. |
| [[_template/_quiz-scaffold\|_quiz-scaffold.md]] | Shared engine for per-topic quiz banks. localStorage state, Reset button, auto-✓ mastery, log persistence. |
| [[_template/_practice-exam-scaffold\|_practice-exam-scaffold.md]] | Shared engine for full-length practice exams. Same state-persistence story as the quiz scaffold, plus PBQ rendering, domain breakdown, comprehensive log entries. |
| (this file) | The bootstrap guide. |

## The non-negotiables

These aren't options — getting them wrong on the SY0-701 wiki cost real rework. Bake them in from day one:

1. **Both quizzes AND practice exams load the shared scaffold.** The quiz scaffold and the practice-exam scaffold are the contract. Content files are small bootstraps (front matter + `questions` array + `pbqs` array + variable assignments + the scaffold-loader stub). They do not contain engine code. If an exam file grows past ~10 KB of code, the scaffold isn't absorbing what it should be. The 5 monolithic ~150 KB practice-exam files in secplus-wiki are the cautionary tale: every bug fix required editing all 5 separately, and the divergent inlined engines drifted from the per-objective quiz behavior (no state persistence, no Reset, thin logs). Don't repeat this. Use the scaffold from question one of practice exam one.
2. **Balance answer-choice lengths.** See [[_template/_QUESTION-AUTHORING|_QUESTION-AUTHORING.md §The single most important rule]]. The SY0-701 wiki's first 28 quizzes (1.1–4.4) had correct answers 2-4× longer than wrong ones — pick-the-longest was the optimal strategy. Quizzes 4.5–5.6 were rewritten to fix this. Don't ship a question without checking option-length parity.
3. **Read `_LLM-OPERATING.md` before any mutation.** Specifically the `wiki_edit` vs `wiki_write` rule. The 7 corrupted quizzes on the SY0-701 wiki on 2026-05-25 are the cautionary tale.

## Bootstrap sequence

1. **Create the new wiki repo / vault.** One folder, version-controlled if possible.
2. **Copy the six files in this folder into the new wiki's root.** Keep `_LLM-OPERATING.md` and `_QUESTION-AUTHORING.md` named exactly that. Move the two scaffolds into `quizzes/`. The `STUDY.md` goes at root.
3. **Substitute placeholders.** The template files have `{{SUBJECT}}`, `{{SUBJECT_SHORT}}`, `{{DOMAINS}}` and similar placeholders. Search and replace globally.
4. **Create the empty category folders:** `transcripts/`, `objectives/`, `quizzes/`, `sessions/`, `synthesis/`. Each gets a one-paragraph `README.md` describing its purpose (the originals in the secplus-wiki are good models).
5. **Create `_index.md`** at root with the master table-of-contents structure. The secplus-wiki [[../_index|_index.md]] is the working reference.
6. **Set up `_log.md`** at root as an empty append-only log file. The MCP server populates it on every mutating call.

That's the scaffolding. From here, the content phase looks the same as the secplus-wiki: ingest source material into `transcripts/`, distill into `objectives/`, write quiz banks, run sessions, accumulate `synthesis/` views.

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
