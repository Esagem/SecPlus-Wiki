---
title: Source Ingestion — Strategy and Conventions
category: synthesis
tags: [template, ingestion, sources]
status: active
confidence: high
created: 2026-05-26
updated: 2026-05-26
---

# Source Ingestion — Strategy and Conventions

> Read this before pulling any external material into the wiki. Ingestion is the bridge between outside-world sources and the wiki's distilled study layer. Get this layer right and the rest of the wiki has a solid foundation; get it sloppy and every downstream piece (objective pages, quizzes, vocab) inherits the noise.

## Two principles

1. **Raw sources are immutable once ingested.** The LLM reads from `ingestion/` and writes to `objectives/`, `synthesis/`, etc. It never edits the source. If a source is wrong or outdated, retire it (`status: retired`) and ingest a replacement; don't rewrite history.
2. **Quality > completeness.** Five well-attributed, high-signal sources distilled carefully will outperform fifty noisy dumps. Curate aggressively. Reddit threads, forum posts, and aggregated notes especially require triage — most of what's out there is restated common knowledge or outright wrong.

## Folder layout

```
ingestion/
├── README.md
├── transcripts/    # video captions, lecture transcripts (text)
├── pdfs/           # study guide and practice test PDFs (extracted text + originals)
├── web/            # scraped articles, forum threads, Reddit posts (text)
└── notes/          # study tips, hand-written notes, aggregated summaries (text)
```

Each subfolder has its own `README.md` documenting conventions specific to that source type.

## Source types

### transcripts/

**What goes here.** Video lecture transcripts — YouTube auto-captions, Coursera/Pluralsight downloads, conference talks, podcast transcripts.

**How to obtain.**
- YouTube auto-captions: `yt-dlp --write-auto-sub --skip-download --sub-format vtt <url>`, then clean up with a script that strips timestamps and merges fragments
- Paid platforms: use the platform's transcript export if available; otherwise transcribe via Whisper or similar
- Conference talks: often have official transcripts; otherwise Whisper on the audio

**Filename.** Descriptive and sortable: `section-1.4-cryptography.md`, `prof-messer-tls-deep-dive.md`. Include enough context that the file makes sense out of folder.

**Front matter.**
```yaml
---
title: <Source title>
category: ingestion
source_type: transcript
source: <URL or platform reference>
captured: YYYY-MM-DD
covers: [<topic-ids>]   # optional, fill if known at ingestion time
status: active
---
```

**Body.** Markdown. Section headers (`## `) marking video chapters or speaker changes if available. Keep the original phrasing — distillation happens in `objectives/`, not here. If auto-caption noise is significant (filler words, misheard terms), light cleanup is fine; bulk rewrites are not.

### pdfs/

