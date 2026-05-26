---
title: Practice-Exam Scaffold (TEMPLATE) — Shared Engine
category: synthesis
tags: [template, practice-exam, scaffold]
status: active
confidence: high
created: 2026-05-26
updated: 2026-05-26
---

# Practice-Exam Scaffold (TEMPLATE) — Shared Engine

> **TEMPLATE FILE.** Copy this to `quizzes/_practice-exam-scaffold.md` in a new study wiki. Delete this header block once placed.

Shared engine for full-length practice exams. Each practice-exam content file provides its `questions`, `pbqs`, `baseName`, `examLabel`, and `domainNames` (plus optional `mcqStartN` and `passBenchmark`), then loads and runs the JS code block below via `dataviewjs`.

This scaffold absorbs every lesson from the 2026-05-26 AAR: localStorage state survives reloads, a Reset button is wired in, the report-card state restores automatically, and per-attempt logs record user picks plus correct answers for every missed MCQ and PBQ item.

## Caller bootstrap

```dataviewjs
const questions = [ /* { n, q, opts:[{l,t,c,w}], topic?, url?, objective?, domain? } */ ];
const pbqs = [ /* match: {n,title,type:"match",prompt,options,items:[{id,desc,answer,w}]} OR firewall: {n,title,type:"firewall",prompt,servers,ports,rules:[{id,goal,answer:{srcIP,dstIP,proto,port,action},w}]} */ ];
const baseName = "practice-exam-a";
const examLabel = "A";
const domainNames = { "1": "1.0 — ...", "2": "2.0 — ..." };
// Optional: const mcqStartN = 6; const passBenchmark = 83;

const scaffold = await app.vault.read(
  app.vault.getAbstractFileByPath("wiki/quizzes/_practice-exam-scaffold.md") ||
  app.vault.getAbstractFileByPath("quizzes/_practice-exam-scaffold.md")
);
eval(scaffold.match(/```javascript[ \t]*\r?\n([\s\S]*?)\r?\n[ \t]*```/)[1]);
```

## Scaffold source

