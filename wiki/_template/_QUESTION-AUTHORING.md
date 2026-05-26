---
title: Question-Authoring Rules — Quiz & Practice-Exam Content
category: synthesis
tags: [template, authoring, quiz, practice-exam, question-design]
status: active
confidence: high
created: 2026-05-26
updated: 2026-05-26
---

# Question-Authoring Rules — Quiz & Practice-Exam Content

> Read this before authoring any question — per-objective quiz or practice exam. Each rule below comes from a specific mistake we made on the SY0-701 wiki and had to fix. The goal is questions that actually test understanding, not pattern-matching the giveaways.

## The single most important rule: length parity

**Every option in a multiple-choice question must be roughly the same length.** Same word count, same sentence count, same level of detail. If you can pick the correct answer by skimming and choosing the longest one, the question is broken.

### What this looks like when it's wrong

The SY0-701 wiki's first 28 quizzes (1.1 through 4.4) were authored with explanatory correct answers and terse wrong ones. Example from the 4.4 monitoring bank (left as a deliberate reference of the bad style):

> Q: How does EDR differ from traditional AV?
> - A. EDR adds behavioral analysis, automated response (isolation, rollback), and root-cause analysis on top of signature detection
> - B. EDR is cheaper
> - C. EDR is faster
> - D. EDR doesn't need updates

A is 22 words. B/C/D are 3-5 words each. Even without reading the question you can pick A with 95% confidence. The question doesn't test EDR knowledge — it tests reading speed.

### What this looks like when it's right

Same content, balanced:

> Q: How does EDR differ from traditional AV?
> - A. EDR adds behavioral analysis, automated response, and root-cause analysis
> - B. EDR scans faster than signature-based AV
> - C. EDR replaces firewalls and IDS in a unified product
> - D. EDR runs entirely without endpoint agents

All four are 8-11 words. Each wrong option is a plausible-sounding misconception. Now the question tests whether you know what EDR actually does.

### Concrete authoring discipline

1. **Write the correct answer first** at the length you naturally would. Then rewrite it shorter — strip qualifiers, drop the "and X, Y, and Z" enumerations, keep the mechanism.
2. **Then write distractors at that same length.** Each one should sound plausible to someone with shallow knowledge. Avoid "obviously wrong" filler.
3. **Eyeball it.** Look at the four options as a block. If one stands out for length, fix it before moving on.
4. **The "longest = correct" tell is the most common one.** "Most detailed," "most qualified" ("usually," "often," "in most cases"), and "uses the most jargon" are close seconds — they all mean the author put more care into the correct answer than the wrong ones.

The fix on quizzes 4.5–5.6 in the SY0-701 wiki was applied as a batch of `wiki_edit` calls with changelog entries like `balance answer-choice lengths in Q4, Q15 (remove length-as-tell)`. The same approach works for any wiki built from this template.

## Other length/style tells to avoid

| Tell | Pattern | Fix |
|------|---------|-----|
| **Hedge words asymmetry** | Correct answers say "usually," "often," "may," "can"; wrong answers say "always," "never" | Either remove hedges from correct answers, or add equivalent hedges to a wrong answer |
| **Jargon asymmetry** | Correct answer uses the exact technical term; distractors use generic words | Use the technical term in at least one wrong answer too |
| **Specificity asymmetry** | Correct answer names a specific protocol/standard; wrong answers say "a protocol" | Distractors should name plausibly-wrong specific things, not vague ones |
| **Sentence-structure echo** | Correct answer mirrors the question stem's phrasing | Reword to break the echo |
| **All-of-the-above / None-of-the-above** | Lazy distractor that degrades the question | Don't use these. They're a tell that the author ran out of plausible wrong answers |

## Distractor design

### Plausibility

Each wrong answer should be a misconception someone could actually hold. Three kinds of good distractors:

- **The adjacent concept.** Answer is "SAML"; distractor is "OAuth." Both are federation-ish, requires knowing the difference.
- **The almost-right.** Answer is "MAC labels are admin-assigned"; distractor is "MAC labels are user-assigned." One-word swap that tests whether you actually know the model.
- **The plausible-but-wrong fact.** Answer is "ECC 256-bit ≈ RSA 3072-bit"; distractor is "ECC 256-bit ≈ RSA 2048-bit." Specific, sounds reasonable, requires you to actually remember the ratio.

Bad distractors:

- Obviously absurd ("EDR is a type of pasta")
- Unrelated to the topic
- A misconception so wild that nobody would seriously hold it

### No distractor reuse across questions in the same quiz

If "Single point of failure" appears as a wrong answer in Q3, don't use it as a wrong answer in Q7. Pattern-matching kicks in: the test-taker remembers seeing it before, knows it was wrong then, eliminates it now without thinking. The SY0-701 4.7 automation quiz had this problem with "Single point of failure," "Continuous deployment," and "Technical debt" each appearing as wrong answers in 3+ questions. Lesson: when authoring a 10-15-question bank, keep a running set of distractors used and refuse to repeat.

### Distractors should explain themselves (the `w` field)

Every option carries a `w` (explanation) field in the scaffold's data shape. For wrong answers, the explanation should say *why it's wrong*, not just restate that it's wrong. "OAuth is for authorization delegation, not federated identity assertion — that's SAML's job" beats "Incorrect."

## Question stem rules

### Be unambiguous about what's being asked

