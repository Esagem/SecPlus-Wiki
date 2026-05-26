---
title: LLM Operating Rules — Editing Discipline for Study Wikis
category: synthesis
tags: [template, llm, operating-guide, tool-discipline]
status: active
confidence: high
created: 2026-05-26
updated: 2026-05-26
---

# LLM Operating Rules — Editing Discipline for Study Wikis

> Copy this file (and the rest of `_template/`) into the root of any new study wiki. Read it first, in full, before doing any work on the wiki.

These rules exist because they have already failed at least once. Each one is paired with the failure mode that motivated it.

## 0. Read these before doing anything

1. The wiki's `STUDY.md` (schema, conventions, page templates).
2. **This file** — the tool-discipline rules.
3. **`_QUESTION-AUTHORING.md`** — if you'll touch quizzes or practice exams.
4. The wiki's `_index.md` (what exists today).
5. `wiki_log_tail(n=20)` to see recent activity.

Skipping any of these is how sessions step on each other.

## 1. Tool selection is the most important decision you make

The MCP server gives you a small set of tools. Choosing the wrong one is how data gets lost.

### The hierarchy

| Tool | Use for |
|------|---------|
| `wiki_edit` | **Default mutation tool.** Any change smaller than a full rewrite. Multiple edits per call when applicable. Transactional. |
| `wiki_write` | New pages, or genuine wholesale rewrites of an existing page (>~50% changed AND you're writing the full new content with full awareness of what you're replacing). |
| `wiki_status_set` | Front matter only — status, confidence, mastery, tags, owner. `wiki_edit` refuses to touch YAML. |
| `wiki_delete` | Genuine deletion. Defaults to refusing; prefer `wiki_status_set(status="retired")` for "keep but ignore". |

### The rule

**If you can describe the change as "replace X with Y" or "insert Z after W" or "modify the X part of this page," it is a `wiki_edit`. No exceptions.** Tasks phrased as "refactor," "migrate," "convert," "update" almost always belong in `wiki_edit` — these are partial changes by definition.

### Why this matters (the cautionary tale)

On 2026-05-25 an AI session refactored 28 per-objective quiz files to load a shared scaffold. 21 of them were done via `wiki_edit` and survived intact. 7 were done via `wiki_write` and were silently emptied — the new content written was a stub that omitted the questions array. Same task, same goal, two different tools, opposite outcomes. The 7 are unrecoverable from inside the wiki. **`wiki_write` is too sharp a tool to default to.**

### Pre-flight checklist for `wiki_write`

If you find yourself about to call `wiki_write` on an existing page, stop and ask:

