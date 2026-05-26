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
| [[_template/STUDY\|STUDY.md]] | Parameterized schema. Copy to wiki root, substitute subject-specific bits. |
| [[_template/_quiz-scaffold\|_quiz-scaffold.md]] | Shared engine for per-topic quiz banks. localStorage state, Reset button, auto-✓ mastery, log persistence. |
| [[_template/_practice-exam-scaffold\|_practice-exam-scaffold.md]] | Shared engine for full-length practice exams. Same state-persistence story as the quiz scaffold, plus PBQ rendering, domain breakdown, comprehensive log entries. |
| (this file) | The bootstrap guide. |

## Bootstrap sequence

1. **Create the new wiki repo / vault.** One folder, version-controlled if possible.
2. **Copy the five files in this folder into the new wiki's root.** Keep `_LLM-OPERATING.md` named exactly that. Move the two scaffolds into `quizzes/`. The `STUDY.md` goes at root.
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

1. **Practice exams use the shared scaffold.** Not inlined engines. (The SY0-701 wiki had 5 monolithic ~150 KB practice-exam files; bug fixes required editing all 5 separately. The new scaffold makes that a one-edit job.)
2. **State persists across reloads.** Both per-topic quizzes and full practice exams use localStorage so that closing the tab, accidentally reloading, or grading-then-coming-back doesn't wipe the work.
3. **Reset button is in the UI.** Not just clearing localStorage manually.
4. **Log entries record picks + correct answers.** Not just question numbers. The log is then a usable learning artifact, not a to-do list.
5. **Auto-✓ rename on mastery.** When a per-topic quiz is passed cleanly the first try, the file (and the corresponding objective page) get a `✓` suffix. Visible in the file tree and in `_index.md`.
6. **`_LLM-OPERATING.md` is at the root.** Any AI connecting to the wiki sees the tool-discipline rules immediately.

## What to do if something seems wrong

If you find yourself wanting to deviate from any of the conventions above, that's fine — but write down the deviation in `STUDY.md §9 (Evolution)` before doing it. The secplus-wiki has a `synthesis/aar-2026-05-26.md` modeling the post-incident analysis pattern; future deviations should produce similar artifacts when they cause friction.

## Related

- [[../STUDY|secplus-wiki's STUDY.md]] — working reference for the schema this template parameterizes
- [[../synthesis/aar-2026-05-26|secplus-wiki AAR — 2026-05-25 corruption incident]] — the post-mortem that motivated several of this template's choices
