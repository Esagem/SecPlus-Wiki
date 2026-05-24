
# Quiz Scaffold

Shared rendering and persistence engine for SY0-701 objective quizzes. Each quiz file at `quizzes/<name>.md` defines its own `questions` array and `baseName`, then loads and runs the JavaScript code block below via `dataviewjs`.

Do not edit per-quiz content here — edit the individual quiz file. This file is the engine.

## Scaffold source

```javascript
const LOG_PATH = "wiki/sessions/quiz-logs/" + baseName + ".log.md";
const LOG_DIR = "wiki/sessions/quiz-logs";
const STATE_KEY = "claude-quiz-state:wiki/quizzes/" + baseName + ".md";
const file = app.workspace.getActiveFile();

function loadState() {
  try {
    const raw = window.localStorage.getItem(STATE_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (!s || !Array.isArray(s.perQ) || s.perQ.length !== questions.length) return null;
    return s;
  } catch { return null; }
}
function saveState(s) {
  try { window.localStorage.setItem(STATE_KEY, JSON.stringify(s)); }
  catch (e) { console.error("Quiz state save failed:", e); }
}
function clearState() { window.localStorage.removeItem(STATE_KEY); }

const root = dv.container;

function render() {
  root.empty();

  const style = root.createEl("style");
  style.textContent = `
    .quiz-toolbar { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 20px; }
    .quiz-progress { flex: 1; padding: 10px 14px; background: var(--background-secondary); border-radius: 6px; font-size: 0.9em; color: var(--text-muted); }
    .quiz-reset { padding: 8px 14px; border: 1px solid var(--background-modifier-border); background: var(--background-secondary); color: var(--text-muted); cursor: pointer; border-radius: 6px; font-size: 0.85em; font-family: inherit; white-space: nowrap; }
    .quiz-reset:hover { background: var(--background-modifier-hover); color: var(--text-normal); }
    .quiz-card { border: 1px solid var(--background-modifier-border); padding: 18px 22px; margin-bottom: 22px; border-radius: 8px; background: var(--background-primary-alt); }
    .quiz-q { font-weight: 600; margin-bottom: 14px; line-height: 1.5; font-size: 1.0em; }
    .quiz-opt { display: flex; align-items: center; justify-content: flex-start; width: 100%; box-sizing: border-box; text-align: left; padding: 11px 14px; margin: 8px 0; border: 1px solid var(--background-modifier-border); background: var(--background-secondary); cursor: pointer; border-radius: 6px; color: var(--text-normal); font-size: 0.95em; line-height: 1.45; transition: all 120ms ease; font-family: inherit; }
    .quiz-opt > span { flex: 1 1 auto; min-width: 0; white-space: normal; overflow-wrap: break-word; word-break: break-word; }
    .quiz-opt:hover:not(.correct):not(.incorrect) { background: var(--background-modifier-hover); }
    .quiz-opt.correct { background: rgba(63, 185, 80, 0.13); border-color: rgba(63, 185, 80, 0.45); color: var(--text-normal); cursor: default; }
    .quiz-opt.incorrect { background: rgba(248, 81, 73, 0.10); border-color: rgba(248, 81, 73, 0.35); color: var(--text-muted); opacity: 0.78; cursor: not-allowed; }
    .quiz-feedback { margin-top: 14px; padding: 11px 14px; border-radius: 6px; font-size: 0.9em; line-height: 1.5; }
    .quiz-feedback.correct { background: rgba(63, 185, 80, 0.06); border-left: 3px solid rgba(63, 185, 80, 0.6); color: var(--text-normal); }
    .quiz-feedback.incorrect { background: rgba(248, 81, 73, 0.06); border-left: 3px solid rgba(248, 81, 73, 0.55); color: var(--text-normal); }
    .quiz-footer { margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--background-modifier-border); text-align: center; }
    .quiz-submit { padding: 10px 24px; border: 1px solid var(--interactive-accent); background: var(--interactive-accent); color: var(--text-on-accent); cursor: pointer; border-radius: 6px; font-size: 0.95em; font-family: inherit; font-weight: 500; transition: opacity 120ms ease; }
    .quiz-submit:hover:not(:disabled) { opacity: 0.85; }
    .quiz-submit:disabled { opacity: 0.5; cursor: not-allowed; }
    .quiz-submit-note { margin-top: 10px; font-size: 0.85em; color: var(--text-muted); }
    .quiz-status { margin-top: 14px; padding: 10px 14px; border-radius: 6px; font-size: 0.9em; font-family: var(--font-monospace, monospace); word-break: break-all; }
    .quiz-status.ok { background: rgba(63, 185, 80, 0.13); border: 1px solid rgba(63, 185, 80, 0.45); color: var(--text-normal); }
    .quiz-status.err { background: rgba(248, 81, 73, 0.13); border: 1px solid rgba(248, 81, 73, 0.45); color: var(--text-normal); }
  `;

  let state = loadState() || {
    perQ: questions.map(() => ({ solvedIdx: null, wrongIdxs: [] })),
    wrongCount: 0,
  };
  let lastLogPath = null;
  let lastLogError = null;

  const toolbar = root.createDiv({ cls: "quiz-toolbar" });
  const progress = toolbar.createDiv({ cls: "quiz-progress" });
  const resetBtn = toolbar.createEl("button", { cls: "quiz-reset", text: "Reset quiz" });
  resetBtn.onclick = () => {
    if (window.confirm("Reset this quiz? Your selections will be cleared. (The attempt log file is kept.)")) {
      clearState();
      render();
    }
  };

  const solvedCount = () => state.perQ.filter(q => q.solvedIdx !== null).length;
  const isComplete = () => solvedCount() === questions.length;
  const updateProgress = () => {
    const sc = solvedCount();
    const base = sc + " / " + questions.length + " solved · " + state.wrongCount + " wrong attempts";
    let suffix = "";
    if (lastLogError) suffix = " · log save failed: " + lastLogError;
    else if (lastLogPath) suffix = " · log: " + lastLogPath;
    progress.setText(isComplete() ? "Done — " + base + suffix : "Progress: " + base);
  };

  questions.forEach((qData, i) => {
    const card = root.createDiv({ cls: "quiz-card" });
    card.createEl("div", { cls: "quiz-q", text: "Q" + (i + 1) + ". " + qData.q });
    const feedbackEl = card.createDiv({ cls: "quiz-feedback", attr: { style: "display:none" } });
    const qState = state.perQ[i];

    qData.opts.forEach((opt, optIdx) => {
      const btn = card.createEl("div", { cls: "quiz-opt", attr: { role: "button" } });
      btn.createEl("span", { text: opt.t });

      if (qState.solvedIdx === optIdx) {
        btn.classList.add("correct");
        feedbackEl.style.display = "";
        feedbackEl.className = "quiz-feedback correct";
        feedbackEl.setText("✓ " + opt.w);
      } else if (qState.wrongIdxs.includes(optIdx)) {
        btn.classList.add("incorrect");
        if (qState.solvedIdx === null && qState.wrongIdxs[qState.wrongIdxs.length - 1] === optIdx) {
          feedbackEl.style.display = "";
          feedbackEl.className = "quiz-feedback incorrect";
          feedbackEl.setText("✗ " + opt.w);
        }
      }

      btn.onclick = () => {
        if (qState.solvedIdx !== null) return;
        if (qState.wrongIdxs.includes(optIdx)) return;
        if (opt.c) {
          btn.classList.add("correct");
          feedbackEl.style.display = "";
          feedbackEl.className = "quiz-feedback correct";
          feedbackEl.setText("✓ " + opt.w);
          qState.solvedIdx = optIdx;
        } else {
          btn.classList.add("incorrect");
          feedbackEl.style.display = "";
          feedbackEl.className = "quiz-feedback incorrect";
          feedbackEl.setText("✗ " + opt.w);
          qState.wrongIdxs.push(optIdx);
          state.wrongCount++;
        }
        saveState(state);
        updateProgress();
        if (isComplete()) {
          persistResults();
        }
      };
    });
  });

  const footer = root.createDiv({ cls: "quiz-footer" });
  const submitBtn = footer.createEl("button", { cls: "quiz-submit", text: "Save log entry now" });
  footer.createDiv({ cls: "quiz-submit-note", text: "Auto-saves on completion. Click anytime to append an attempt entry to the log." });
  const statusDiv = footer.createDiv({ cls: "quiz-status", attr: { style: "display:none" } });
  const showStatus = (msg, ok) => {
    statusDiv.style.display = "";
    statusDiv.className = "quiz-status " + (ok ? "ok" : "err");
    statusDiv.setText(msg);
  };
  submitBtn.onclick = () => {
    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Saving…";
    persistResults().finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    });
  };
  updateProgress();

  async function persistResults() {
    try {
      if (!file) { console.warn("[quiz] no active file"); return; }
      const now = new Date();
      const pad = n => String(n).padStart(2, "0");
      const date = now.getFullYear() + "-" + pad(now.getMonth() + 1) + "-" + pad(now.getDate());
      const time = pad(now.getHours()) + ":" + pad(now.getMinutes());
      const solved = solvedCount();
      const total = questions.length;
      const missedNums = state.perQ
        .map((q, i) => (q.wrongIdxs.length > 0 ? i + 1 : null))
        .filter(n => n !== null);
      const entry = missedNums.length === 0
        ? "### " + date + " " + time + " — " + solved + "/" + total + " · clean sweep\n"
        : "### " + date + " " + time + " — " + solved + "/" + total + " (" + state.wrongCount + " wrong)\nMissed: " + missedNums.map(n => "Q" + n).join(", ") + "\n";

      const existing = app.vault.getAbstractFileByPath(LOG_PATH);
      if (existing && existing.extension === "md") {
        const prior = await app.vault.read(existing);
        await app.vault.modify(existing, prior.trimEnd() + "\n\n" + entry);
      } else {
        const folder = app.vault.getAbstractFileByPath(LOG_DIR);
        if (!folder) await app.vault.createFolder(LOG_DIR);
        await app.vault.create(LOG_PATH, "# Attempt log: " + baseName + "\n\n" + entry);
      }

      lastLogPath = LOG_PATH;
      lastLogError = null;
      updateProgress();
      showStatus("✓ Saved to " + LOG_PATH, true);
    } catch (e) {
      console.error("[quiz] log save failed:", e);
      lastLogError = e?.message || String(e);
      lastLogPath = null;
      updateProgress();
      showStatus("✗ Save failed: " + lastLogError, false);
    }
  }
}

render();
```

## Notes

- Required inputs from caller: `questions` (array of `{q, opts: [{t, c, w}]}`), `baseName` (string, no extension).
- Logs each attempt to `wiki/sessions/quiz-logs/<baseName>.log.md` via the Obsidian TFile API.
- In-progress state persists in browser `localStorage` under key `claude-quiz-state:wiki/quizzes/<baseName>.md`.
- The scaffold code uses plain string concatenation (not template literals) so the regex extraction in caller stubs is robust.
- Edit per-quiz content (intro, questions array) in the individual quiz files. This file is the engine only.
