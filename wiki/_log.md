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
## [2026-05-21] write | quizzes/5.6-awareness.md | quizzes/5.6-awareness.md — 10-question quiz
## [2026-05-21] write | objectives/4.6.md | Domain 4.6 — Identity and Access Management objective page
## [2026-05-21] write | quizzes/4.6-iam.md | Domain 4.6 — IAM quiz (12 questions)
## [2026-05-21] write | objectives/4.7.md | Domain 4.7 — Automation and orchestration objective page
## [2026-05-21] write | quizzes/4.7-automation.md | Domain 4.7 — Automation quiz (10 questions)
## [2026-05-21] write | objectives/4.8.md | Domain 4.8 — Incident response objective page
## [2026-05-21] write | quizzes/4.8-incident-response.md | Domain 4.8 — Incident response quiz (12 questions)
## [2026-05-21] write | objectives/4.9.md | Domain 4.9 — Log data sources objective page
## [2026-05-21] write | quizzes/4.9-log-data.md | Domain 4.9 — Log data quiz (10 questions)
## [2026-05-22] write | quizzes/practice-exam-a.md | Practice Exam A skeleton (questions injected next via wiki_edit chunks)
## [2026-05-22] edit | quizzes/practice-exam-a.md | insert questions chunk 1/4 (A6–A27)
## [2026-05-22] edit | quizzes/practice-exam-a.md | insert questions chunk 2/4 (A28–A49)
## [2026-05-22] edit | quizzes/practice-exam-a.md | insert questions chunk 3/4 (A50–A72)
## [2026-05-22] edit | quizzes/practice-exam-a.md | insert questions chunk 4/4 (A73–A90) — completes Practice Exam A
## [2026-05-22] edit | quizzes/practice-exam-a.md | Center option button content vertically to match quiz styling
## [2026-05-22] write | synthesis/vocab.md | Expand vocab with 1.2/1.3/1.4 terms; convert to interactive search/filter/sort table
## [2026-05-22] edit | quizzes/practice-exam-a.md | Add PBQs A1–A5 as interactive widgets at top of Practice Exam A; unified grading and report card
## [2026-05-22] write | synthesis/vocab.md | append Domain 2 vocab — 2.1–2.5 (~140 entries: threat actors, vectors, vulnerabilities, malicious activity, mitigation)
## [2026-05-22] edit | synthesis/vocab.md | append Domain 3 vocab — 3.1–3.4 (~128 entries: architecture, infrastructure, data protection, resilience)
## [2026-05-22] write | quizzes/practice-exam-b.md | Create Practice Exam B — 5 original PBQs + 85 original MCQs covering SY0-701 objectives, same widget harness as Exam A. Skeleton with sentinel for chunked MCQ insertion.
## [2026-05-22] edit | quizzes/practice-exam-b.md | Insert MCQs B6-B37 (chunk 1/3) into Practice Exam B
## [2026-05-22] edit | quizzes/practice-exam-b.md | Insert MCQs B38-B72 (chunk 2/3) into Practice Exam B
## [2026-05-22] edit | quizzes/practice-exam-b.md | Insert MCQs B73-B90 (chunk 3/3) — completes Practice Exam B
## [2026-05-22] edit | synthesis/vocab.md | Domain 4 vocab — append 4.1 through 4.9 blocks (~180 terms)
## [2026-05-22] write | quizzes/practice-exam-c.md | Create Practice Exam C — 5 original PBQs (rotated topics: log triage, access-control models, cloud shared responsibility, password attack ID, 3-tier firewall) + 85 original MCQs, same widget harness as A and B. Skeleton with sentinel for chunked MCQ insertion.
## [2026-05-22] edit | quizzes/practice-exam-c.md | Insert MCQs C6-C38 (chunk 1/3) into Practice Exam C
## [2026-05-22] edit | quizzes/practice-exam-c.md | Insert MCQs C39-C73 (chunk 2/3) into Practice Exam C
## [2026-05-22] edit | quizzes/practice-exam-c.md | Insert MCQs C74-C90 (chunk 3/3) — completes Practice Exam C
## [2026-05-22] write | quizzes/practice-exam-b.md | Add Practice Exam B (custom community version) — skeleton; chunks to follow
## [2026-05-22] edit | quizzes/practice-exam-b.md | Practice Exam B: insert MCQs B6-B35
## [2026-05-22] edit | synthesis/vocab.md | Append Domain 5 vocab blocks (5.1-5.6)
## [2026-05-22] edit | quizzes/practice-exam-b.md | Practice Exam B: insert MCQs B36-B65
## [2026-05-22] edit | quizzes/practice-exam-b.md | Practice Exam B: insert MCQs B66-B90
## [2026-05-22] edit | quizzes/practice-exam-b.md | Practice Exam B: insert PBQs B1-B5
## [2026-05-22] write | quizzes/practice-exam-c.md | Add Practice Exam C — initial write (questions 6–55, rest to follow)
## [2026-05-22] edit | quizzes/practice-exam-c.md | Practice Exam C — append questions 26–60
## [2026-05-22] edit | quizzes/practice-exam-c.md | Practice Exam C — append questions 56–90
## [2026-05-22] edit | quizzes/practice-exam-c.md | Practice Exam C — add 5 PBQs
## [2026-05-22] edit | quizzes/practice-exam-c.md | Practice Exam C — install interactive grading widget (final piece)
## [2026-05-22] edit | quizzes/practice-exam-a.md | Practice Exam A: persist results to Misses log on grade
## [2026-05-23] edit | quizzes/practice-exam-b.md | Practice Exam B: persist results to Misses log on grade
## [2026-05-23] edit | quizzes/practice-exam-c.md | Practice Exam C: persist results to Misses log on grade
## [2026-05-23] edit | quizzes/practice-exam-d.md | Practice Exam D: persist results to Misses log on grade
## [2026-05-23] edit | quizzes/practice-exam-e.md | Practice Exam E: persist results to Misses log on grade
## [2026-05-23] delete | concepts/README.md | lint: drop concepts/ — distillation will live on objective pages instead
## [2026-05-23] edit | quizzes/1.1-controls.md | Quiz 1.1: persist misses to log on completion
## [2026-05-23] write | STUDY.md | lint: schema rewrite — drop concepts; allow mastery on objectives; add practice-exam category; exempt transcripts from FM
## [2026-05-23] write | _index.md | lint: rebuild _index.md — full objective + quiz tables, drop concepts section, refresh phase copy
## [2026-05-23] write | README.md | lint: add proper front matter to README.md; drop concepts reference
## [2026-05-23] write | objectives/README.md | lint: drop concepts wording; reconcile title column with each objective page's actual title
## [2026-05-23] status | quizzes/practice-exam-d.md | lint: add tags to practice-exam-d
## [2026-05-23] status | quizzes/practice-exam-e.md | lint: add tags to practice-exam-e
## [2026-05-23] write | synthesis/lint-report.md | lint: append 2026-05-23 dated pass — 28 objectives, 33 quizzes, fixes applied + remaining items
## [2026-05-23] edit | quizzes/1.1-controls.md | fix persistResults SyntaxError; switch to sidecar log file to preserve quiz state on submit
## [2026-05-23] write | sessions/quiz-logs/1.1-controls.log.md | move quiz log to sessions/quiz-logs/
## [2026-05-23] delete | quizzes/1.1-controls.log.md | remove old log location; moved to sessions/quiz-logs/
## [2026-05-23] write | quizzes/1.1-controls.md | rewrite 1.1 quiz: localStorage state, reset button, text wrap, log moved to sessions/quiz-logs/
## [2026-05-23] edit | quizzes/1.1-controls.md | restore vertical centering and fix long-answer wrap: flex container + inner span with min-width:0
## [2026-05-23] edit | quizzes/1.1-controls.md | use div instead of button for answer options (Chromium button quirk blocked content-driven height growth); add box-sizing border-box
## [2026-05-23] write | quizzes/vocab-match.md | add interactive vocab matching trainer; loads vocab from synthesis/vocab.md at runtime, weighted spaced-repetition selection, localStorage progress
## [2026-05-23] edit | _index.md | link new vocab match trainer from master index
## [2026-05-23] edit | quizzes/1.1-controls.md | remove state.persisted gate so auto-fire works on every completion; add Submit button as explicit backup; add console.log diagnostics
## [2026-05-23] edit | quizzes/vocab-match.md | fix vocab loader to use Obsidian vault API instead of unreliable dv.io.load
## [2026-05-23] edit | quizzes/1.1-controls.md | make submit button always visible; add visible save status indicator
## [2026-05-23] edit | quizzes/vocab-match.md | fix text wrapping on tiles and review rows
## [2026-05-23] edit | quizzes/1.1-controls.md | switch persistResults from adapter.* (raw disk) to vault.* (TFile-based, properly notifies Obsidian index)
## [2026-05-23] edit | quizzes/vocab-match.md | fix stats wrap and timer flicker (clean up leaked intervals across dataviewjs reruns)
## [2026-05-23] edit | quizzes/1.1-controls.md | hardcode log path; use explicit wiki link path; remove getActiveFile dependency
## [2026-05-23] edit | quizzes/1.1-controls.md | prepend wiki/ to LOG_DIR and LOG_PATH so dataviewjs writes land in the same file my wiki tools manage
## [2026-05-23] edit | quizzes/vocab-match.md | remove timer entirely — was flickering across dataviewjs reruns and not core to the trainer
## [2026-05-23] edit | quizzes/vocab-match.md | move progress storage from localStorage to sessions/vocab-match-state.json (syncs with vault, survives reinstalls)
## [2026-05-23] write | quizzes/1.3-change-management.md | apply v6 quiz template: localStorage state, reset, submit button, sidecar log at wiki/sessions/quiz-logs/
