---
title: "Security+ Study Wiki — Master Index"
category: synthesis
tags: [index, master, navigation]
status: active
confidence: high
created: 2026-05-21
updated: 2026-05-21
---

# Security+ Study Wiki — Master Index

## What this is

Eli's personal study workspace for the **CompTIA Security+ SY0-701** exam. Source material under `sources/`. Cleaned reference notes under `concepts/`. Exam-objective hubs under `objectives/`. Quizzes, sessions, and progress tracking elsewhere.

See [[SECPLUS|SECPLUS.md]] for the operating schema and [[ONBOARDING|ONBOARDING.md]] for setup.

**Current phase: bootstrap.** Initial transcript population in progress. Objective stubs exist; concept pages to be drafted from sources.

---

## Domain 1 — General Security Concepts

| Objective | Status | Mastery | Tags |
|-----------|--------|---------|------|
| [[objectives/1.1-security-controls\|1.1 Security Controls]] | seed | low | controls, fundamentals |
| [[objectives/1.2-fundamental-security-concepts\|1.2 Fundamental Security Concepts]] | seed | low | CIA, AAA, zero-trust, physical-security |
| [[objectives/1.3-change-management\|1.3 Change Management]] | seed | low | governance, process |
| [[objectives/1.4-cryptographic-solutions\|1.4 Cryptographic Solutions]] | seed | low | PKI, encryption, certificates, hashing |

## Domain 2 — Threats, Vulnerabilities, and Mitigations

| Objective | Status | Mastery | Tags |
|-----------|--------|---------|------|
| [[objectives/2.1-threat-actors\|2.1 Threat Actors]] | seed | low | actors, motivations |
| [[objectives/2.2-threat-vectors-and-social-engineering\|2.2 Threat Vectors and Social Engineering]] | seed | low | phishing, social-engineering |
| [[objectives/2.3-vulnerabilities\|2.3 Vulnerabilities]] | seed | low | OS, application, hardware, cloud |
| [[objectives/2.4-malicious-activity\|2.4 Malicious Activity]] | seed | low | malware, attacks, IoCs |
| [[objectives/2.5-mitigation-techniques\|2.5 Mitigation Techniques]] | seed | low | hardening, segmentation, mitigation |

## Domain 3 — Security Architecture

| Objective | Status | Mastery | Tags |
|-----------|--------|---------|------|
| [[objectives/3.1-architecture-models\|3.1 Architecture Models]] | seed | low | cloud, network, infra |
| [[objectives/3.2-secure-architecture\|3.2 Secure Architecture]] | seed | low | firewalls, ports, secure-comm |
| [[objectives/3.3-data-protection\|3.3 Data Protection]] | seed | low | classification, states, protection |
| [[objectives/3.4-resilience-and-recovery\|3.4 Resilience and Recovery]] | seed | low | backups, capacity, power |

## Domain 4 — Security Operations

| Objective | Status | Mastery | Tags |
|-----------|--------|---------|------|
| [[objectives/4.1-compute-security\|4.1 Compute Security]] | seed | low | baselines, hardening, wireless, app-sec |
| [[objectives/4.2-asset-management\|4.2 Asset Management]] | seed | low | inventory, lifecycle |
| [[objectives/4.3-vulnerability-management\|4.3 Vulnerability Management]] | seed | low | scanning, pentest, remediation |
| [[objectives/4.4-security-monitoring\|4.4 Security Monitoring]] | seed | low | tools, SIEM, alerting |
| [[objectives/4.5-enhanced-security\|4.5 Enhanced Security]] | seed | low | firewalls, web-filter, email, endpoint |
| [[objectives/4.6-identity-and-access-management\|4.6 Identity and Access Management]] | seed | low | IAM, MFA, passwords |
| [[objectives/4.7-automation-and-scripting\|4.7 Automation and Scripting]] | seed | low | automation, scripting |
| [[objectives/4.8-incident-response\|4.8 Incident Response]] | seed | low | IR, forensics, planning |
| [[objectives/4.9-log-analysis\|4.9 Log Analysis]] | seed | low | logs, sources |

## Domain 5 — Security Program Management

| Objective | Status | Mastery | Tags |
|-----------|--------|---------|------|
| [[objectives/5.1-security-governance\|5.1 Security Governance]] | seed | low | policies, standards, procedures |
| [[objectives/5.2-risk-management\|5.2 Risk Management]] | seed | low | risk, BIA, strategies |
| [[objectives/5.3-third-party-risk\|5.3 Third-Party Risk]] | seed | low | vendors, agreements |
| [[objectives/5.4-compliance\|5.4 Compliance]] | seed | low | privacy, regulation |
| [[objectives/5.5-audits-and-assessments\|5.5 Audits and Assessments]] | seed | low | audit, pentest |
| [[objectives/5.6-security-awareness\|5.6 Security Awareness]] | seed | low | training, awareness |

---

## Synthesis

| Page | Status | Confidence | Tags |
|------|--------|------------|------|
| [[synthesis/mastery-tracker\|Mastery Tracker]] | seed | medium | tracking, progress |
| [[synthesis/weak-areas\|Weak Areas]] | seed | medium | review, gaps |
| [[synthesis/study-plan\|Study Plan]] | seed | medium | planning, pacing |
| [[synthesis/cross-references\|Cross-References]] | planned | — | concept-relationships |
| [[synthesis/lint-report\|Lint Report]] | planned | — | maintenance |

## Quizzes

_None yet. Populated during study loop._

## Sessions

_None yet. First study session creates `sessions/YYYY-MM-DD-<slug>.md`._

---

## Status legend

- **seed** — page exists, no real content yet
- **draft** — content in flight, not study-ready
- **active** — content complete, study-ready
- **needs-review** — flagged for re-study
- **retired** — out of scope
- **planned** — referenced but not yet written
- **superseded** — replaced; `superseded_by` points to newer

## Mastery legend (concepts and objectives only)

- **low** — fuzzy, read once
- **medium** — understood, can explain
- **high** — quiz-confirmed, exam-ready

## Link format

Explicit-path pipe syntax everywhere: `[[path/to/file|Display Text]]`. See [[SECPLUS|SECPLUS.md §4]].
