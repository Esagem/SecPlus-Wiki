---
title: "Preventive Controls"
category: concept
tags: [controls, preventive, 1.1]
status: active
confidence: medium
objective: "1.1"
mastery: weak
created: 2026-05-21
updated: 2026-05-21
---

# Preventive Controls

**One-line:** Controls that **block** access to a resource before an event can occur. The first line of defense; aim to make the bad thing impossible.

## Examples across categories

| Category | Example |
|---|---|
| Technical | Firewall rule denying inbound port 3389 from the internet |
| Managerial | Onboarding policy requiring background checks before granting access |
| Operational | Guard at a shack checking IDs before letting people drive in |
| Physical | Door lock, mantrap, fence |

## Preventive vs Deterrent

- **Preventive blocks.** If the control is working, the event *cannot happen*.
- **Deterrent discourages.** The event is still physically possible; the control just makes the attacker reconsider.

A locked door is preventive. A "no trespassing" sign is deterrent. Both are common on the same door — defense in depth.

## Exam traps

- Be careful when a question says "discourages" or "warns" — that's deterrent, not preventive.
- Background checks are *managerial preventive*, not operational. Operational would be the guard physically gating entry.
- An IDS is *not* preventive — it watches and reports. An IPS *is* preventive — it blocks. The "P" matters.

## Related

- [[concepts/security-controls|Security controls overview]]
- [[concepts/deterrent-controls|Deterrent controls]] (often paired)
- [[objectives/1.1|Objective 1.1 — Security Controls]]

## Source

- [[transcripts/Section 1.1|Transcript §1.1 — Security Controls]]
