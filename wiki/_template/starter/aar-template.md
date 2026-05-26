---
title: After-Action Review — <one-line incident summary>
category: synthesis
tags: [aar, retrospective]
status: active
confidence: high
created: YYYY-MM-DD
updated: YYYY-MM-DD
---

# After-Action Review — <one-line incident summary>

> **TEMPLATE FILE.** Copy this to `synthesis/aar-YYYY-MM-DD.md` and fill in. Delete this callout block. Link the resulting AAR from `_index.md`'s Synthesis table.

## TL;DR

One paragraph: what happened, current state, where the fix landed (or what's still outstanding). Someone scanning this six months from now should be able to read just this and know whether to read further.

## Context

Brief background: what was the wiki doing in the days leading up to the incident? What state was the work in? Skip if not relevant.

## What worked

The parts of the wiki / workflow / tooling that held up. Worth documenting because these are the patterns to keep.

- ...
- ...

## What failed

The parts that didn't hold up. Be specific — name the failure modes, link to affected files, name affected dates.

### Failure 1 — <name>

What happened, what was lost, what the user observed. Concrete. Link to the affected files.

### Failure 2 — <name>

...

## Root cause

The proximate cause and the contributing factors. Distinguish between:

- **The immediate decision that triggered the failure** — usually one specific tool call, one bad assumption, one missed signal
- **The conditions that made that decision likely to be made wrong** — missing guardrails, undocumented gotchas, ambiguous conventions, tool choices that were too sharp

Both matter. The proximate cause is what failed; the contributing conditions are what to fix in the template / operating docs so it doesn't recur.

## Fix summary

What was applied to address each failure. Include dates and file paths.

| Failure | Fix | Files touched | Date |
|---------|-----|---------------|------|
| | | | |

## Forward rules

The rules going forward to prevent recurrence. These should land in `_LLM-OPERATING.md`, `_QUESTION-AUTHORING.md`, or `_INGESTION.md` (whichever is the right home) if they generalize beyond this incident.

1. ...
2. ...

For each rule, note where it was added — that's how future sessions inherit the lesson without re-reading every AAR.

## Recovery plan

If anything is still outstanding (content to restore from backup, follow-up edits needed), list it here with owner and date.

- [ ] ...
- [ ] ...

## Open questions

Things this AAR surfaced but didn't resolve. Carry these into future work — usually they're either too speculative to fix now or require user judgment.

- ...

## Related

- Links to affected files, prior AARs, or related synthesis pages
