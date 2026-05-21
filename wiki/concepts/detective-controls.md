---
title: "Detective Controls"
category: concept
tags: [controls, detective, 1.1]
status: active
confidence: medium
objective: "1.1"
mastery: weak
created: 2026-05-21
updated: 2026-05-21
---

# Detective Controls

**One-line:** Controls that **identify and report** that an event has occurred (or is occurring). They don't prevent and don't fix — they tell you something happened.

## Examples across categories

| Category | Example |
|---|---|
| Technical | System logs, IDS alerts, SIEM correlation rules |
| Managerial | Periodic policy of reviewing login reports |
| Operational | Security guard patrolling the property |
| Physical | Motion detector, glass-break sensor, CCTV (when used for monitoring) |

## Detective vs preventive

- **Preventive blocks.** Detective only **notices**.
- An IDS is detective; an IPS is preventive. Same data, different action.
- Detective controls assume the event may already be unstoppable — they exist so you find out about it and can respond.

## Why detective controls earn their keep

You can't fully prevent everything. Detective controls catch what slips through — they enable triage, response, and lessons-learned. A breach you never detect is the worst kind.

## Exam traps

- **"Identifies" / "alerts" / "notifies" / "logs" = detective.** "Blocks" / "stops" = preventive.
- **CCTV is tricky:** as a *sign* it's deterrent; as a *recorded monitoring system reviewed for incidents* it's detective.
- **Reviewing logs is managerial detective.** The logs themselves are technical detective. Same activity, different control depending on what's being asked.

## Related

- [[concepts/security-controls|Security controls overview]]
- [[concepts/corrective-controls|Corrective controls]] (what you do after detection)
- [[objectives/1.1|Objective 1.1 — Security Controls]]

## Source

- [[transcripts/Section 1.1|Transcript §1.1 — Security Controls]]
