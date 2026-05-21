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
