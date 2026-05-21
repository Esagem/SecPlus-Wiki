---
title: "Security Controls"
category: concept
tags: [controls, fundamentals, framework, 1.1]
status: active
confidence: medium
objective: "1.1"
mastery: weak
created: 2026-05-21
updated: 2026-05-21
---

# Security Controls

**One-line:** Mechanisms that prevent, detect, or respond to security events — classified along two orthogonal axes: the **category** (how it's implemented) and the **type** (what it does).

## The two axes

| | Description | Values |
|---|---|---|
| **Category** | How the control is implemented | Technical, Managerial, Operational, Physical |
| **Type** | What the control does in the event lifecycle | Preventive, Deterrent, Detective, Corrective, Compensating, Directive |

These are independent. Every real-world control is both *a type* and *a category*. "Door lock" = preventive (type) + physical (category). "Firewall rule" = preventive + technical. "Onboarding policy" = preventive + managerial. The exam loves to ask you to classify a scenario along both axes.

## The 4×6 matrix

|  | Technical | Managerial | Operational | Physical |
|---|---|---|---|---|
| **Preventive** | Firewall rule | Onboarding policy | Guard checking ID | Door lock |
| **Deterrent** | Login splash screen | Threat of demotion | Reception desk | Warning sign |
| **Detective** | System logs | Periodic log-review policy | Property patrol | Motion detector |
| **Corrective** | Restore from backup | IR reporting policy | Calling law enforcement | Fire extinguisher |
| **Compensating** | Block traffic vs. patching | Separation of duties | Multiple guards | Backup generator |
| **Directive** | "Store sensitive files in encrypted folder" | Compliance policy | Security training | "Authorized personnel only" sign |

Each cell is *an example*, not the definition. Plenty of valid alternative examples exist for any cell.

## How to read scenario questions

For any control the exam describes, ask in this order:

1. **What does it do?** → that's the *type* (preventive, deterrent, detective, etc.).
2. **How is it implemented?** → that's the *category* (technical, managerial, operational, physical).
3. **If it's compensating, what does it compensate for?** Compensating controls only make sense as substitutes for something you can't do directly (yet).

## Exam traps

- **Deterrent vs preventive.** A deterrent *discourages*; a preventive *blocks*. A warning sign deters; a locked door prevents. Both can sit on the same door.
- **Corrective vs compensating.** Corrective acts *after* the event to undo or limit damage (restore from backup). Compensating *substitutes* for a control you can't deploy (block traffic while waiting for a patch). Compensating is usually temporary.
- **Directive is the weakest type.** It only works if the person being directed cooperates. A sign on a door isn't a lock.
- **Operational ≠ technical.** Operational controls are *enacted by people* (a guard, a trainer). If a tool does it without human action, it's technical.

## Related

- [[concepts/preventive-controls|Preventive controls]]
- [[concepts/deterrent-controls|Deterrent controls]]
- [[concepts/detective-controls|Detective controls]]
- [[concepts/corrective-controls|Corrective controls]]
- [[concepts/compensating-controls|Compensating controls]]
- [[concepts/directive-controls|Directive controls]]
- [[objectives/1.1|Objective 1.1 — Security Controls]]

## Source

- [[transcripts/Section 1.1|Transcript §1.1 — Security Controls]]
