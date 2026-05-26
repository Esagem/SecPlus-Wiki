---
title: Example Quiz — Hashing Functions
category: quiz
tags: [quiz, example, hashing]
status: active
confidence: high
covers: [example]
created: 2026-05-26
updated: 2026-05-26
---

# Example Quiz — Hashing Functions

> **EXAMPLE FILE.** This is a complete, working quiz file showing the structure new quizzes should follow. Five questions on hashing — picked because the topic is universal across security, networking, and general CS subjects. Copy this as a starting point, replace the questions with your own content, change `baseName` to match the new filename, and move the file out of `_template/examples/` when ready to use.
>
> Things to notice:
> - All options are within ~30% of each other in word count (length parity, per `_QUESTION-AUTHORING.md`)
> - Distractors are plausible misconceptions, not absurd fillers
> - Each wrong answer's `w` explains *why* it's wrong, not just "incorrect"
> - Q3 is a multi-select with `Select TWO` in the stem
> - Every question has a `topic` field and a `url` for source attribution
> - The scaffold-loader bootstrap uses the CRLF-tolerant regex and dual-path lookup

Five questions on cryptographic hash functions, from [[objectives/example|Objective: Example]].

```dataviewjs
const baseName = "example-quiz";  // matches filename without .md or trailing ✓
const questions = [
  {
    q: "What is the primary property a cryptographic hash function provides?",
    topic: "Hash function — integrity",
    url: "https://en.wikipedia.org/wiki/Cryptographic_hash_function",
    opts: [
      { t: "A fixed-size digest that detects any change to the input", c: true,
        w: "Correct. A single bit flip in the input changes the digest unpredictably — that's how integrity gets verified." },
      { t: "A reversible transformation that hides the original data", c: false,
        w: "Reversible transformations are encryption, not hashing. Hashes are one-way by design." },
      { t: "A compressed representation that reduces storage size", c: false,
        w: "Compression preserves the ability to recover the original; hashing destroys that ability." },
      { t: "A signature that proves who created the data", c: false,
        w: "Proof of origin requires a private key (digital signature). A bare hash says nothing about who made it." },
    ],
  },
  {
    q: "Which is the KEY difference between hashing and encryption?",
    topic: "Hashing vs. encryption",
    url: "https://en.wikipedia.org/wiki/Cryptographic_hash_function",
    opts: [
      { t: "Hashing is one-way; encryption is reversible with the right key", c: true,
        w: "Correct. Hashing intentionally destroys the ability to recover the input. Encryption preserves it for anyone holding the key." },
      { t: "Hashing uses public keys; encryption uses symmetric keys", c: false,
        w: "Both can use various key models. The asymmetric/symmetric distinction is orthogonal to hashing vs. encryption." },
      { t: "Hashing is slower than encryption for the same input size", c: false,
        w: "Modern hashes are typically faster than encryption for the same data size." },
      { t: "Hashing requires a salt; encryption does not", c: false,
        w: "Salts are used with hashing in some contexts (passwords) but aren't required by the primitive itself." },
    ],
  },
  {
    q: "Which TWO of the following are required properties of a cryptographic hash function? **Select TWO.**",
    topic: "Cryptographic hash properties",
    url: "https://en.wikipedia.org/wiki/Cryptographic_hash_function#Properties",
    opts: [
      { t: "Pre-image resistance (hard to find input from digest)", c: true,
        w: "Correct. Given h, finding any m such that hash(m) = h must be computationally infeasible." },
      { t: "Collision resistance (hard to find two inputs that hash equal)", c: true,
        w: "Correct. Finding any m1 ≠ m2 with hash(m1) = hash(m2) must be computationally infeasible." },
      { t: "Variable digest size based on input length", c: false,
        w: "Cryptographic hashes produce a fixed-size digest regardless of input size — that's a defining property, not the opposite." },
      { t: "Encryption-style reversibility with a known key", c: false,
        w: "Hashes are one-way by design. Reversibility would defeat the purpose." },
    ],
  },
  {
    q: "Why does a hash collision matter in practice?",
    topic: "Hash collisions",
    url: "https://en.wikipedia.org/wiki/Collision_(computer_science)",
    opts: [
      { t: "An attacker can substitute a malicious file for a known-good one undetected", c: true,
        w: "Correct. If two files share a hash, integrity checks that rely on that hash can be fooled — this is why MD5 and SHA-1 are deprecated." },
      { t: "The hash function refuses to produce output for colliding inputs", c: false,
        w: "Hash functions don't detect collisions; they happily produce the same output. The collision itself is what's exploited." },
      { t: "The computer's memory becomes corrupted by duplicate digests", c: false,
        w: "Memory is unaffected by hash collisions — this is about cryptographic guarantees, not system stability." },
      { t: "Subsequent hash computations slow down significantly", c: false,
        w: "Performance isn't affected by collisions. The function is stateless." },
    ],
  },
  {
    q: "What happens when you hash the same input twice with the same algorithm?",
    topic: "Hash determinism",
    url: "https://en.wikipedia.org/wiki/Cryptographic_hash_function",
    opts: [
      { t: "You get exactly the same digest both times", c: true,
        w: "Correct. Hash functions are deterministic — same input, same digest, always. That's what makes them useful for verification." },
      { t: "You get a different digest because hashes include a timestamp", c: false,
        w: "Pure hashes don't include time. HMACs and signature schemes might, but the bare hash primitive doesn't." },
      { t: "You get a different digest because of internal randomization", c: false,
        w: "Hash functions don't randomize. If they did, you couldn't verify integrity by re-hashing." },
      { t: "The second call is rejected as a duplicate operation", c: false,
        w: "Hash functions are stateless — they don't remember previous calls or refuse repeats." },
    ],
  },
];

// Bootstrap — load the shared scaffold
try {
  const _scaffoldFile =
    app.vault.getAbstractFileByPath("wiki/quizzes/_quiz-scaffold.md") ||
    app.vault.getAbstractFileByPath("quizzes/_quiz-scaffold.md");
  if (!_scaffoldFile) throw new Error("Scaffold not found at wiki/quizzes/_quiz-scaffold.md or quizzes/_quiz-scaffold.md");
  const _src = await app.vault.read(_scaffoldFile);
  const _m = _src.match(/```javascript[ \t]*\r?\n([\s\S]*?)\r?\n[ \t]*```/);
  if (!_m) throw new Error("Could not extract scaffold JS code block");
  new Function("questions", "baseName", "dv", "app", "window", _m[1])(questions, baseName, dv, app, window);
} catch (e) {
  console.error("[quiz] scaffold load failed:", e);
  const errDiv = dv.container.createEl("div");
  errDiv.style.cssText = "color: var(--text-error); padding: 12px; border: 1px solid var(--text-error); border-radius: 6px;";
  errDiv.setText("Quiz scaffold failed to load: " + (e?.message || e));
}
```

---

_Attempt history is appended to [[wiki/sessions/quiz-logs/example-quiz.log|wiki/sessions/quiz-logs/example-quiz.log]] each time you complete the quiz. Hit Reset to clear progress and start over (the log is kept)._
