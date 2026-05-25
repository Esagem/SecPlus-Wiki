---
---

# Retroactive ✓-mark migration

One-shot migration. Open this file in Obsidian to scan every per-objective quiz log and rename any quiz whose first-try accuracy on its best attempt is ≥ 90%. Uses `app.fileManager.renameFile()` so wikilinks in `_index.md` and the objective files update automatically.

Safe to re-run — already-marked files are skipped. Delete this file once you've verified the results.

```dataviewjs
const QUIZ_DIR = "wiki/quizzes";
const LOG_DIR = "wiki/sessions/quiz-logs";
const OBJ_DIR = "wiki/objectives";
const THRESHOLD = 0.90;

const root = dv.container;
root.empty();
const style = root.createEl("style");
style.textContent = `
  .mig { font-family: var(--font-monospace, monospace); font-size: 0.9em; line-height: 1.5; padding: 14px; background: var(--background-secondary); border-radius: 6px; white-space: pre-wrap; }
  .mig .ok { color: rgb(63, 185, 80); }
  .mig .warn { color: var(--text-muted); }
  .mig .err { color: rgb(248, 81, 73); }
  .mig h3 { margin-top: 0; }
  .mig-btn { margin-top: 14px; padding: 10px 24px; border: 1px solid var(--interactive-accent); background: var(--interactive-accent); color: var(--text-on-accent); cursor: pointer; border-radius: 6px; font-size: 0.95em; font-family: inherit; font-weight: 500; }
  .mig-btn:hover { opacity: 0.85; }
  .mig-btn:disabled { opacity: 0.5; cursor: not-allowed; }
