---
title: Ingestion — Raw Source Material
category: ingestion
tags: [ingestion, readme]
status: active
confidence: high
created: YYYY-MM-DD
updated: YYYY-MM-DD
---

# Ingestion — Raw Source Material

> **STARTER FILE.** Copy this to `ingestion/README.md` in the new wiki. Delete this header block once placed.

Raw inputs the wiki is built from: video transcripts, PDFs, web scrapes, aggregated notes. Everything in this folder is **immutable** once ingested — distillation happens in `objectives/`, not here.

See [[_INGESTION|_INGESTION.md]] (at wiki root) for the full strategy and conventions.

## Subfolders

| Folder | Source type |
|--------|-------------|
| [[ingestion/transcripts/README\|transcripts/]] | Video captions, lecture transcripts |
| [[ingestion/pdfs/README\|pdfs/]] | Study guide and practice test PDFs (extracted text) |
| [[ingestion/web/README\|web/]] | Scraped articles, forum threads, Reddit posts |
| [[ingestion/notes/README\|notes/]] | Study tips, hand-written notes, summaries |

## Workflow (summary)

1. Identify a source
2. Convert to markdown
3. Place in the appropriate subfolder with descriptive filename
4. Add front matter (`source_type`, `source`, `captured`, `covers`)
5. The LLM reads from here when building objective pages — never edit source after ingestion

Full detail in [[_INGESTION|_INGESTION.md §Ingestion workflow]].

## Front matter

Every ingested file gets:

```yaml
---
title: <Source title>
category: ingestion
source_type: <transcript|pdf|web|notes>
source: <URL or citation>
captured: YYYY-MM-DD
covers: [<topic-ids>]   # optional
status: active
---
```

For `source_type: web`, add `quality: <high|medium|low>` to flag forum content that may need verification before propagating to `objectives/`.

## What this folder is *not*

- Not where distillation happens. The LLM writes distilled material to `objectives/`.
- Not a public dumping ground. Curate aggressively — bad sources poison downstream content.
- Not editable after ingestion. If a source is wrong, retire it (`status: retired`) and re-ingest a replacement.
