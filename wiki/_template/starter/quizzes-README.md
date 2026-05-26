---
title: Quizzes — Question Banks and Practice Exams
category: quiz
tags: [quizzes, readme]
status: active
confidence: high
created: YYYY-MM-DD
updated: YYYY-MM-DD
---

# Quizzes — Question Banks and Practice Exams

> **STARTER FILE.** Copy to `quizzes/README.md` in the new wiki. Delete this header once placed.

## File types in this folder

| File | Purpose |
|------|---------|
| `_quiz-scaffold.md` | Shared engine for per-topic quiz banks. **Don't edit per-quiz content here** — only the engine. |
| `_practice-exam-scaffold.md` | Shared engine for full-length practice exams. Same rule — engine only. |
| `<topic-id>-<slug>.md` | Per-topic quiz bank, e.g. `1.4-cryptography.md`. Loads the quiz scaffold. |
| `practice-exam-<x>.md` | Full-length practice exam, e.g. `practice-exam-a.md`. Loads the practice-exam scaffold. |

## Authoring

**Before writing any question**, read [[_QUESTION-AUTHORING|_QUESTION-AUTHORING.md]] (at wiki root). Length parity, distractor design, multi-select handling — these rules matter.

See [[STUDY|STUDY.md §4]] for the quiz-page and practice-exam-page templates. A complete working example lives at `_template/examples/example-quiz.md` if you want a concrete reference.

## How the scaffold pattern works

Every per-topic quiz file is a small bootstrap (~5-15 KB of question data + ~10 lines of scaffold-loader code). The actual rendering engine lives in `_quiz-scaffold.md`. The bootstrap reads the scaffold's JS code block via regex and evals it, passing in the per-quiz `questions` array and `baseName`.

Same pattern for practice exams with `_practice-exam-scaffold.md`.

**Why this matters:** engine changes happen once in the scaffold; all consumers pick up the fix. Bug fixes don't require editing 28 files.

## Mastery marking

When a per-topic quiz scores ≥ 90% first-try accuracy, the scaffold auto-renames the quiz file *and* the corresponding objective file with a ` ✓` suffix. Visible in the file tree and in `_index.md`.

Practice exams don't auto-✓ — they're meant to be retaken.

## Quiz logs

Each quiz attempt writes a log entry to `sessions/quiz-logs/<baseName>.log.md`. The log file is the durable record of right/wrong; the quiz file itself is never modified by attempts.

## Editing rules (the rule that matters)

**For per-quiz content** (questions, intro text, references): edit the individual quiz file.

**For engine changes** (rendering, state persistence, log format, mastery threshold): edit the scaffold. One edit propagates to all consumers.

Mixing these up — putting engine code in a quiz file, or per-quiz content in the scaffold — is how the wiki accumulates technical debt.
