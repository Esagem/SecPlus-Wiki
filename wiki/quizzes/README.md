---
title: "Quizzes — folder README"
category: quiz
tags: [meta]
status: active
confidence: high
created: 2026-05-21
updated: 2026-05-21
---

# Quizzes

Question banks for AI-generated quizzing sessions. **Not flash cards** — these are *question shapes* and topic scopes that the LLM uses to generate quiz questions on-the-fly during study sessions.

Filename suggestion: `<objective>-<topic>.md`, e.g. `1.4-cryptography.md`, `2.3-injection-attacks.md`, or just `cross-cutting-<topic>.md` for banks that span objectives.

See the template in [[STUDY|STUDY §4]].

## Why on-the-fly instead of stored cards

- Generated questions adapt to what you missed last time (the misses log on each bank).
- The LLM can vary phrasing so you're learning the concept, not memorizing the question.
- Easier to scope a session ("quiz me on the weak areas in 1.4 and 2.3") than to manage a card deck.

## Misses log

Each bank has a `## Misses log` section at the bottom. After every session that uses the bank, the LLM appends an entry with the date and what was missed. Over time this turns into the targeted-revisit list.