**What goes here.** Study guide PDFs (Messer's notes, Sybex, Pearson, etc.), practice test PDFs, official spec PDFs, vendor whitepapers. Both the extracted markdown text AND, where licensing allows, the original PDF.

**How to obtain.**
- For commercial study guides you've purchased: extract text via `pdfplumber`, `pdfminer`, or `pandoc`. Quality varies — tabular content especially may need manual cleanup
- For practice tests in PDF form: the Q&A structure usually extracts cleanly with `pdfplumber` plus a Q/A regex pass
- Official specs (NIST, RFCs, vendor docs): often have HTML versions that scrape better than the PDF

**Filename.** Identify the source: `messer-sy0-701-study-guide-domain-3.md`, `sybex-aws-saa-ch7-storage.md`, `nist-sp-800-171-rev2.md`. If you have both the PDF and the extracted markdown, name them the same with different extensions.

**Front matter.**
```yaml
---
title: <Book/Doc title> — <Chapter/Section>
category: ingestion
source_type: pdf
source: <citation: author, title, edition, page range>
source_url: <if publicly available, otherwise omit>
captured: YYYY-MM-DD
covers: [<topic-ids>]
status: active
---
```

**Body.** The extracted text. Preserve heading structure from the source. If the extraction mangled tables or formulas, fix those — the LLM reads this, not the original PDF.

**Copyright.** Material from books you've purchased is for personal study use. **Do not commit copyrighted text to public repositories.** If the wiki repo is public, keep `pdfs/` content limited to extractive notes (page references, paraphrases, your own annotations) rather than verbatim chapter text. For wikis stored privately, the full extracted text is fine for personal use.

### web/

**What goes here.** Reddit threads, Stack Exchange answers, blog posts, forum discussions, study-group summaries, anything pulled off the web that isn't a video transcript or a PDF.

**How to obtain.**
- Reddit: `praw` or just View Source → save as markdown. Capture the thread URL, the date pulled, the OP, and the top N comments
- Stack Exchange: the question + accepted answer + top 1-2 alternative answers is the usable unit
- Blog posts: Pocket / Instapaper / Readwise Reader exports work, or browser "Save as Markdown" extensions

**Filename.** Source platform + date + topic: `reddit-2026-04-15-tls-handshake-walkthrough.md`, `stackexchange-2026-03-22-mac-vs-dac.md`, `blog-messer-2025-12-01-iam-deep-dive.md`. The platform tag lets you sort by source when triaging.

**Front matter.**
```yaml
---
title: <Thread or post title>
category: ingestion
source_type: web
source: <platform>
source_url: <permalink>
author: <OP / blog author / username>
captured: YYYY-MM-DD
covers: [<topic-ids>]
status: active
quality: <high|medium|low>   # optional but useful for forum content
---
```

**Body.** The relevant content, lightly formatted. For Reddit threads: the OP plus the top few helpful comments — not the whole thread. For Stack Exchange: question + answer(s) you're keeping. Include a clear `>` block quote marker around the original content to distinguish it from your own annotations.

**Triage rule.** Forum content frequently contains **confidently-stated wrong answers**. Tag low-quality sources with `quality: low` so the LLM knows to verify their claims against another source before propagating to `objectives/`.

### notes/

**What goes here.** Study tips, exam-day strategies, hand-written notes you've typed up, summaries from study group sessions, your own brain-dumps after working a problem, anything that's not a third-party source but informs the wiki.

**Filename.** Descriptive: `exam-cram-day-of-tips.md`, `pbq-strategy-2026-04-30.md`, `my-notes-on-ipsec-modes.md`.

**Front matter.**
```yaml
---
title: <Note title>
category: ingestion
source_type: notes
source: self    # or "study group: <name>" or similar
captured: YYYY-MM-DD
covers: [<topic-ids>]
status: active
---
```

**Body.** Prose, lists, tables, whatever fits the content. These are *your* working notes, less formal than objective pages but more durable than chat history.

## Ingestion workflow

1. **Identify a source.** Don't ingest indiscriminately — every source you add becomes context the LLM has to weigh. Ask: does this add something the existing ingestion layer doesn't have?
2. **Convert to markdown.** Use the tooling appropriate to the source type (above). Preserve structure (headings, lists, tables, code blocks).
3. **Place in the correct subfolder** with the right filename.
4. **Add front matter** including `source`, `captured`, and `covers` if known.
5. **Reference from objective pages** when distilling. The objective page's `## Source` section is where you cite which ingestion files informed its content.

## What to do when sources conflict

Different sources will say different things — especially commercial study guides vs forum posts, or two practice tests on the same objective. When you spot a contradiction during distillation:

- Note the conflict in the objective page (a short paragraph: "Source A says X, source B says Y; the correct answer per the official spec is Z")
- Lower the `confidence:` on the affected objective until you've resolved it
- If the conflict surfaces a learning question, add it to `synthesis/open-questions.md` for follow-up
- Don't silently pick one side and discard the other — explicit contradictions are exam-bait

## Tooling pointers

A few tools that have been useful, none required:

- **pandoc** — universal document converter (PDF, DOCX, HTML, MD, etc.)
- **pdfplumber** / **pdfminer.six** — Python PDF text extraction with table support
- **yt-dlp** — YouTube and many other video platforms; supports auto-caption downloads
- **Whisper** (OpenAI's open model) — local audio-to-text for videos without captions
- **praw** — Python Reddit API wrapper for thread capture
- **Readability.js** / **Mercury Parser** — strip web articles to their core content
- **Obsidian web-clipper** browser extension — manual single-page web capture

## Anti-patterns

- **Ingesting verbatim copyright-flagged content into a public repo.** Use citations and paraphrase summaries for public-facing wikis.
- **Dumping forum content without triage.** Bad answers infect the wiki.
- **Re-ingesting the same source under two names.** Check `ingestion/<subfolder>/` first.
- **Editing the source after ingestion.** Retire and re-ingest if needed.
- **Skipping front matter "because it's just raw source."** The front matter is what makes the source searchable and traceable from `objectives/`.

## Related

- [[STUDY|STUDY.md §5.1]] — distillation workflow that reads from `ingestion/` and writes to `objectives/`
- [[_QUESTION-AUTHORING|_QUESTION-AUTHORING.md]] — when authoring quiz questions, the source attribution (`url` field) should usually point back to an ingestion file or its original URL
