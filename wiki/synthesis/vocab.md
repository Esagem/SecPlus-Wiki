---
title: "Vocab"
category: synthesis
tags: [vocab, glossary, reference]
status: active
confidence: high
created: 2026-05-21
updated: 2026-05-21
---

# Vocab

Single source of truth for SY0-701 terms. Sortable in Obsidian reading view by clicking column headers (works natively for tables with the **Sortable** community plugin, or use **Dataview** for richer queries).

**Conventions:**
- One row per term. Sort default: alphabetical by Term.
- *Concept* column links to the deepest treatment of the term in `concepts/`. If no concept page exists yet, leave blank.
- *Objective* is the primary objective the term shows up under. If a term spans objectives, list the most representative one and use [[synthesis/vocab|wiki_search]] to find the others.
- Definitions are **one line, exam-relevant**. Subtleties live on the concept page, not here.

---

| Term | Definition (one line) | Concept | Objective | Tags |
|------|-----------------------|---------|-----------|------|
| Compensating control | A control that substitutes for an unavailable control, usually temporarily | [[concepts/compensating-controls]] | 1.1 | controls, compensating |
| Control category | How a control is implemented — Technical, Managerial, Operational, or Physical | [[concepts/security-controls]] | 1.1 | controls, framework |
| Control type | What a control does in the event lifecycle — Preventive, Deterrent, Detective, Corrective, Compensating, or Directive | [[concepts/security-controls]] | 1.1 | controls, framework |
| Corrective control | A control applied after an event to undo or limit its impact | [[concepts/corrective-controls]] | 1.1 | controls, corrective |
| Detective control | A control that identifies and reports that an event has occurred | [[concepts/detective-controls]] | 1.1 | controls, detective |
| Deterrent control | A control that discourages an actor without physically blocking the act | [[concepts/deterrent-controls]] | 1.1 | controls, deterrent |
| Directive control | A control that instructs a person to behave securely; relies on cooperation | [[concepts/directive-controls]] | 1.1 | controls, directive |
| Managerial control | Control category: implemented by policies and procedures | [[concepts/security-controls]] | 1.1 | controls, managerial |
| Operational control | Control category: implemented by people performing tasks | [[concepts/security-controls]] | 1.1 | controls, operational |
| Physical control | Control category: implemented by tangible barriers or devices | [[concepts/security-controls]] | 1.1 | controls, physical |
| Preventive control | A control that blocks an event before it can occur | [[concepts/preventive-controls]] | 1.1 | controls, preventive |
| Security control | Any mechanism that prevents, detects, or responds to a security event | [[concepts/security-controls]] | 1.1 | controls, fundamentals |
| Technical control | Control category: implemented by technology (systems, software, hardware) | [[concepts/security-controls]] | 1.1 | controls, technical |

---

## How to use this page

- **Quick lookup:** Ctrl-F in Obsidian or in GitHub's blob view.
- **By objective:** sort the table by the Objective column, or use Dataview:
  ```
  TABLE Definition, Concept FROM "synthesis"
  WHERE file.name = "vocab" AND contains(string(Objective), "1.1")
  ```
- **By concept page:** the Concept column is wikilinked; click through.

## Growth pattern

Every transcript distillation should add terms to this table. Place new rows alphabetically. When a term gets a dedicated concept page later, backfill the Concept column.
