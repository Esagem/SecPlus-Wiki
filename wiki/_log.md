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