```javascript
// `domainNames` is a caller-provided object: { "<id>": "<display name>", ... }
// `examLabel` is a caller-provided string (e.g. "A", "B").
// `baseName` is the file stem (e.g. "practice-exam-a").
// `mcqStartN` is the first n value of MCQ questions (default 6).
// `passBenchmark` is the pass-line percentage (default 83).
if (typeof mcqStartN === "undefined") var mcqStartN = 6;
if (typeof passBenchmark === "undefined") var passBenchmark = 83;
const _mcqQOffset = mcqStartN - 1;
const _pbqLastN = mcqStartN - 1;
const _mcqLastN = questions.length > 0 ? questions[questions.length - 1].n : (mcqStartN + questions.length - 1);

// ---- State (with localStorage persistence) ----
const STATE_KEY = "claude-pe-state:" + baseName;
function loadPersistedState() {
  try {
    const raw = window.localStorage.getItem(STATE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}
function savePersistedState() {
  try {
    const sels = {};
    Object.keys(selections).forEach(k => { sels[k] = [...selections[k]]; });
    window.localStorage.setItem(STATE_KEY, JSON.stringify({ selections: sels, pbqSelections, graded }));
  } catch (e) { console.error("PE state save failed:", e); }
}
function clearPersistedState() { window.localStorage.removeItem(STATE_KEY); }

const _persisted = loadPersistedState() || {};
const selections = {};
questions.forEach(q => { selections[q.n] = new Set(_persisted.selections?.[q.n] || []); });
const pbqSelections = {};
pbqs.forEach(p => { pbqSelections[p.n] = _persisted.pbqSelections?.[p.n] || {}; });
let graded = !!_persisted.graded;

// ---- Render setup ----
const root = dv.container;
root.empty();

const style = root.createEl("style");
style.textContent = `
  .pe-intro { padding: 12px 16px; background: var(--background-secondary); border-radius: 6px; margin-bottom: 18px; font-size: 0.9em; color: var(--text-muted); }
  .pe-progress { position: sticky; top: 0; z-index: 10; padding: 10px 14px; background: var(--background-secondary); border-radius: 6px; font-size: 0.9em; color: var(--text-muted); margin-bottom: 20px; border: 1px solid var(--background-modifier-border); }
  .pe-card { border: 1px solid var(--background-modifier-border); padding: 18px 22px; margin-bottom: 22px; border-radius: 8px; background: var(--background-primary-alt); scroll-margin-top: 60px; }
  .pe-q-header { display: flex; align-items: baseline; gap: 10px; margin-bottom: 12px; flex-wrap: wrap; }
  .pe-q-num { font-weight: 700; color: var(--text-muted); font-size: 0.85em; letter-spacing: 0.05em; }
  .pe-q-tag { font-size: 0.75em; padding: 2px 8px; border-radius: 10px; background: var(--background-secondary); color: var(--text-muted); border: 1px solid var(--background-modifier-border); }
  .pe-q-tag.multi { background: rgba(187, 128, 9, 0.12); color: var(--text-normal); border-color: rgba(187, 128, 9, 0.4); }
  .pe-q-text { font-weight: 500; line-height: 1.55; font-size: 1.0em; white-space: pre-wrap; word-wrap: break-word; }
  .pe-opt { display: flex; align-items: center; gap: 10px; width: 100%; text-align: left; padding: 10px 14px; margin: 7px 0; border: 1px solid var(--background-modifier-border); background: var(--background-secondary); cursor: pointer; border-radius: 6px; color: var(--text-normal); font-size: 0.95em; line-height: 1.45; transition: all 120ms ease; font-family: inherit; }
  .pe-opt:hover:not(:disabled) { background: var(--background-modifier-hover); }
  .pe-opt.selected { background: rgba(56, 139, 253, 0.14); border-color: rgba(56, 139, 253, 0.55); }
  .pe-opt-letter { font-weight: 600; color: var(--text-muted); flex-shrink: 0; min-width: 18px; }
  .pe-opt-text { flex: 1; }
  .pe-opt.graded-correct-selected { background: rgba(63, 185, 80, 0.18); border-color: rgba(63, 185, 80, 0.55); }
  .pe-opt.graded-correct-missed { background: rgba(63, 185, 80, 0.08); border-color: rgba(63, 185, 80, 0.45); border-style: dashed; }
  .pe-opt.graded-wrong-selected { background: rgba(248, 81, 73, 0.14); border-color: rgba(248, 81, 73, 0.5); }
  .pe-opt.graded-neutral { opacity: 0.65; }
  .pe-grade-btn { display: block; margin: 30px auto 10px; padding: 13px 36px; font-size: 1.05em; font-weight: 600; background: var(--interactive-accent); color: var(--text-on-accent); border: none; border-radius: 8px; cursor: pointer; transition: all 120ms ease; }
  .pe-grade-btn:hover:not(:disabled) { filter: brightness(1.1); }
  .pe-grade-btn:disabled { opacity: 0.6; cursor: not-allowed; }
  .pe-feedback { margin-top: 14px; padding: 12px 16px; border-radius: 6px; font-size: 0.9em; line-height: 1.55; display: none; }
  .pe-feedback.correct { background: rgba(63, 185, 80, 0.08); border-left: 3px solid rgba(63, 185, 80, 0.6); }
  .pe-feedback.incorrect { background: rgba(248, 81, 73, 0.08); border-left: 3px solid rgba(248, 81, 73, 0.55); }
  .pe-feedback .pe-fb-row { margin: 6px 0; }
  .pe-feedback .pe-fb-letter { display: inline-block; font-weight: 600; margin-right: 6px; }
  .pe-feedback .pe-fb-link { margin-top: 8px; font-size: 0.85em; color: var(--text-muted); }
  .pe-feedback .pe-fb-link a { color: var(--text-accent); text-decoration: none; }
  .pe-report { padding: 22px 26px; margin: 0 0 28px; border-radius: 10px; background: var(--background-primary-alt); border: 2px solid var(--background-modifier-border); }
  .pe-report h2 { margin-top: 0; }
  .pe-score-line { font-size: 1.3em; font-weight: 600; margin: 10px 0; }
  .pe-score-percent { font-size: 1.6em; }
  .pe-score-percent.pass { color: rgb(63, 185, 80); }
  .pe-score-percent.fail { color: rgb(248, 81, 73); }
  .pe-pass-note { font-size: 0.9em; color: var(--text-muted); margin: 6px 0 18px; }
  .pe-domain-table { width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9em; }
  .pe-domain-table th, .pe-domain-table td { padding: 8px 12px; text-align: left; border-bottom: 1px solid var(--background-modifier-border); }
  .pe-domain-table th { font-weight: 600; color: var(--text-muted); }
  .pe-domain-table .pe-dt-score { text-align: right; font-variant-numeric: tabular-nums; }
  .pe-miss-list { margin: 14px 0 4px; padding-left: 20px; }
  .pe-miss-list li { margin: 6px 0; font-size: 0.9em; }
  .pe-miss-list a { color: var(--text-accent); text-decoration: none; }
  .pe-miss-list a:hover { text-decoration: underline; }
  .pbq-section-header { margin-top: 8px; margin-bottom: 14px; font-size: 1.05em; color: var(--text-muted); font-weight: 600; letter-spacing: 0.02em; border-bottom: 1px solid var(--background-modifier-border); padding-bottom: 8px; }
  .pbq-prompt { font-style: italic; color: var(--text-muted); margin: 8px 0 14px; font-size: 0.92em; line-height: 1.5; }
  .pbq-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
  .pbq-table td { padding: 9px 10px; vertical-align: middle; border-bottom: 1px solid var(--background-modifier-border); font-size: 0.95em; }
  .pbq-table td.pbq-desc-cell { padding-right: 18px; line-height: 1.45; }
  .pbq-table td.pbq-sel-cell { width: 230px; text-align: right; }
  .pbq-select { padding: 6px 10px; border-radius: 4px; border: 1px solid var(--background-modifier-border); background: var(--background-secondary); color: var(--text-normal); font-size: 0.9em; min-width: 210px; font-family: inherit; }
  .pbq-select:focus { outline: 2px solid var(--interactive-accent); outline-offset: 1px; }
  .pbq-select:disabled { opacity: 0.85; cursor: default; }
  .pbq-row-correct { background: rgba(63, 185, 80, 0.08); }
  .pbq-row-wrong { background: rgba(248, 81, 73, 0.06); }
  .pbq-srv-list { font-size: 0.85em; color: var(--text-muted); margin: 10px 0; padding: 9px 12px; background: var(--background-secondary); border-radius: 4px; line-height: 1.7; }
  .pbq-rule { margin: 14px 0; padding: 12px 14px; background: var(--background-secondary); border-radius: 6px; border: 1px solid var(--background-modifier-border); }
  .pbq-rule-goal { font-weight: 500; margin-bottom: 10px; font-size: 0.92em; line-height: 1.5; }
  .pbq-fw-table { width: 100%; border-collapse: collapse; font-size: 0.85em; }
  .pbq-fw-table th { text-align: left; padding: 4px 6px; color: var(--text-muted); font-weight: 600; font-size: 0.78em; text-transform: uppercase; letter-spacing: 0.03em; }
  .pbq-fw-table td { padding: 4px 6px; }
  .pbq-fw-select { min-width: 95px; font-size: 0.85em; padding: 4px 8px; }
  .pbq-report-tbl { width: 100%; border-collapse: collapse; margin: 10px 0 14px; font-size: 0.9em; }
  .pbq-report-tbl th, .pbq-report-tbl td { padding: 8px 12px; text-align: left; border-bottom: 1px solid var(--background-modifier-border); }
  .pbq-report-tbl th { font-weight: 600; color: var(--text-muted); }
  .pbq-report-tbl .pbq-rt-score { text-align: right; font-variant-numeric: tabular-nums; }
  .pbq-report-tbl a { color: var(--text-accent); text-decoration: none; }
  .pbq-report-tbl a:hover { text-decoration: underline; }
