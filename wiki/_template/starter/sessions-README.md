---
title: Sessions — Study Session Notes
category: session
tags: [sessions, readme]
status: active
confidence: high
created: YYYY-MM-DD
updated: YYYY-MM-DD
---

# Sessions — Study Session Notes

> **STARTER FILE.** Copy to `sessions/README.md` in the new wiki. Delete this header once placed.

Dated study session notes — one file per session.

## Filename

`YYYY-MM-DD-<slug>.md`, e.g. `2026-05-21-cryptography-deep-dive.md`.

If you run multiple distinct sessions in one day, distinguish via more specific slugs:
- `2026-05-21-cryptography-pki.md`
- `2026-05-21-cryptography-tls.md`

## Front matter

```yaml
---
title: YYYY-MM-DD — <slug>
category: session
tags: [session, <topic-tags>]
status: active
confidence: high
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```

## Page template

See [[STUDY|STUDY.md §4 — Page-type templates → Session note]].

A useful session note captures:

- **Covered** — which objectives or topics
- **Quiz result** — N / M (raw score) if a quiz was taken
- **Missed** — specific concepts that didn't click, with one-line reasons
- **Updated** — mastery changes pushed to objective pages, weak-areas additions
- **Next** — what to re-quiz, re-read, or move on to

Keep them short. Five sentences each, not five paragraphs. The point is a trace of what happened, not a transcript.

## quiz-logs/

The quiz scaffold writes per-attempt logs to `sessions/quiz-logs/<baseName>.log.md`. These are auto-generated — don't hand-edit them. They accumulate attempt-by-attempt: timestamp, score, which questions were missed, and (for practice exams) which options were picked vs. correct.

## What sessions are *not*

- Not a chat transcript. Sessions distill what mattered, not what was said.
- Not a substitute for objective pages. If a session uncovers durable content, the content goes in `objectives/`; the session just notes that it was uncovered.
- Not append-only journals. One session, one file. If the same topic comes up two weeks later, that's a new session note.
