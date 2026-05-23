---
title: Vocab Match — Interactive Trainer
category: quiz
tags: [quiz, vocab, match, trainer, all-domains]
status: active
confidence: high
created: 2026-05-23
updated: 2026-05-23
covers: [all]
---

# Vocab Match — Interactive Trainer

A Quizlet-style matching game across all 706 SY0-701 vocab terms from [[synthesis/vocab|the master glossary]]. Pick a scope, pair tiles two at a time. Progress is saved to `sessions/vocab-match-state.json` in your vault — terms you miss come back more often, terms you nail get sampled less often.

```dataviewjs
// ============== DATA: pulled live from synthesis/vocab.md ==============
async function loadVocab() {
  // Resolve via Obsidian's link cache, then read the file directly.
  // dv.io.load returns undefined in some Dataview versions; this path is rock-solid.
  let raw;
  const file = app.metadataCache.getFirstLinkpathDest("synthesis/vocab", "");
  if (file) {
    raw = await app.vault.read(file);
  } else {
    try { raw = await app.vault.adapter.read("synthesis/vocab.md"); } catch (e) { /* fall through */ }
  }
  if (typeof raw !== "string") {
    throw new Error("synthesis/vocab.md not found in vault");
  }
  const block = raw.match(/const data = \[([\s\S]*?)\n\];/);
  if (!block) throw new Error("Could not find vocab data block in synthesis/vocab.md");
  const out = [];
  // term, def, obj — quoted strings; allow escaped quotes
  const re = /\{\s*term:\s*"((?:[^"\\]|\\.)*)",\s*def:\s*"((?:[^"\\]|\\.)*)",\s*src:\s*"[^"]*",\s*srcAlias:\s*"[^"]*",\s*obj:\s*"([^"]+)"/g;
  function unesc(s) {
    return s.replace(/\\(.)/g, function (_, c) {
      if (c === "n") return "\n";
      if (c === "t") return "\t";
      if (c === "r") return "\r";
      return c;
    });
  }
  let m;
  let id = 0;
  while ((m = re.exec(block[1])) !== null) {
    out.push({ id: id++, term: unesc(m[1]), def: unesc(m[2]), obj: m[3], domain: m[3].split(".")[0] });
  }
  return out;
}

const DOMAINS = {
  "1": "General Security Concepts",
  "2": "Threats, Vulnerabilities & Mitigations",
  "3": "Security Architecture",
  "4": "Security Operations",
  "5": "Security Program Management",
};
const OBJECTIVE_TITLES = {
  "1.1": "Security Controls", "1.2": "Fundamental Concepts", "1.3": "Change Management", "1.4": "Cryptographic Solutions",
  "2.1": "Threat Actors", "2.2": "Threat Vectors", "2.3": "Vulnerabilities", "2.4": "Malicious Activity", "2.5": "Mitigation Techniques",
  "3.1": "Architecture Models", "3.2": "Enterprise Infrastructure", "3.3": "Data Protection", "3.4": "Resilience & Recovery",
  "4.1": "Securing Resources", "4.2": "Asset Management", "4.3": "Vuln Management", "4.4": "Monitoring", "4.5": "Enterprise Capabilities",
  "4.6": "Identity & Access", "4.7": "Automation", "4.8": "Incident Response", "4.9": "Investigation Data",
  "5.1": "Governance", "5.2": "Risk Management", "5.3": "Third-Party Risk", "5.4": "Compliance & Privacy",
  "5.5": "Audits & Pentests", "5.6": "Awareness & Training",
};

// ============== BOOT ==============
const root = dv.container;
root.empty();
const loading = root.createDiv({ text: "Loading vocab…" });
loading.style.cssText = "padding: 14px 18px; color: var(--text-muted); font-style: italic;";

let VOCAB, BY_OBJ, BY_DOMAIN;
const STORAGE_KEY = "secplus-match-v1";  // legacy localStorage key, kept only for one-time migration
const STATE_PATH = "sessions/vocab-match-state.json";
let progress = {};
let settings = { scope: { type: "all", value: null }, roundSize: 8 };

(async () => {
  try {
    VOCAB = await loadVocab();
  } catch (e) {
    loading.setText("Failed to load vocab from synthesis/vocab.md: " + e.message);
    loading.style.color = "rgb(248, 81, 73)";
    return;
  }
  if (VOCAB.length === 0) {
    loading.setText("No vocab entries parsed from synthesis/vocab.md");
    return;
  }
  BY_OBJ = {};
  BY_DOMAIN = {};
  VOCAB.forEach(v => {
    (BY_OBJ[v.obj] = BY_OBJ[v.obj] || []).push(v);
    (BY_DOMAIN[v.domain] = BY_DOMAIN[v.domain] || []).push(v);
  });
  await loadStateFn();
  loading.remove();
  initUI();
})();

async function loadStateFn() {
  // Primary: read from vault
  const file = app.vault.getAbstractFileByPath(STATE_PATH);
  if (file) {
    try {
      const parsed = JSON.parse(await app.vault.read(file));
      progress = parsed.progress || {};
      if (parsed.settings) settings = Object.assign(settings, parsed.settings);
      return;
    } catch (e) { console.warn("vocab-match: could not parse vault state", e); }
  }
  // One-time migration: pull any existing localStorage data into the vault
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      progress = parsed.progress || {};
      if (parsed.settings) settings = Object.assign(settings, parsed.settings);
      await saveState();
      console.log("vocab-match: migrated progress from localStorage to", STATE_PATH);
    }
  } catch (e) { /* no migration data */ }
}

async function saveState() {
  const data = JSON.stringify({ progress, settings }, null, 2);
  try {
    const file = app.vault.getAbstractFileByPath(STATE_PATH);
    if (file) {
      await app.vault.modify(file, data);
    } else {
      await app.vault.create(STATE_PATH, data);
    }
  } catch (e) { console.warn("vocab-match: save failed", e); }
}

// ============== MASTERY ==============
function masteryOf(id) {
  const p = progress[id];
  if (!p || (p.c === 0 && p.w === 0)) return 0;
  const errRate = p.w / Math.max(1, p.c + p.w);
  if (p.streak >= 5 && errRate < 0.25) return 3;
  if (p.streak >= 3) return 2;
  return 1;
}
const MASTERY_NAMES = ["new", "learning", "review", "mastered"];

function recordResult(id, correct) {
  const p = progress[id] = progress[id] || { c: 0, w: 0, streak: 0, last: 0 };
  if (correct) { p.c++; p.streak++; } else { p.w++; p.streak = 0; }
  p.last = Date.now();
}

// ============== SELECTION ==============
function termsInScope(s) {
  if (s.type === "all") return VOCAB.slice();
  if (s.type === "domain") return BY_DOMAIN[s.value] || [];
  if (s.type === "objective") return BY_OBJ[s.value] || [];
  return VOCAB.slice();
}
function scopeLabel(s) {
  if (s.type === "all") return "All objectives";
  if (s.type === "domain") return "Domain " + s.value + " — " + DOMAINS[s.value];
  if (s.type === "objective") return s.value + " — " + (OBJECTIVE_TITLES[s.value] || "");
  return "";
}
function pickRoundTerms(pool, count) {
  const now = Date.now();
  const DAY = 86400000;
  function weight(t) {
    const p = progress[t.id];
    if (!p) return 6.0;
    const m = masteryOf(t.id);
    const baseByMastery = [6.0, 4.0, 1.6, 0.4][m];
    const errRate = p.w / Math.max(1, p.c + p.w);
    const errBoost = 1 + Math.min(2.0, errRate * 3);
    const sinceDays = (now - (p.last || 0)) / DAY;
    const freshBoost = m >= 2 ? Math.min(1.8, 1 + sinceDays / 3) : 1;
    return baseByMastery * errBoost * freshBoost;
  }
  const items = pool.slice();
  const weights = items.map(weight);
  const picked = [];
  for (let i = 0; i < count && items.length > 0; i++) {
    const total = weights.reduce((a, b) => a + b, 0);
    let r = Math.random() * total;
    let idx = 0;
    for (; idx < weights.length; idx++) { r -= weights[idx]; if (r <= 0) break; }
    if (idx >= items.length) idx = items.length - 1;
    picked.push(items[idx]);
    items.splice(idx, 1);
    weights.splice(idx, 1);
  }
  return picked;
}
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

// ============== RENDERING ==============
let mainEl, statsEl;
function initUI() {
  const style = root.createEl("style");
  style.textContent = `
    .vm-card { border: 1px solid var(--background-modifier-border); padding: 18px 22px; margin-bottom: 18px; border-radius: 8px; background: var(--background-primary-alt); }
    .vm-stats { display: flex; gap: 6px 18px; flex-wrap: wrap; padding: 12px 16px; background: var(--background-secondary); border-radius: 6px; margin-bottom: 18px; font-size: 0.9em; color: var(--text-muted); align-items: baseline; }
    .vm-stat { display: inline-flex; gap: 5px; white-space: nowrap; align-items: baseline; }
    .vm-stat b { color: var(--text-normal); font-weight: 600; }
    .vm-label { font-weight: 600; margin: 14px 0 8px; font-size: 0.95em; color: var(--text-normal); }
    .vm-label:first-child { margin-top: 0; }
    .vm-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 4px; }
    .vm-pill { padding: 6px 13px; border: 1px solid var(--background-modifier-border); background: var(--background-secondary); color: var(--text-normal); border-radius: 999px; cursor: pointer; font-size: 0.88em; font-family: inherit; transition: all 100ms ease; }
    .vm-pill:hover { background: var(--background-modifier-hover); }
    .vm-pill.active { background: var(--interactive-accent); color: var(--text-on-accent); border-color: var(--interactive-accent); }
    .vm-toggle { background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 6px 0; font-size: 0.88em; font-family: inherit; }
    .vm-toggle:hover { color: var(--text-normal); }
    .vm-objgrid { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 6px; max-height: 0; overflow: hidden; transition: max-height 200ms ease; }
    .vm-objgrid.open { max-height: 1200px; padding-top: 6px; }
    .vm-obj { display: flex; align-items: center; gap: 8px; padding: 7px 11px; border: 1px solid var(--background-modifier-border); background: var(--background-secondary); border-radius: 6px; cursor: pointer; font-size: 0.85em; color: var(--text-normal); font-family: inherit; transition: all 100ms; text-align: left; }
    .vm-obj:hover { background: var(--background-modifier-hover); }
    .vm-obj.active { background: var(--interactive-accent); color: var(--text-on-accent); border-color: var(--interactive-accent); }
    .vm-obj code { background: transparent; color: inherit; opacity: 0.85; font-size: 0.92em; }
    .vm-obj-count { margin-left: auto; color: var(--text-muted); font-size: 0.85em; }
    .vm-obj.active .vm-obj-count { color: var(--text-on-accent); opacity: 0.8; }
    .vm-range-row { display: flex; align-items: center; gap: 12px; margin: 14px 0; }
    .vm-range { flex: 1; height: 4px; }
    .vm-range-val { font-weight: 600; min-width: 24px; text-align: right; font-variant-numeric: tabular-nums; }
    .vm-summary { font-size: 0.88em; color: var(--text-muted); margin: 10px 0 14px; }
    .vm-summary b { color: var(--text-normal); font-weight: 600; }
    .vm-btn { padding: 10px 18px; border: 1px solid var(--background-modifier-border); background: var(--background-secondary); color: var(--text-normal); border-radius: 6px; cursor: pointer; font-size: 0.95em; font-family: inherit; transition: all 100ms; }
    .vm-btn:hover { background: var(--background-modifier-hover); }
    .vm-btn.primary { background: var(--interactive-accent); color: var(--text-on-accent); border-color: var(--interactive-accent); font-weight: 600; }
    .vm-btn.primary:hover { background: var(--interactive-accent-hover); }
    .vm-btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .vm-actions { display: flex; gap: 8px; flex-wrap: wrap; }
    .vm-game-meta { display: flex; gap: 20px; flex-wrap: wrap; padding: 12px 16px; background: var(--background-secondary); border-radius: 6px; margin-bottom: 16px; font-size: 0.9em; align-items: baseline; }
    .vm-game-meta .meta-item { display: flex; flex-direction: column; gap: 2px; }
    .vm-game-meta .meta-lbl { font-size: 0.78em; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); }
    .vm-game-meta .meta-val { font-weight: 600; font-variant-numeric: tabular-nums; }
    .vm-game-meta .meta-val.ok { color: rgb(63, 185, 80); }
    .vm-game-meta .meta-val.bad { color: rgb(248, 81, 73); }
    .vm-quit { margin-left: auto; padding: 6px 12px; background: transparent; border: 1px solid var(--background-modifier-border); border-radius: 6px; cursor: pointer; color: var(--text-muted); font-size: 0.85em; font-family: inherit; }
    .vm-quit:hover { color: rgb(248, 81, 73); }
    .vm-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 10px; }
    .vm-tile { padding: 13px 15px; border: 1px solid var(--background-modifier-border); background: var(--background-secondary); border-radius: 6px; cursor: pointer; font-family: inherit; color: var(--text-normal); text-align: left; line-height: 1.4; transition: all 120ms; min-height: 80px; display: flex; flex-direction: column; justify-content: center; white-space: normal; word-wrap: break-word; overflow-wrap: break-word; height: auto; }
    .vm-tile:hover:not(:disabled) { background: var(--background-modifier-hover); }
    .vm-tile.term { font-weight: 600; font-size: 0.97em; }
    .vm-tile.def { font-size: 0.87em; color: var(--text-normal); }
    .vm-tile.selected { background: var(--background-modifier-hover); border-color: var(--interactive-accent); box-shadow: 0 0 0 1px var(--interactive-accent); }
    .vm-tile.correct { background: rgba(63, 185, 80, 0.13); border-color: rgba(63, 185, 80, 0.45); }
    .vm-tile.wrong { background: rgba(248, 81, 73, 0.13); border-color: rgba(248, 81, 73, 0.45); }
    .vm-tile.gone { opacity: 0; pointer-events: none; transform: scale(0.95); }
    .vm-review { display: flex; flex-direction: column; gap: 6px; }
    .vm-review-item { display: grid; grid-template-columns: minmax(140px, 220px) 1fr 50px; gap: 14px; padding: 11px 14px; border: 1px solid var(--background-modifier-border); background: var(--background-secondary); border-radius: 6px; align-items: baseline; font-size: 0.92em; line-height: 1.4; }
    .vm-review-item.miss { border-left: 3px solid rgba(248, 81, 73, 0.55); }
    .vm-review-item.hit  { border-left: 3px solid rgba(63, 185, 80, 0.55); }
    .vm-review-term { font-weight: 600; }
    .vm-review-def { color: var(--text-normal); white-space: normal; word-wrap: break-word; overflow-wrap: break-word; }
    .vm-review-obj { font-size: 0.82em; color: var(--text-muted); font-family: var(--font-monospace); text-align: right; }
    .vm-sym { display: inline-block; width: 1em; text-align: center; font-weight: 600; margin-right: 4px; }
    .vm-sym.ok { color: rgb(63, 185, 80); }
    .vm-sym.bad { color: rgb(248, 81, 73); }
    @media (max-width: 600px) {
      .vm-grid { grid-template-columns: repeat(2, 1fr); }
      .vm-review-item { grid-template-columns: 1fr; gap: 4px; }
      .vm-review-obj { text-align: left; }
    }
  `;
  statsEl = root.createDiv({ cls: "vm-stats" });
  mainEl = root.createDiv();
  renderSetup();
}

function renderStats() {
  let m = [0, 0, 0, 0];
  let c = 0, w = 0;
  VOCAB.forEach(t => { m[masteryOf(t.id)]++; const p = progress[t.id]; if (p) { c += p.c; w += p.w; } });
  const seen = m[1] + m[2] + m[3];
  const acc = (c + w) > 0 ? Math.round(100 * c / (c + w)) + "%" : "—";
  statsEl.empty();
  function stat(num, label) {
    const item = statsEl.createDiv({ cls: "vm-stat" });
    item.createEl("b", { text: String(num) });
    item.createSpan({ text: label });
  }
  stat(m[3], "mastered");
  stat(m[2], "review");
  stat(m[1], "learning");
  stat(m[0], "new");
  stat(seen + "/" + VOCAB.length, "encountered");
  stat(acc, "lifetime accuracy");
}

function renderSetup() {
  renderStats();
  mainEl.empty();
  const card = mainEl.createDiv({ cls: "vm-card" });

  card.createDiv({ cls: "vm-label", text: "Scope" });
  const domainRow = card.createDiv({ cls: "vm-row" });
  const allPill = domainRow.createEl("button", { cls: "vm-pill" + (settings.scope.type === "all" ? " active" : ""), text: "All" });
  allPill.onclick = () => { settings.scope = { type: "all", value: null }; saveState(); renderSetup(); };
  Object.keys(DOMAINS).forEach(n => {
    const active = settings.scope.type === "domain" && settings.scope.value === n;
    const b = domainRow.createEl("button", { cls: "vm-pill" + (active ? " active" : ""), text: "Domain " + n });
    b.onclick = () => { settings.scope = { type: "domain", value: n }; saveState(); renderSetup(); };
  });

  const toggle = card.createEl("button", { cls: "vm-toggle", text: (settings._showAdv ? "▾" : "▸") + " Or pick a specific objective" });
  const objGrid = card.createDiv({ cls: "vm-objgrid" + (settings._showAdv ? " open" : "") });
  toggle.onclick = () => {
    settings._showAdv = !settings._showAdv;
    toggle.setText((settings._showAdv ? "▾" : "▸") + " Or pick a specific objective");
    objGrid.classList.toggle("open", settings._showAdv);
  };
  Object.entries(OBJECTIVE_TITLES).forEach(([code, title]) => {
    const active = settings.scope.type === "objective" && settings.scope.value === code;
    const b = objGrid.createEl("button", { cls: "vm-obj" + (active ? " active" : "") });
    b.createEl("code", { text: code });
    b.createSpan({ text: title });
    b.createSpan({ cls: "vm-obj-count", text: String((BY_OBJ[code] || []).length) });
    b.onclick = () => { settings.scope = { type: "objective", value: code }; saveState(); renderSetup(); };
  });

  card.createDiv({ cls: "vm-label", text: "Pairs per round" });
  const rangeRow = card.createDiv({ cls: "vm-range-row" });
  const range = rangeRow.createEl("input", { cls: "vm-range", type: "range", attr: { min: "4", max: "12", step: "1", value: String(settings.roundSize) } });
  const rangeVal = rangeRow.createEl("span", { cls: "vm-range-val", text: String(settings.roundSize) });
  range.oninput = () => {
    settings.roundSize = parseInt(range.value);
    rangeVal.setText(String(settings.roundSize));
    renderSum();
  };

  const sumEl = card.createDiv({ cls: "vm-summary" });
  function renderSum() {
    const pool = termsInScope(settings.scope);
    sumEl.empty();
    sumEl.createEl("b", { text: scopeLabel(settings.scope) });
    sumEl.createSpan({ text: " · " + pool.length + " terms available · " + Math.min(settings.roundSize, pool.length) + " pairs this round" });
    startBtn.disabled = pool.length < 2;
  }

  const startBtn = card.createEl("button", { cls: "vm-btn primary", text: "Start round" });
  startBtn.onclick = () => { saveState(); startRound(); };
  renderSum();
}

let round = null;

function startRound() {
  const pool = termsInScope(settings.scope);
  if (pool.length < 2) return;
  const count = Math.min(settings.roundSize, pool.length);
  const pairs = pickRoundTerms(pool, count);
  const tiles = [];
  pairs.forEach((p, idx) => {
    tiles.push({ id: "t" + idx, pairIdx: idx, kind: "term", text: p.term, term: p });
    tiles.push({ id: "d" + idx, pairIdx: idx, kind: "def",  text: p.def,  term: p });
  });
  round = {
    pairs, tiles: shuffle(tiles), selected: [],
    matchedPairs: new Set(), missCountByPair: {},
    totalAttempts: 0, totalCorrect: 0,
    startTime: Date.now(), locked: false,
  };
  pairs.forEach(p => { round.missCountByPair[p.id] = 0; });
  renderGame();
}

function renderGame() {
  mainEl.empty();
  const card = mainEl.createDiv({ cls: "vm-card" });
  const meta = card.createDiv({ cls: "vm-game-meta" });
  metaItem(meta, "Scope", scopeLabel(settings.scope), "", null);
  metaItem(meta, "Matched", round.matchedPairs.size + "/" + round.pairs.length, "ok", "matched-val");
  metaItem(meta, "Misses", "0", "bad", "misses-val");
  const quit = meta.createEl("button", { cls: "vm-quit", text: "Quit round" });
  quit.onclick = quitRound;

  const grid = card.createDiv({ cls: "vm-grid" });
  round.tiles.forEach(t => {
    const el = grid.createEl("button", { cls: "vm-tile " + (t.kind === "term" ? "term" : "def"), text: t.text });
    el.dataset.id = t.id;
    el.onclick = () => onTileClick(el, t);
  });
}

function metaItem(parent, lbl, val, cls, id) {
  const wrap = parent.createDiv({ cls: "meta-item" });
  wrap.createDiv({ cls: "meta-lbl", text: lbl });
  const v = wrap.createDiv({ cls: "meta-val" + (cls ? " " + cls : ""), text: val });
  if (id) v.id = "vm-" + id;
}

function onTileClick(el, tile) {
  if (!round || round.locked) return;
  if (el.classList.contains("gone") || el.classList.contains("correct")) return;
  if (round.selected.find(t => t.id === tile.id)) {
    round.selected = round.selected.filter(t => t.id !== tile.id);
    el.classList.remove("selected");
    return;
  }
  if (round.selected.length >= 2) return;
  round.selected.push(tile);
  el.classList.add("selected");
  if (round.selected.length === 2) evaluatePair();
}

function evaluatePair() {
  const [a, b] = round.selected;
  round.totalAttempts++;
  const isMatch = a.pairIdx === b.pairIdx && a.kind !== b.kind;
  const elA = mainEl.querySelector('[data-id="' + a.id + '"]');
  const elB = mainEl.querySelector('[data-id="' + b.id + '"]');
  if (isMatch) {
    round.totalCorrect++;
    round.matchedPairs.add(a.pairIdx);
    elA.classList.remove("selected"); elA.classList.add("correct");
    elB.classList.remove("selected"); elB.classList.add("correct");
    round.locked = true;
    setTimeout(() => {
      elA.classList.add("gone"); elB.classList.add("gone");
      round.selected = []; round.locked = false;
      updateMeta();
      if (round.matchedPairs.size === round.pairs.length) endRound();
    }, 400);
  } else {
    const pairs = new Set([a.pairIdx, b.pairIdx]);
    pairs.forEach(pi => { round.missCountByPair[pi]++; });
    elA.classList.remove("selected"); elA.classList.add("wrong");
    elB.classList.remove("selected"); elB.classList.add("wrong");
    round.locked = true;
    setTimeout(() => {
      elA.classList.remove("wrong"); elB.classList.remove("wrong");
      round.selected = []; round.locked = false;
      updateMeta();
    }, 700);
  }
}

function updateMeta() {
  const m = document.getElementById("vm-matched-val");
  if (m) m.textContent = round.matchedPairs.size + "/" + round.pairs.length;
  const miss = document.getElementById("vm-misses-val");
  if (miss) miss.textContent = String(round.totalAttempts - round.totalCorrect);
}

function endRound() {
  round.endTime = Date.now();
  round.pairs.forEach(p => {
    const misses = round.missCountByPair[p.id];
    if (misses === 0) {
      recordResult(p.id, true);
    } else {
      const capped = Math.min(3, misses);
      for (let i = 0; i < capped; i++) recordResult(p.id, false);
      recordResult(p.id, true);
    }
  });
  saveState();
  renderSummaryScreen();
}

function quitRound() {
  if (!round) return;
  if (!confirm("Quit this round? Progress for this round will not be recorded.")) return;
  round = null;
  renderSetup();
}

function renderSummaryScreen() {
  renderStats();
  mainEl.empty();
  const r = round;
  const clean = r.pairs.filter(p => r.missCountByPair[p.id] === 0).length;
  const total = r.pairs.length;
  const stumbles = r.totalAttempts - r.totalCorrect;
  const acc = r.totalAttempts > 0 ? Math.round(100 * r.totalCorrect / r.totalAttempts) : 0;

  const card = mainEl.createDiv({ cls: "vm-card" });
  const header = card.createDiv();
  header.style.marginBottom = "14px";
  const titleText = (clean === total) ? "Flawless round."
                  : (clean / total >= 0.7) ? "Solid round."
                  : "Round logged.";
  const titleDiv = header.createDiv();
  titleDiv.style.cssText = "font-size:1.15em;font-weight:600;margin-bottom:4px";
  if (clean === total || clean / total >= 0.7) {
    titleDiv.createEl("span", { cls: "vm-sym ok", text: "✓" });
  }
  titleDiv.createSpan({ text: titleText });
  const sub = header.createDiv();
  sub.style.cssText = "color:var(--text-muted);font-size:0.9em";
  sub.setText(clean + "/" + total + " first-try · " +
    stumbles + " miss" + (stumbles === 1 ? "" : "es") + " · " + acc + "% net accuracy");

  card.createDiv({ cls: "vm-label", text: "Review" });
  const reviewList = card.createDiv({ cls: "vm-review" });
  const missed = r.pairs.filter(p => r.missCountByPair[p.id] > 0);
  const got = r.pairs.filter(p => r.missCountByPair[p.id] === 0);
  []
    .concat(missed.map(p => ({ p, missed: true })))
    .concat(got.map(p => ({ p, missed: false })))
    .forEach(({ p, missed }) => {
      const item = reviewList.createDiv({ cls: "vm-review-item " + (missed ? "miss" : "hit") });
      const termEl = item.createDiv({ cls: "vm-review-term" });
      termEl.createEl("span", { cls: "vm-sym " + (missed ? "bad" : "ok"), text: missed ? "✗" : "✓" });
      termEl.createSpan({ text: p.term });
      item.createDiv({ cls: "vm-review-def", text: p.def });
      item.createDiv({ cls: "vm-review-obj", text: p.obj });
    });

  const actions = card.createDiv({ cls: "vm-actions" });
  actions.style.marginTop = "18px";
  const again = actions.createEl("button", { cls: "vm-btn primary", text: "Another round" });
  again.onclick = () => startRound();
  const diff = actions.createEl("button", { cls: "vm-btn", text: "Change scope" });
  diff.onclick = () => { round = null; renderSetup(); };
}
```

