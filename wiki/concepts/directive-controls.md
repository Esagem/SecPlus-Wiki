---
title: "Directive Controls"
category: concept
tags: [controls, directive, 1.1]
status: active
confidence: medium
objective: "1.1"
mastery: weak
created: 2026-05-21
updated: 2026-05-21
---

# Directive Controls

**One-line:** Controls that **instruct** people to do the secure thing. Relies on the person's cooperation to be effective — the weakest control type because there's no enforcement.

## Examples across categories

| Category | Example |
|---|---|
| Technical | "Store sensitive files in the encrypted folder" — leaves the classification to the user |
| Managerial | Compliance policy documenting required procedures |
| Operational | Security awareness training |
| Physical | "Authorized personnel only" sign (no lock) |

## Why it's the weakest type

Every other control either *acts on* the threat (preventive, detective, corrective, compensating) or *threatens* the actor (deterrent). Directive *asks*. If the person ignores the instruction, the control fails silently — there's no friction, no log, no alarm.

That's why directive controls almost always need to be paired with something else. A "do not enter" sign + a locked door. A compliance policy + an audit. Training + monitoring.

## Exam traps

- **"Instructs" / "directs" / "requires the user to" = directive.** If the system enforces it, it's something else.
- **Easy to confuse with managerial.** Managerial is the *category* (set by policy/people). Directive is the *type* (relies on cooperation). A compliance policy can be both — managerial category, directive type.
- A sign on a *locked* door is layered: directive sign + preventive lock. The lock is what's actually stopping people.

## Related

- [[concepts/security-controls|Security controls overview]]
- [[concepts/preventive-controls|Preventive controls]] (what directive often needs to be paired with)
- [[objectives/1.1|Objective 1.1 — Security Controls]]

## Source

- [[transcripts/Section 1.1|Transcript §1.1 — Security Controls]]
