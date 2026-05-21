---
title: "Compensating Controls"
category: concept
tags: [controls, compensating, 1.1]
status: active
confidence: medium
objective: "1.1"
mastery: weak
created: 2026-05-21
updated: 2026-05-21
---

# Compensating Controls

**One-line:** Controls that **substitute** for a control you can't or haven't yet deployed. Usually temporary; bridge the gap until the real fix lands.

## Examples across categories

| Category | Example |
|---|---|
| Technical | Firewall rule blocking the exploit path while waiting on a vendor patch |
| Managerial | Separation of duties when no single person should hold the full action |
| Operational | Two security guards on overlapping shifts so no one has sole access |
| Physical | Backup generator running while main power is restored |

## Why compensating is its own type

It's a *role* a control plays, not a flavor of mechanism. The firewall rule blocking the exploit is a "preventive technical control" in mechanism — but in this context it's *compensating* because it stands in for the patch that should have been there.

The same firewall rule, deployed permanently as the intended defense rather than a stand-in, is just preventive.

## Compensating vs corrective

- **Corrective:** event already happened, undo or limit it. Past tense.
- **Compensating:** event hasn't happened, but the real control isn't available — fill the gap. Present continuous.
- The fire extinguisher *after* a fire = corrective. The extinguisher stationed in the hallway *because* sprinklers aren't installed yet = compensating.

## Exam traps

- **Look for "until," "while waiting," "temporary," "instead of."** Strong signals for compensating.
- **PCI-DSS context:** compensating controls are formally defined and require documentation that they meet the original control's intent — different rigor than the everyday usage but the concept is the same.
- **Separation of duties is compensating** when it substitutes for trust (you can't trust one person with the whole pipeline so you split it). It's also fundamentally a managerial control regardless.

## Related

- [[concepts/security-controls|Security controls overview]]
- [[concepts/corrective-controls|Corrective controls]] (commonly confused)
- [[concepts/preventive-controls|Preventive controls]] (what compensating often substitutes for)
- [[objectives/1.1|Objective 1.1 — Security Controls]]

## Source

- [[transcripts/Section 1.1|Transcript §1.1 — Security Controls]]