- Have I just read this page within the last few turns?
- Does my `content:` parameter preserve everything I want to keep?
- Is the new content longer than 50% of the existing content? (If shorter, that's a red flag — re-read first.)
- Could I express this as one or more `wiki_edit` operations instead?

If the answer to any of the first three is "no" or "I'm not sure," do not call `wiki_write`. Re-read the page or restructure as `wiki_edit`.

## 2. Read before you write

**Always `wiki_read` a page immediately before mutating it.** Not three turns ago — immediately before. Other sessions may have edited it. Your local mental model may be stale.

For batched reads of two or more pages, use `wiki_read_many`. Never sequence multiple `wiki_read` calls when one `wiki_read_many` would do. This is process, not preference — it reduces token cost, latency, and conversation drift.

For section reads, use the `section=` parameter rather than reading the whole page.

## 3. `wiki_edit` is transactional — use that

`wiki_edit` accepts an `edits` array. The entire batch is applied or none of it is. This means you can group related changes into one call and trust they'll land atomically.

Take advantage of this:

- Bulk updates to a page (e.g. updating 5 references in `_index.md`) → one `wiki_edit` call with 5 entries.
- Related edits across the page (e.g. add a section + link to it from the existing table) → one `wiki_edit` call.

Each `old_str` must occur exactly once in the page **after the previous edits in the batch have been applied**. Order matters when later edits depend on earlier ones.

## 4. Anchors must be unique

`wiki_edit` refuses any `old_str` that occurs zero or multiple times. This is a safety feature, not a bug. If your anchor isn't unique, add context — usually 60–150 characters surrounding the change is enough.

When in doubt, anchor on a structural feature (a heading, a unique identifier, a distinctive phrase) rather than on a generic word.

## 5. Check `_log.md` before bulk operations

Run `wiki_log_tail(n=10)` before doing anything that touches multiple files. If another session was active in the same area in the last few hours, your assumptions about the file state may be wrong.

The log is also the fastest way to triage "is something wrong here" — patterns like 7 sequential `wiki_write` calls with the same changelog template are a smell.

## 6. Front matter is sacred

`wiki_edit` refuses any edit that overlaps the YAML front matter block. This is intentional. Front matter changes go through `wiki_status_set` only. Do not try to work around this — the refusal is protecting you from clobbering the status/confidence/mastery tracking that the rest of the wiki depends on.

## 7. Concurrent-write detection is on your side

All mutating tools track the page SHA from your last read. If the page was modified between read and write, GitHub returns 409 and the tool surfaces a clear error.

**The right response to a 409 is always: re-read, integrate, retry.** Never assume your edit is safe to retry blindly. The page changed for a reason.

## 8. Logging discipline

Every mutating call auto-appends to `_log.md`. The optional `changelog_entry` parameter shapes that line. A good changelog entry:

- Is one line, ≤ 150 chars.
- Names the **what** (concrete: "add localStorage state persistence to practice-exam-b") not the **why** (vague: "fix bugs").
- Mentions the issue/AAR/session being addressed when relevant ("(fixes #1 user complaint)" or "(see AAR 2026-05-26)").
- Avoids template-shaped phrases — your changelog entries are the search index for the wiki's history.

## 9. Quiz / scaffold-style content

If the wiki uses a shared scaffold pattern (e.g. `_quiz-scaffold.md` and `_practice-exam-scaffold.md` from `_template/`):

- **Edit the scaffold, not the content files**, for engine changes. One edit propagates to all consumers.
- **Edit the content file, not the scaffold**, for per-quiz content (questions, intro, references).
- Content files should be small bootstraps that load the scaffold. If a content file grows past ~10 KB of code, something is wrong — the scaffold should be absorbing that.
- **For authoring rules** (length parity, distractor design, multi-select, the chunked-build pattern for large practice exams), see [[_QUESTION-AUTHORING|_QUESTION-AUTHORING.md]]. Don't write questions without reading it first.

The 5 monolithic practice-exam files in the secplus-wiki are the anti-example: each was authored standalone at ~150 KB, and bug fixes required editing all 5 separately. The scaffold pattern in `_template/_practice-exam-scaffold.md` is the correction.

## 9a. Environment knowledge — things that have bitten us

Two non-obvious things about working with this wiki + Obsidian:

**Path prefix.** The wiki MCP tool surfaces paths *relative to the `wiki/` folder* — `wiki_read("sessions/foo.md")` reads `wiki/sessions/foo.md` on disk. But Obsidian's vault APIs (`app.vault.getAbstractFileByPath`, `app.vault.create`, `app.vault.modify`, `app.fileManager.renameFile`) see paths *from the vault root* — they want `"wiki/sessions/foo.md"`. For reads via Obsidian's wikilink resolution this difference doesn't matter, but for writes from inside `dataviewjs` code it absolutely does. The scaffolds in `_template/` handle this by trying both candidates (`wiki/quizzes/_scaffold.md` and `quizzes/_scaffold.md`). If you write new scripts that touch the vault, follow the same dual-path lookup pattern. The vocab-match save bug on 2026-05-23 was exactly this issue — saves were silently failing because the code used `sessions/...` (wiki tool style) instead of `wiki/sessions/...` (Obsidian vault style).

**CRLF in regex extraction.** Bootstrap stubs extract the scaffold's JS code block via regex. The naive pattern `/```javascript\n([\s\S]*?)\n```/` fails on files written with CRLF line endings (some editors, some platforms, some round-trips through Git on Windows). Use `/```javascript[ \t]*\r?\n([\s\S]*?)\r?\n[ \t]*```/` instead — it tolerates both LF and CRLF, plus trailing whitespace on the fence lines. Every example stub in the template already uses this corrected pattern; copy it verbatim.

## 10. When you're not sure, ask

This file does not cover every situation. When you genuinely don't know whether a change is a `wiki_edit` or a `wiki_write`, or whether a refactor should touch the scaffold or the content file, or whether front-matter changes belong here — ask the user before doing it. The cost of one clarifying question is much smaller than the cost of recovering from a wrong tool call.

## Appendix — decision tables

### Reading

| Situation | Tool |
|-----------|------|
| One section of one page | `wiki_read(page_path, section="...")` |
| Whole page | `wiki_read(page_path)` |
| 2+ pages | `wiki_read_many(...)` |
| Content search | `wiki_search(query)` then targeted reads |
| Orientation / activity | `wiki_index`, `wiki_log_tail` |

### Writing

| Situation | Tool |
|-----------|------|
| New page | `wiki_write` |
| Genuine ≥50% rewrite of existing page | `wiki_write` (with pre-flight checklist) |
| Smaller content change | `wiki_edit` |
| Front-matter change only | `wiki_status_set` |
| Genuine deletion | `wiki_delete(force=true)` (rare; prefer `status=retired`) |

### Red-flag patterns

| Pattern | What it usually means |
|---------|----------------------|
| `wiki_write` content shorter than existing page | About to lose content — re-read first |
| Multiple `wiki_write` calls in sequence with similar changelogs | Probably should have been one `wiki_edit` batch — or worse, mass corruption in progress |
| `wiki_read` of page A, then `wiki_write` of page B, no read of B | About to mutate a page you haven't seen the current state of |
| 409 error then immediate retry | Will likely 409 again; re-read before retrying |