`;

const intro = root.createDiv({ cls: "pe-intro" });
intro.setText(`${pbqs.length} performance-based questions + ${questions.length} multiple-choice questions. Multi-select MCQs are flagged below. No feedback until you click Grade my test at the bottom.`);

const progress = root.createDiv({ cls: "pe-progress" });
const countPbqItems = (p) => {
  if (p.type === "match") return p.items.length;
  if (p.type === "firewall") return p.rules.reduce((s, r) => s + Object.keys(r.answer).length, 0);
  return 0;
};
const countPbqAnswered = (p) => {
  if (p.type === "match") return Object.values(pbqSelections[p.n]).filter(v => v).length;
  if (p.type === "firewall") {
    let n = 0;
    p.rules.forEach(r => {
      const sel = pbqSelections[p.n][r.id] || {};
      Object.keys(r.answer).forEach(k => { if (sel[k]) n++; });
    });
    return n;
  }
  return 0;
};
const pbqItemsTotal = pbqs.reduce((s, p) => s + countPbqItems(p), 0);
const updateProgress = () => {
  savePersistedState();
  if (graded) { progress.style.display = "none"; return; }
  const mcqAnswered = questions.filter(q => selections[q.n].size > 0).length;
  const pbqAnswered = pbqs.reduce((s, p) => s + countPbqAnswered(p), 0);
  progress.setText(`PBQ ${pbqAnswered}/${pbqItemsTotal}  ·  MCQ ${mcqAnswered}/${questions.length}`);
};
updateProgress();

const _resetBar = root.createDiv();
_resetBar.style.cssText = "display:flex; justify-content:flex-end; margin: 4px 0 18px;";
const _resetBtn = _resetBar.createEl("button", { text: "Reset exam" });
_resetBtn.style.cssText = "padding: 8px 14px; border: 1px solid var(--background-modifier-border); background: var(--background-secondary); color: var(--text-muted); cursor: pointer; border-radius: 6px; font-size: 0.85em; font-family: inherit;";
_resetBtn.onclick = () => {
  if (window.confirm("Reset this exam? Your selections and graded state will be cleared. (Attempt logs already written are kept.)")) {
    clearPersistedState();
    if (typeof location !== "undefined" && location.reload) location.reload();
  }
};

const reportContainer = root.createDiv();

const pbqHeader = root.createDiv({ cls: "pbq-section-header" });
pbqHeader.setText("Performance-Based Questions · " + examLabel + "1–" + examLabel + _pbqLastN);

const pbqContainer = root.createDiv();

pbqs.forEach(p => {
  const card = pbqContainer.createDiv({ cls: "pe-card" });
  card.id = `pe-pbq-${p.n}`;
  const hdr = card.createDiv({ cls: "pe-q-header" });
  hdr.createEl("span", { cls: "pe-q-num", text: `PBQ · ${examLabel}${p.n}` });
  if (p.objective) hdr.createEl("span", { cls: "pe-q-tag" }).setText(`Obj ${p.objective}`);
  card.createEl("div", { cls: "pe-q-text", text: p.title });
  card.createDiv({ cls: "pbq-prompt" }).setText(p.prompt);

  if (p.type === "match") {
    const tbl = card.createEl("table", { cls: "pbq-table" });
    p.items.forEach(item => {
      const tr = tbl.createEl("tr");
      tr.dataset.itemId = item.id;
      tr.createEl("td", { cls: "pbq-desc-cell", text: item.desc });
      const tdSel = tr.createEl("td", { cls: "pbq-sel-cell" });
      const sel = tdSel.createEl("select", { cls: "pbq-select" });
      const def = sel.createEl("option", { text: "— Select —" }); def.value = "";
      p.options.forEach(opt => { const o = sel.createEl("option", { text: opt }); o.value = opt; });
      sel.value = pbqSelections[p.n][item.id] || "";
      if (graded) sel.disabled = true;
      sel.onchange = () => { if (graded) return; pbqSelections[p.n][item.id] = sel.value; updateProgress(); };
    });
  } else if (p.type === "firewall") {
    const srvList = card.createDiv({ cls: "pbq-srv-list" });
    srvList.createEl("strong", { text: "Servers: " });
    p.servers.forEach((s, i) => { srvList.appendText(`${s.name} ${s.ip}`); if (i < p.servers.length - 1) srvList.appendText("  ·  "); });
    p.rules.forEach((rule, idx) => {
      const ruleBox = card.createDiv({ cls: "pbq-rule" });
      ruleBox.dataset.ruleId = rule.id;
      ruleBox.createEl("div", { cls: "pbq-rule-goal", text: `Rule ${idx + 1}: ${rule.goal}` });
      const tbl = ruleBox.createEl("table", { cls: "pbq-fw-table" });
      const thead = tbl.createEl("thead"); const trh = thead.createEl("tr");
      ["Source IP", "Destination IP", "Protocol", "Port", "Action"].forEach(h => trh.createEl("th", { text: h }));
      const tbody = tbl.createEl("tbody"); const tr = tbody.createEl("tr");
      const ipOptions = p.servers.map(s => s.ip);
      const fields = [
        { key: "srcIP", options: ipOptions }, { key: "dstIP", options: ipOptions },
        { key: "proto", options: ["TCP", "UDP"] }, { key: "port", options: p.ports },
        { key: "action", options: ["Allow", "Block"] }
      ];
      fields.forEach(f => {
        const td = tr.createEl("td");
        const sel = td.createEl("select", { cls: "pbq-select pbq-fw-select" });
        const def = sel.createEl("option", { text: "—" }); def.value = "";
        f.options.forEach(opt => { const o = sel.createEl("option", { text: opt }); o.value = opt; });
        sel.dataset.field = f.key;
        sel.value = pbqSelections[p.n]?.[rule.id]?.[f.key] || "";
        if (graded) sel.disabled = true;
        sel.onchange = () => { if (graded) return; if (!pbqSelections[p.n][rule.id]) pbqSelections[p.n][rule.id] = {}; pbqSelections[p.n][rule.id][f.key] = sel.value; updateProgress(); };
      });
    });
  }
  card.createDiv({ cls: "pe-feedback" }).dataset.pbqN = p.n;
});

const mcqHeader = root.createDiv({ cls: "pbq-section-header" });
mcqHeader.setText("Multiple-Choice Questions · " + examLabel + mcqStartN + "–" + examLabel + _mcqLastN);
mcqHeader.style.marginTop = "30px";

const cardsContainer = root.createDiv();

questions.forEach((q) => {
  const correctCount = q.opts.filter(o => o.c).length;
  const isMulti = correctCount > 1;
  const card = cardsContainer.createDiv({ cls: "pe-card" });
  card.id = `pe-q-${q.n}`;
  const header = card.createDiv({ cls: "pe-q-header" });
  header.createEl("span", { cls: "pe-q-num", text: `Q${q.n - _mcqQOffset}  ·  ${examLabel}${q.n}` });
  if (isMulti) header.createEl("span", { cls: "pe-q-tag multi" }).setText(`Select ${correctCount}`);
  if (q.objective) header.createEl("span", { cls: "pe-q-tag" }).setText(`Obj ${q.objective}`);
  card.createEl("div", { cls: "pe-q-text", text: q.q });
  const optButtons = {};
  q.opts.forEach(opt => {
    const btn = card.createEl("button", { cls: "pe-opt" });
    btn.createEl("span", { cls: "pe-opt-letter", text: `${opt.l}.` });
    btn.createEl("span", { cls: "pe-opt-text", text: opt.t });
    optButtons[opt.l] = btn;
    if (selections[q.n].has(opt.l)) btn.classList.add("selected");
    if (graded) btn.disabled = true;
    btn.onclick = () => {
      if (graded) return;
      const sel = selections[q.n];
      if (isMulti) {
        if (sel.has(opt.l)) { sel.delete(opt.l); btn.classList.remove("selected"); }
        else { sel.add(opt.l); btn.classList.add("selected"); }
      } else {
        sel.clear();
        Object.values(optButtons).forEach(b => b.classList.remove("selected"));
        sel.add(opt.l); btn.classList.add("selected");
      }
      updateProgress();
    };
  });
  card.createDiv({ cls: "pe-feedback" }).dataset.qnum = q.n;
});

const gradeBtn = root.createEl("button", { cls: "pe-grade-btn", text: "Grade my test" });

gradeBtn.onclick = () => {
  if (graded) return;
  graded = true;
  savePersistedState();
  gradeBtn.disabled = true;
  gradeBtn.setText("Test graded — scroll up for your report card");
  progress.style.display = "none";

  let pbqItemsCorrect = 0;
  const pbqResults = {};

  pbqs.forEach(p => {
    pbqResults[p.n] = { correct: 0, total: 0, details: [] };
    const card = document.getElementById(`pe-pbq-${p.n}`);
    card.querySelectorAll("select.pbq-select").forEach(s => { s.disabled = true; });

    if (p.type === "match") {
      p.items.forEach(item => {
        const got = pbqSelections[p.n][item.id] || "";
        const right = (got === item.answer);
        pbqResults[p.n].total += 1;
        if (right) { pbqResults[p.n].correct += 1; pbqItemsCorrect += 1; }
        pbqResults[p.n].details.push({ kind: "match", desc: item.desc, got, expected: item.answer, right, w: item.w });
        const tr = card.querySelector(`tr[data-item-id="${item.id}"]`);
        if (tr) tr.classList.add(right ? "pbq-row-correct" : "pbq-row-wrong");
      });
    } else if (p.type === "firewall") {
      p.rules.forEach(rule => {
        const sel = pbqSelections[p.n][rule.id] || {};
        const fieldRights = {};
        let ruleAllRight = true;
        Object.keys(rule.answer).forEach(k => {
          const got = sel[k] || "";
          const right = (got === rule.answer[k]);
          fieldRights[k] = { got, expected: rule.answer[k], right };
          pbqResults[p.n].total += 1;
          if (right) { pbqResults[p.n].correct += 1; pbqItemsCorrect += 1; }
          else ruleAllRight = false;
        });
        pbqResults[p.n].details.push({ kind: "firewall", goal: rule.goal, fields: fieldRights, w: rule.w, allRight: ruleAllRight });
        const rb = card.querySelector(`div[data-rule-id="${rule.id}"]`);
        if (rb) rb.classList.add(ruleAllRight ? "pbq-row-correct" : "pbq-row-wrong");
      });
    }

    const fb = card.querySelector(".pe-feedback");
    const allRight = pbqResults[p.n].correct === pbqResults[p.n].total;
    fb.classList.add(allRight ? "correct" : "incorrect");
    fb.style.display = "";
    fb.createDiv({ cls: "pe-fb-row" }).innerHTML = `<strong>${allRight ? "✓" : "✗"} ${pbqResults[p.n].correct} / ${pbqResults[p.n].total} item${pbqResults[p.n].total === 1 ? "" : "s"} correct</strong>`;

    pbqResults[p.n].details.forEach((d, idx) => {
      if (d.kind === "match") {
        const row = fb.createDiv({ cls: "pe-fb-row" });
        const mark = d.right ? "✓" : "✗";
        const yourPart = d.got ? `picked <em>${escapeHtml(d.got)}</em>` : `<em>no answer</em>`;
        row.innerHTML = `<strong>${mark}</strong> ${escapeHtml(d.desc)} → <strong>${escapeHtml(d.expected)}</strong>${d.right ? "" : ` &nbsp;(${yourPart})`}`;
        if (!d.right && d.w) {
          const why = fb.createDiv();
          why.style.cssText = "margin-left:22px; font-size:0.88em; color:var(--text-muted); margin-top:2px;";
          why.setText(d.w);
        }
      } else if (d.kind === "firewall") {
        const row = fb.createDiv({ cls: "pe-fb-row" });
        row.style.marginTop = "10px";
        const mark = d.allRight ? "✓" : "✗";
        row.innerHTML = `<strong>${mark} Rule ${idx + 1}:</strong> ${escapeHtml(d.goal)}`;
        Object.keys(d.fields).forEach(k => {
          const f = d.fields[k];
          if (!f.right) {
            const sub = fb.createDiv();
            sub.style.cssText = "margin-left:22px; font-size:0.88em;";
            const labelMap = { srcIP: "Source IP", dstIP: "Destination IP", proto: "Protocol", port: "Port", action: "Action" };
            sub.innerHTML = `<strong>${labelMap[k]}:</strong> ${escapeHtml(f.expected)} <span style="color:var(--text-muted)">(you picked ${escapeHtml(f.got || "—")})</span>`;
          }
        });
        if (!d.allRight && d.w) {
          const why = fb.createDiv();
          why.style.cssText = "margin-left:22px; font-size:0.88em; color:var(--text-muted); margin-top:4px;";
          why.setText(d.w);
        }
      }
    });

    if (p.url) {
      const linkRow = fb.createDiv({ cls: "pe-fb-link" });
      linkRow.innerHTML = `Reference: <a href="${p.url}" target="_blank" rel="noopener">Objective ${escapeHtml(p.objective)}</a>`;
    }
  });

  let totalCorrect = 0;
  const missed = [];
  const domainStats = {};

  questions.forEach((q) => {
    const sel = selections[q.n];
    const correctLetters = new Set(q.opts.filter(o => o.c).map(o => o.l));
    const allRight = sel.size === correctLetters.size && [...sel].every(l => correctLetters.has(l));

    if (q.domain) {
      if (!domainStats[q.domain]) domainStats[q.domain] = { right: 0, total: 0 };
      domainStats[q.domain].total += 1;
      if (allRight) domainStats[q.domain].right += 1;
    }
    if (allRight) totalCorrect += 1; else missed.push(q);

    const card = document.getElementById(`pe-q-${q.n}`);
    card.querySelectorAll(".pe-opt").forEach(btn => {
      const letter = btn.querySelector(".pe-opt-letter").innerText.replace(".", "");
      const isSel = sel.has(letter);
      const isCorrect = correctLetters.has(letter);
      btn.classList.remove("selected");
      btn.disabled = true;
      if (isCorrect && isSel) btn.classList.add("graded-correct-selected");
      else if (isCorrect && !isSel) btn.classList.add("graded-correct-missed");
      else if (!isCorrect && isSel) btn.classList.add("graded-wrong-selected");
      else btn.classList.add("graded-neutral");
    });

    const fb = card.querySelector(".pe-feedback");
    fb.classList.add(allRight ? "correct" : "incorrect");
    fb.style.display = "";
    fb.createDiv({ cls: "pe-fb-row" }).innerHTML = allRight
      ? "<strong>✓ Correct</strong>"
      : (sel.size === 0 ? "<strong>✗ No answer</strong>" : "<strong>✗ Incorrect</strong>");

    const firstCorrect = q.opts.find(o => o.c);
    if (firstCorrect) {
      const row = fb.createDiv({ cls: "pe-fb-row" });
      const correctLettersStr = q.opts.filter(o => o.c).map(o => o.l).join(", ");
      const correctTexts = q.opts.filter(o => o.c).map(o => o.t).join("; ");
      row.createEl("strong").setText(`Answer: ${correctLettersStr}. ${correctTexts}`);
      const why = row.createDiv(); why.style.marginTop = "6px"; why.setText(firstCorrect.w);
    }
    const wrongPicked = [...sel].filter(l => !correctLetters.has(l));
    if (wrongPicked.length > 0) {
      const row = fb.createDiv({ cls: "pe-fb-row" });
      row.style.marginTop = "10px";
      row.createEl("strong").setText("Why your pick was wrong:");
      wrongPicked.forEach(l => {
        const opt = q.opts.find(o => o.l === l);
        const sub = row.createDiv(); sub.style.marginTop = "4px";
        sub.innerHTML = `<span class="pe-fb-letter">${l}.</span> ${escapeHtml(opt.w)}`;
      });
    }
    if (q.url) {
      const linkRow = fb.createDiv({ cls: "pe-fb-link" });
      linkRow.innerHTML = `Reference: <a href="${q.url}" target="_blank" rel="noopener">${escapeHtml(q.topic)}</a>`;
    }
  });

  const total = questions.length;
  const pct = (totalCorrect / total) * 100;
  const strictPass = pct >= passBenchmark;

  reportContainer.empty();
  const report = reportContainer.createDiv({ cls: "pe-report" });
  report.createEl("h2", { text: "Report Card" });
  report.createDiv({ cls: "pe-score-line" }).innerHTML = `MCQ: ${totalCorrect} / ${total} correct&nbsp;&nbsp;<span class="pe-score-percent ${strictPass ? "pass" : "fail"}">${pct.toFixed(1)}%</span>`;
  report.createDiv({ cls: "pe-pass-note" }).setText(strictPass
    ? `At or above the ${passBenchmark}% pass benchmark. Solid.`
    : `Below the ${passBenchmark}% pass benchmark. Review the misses below.`);

  report.createEl("h3", { text: "Performance-Based (" + examLabel + "1–" + examLabel + _pbqLastN + ")" });
  const pbqRptTbl = report.createEl("table", { cls: "pbq-report-tbl" });
  const pbqTrh = pbqRptTbl.createEl("thead").createEl("tr");
  ["PBQ", "Topic", "Score", "%"].forEach((t, i) => {
    const th = pbqTrh.createEl("th", { text: t }); if (i >= 2) th.className = "pbq-rt-score";
  });
  const pbqTbody = pbqRptTbl.createEl("tbody");
  pbqs.forEach(p => {
    const r = pbqResults[p.n];
    const tr = pbqTbody.createEl("tr");
    const link = tr.createEl("td").createEl("a", { href: `#pe-pbq-${p.n}`, text: `${examLabel}${p.n}` });
    link.onclick = (e) => { e.preventDefault(); document.getElementById(`pe-pbq-${p.n}`).scrollIntoView({ behavior: "smooth", block: "start" }); };
    tr.createEl("td", { text: p.title });
    tr.createEl("td", { text: `${r.correct} / ${r.total}`, cls: "pbq-rt-score" });
    const pct = r.total > 0 ? (r.correct / r.total * 100).toFixed(0) : "—";
    tr.createEl("td", { text: `${pct}%`, cls: "pbq-rt-score" });
  });
  const pbqTotalItems = pbqs.reduce((s, p) => s + pbqResults[p.n].total, 0);
  const pbqSummary = report.createDiv();
  pbqSummary.style.cssText = "font-size:0.9em; margin-top:4px; margin-bottom:18px;";
  pbqSummary.innerHTML = `<strong>PBQ total:</strong> ${pbqItemsCorrect} / ${pbqTotalItems} items`;

  report.createEl("h3", { text: "By domain" });
  const table = report.createEl("table", { cls: "pe-domain-table" });
  const trh = table.createEl("thead").createEl("tr");
  ["Domain", "Score", "%"].forEach((t, i) => { const th = trh.createEl("th", { text: t }); if (i >= 1) th.className = "pe-dt-score"; });
  const tbody = table.createEl("tbody");
  Object.keys(domainNames).sort().forEach(d => {
    const s = domainStats[d] || { right: 0, total: 0 };
    if (s.total === 0) return;
    const tr = tbody.createEl("tr");
    tr.createEl("td", { text: domainNames[d] });
    tr.createEl("td", { text: `${s.right} / ${s.total}`, cls: "pe-dt-score" });
    tr.createEl("td", { text: `${((s.right / s.total) * 100).toFixed(0)}%`, cls: "pe-dt-score" });
  });

  if (missed.length > 0) {
    report.createEl("h3", { text: `Missed questions (${missed.length})` });
    const ul = report.createEl("ul", { cls: "pe-miss-list" });
    missed.forEach(q => {
      const li = ul.createEl("li");
      const a = li.createEl("a", { href: `#pe-q-${q.n}` });
      a.setText(`Q${q.n - _mcqQOffset} (${examLabel}${q.n})`);
      a.onclick = (e) => { e.preventDefault(); document.getElementById(`pe-q-${q.n}`).scrollIntoView({ behavior: "smooth", block: "start" }); };
      const objLabel = q.objective ? ` — Obj ${q.objective}` : "";
      li.appendText(`${objLabel} — ${truncate(q.q.split("\n")[0], 90)}`);
    });
  } else {
    report.createEl("p", { text: "No misses. Clean sweep." });
  }
  report.scrollIntoView({ behavior: "smooth", block: "start" });

  try {
    const date = new Date().toISOString().slice(0, 10);
    const missLines = missed.length === 0
      ? "  - _Clean sweep — no MCQ misses_"
      : missed.map(q => {
          const sel = selections[q.n];
          const correctLetters = q.opts.filter(o => o.c).map(o => o.l).join(",");
          const picked = sel.size === 0 ? "(no answer)" : [...sel].sort().join(",");
          const snippet = truncate(q.q.split("\n")[0], 90);
          return `  - **${examLabel}${q.n}** (Obj ${q.objective || "?"}) — ${snippet}\n      picked: \`${picked}\`  ·  correct: \`${correctLetters}\`  ·  ${q.topic}`;
        }).join("\n");
    const pbqLines = pbqs.map(p => {
      const r = pbqResults[p.n];
      const detailLines = r.details.map(d => {
        if (d.kind === "match") {
          const got = d.got || "(no answer)";
          const mark = d.right ? "✓" : "✗";
          return `      ${mark} ${d.desc}\n          picked: \`${got}\`  ·  correct: \`${d.expected}\``;
        } else if (d.kind === "firewall") {
          const mark = d.allRight ? "✓" : "✗";
          const fieldDetails = Object.keys(d.fields).map(k => {
            const f = d.fields[k];
            return f.right ? `${k}=\`${f.got}\`` : `${k}=\`${f.got || "—"}\`→\`${f.expected}\``;
          }).join(", ");
          return `      ${mark} ${d.goal}\n          ${fieldDetails}`;
        }
        return "";
      }).join("\n");
      return `  - **${examLabel}${p.n}** ${p.title}: ${r.correct}/${r.total}\n${detailLines}`;
    }).join("\n");
    const domainLines = Object.keys(domainNames).sort().map(d => {
      const s = domainStats[d] || { right: 0, total: 0 };
      if (s.total === 0) return null;
      return `  - ${domainNames[d]}: ${s.right}/${s.total} (${((s.right / s.total) * 100).toFixed(0)}%)`;
    }).filter(Boolean).join("\n");
    const entry = `### [${date}] Attempt\n- **MCQ:** ${totalCorrect} / ${total} (${pct.toFixed(1)}%)\n- **PBQ items:** ${pbqItemsCorrect} / ${pbqTotalItems}\n- **By domain:**\n${domainLines}\n- **PBQs:**\n${pbqLines}\n- **Missed MCQs:**\n${missLines}\n`;
    const LOG_PATH = "wiki/sessions/quiz-logs/" + baseName + ".log.md";
    const LOG_DIR = "wiki/sessions/quiz-logs";
    (async () => {
      try {
        const existing = app.vault.getAbstractFileByPath(LOG_PATH);
        if (existing && existing.extension === "md") {
          const prior = await app.vault.read(existing);
          await app.vault.modify(existing, prior.trimEnd() + "\n\n" + entry);
        } else {
          const folder = app.vault.getAbstractFileByPath(LOG_DIR);
          if (!folder) await app.vault.createFolder(LOG_DIR);
          await app.vault.create(LOG_PATH, "# Attempt log: " + baseName + "\n\n" + entry);
        }
      } catch (e) { console.error("Persist failed:", e); }
    })();
  } catch (e) { console.error("Persist failed:", e); }
};

if (graded) {
  gradeBtn.disabled = true;
  gradeBtn.setText("Already graded — hit Reset exam at the top to start a fresh attempt");
  const _banner = root.createDiv();
  _banner.style.cssText = "padding: 12px 16px; background: var(--background-secondary); border-radius: 6px; margin: 16px 0; font-size: 0.9em; color: var(--text-muted); border-left: 3px solid var(--text-muted);";
  _banner.setText("You graded this attempt previously. Your selections are shown above (read-only) and were logged to the attempt history. Click Reset exam to start over.");
}

function escapeHtml(s) {
  return (s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function truncate(s, n) {
  return s.length > n ? s.slice(0, n - 1) + "…" : s;
}
```

## Notes

- Required caller variables: `questions`, `pbqs`, `baseName`, `examLabel`, `domainNames`.
- Optional caller variables: `mcqStartN` (default 6), `passBenchmark` (default 83).
- PBQ types supported out of the box: `match` and `firewall`. Other types require extending the render and grade branches.
- The scaffold uses `eval()` on the JS code block extracted by regex. The standard bootstrap is shown in `## Caller bootstrap` above.
- Edit per-exam content (questions, PBQs, intro text) in the individual practice-exam files. This file is the engine only.
