---
title: "Corrective Controls"
category: concept
tags: [controls, corrective, 1.1]
status: active
confidence: medium
objective: "1.1"
mastery: weak
created: 2026-05-21
updated: 2026-05-21
---

# Corrective Controls

**One-line:** Controls applied **after** an event has been detected, to reverse or limit its impact and restore operations.

## Examples across categories

| Category | Example |
|---|---|
| Technical | Restore from backup after a ransomware infection |
| Managerial | Policy requiring all security incidents be reported and rolled into IR |
| Operational | Calling law enforcement after a break-in |
| Physical | Fire extinguisher stopping a fire from spreading |

## The lifecycle position

The natural sequence on the type axis:

```
Deterrent → Preventive → Detective → Corrective
(discourage)  (block)     (notice)   (recover)
```

Compensating sits sideways (a temporary stand-in) and directive sits sideways too (relies on cooperation).

## Corrective vs compensating

- **Corrective acts after the event has already happened.** Restore the system; put out the fire.
- **Compensating substitutes for a control you can't deploy.** Block traffic *while you wait for a patch*; the patch is the real fix, the firewall rule is the stand-in.

You can have both for one event: ransomware *detected* (detective) → firewall isolates the host (compensating, while you investigate) → restore from backup (corrective).

## Exam traps

- **"Restores" / "recovers" / "reverses" = corrective.** Cuts the timeline short.
- **Backups are corrective**, but the *policy* that requires backups is managerial — depends on what the question highlights.
- A fire extinguisher is corrective + physical. Smoke detector is detective + physical. Sprinklers are tricky: corrective if they fire to stop damage, but you could argue preventive in the sense they limit spread before it gets worse.

## Related

- [[concepts/security-controls|Security controls overview]]
- [[concepts/detective-controls|Detective controls]] (must come first)
- [[concepts/compensating-controls|Compensating controls]] (often confused)
- [[objectives/1.1|Objective 1.1 — Security Controls]]

## Source

- [[transcripts/Section 1.1|Transcript §1.1 — Security Controls]]
