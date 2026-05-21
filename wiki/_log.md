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