If the answer hinges on a particular framing, make the framing explicit. "Which of these would the **attacker** do first?" is better than "Which is the first step?" — the latter leaves the test-taker guessing which actor's perspective matters.

### Avoid double-negatives and "EXCEPT" stems

"Which of the following is NOT a benefit of MFA?" works only if **NOT** is visually distinct (bold or CAPS) and the question stem is otherwise simple. Use these sparingly — at most one per quiz. Most "which is NOT" questions can be rewritten as "which is" with the original correct answer as a wrong answer.

### Multi-select must be flagged

The scaffold supports multi-select MCQs (questions with multiple correct options). When you use them:

- The scaffold auto-detects multi-correct (any question where >1 option has `c: true`) and shows a `Select N` tag in the UI.
- Add a clear instruction in the stem too: "Select TWO." Don't make the user discover the multi-correct nature by reading the tag.
- Use sparingly. Multi-select is harder and slower than single-select; overusing it fatigues the test-taker and the format isn't representative of most certification exams.
- For multi-correct, the explanation (`w`) attached to the *first* correct option is shown as the canonical explanation. Either write it to cover all correct picks, or duplicate the explanation across them.

## Practice-exam-specific rules

### Domain weighting matches the official blueprint

When authoring a full-length practice exam, the per-domain question count should mirror the official exam blueprint. For SY0-701 that's 12% / 22% / 18% / 28% / 20% across Domains 1–5, which works out to roughly 15 / 18 / 15 / 25 / 12 MCQs in an 85-question exam. Put this in `synthesis/exam-blueprint.md` for your subject and reference it when building practice exams.

### PBQs are a different shape

Practice exams should include performance-based questions (PBQs), not just MCQs. The scaffold ships with two PBQ types:

- **`match`**: assign each item to one of N options. Use for "match the attack to its category," "match the protocol to its port," etc.
- **`firewall`**: multi-field stateful firewall rules. Specific to networking subjects; not all subjects need this.

Other useful PBQ shapes you may want to add (each requires extending the scaffold):

- **categorizer**: drag items into bins. Variant of match where the bins are explicit.
- **sequencer**: order N steps correctly. Use for incident-response phases, TLS handshake steps, etc.
- **fill-in**: type a specific value. Use sparingly — typo-sensitive.

When introducing a new PBQ type, add the render branch and the grade branch in the scaffold (not in the individual exam file).

### Rotate PBQ topics across exams

If Exam A has PBQs on PKI components, Exam B should pick different objectives for its PBQs. The SY0-701 wiki rotated through: log triage, access control models, cloud shared responsibility, password attacks, and firewall scenarios across exams A/B/C/D/E. The point is to surface unknown-unknowns across multiple objectives rather than re-drilling the same five.

### Authoring at scale — the chunked-build pattern

A full-length practice exam with 85 MCQs + 5 PBQs is ~50–100 KB of question data. That doesn't fit cleanly into one `wiki_write` or `wiki_edit` call.

The pattern that worked on SY0-701:

1. **Author the data offline** in a Python script that produces a JSON file with the questions array and PBQs array.
2. **`wiki_write` a skeleton page** with the front matter, intro prose, the `dataviewjs` bootstrap, and a sentinel `__INSERT_QUESTIONS_HERE_DO_NOT_EDIT__` where the questions array goes.
3. **`wiki_edit` to replace the sentinel with the questions array**, broken into 2–4 chunks if the array is large. Each chunk replaces the previous sentinel and adds a new one for the next chunk, until the last chunk replaces the sentinel with the closing `];`.

This keeps the editing tool calls under their size limits and gives you a clean transactional commit point per chunk.

## Vocab-question link

If the wiki has a vocab synthesis page (`synthesis/vocab.md`), questions that test a specific term should reference it. The scaffold's per-question `topic` field can include the term and the explanation field can link to the vocab entry. This makes the quiz a discovery path back to the canonical definitions.

## Source attribution

Every question should reference its source. The scaffold's `url` field is shown in the report card as a "Reference" link. For SY0-701 these were Professor Messer video URLs; for another subject they'd be textbook chapters, official documentation, or RFC references. Always populate `url`. The test-taker who misses a question needs to know where to read up.

## Quality checks before shipping a quiz bank

Before considering a quiz file done:

- [ ] All options in each question are within ~30% of each other in word count
- [ ] No distractor appears in more than one question in the same bank
- [ ] Each wrong answer's `w` explains *why it's wrong*, not just that it is
- [ ] Each question has a `topic` field and a `url` field
- [ ] Multi-select questions are visually marked AND mentioned in the stem
- [ ] No "all of the above" / "none of the above" anywhere
- [ ] At most one negative-stem ("which is NOT") in the bank, with NOT visually emphasized
- [ ] Domain field set (`domain: "1"`, `"2"`, etc.) for the per-domain report breakdown

For practice exams, additionally:

- [ ] Domain distribution matches the official blueprint percentages
- [ ] PBQs cover different objectives from the other practice exams in the wiki
- [ ] MCQ count and numbering match the scaffold's expectations (default: MCQs start at `n: 6`, PBQs use `n: 1–5`)

## Related

- [[_quiz-scaffold|_quiz-scaffold.md]] — the engine that renders these questions
- [[_practice-exam-scaffold|_practice-exam-scaffold.md]] — the practice-exam engine
- [[STUDY|STUDY.md §5.3]] — how quizzes fit into the broader study workflow