`;

const heading = root.createEl("h3", { text: "Retroactive ✓-mark — preview" });
const summary = root.createDiv({ cls: "mig" });
const runBtn = root.createEl("button", { cls: "mig-btn", text: "Apply renames" });
const runResult = root.createDiv({ cls: "mig", attr: { style: "margin-top: 14px; display: none;" } });

function parseLog(content) {
  // Return list of {solved, total, missedCount} attempts found.
  // Supports two formats:
  //   Old: "### [YYYY-MM-DD] Attempt\n- Solved: X/Y\n- Wrong attempts: N\n- Missed (first try): Q3, Q4 | _Clean sweep_"
  //   New: "### YYYY-MM-DD HH:MM — X/Y · clean sweep"
  //        "### YYYY-MM-DD HH:MM — X/Y (N wrong)\nMissed: Q3, Q4"
  const attempts = [];

  // Old format
  const oldRe = /### \[\d{4}-\d{2}-\d{2}\] Attempt\n- Solved: (\d+)\/(\d+)\n- Wrong attempts: (\d+)\n- Missed \(first try\): (.+)/g;
  for (const m of content.matchAll(oldRe)) {
    const total = parseInt(m[2]);
    const missedRaw = m[4].trim();
    const missedCount = missedRaw === "_Clean sweep_" ? 0 : missedRaw.split(",").length;
    attempts.push({ solved: parseInt(m[1]), total, missedCount });
  }

  // New format — clean sweep
  const newSweep = /### \d{4}-\d{2}-\d{2} \d{1,2}:\d{2} — (\d+)\/(\d+) · clean sweep/g;
  for (const m of content.matchAll(newSweep)) {
    attempts.push({ solved: parseInt(m[1]), total: parseInt(m[2]), missedCount: 0 });
  }

  // New format — with misses
  const newMissed = /### \d{4}-\d{2}-\d{2} \d{1,2}:\d{2} — (\d+)\/(\d+) \(\d+ wrong\)\nMissed: (.+)/g;
  for (const m of content.matchAll(newMissed)) {
    const total = parseInt(m[2]);
    const missedCount = m[3].split(",").length;
    attempts.push({ solved: parseInt(m[1]), total, missedCount });
  }

  return attempts;
}

function bestAccuracy(attempts) {
  let best = 0;
  for (const a of attempts) {
    if (!a.total) continue;
    const acc = (a.total - a.missedCount) / a.total;
    if (acc > best) best = acc;
  }
  return best;
}

const plan = []; // {quiz, newQuizPath | null, obj, newObjPath | null, acc}

const allQuizzes = app.vault.getMarkdownFiles().filter(f =>
  f.path.startsWith(QUIZ_DIR + "/") &&
  f.basename !== "_quiz-scaffold" &&
  f.basename !== "README" &&
  f.basename !== "vocab-match" &&
  f.basename !== "_retroactive-mark" &&
  !f.basename.startsWith("practice-exam") &&
  /^\d+\.\d+-/.test(f.basename.replace(/ ✓$/, ""))
);

for (const quiz of allQuizzes) {
  const cleanBase = quiz.basename.replace(/ ✓$/, "");
  const isMarked = quiz.basename.endsWith(" ✓");
  const logPath = LOG_DIR + "/" + cleanBase + ".log.md";
  const logFile = app.vault.getAbstractFileByPath(logPath);
  if (!logFile) continue;
  const content = await app.vault.read(logFile);
  const attempts = parseLog(content);
  const acc = bestAccuracy(attempts);

  if (acc < THRESHOLD) {
    plan.push({ quiz, action: "skip", reason: `${(acc * 100).toFixed(1)}% < 90%`, acc, isMarked });
    continue;
  }

  // Quiz file action
  let newQuizPath = null;
  if (!isMarked) {
    const candidate = quiz.path.replace(/\.md$/, " ✓.md");
    if (!app.vault.getAbstractFileByPath(candidate)) {
      newQuizPath = candidate;
    }
  }

  // Objective file action
  const objCode = cleanBase.split("-")[0];
  const objPlain = OBJ_DIR + "/" + objCode + ".md";
  const objMarked = OBJ_DIR + "/" + objCode + " ✓.md";
  const objFile = app.vault.getAbstractFileByPath(objPlain);
  let newObjPath = null;
  let obj = null;
  if (objFile && !app.vault.getAbstractFileByPath(objMarked)) {
    obj = objFile;
    newObjPath = objMarked;
  }

  plan.push({ quiz, newQuizPath, obj, newObjPath, acc, isMarked, action: "rename" });
}

// Render plan
const lines = [];
let willRenameQuizzes = 0;
let willRenameObjectives = 0;
let alreadyMarked = 0;
let belowThreshold = 0;

for (const item of plan) {
  if (item.action === "skip") {
    lines.push(`<span class="warn">SKIP ${item.quiz.basename}.md — ${item.reason}</span>`);
    belowThreshold++;
  } else {
    let line = `${item.quiz.basename}.md (${(item.acc * 100).toFixed(1)}%)`;
    const parts = [];
    if (item.newQuizPath) {
      parts.push(`rename → ${item.newQuizPath.split("/").pop()}`);
      willRenameQuizzes++;
    } else if (item.isMarked) {
      parts.push("quiz already ✓");
      alreadyMarked++;
    }
    if (item.newObjPath) {
      parts.push(`+ rename objective → ${item.newObjPath.split("/").pop()}`);
      willRenameObjectives++;
    }
    lines.push(`<span class="ok">${line} → ${parts.join("; ")}</span>`);
  }
}

const header = `Threshold: ≥ 90% first-try accuracy on best attempt
Quizzes to rename: ${willRenameQuizzes}
Objectives to rename: ${willRenameObjectives}
Already marked: ${alreadyMarked}
Below threshold: ${belowThreshold}
─────────────────────────────────────────────────────────`;

summary.innerHTML = header + "\n" + lines.join("\n");

if (willRenameQuizzes === 0 && willRenameObjectives === 0) {
  runBtn.disabled = true;
  runBtn.textContent = "Nothing to do";
}

runBtn.onclick = async () => {
  runBtn.disabled = true;
  runBtn.textContent = "Applying…";
  runResult.style.display = "";
  const resultLines = [];
  let okCount = 0;
  let errCount = 0;
  for (const item of plan) {
    if (item.action !== "rename") continue;
    try {
      if (item.newQuizPath) {
        await app.fileManager.renameFile(item.quiz, item.newQuizPath);
        resultLines.push(`<span class="ok">✓ renamed ${item.quiz.basename}.md → ${item.newQuizPath.split("/").pop()}</span>`);
        okCount++;
      }
      if (item.obj && item.newObjPath) {
        await app.fileManager.renameFile(item.obj, item.newObjPath);
        resultLines.push(`<span class="ok">  ✓ renamed objective ${item.obj.basename}.md → ${item.newObjPath.split("/").pop()}</span>`);
        okCount++;
      }
    } catch (e) {
      resultLines.push(`<span class="err">✗ ${item.quiz.basename}: ${e?.message || e}</span>`);
      errCount++;
    }
  }
  resultLines.push("");
  resultLines.push(`Done. ${okCount} renamed, ${errCount} errors.`);
  resultLines.push(`Wikilinks across the vault have been updated by Obsidian.`);
  resultLines.push(`Safe to delete this file (quizzes/_retroactive-mark.md) when verified.`);
  runResult.innerHTML = resultLines.join("\n");
  runBtn.textContent = "Done";
};
```

---

After running, this file can be safely deleted via Obsidian or `wiki_delete`.
