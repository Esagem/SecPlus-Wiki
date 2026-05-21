# Wiki Activity Log

Append-only. Every mutating MCP tool call appends an entry here in the format:

```
## [YYYY-MM-DD] <op> | <context> | <short description>
```

Operations: `ingest`, `session`, `quiz`, `lint`, `schema`, `write`, `edit`, `status`, `delete`.

Use `wiki_log_tail` to read recent entries — cheaper than reading the whole log.

---

## [2026-05-21] schema | initial seed | Wiki created from cyber-wiki template adapted for SY0-701 study.
## [2026-05-21] write | _index.md | replace stale _index.md with one matching the actual wiki structure
## [2026-05-21] write | concepts/security-controls.md | overview of the security controls framework (4×6 matrix)
## [2026-05-21] write | concepts/preventive-controls.md | preventive controls — blocks events before they occur
## [2026-05-21] write | concepts/deterrent-controls.md | deterrent controls — discourage rather than block
## [2026-05-21] write | concepts/detective-controls.md | detective controls — identify events after they happen
## [2026-05-21] write | concepts/corrective-controls.md | corrective controls — act after the event to undo or limit damage
## [2026-05-21] write | concepts/compensating-controls.md | compensating controls — temporary substitutes for unavailable controls
## [2026-05-21] write | concepts/directive-controls.md | directive controls — instruct people toward safer behavior; relies on cooperation
## [2026-05-21] write | objectives/1.1.md | objective 1.1 index page — links all 7 control concept pages
## [2026-05-21] write | synthesis/vocab.md | seed vocab table with 13 terms from objective 1.1
## [2026-05-21] edit | _index.md | register objective 1.1, 7 concepts, and synthesis/vocab.md
## [2026-05-21] delete | concepts/security-controls.md | consolidating 1.1 content onto the objective page per user preference
## [2026-05-21] delete | concepts/preventive-controls.md | consolidating 1.1 content onto the objective page
## [2026-05-21] delete | concepts/deterrent-controls.md | consolidating 1.1 content onto the objective page
## [2026-05-21] delete | concepts/detective-controls.md | consolidating 1.1 content onto the objective page
## [2026-05-21] delete | concepts/corrective-controls.md | consolidating 1.1 content onto the objective page
## [2026-05-21] delete | concepts/compensating-controls.md | consolidating 1.1 content onto the objective page
## [2026-05-21] delete | concepts/directive-controls.md | consolidating 1.1 content onto the objective page
## [2026-05-21] write | objectives/1.1.md | full content for 1.1 consolidated onto the objective page
## [2026-05-21] write | synthesis/vocab.md | repoint all 1.1 vocab entries to the consolidated objective page
## [2026-05-21] edit | _index.md | reflect consolidation: concepts/ now empty, 1.1 holds everything
## [2026-05-21] write | synthesis/video-index.md | relocate video index to synthesis/ with kebab-case naming
## [2026-05-21] delete | transcripts/video_index.md | moved to synthesis/video-index.md with kebab-case naming
## [2026-05-21] edit | objectives/1.1.md | add YouTube link to source section
## [2026-05-21] edit | _index.md | register synthesis/video-index in the index synthesis table
## [2026-05-21] write | quizzes/1.1-controls.md | first interactive quiz — 10 questions on 1.1 controls, dataviewjs UI
## [2026-05-21] edit | objectives/1.1.md | link new quiz from objective 1.1
## [2026-05-21] edit | _index.md | register first quiz in the index
## [2026-05-21] edit | quizzes/1.1-controls.md | fix dataviewjs container reference (this → dv)
## [2026-05-21] edit | quizzes/1.1-controls.md | softer colors and more breathing room in the quiz UI
## [2026-05-21] edit | quizzes/1.1-controls.md | vertically center option text via flex
## [2026-05-21] edit | objectives/1.1.md | strip metadata cruft from quiz link
## [2026-05-21] edit | quizzes/1.1-controls.md | strip how-to-use and install-instruction chrome from quiz page
## [2026-05-21] edit | synthesis/video-index.md | strip the regenerate-script notes from video index
## [2026-05-21] write | synthesis/vocab.md | strip conventions, how-to-use, and growth pattern; lean glossary now
## [2026-05-21] edit | _index.md | strip operational chatter from quizzes section
## [2026-05-21] write | objectives/2.1.md | Create objectives/2.1.md — threat actors
## [2026-05-21] write | objectives/1.2.md | Add objective 1.2 — Fundamental Security Concepts
## [2026-05-21] write | objectives/3.1.md | Write objective 3.1 (Architecture and Infrastructure Models)
## [2026-05-21] write | quizzes/2.1-threat-actors.md | Create quizzes/2.1-threat-actors.md
## [2026-05-21] write | quizzes/1.2-concepts.md | Add quiz 1.2-concepts
## [2026-05-21] write | quizzes/3.1-architecture.md | Write quiz 3.1-architecture (4 videos, 13 questions)
## [2026-05-21] write | objectives/2.2.md | Create objectives/2.2.md — threat vectors and attack surfaces
## [2026-05-21] write | objectives/1.3.md | Add objective 1.3 — Change Management
## [2026-05-21] write | objectives/3.2.md | Write objective 3.2 (Secure Enterprise Infrastructure)
## [2026-05-21] write | quizzes/1.3-change-management.md | Add quiz 1.3-change-management
## [2026-05-21] write | quizzes/2.2-vectors.md | Create quizzes/2.2-vectors.md
## [2026-05-21] write | quizzes/3.2-infrastructure.md | Write quiz 3.2-infrastructure (6 videos, 15 questions)
## [2026-05-21] write | objectives/2.3.md | Create objectives/2.3.md — vulnerabilities
## [2026-05-21] write | objectives/1.4.md | Add objective 1.4 — Cryptographic Solutions
## [2026-05-21] write | objectives/3.3.md | Write objective 3.3 (Data Protection)
## [2026-05-21] write | quizzes/3.3-data-protection.md | Write quiz 3.3-data-protection (3 videos, 12 questions)
## [2026-05-21] write | quizzes/1.4-cryptography.md | Add quiz 1.4-cryptography
## [2026-05-21] write | objectives/3.4.md | Write objective 3.4 (Resilience and Recovery)
## [2026-05-21] write | quizzes/2.3-vulnerabilities.md | Create quizzes/2.3-vulnerabilities.md
## [2026-05-21] write | quizzes/3.4-resilience.md | Write quiz 3.4-resilience (5 videos, 14 questions)
## [2026-05-21] write | objectives/2.4.md | Create objectives/2.4.md — malicious activity
## [2026-05-21] write | quizzes/2.4-malicious-activity.md | Create quizzes/2.4-malicious-activity.md
## [2026-05-21] write | objectives/2.5.md | 2.5 objective — mitigation techniques (segmentation, ACLs, allow/deny lists, patching, encryption, EDR, hardening)
## [2026-05-21] write | quizzes/2.5-mitigation.md | 2.5 quiz — mitigation techniques (10 Qs)
## [2026-05-21] write | objectives/4.1.md | Add objective 4.1 — Securing Computing Resources
## [2026-05-21] write | objectives/5.1.md | objectives/5.1.md — Security Governance written
## [2026-05-21] write | quizzes/4.1-securing-resources.md | Add quiz 4.1 — securing computing resources
## [2026-05-21] write | objectives/4.2.md | Add objective 4.2 — Asset Management
## [2026-05-21] write | quizzes/5.1-governance.md | quizzes/5.1-governance.md — 15-question quiz
## [2026-05-21] write | quizzes/4.2-asset-management.md | Add quiz 4.2 — asset management
## [2026-05-21] write | objectives/5.2.md | objectives/5.2.md — Risk Management written
## [2026-05-21] write | objectives/4.3.md | Add objective 4.3 — Vulnerability Management
## [2026-05-21] write | quizzes/5.2-risk.md | quizzes/5.2-risk.md — 13-question quiz
## [2026-05-21] write | objectives/5.3.md | objectives/5.3.md — Third-party Risk written
## [2026-05-21] write | quizzes/4.3-vulnerability-management.md | Add quiz 4.3 — vulnerability management
## [2026-05-21] write | quizzes/5.3-third-party.md | quizzes/5.3-third-party.md — 10-question quiz
## [2026-05-21] write | objectives/4.4.md | Add objective 4.4 — Security Alerting and Monitoring
## [2026-05-21] write | objectives/5.4.md | objectives/5.4.md — Compliance and Privacy written
## [2026-05-21] write | quizzes/4.4-monitoring.md | Add quiz 4.4 — security monitoring
## [2026-05-21] write | quizzes/5.4-compliance-privacy.md | quizzes/5.4-compliance-privacy.md — 10-question quiz
## [2026-05-21] write | objectives/5.5.md | objectives/5.5.md — Audits and Penetration Tests written
## [2026-05-21] write | quizzes/5.5-audits-pentests.md | quizzes/5.5-audits-pentests.md — 10-question quiz
## [2026-05-21] write | objectives/4.5.md | Add objective 4.5 — Enterprise Capabilities
## [2026-05-21] write | quizzes/practice-exam-a.md | test write to check size limit
## [2026-05-21] write | objectives/5.6.md | objectives/5.6.md — Security Awareness and Training written
## [2026-05-21] write | quizzes/4.5-enterprise-capabilities.md | Add quiz 4.5 — enterprise capabilities