---

## How it works

**Scope.** Pick *All*, a domain (1–5), or a specific objective (1.1–5.6). The trainer pulls pairs from whatever you chose.

**Selection is weighted, not random.** Each term carries a per-vault mastery state stored in `sessions/vocab-match-state.json`:

| Mastery   | Trigger                                  | Sampling weight |
|-----------|------------------------------------------|----------------|
| new       | never seen                               | 6.0 |
| learning  | seen, current streak 0–2 (or recent miss) | 4.0 |
| review    | correct streak 3–4                       | 1.6 |
| mastered  | streak ≥ 5 and lifetime error rate < 25% | 0.4 |

On top of base weight: terms with higher error rates get up to a 3× boost, and mastered terms get a freshness boost the longer they've gone unseen (spaced-repetition lite). Net effect — the trainer prioritizes terms you've missed, fills in the rest with new material, and pulls mastered terms back occasionally to keep them sharp.

**Round result → mastery update.** Pairs cleared first-try register one correct attempt. Pairs that took misses register the misses (capped at 3) followed by one correct attempt — so they degrade in mastery proportional to how much you fought them.

**Vocab source.** The trainer loads from [[synthesis/vocab|synthesis/vocab.md]] at runtime — no duplicated data, no separate sync to maintain.

**Reset progress** — delete `sessions/vocab-match-state.json` from your vault and reload the page.

## Misses log

- *(none yet)*
