# Setup — SecPlus-Wiki

End-to-end deploy from your Windows machine. Plan ~20 minutes if Cloudflare and GitHub are warm.

Throughout: project lives at `C:\Users\elimu\SecPlus-Wiki`, GitHub user `Esagem`, repo `SecPlus-Wiki`.

Commands shown for **PowerShell**. If you prefer Git Bash, the unix forms in the original instructions work there.

## What you need

- GitHub account (you have one: `Esagem`).
- Cloudflare account (free tier is fine).
- Node.js 18+. Verify: `node --version`.
- `wrangler` CLI: `npm install -g wrangler` (or use `npx wrangler` in each step).

## Step 1 — Create the GitHub repo

1. On github.com → **New repository** → name `SecPlus-Wiki`, owner `Esagem`. Private. Do not initialize with a README (you already have one).
2. From the project folder:

```powershell
cd C:\Users\elimu\SecPlus-Wiki
git init
git add .
git commit -m "Initial bootstrap"
git branch -M main
git remote add origin https://github.com/Esagem/SecPlus-Wiki.git
git push -u origin main
```

That puts the wiki content AND the Worker code in the same repo. The Worker only ever reads/writes the `wiki/` subfolder.

## Step 2 — Create a GitHub PAT for the Worker

1. GitHub → Settings → Developer settings → **Personal access tokens** → **Fine-grained tokens** → **Generate new token**.
2. Name: `secplus-wiki-mcp`.
3. Expiration: 1 year.
4. Resource owner: `Esagem`.
5. Repository access: **Only select repositories** → `SecPlus-Wiki`.
6. Repository permissions:
   - **Contents**: Read and write
   - **Metadata**: Read-only (auto-included)
7. Generate. Copy the token immediately — you won't see it again.

## Step 3 — Configure the Worker

`wrangler.toml` is already wired for `Esagem/SecPlus-Wiki`. Just install deps and set secrets:

```powershell
cd C:\Users\elimu\SecPlus-Wiki\server
npm install

# Paste the PAT from Step 2 when prompted:
npx wrangler secret put GITHUB_TOKEN

# Optional: gate mutating tools behind a bearer token.
# Skip if you're OK with anyone hitting the URL being able to write.
npx wrangler secret put AUTH_TOKEN
# paste a long random string — keep it; you'll use it in the Claude connector config
```

You'll be asked to log into Cloudflare on the first wrangler call — that opens a browser. Allow it, come back to the terminal.

If you skip `AUTH_TOKEN`, mutating calls work without auth. Anyone with your Worker URL can write. For a personal study wiki on a non-obvious URL this is usually acceptable.

## Step 4 — Deploy

```powershell
npx wrangler deploy
```

Output:

```
Total Upload: ~30 KiB
Uploaded secplus-wiki-mcp (1.2 sec)
Published secplus-wiki-mcp (1.8 sec)
  https://secplus-wiki-mcp.<your-subdomain>.workers.dev
```

Open the URL in a browser — you should see a plain-text "secplus-wiki MCP server" landing message. That confirms the Worker is alive.

## Step 5 — Smoke test the tools

```powershell
# List the 10 tools the server advertises:
curl.exe -s -X POST https://secplus-wiki-mcp.<your-subdomain>.workers.dev/mcp `
  -H 'Content-Type: application/json' `
  -d '{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"tools/list\"}'

# Read the wiki index:
curl.exe -s -X POST https://secplus-wiki-mcp.<your-subdomain>.workers.dev/mcp `
  -H 'Content-Type: application/json' `
  -d '{\"jsonrpc\":\"2.0\",\"id\":2,\"method\":\"tools/call\",\"params\":{\"name\":\"wiki_index\",\"arguments\":{}}}'
```

Note: PowerShell has its own `curl` alias that points to `Invoke-WebRequest` — use `curl.exe` to invoke real curl. The backticks (` ` `) are PowerShell line continuations.

If `wiki_index` returns text starting with `--- title: "Security+ Study Wiki — Master Index"`, you're live.

## Step 6 — Connect from Claude

In claude.ai → Settings → Connectors → **Add custom connector**:

- **Name:** `secplus-wiki`
- **URL:** `https://secplus-wiki-mcp.<your-subdomain>.workers.dev/mcp`
- **Auth:** if you set `AUTH_TOKEN` in Step 3, paste it as a bearer token. Otherwise leave blank.

Save. The 10 wiki tools should appear in the connector's tool list within a few seconds.

## Step 7 — Load your transcripts

You already have the regrouped 29 files in `messer_transcripts_regrouped.zip`. Drop them into the wiki:

```powershell
cd C:\Users\elimu\SecPlus-Wiki

# Extract the zip's transcripts/ contents directly into wiki/transcripts/
# (Adjust the source path to wherever you saved the zip.)
Expand-Archive -Path "$HOME\Downloads\messer_transcripts_regrouped.zip" -DestinationPath ".\_tmp_unzip" -Force
Copy-Item ".\_tmp_unzip\transcripts\*.md" ".\wiki\transcripts\" -Force
Remove-Item -Recurse -Force ".\_tmp_unzip"

git add wiki/transcripts/
git commit -m "Seed Professor Messer SY0-701 transcripts (121 videos, 29 files)"
git push
```

Once they're in GitHub, the Worker can read them via `wiki_read`/`wiki_read_many`.

## Step 8 — First study session

In Claude, with the connector enabled:

> Using the secplus-wiki MCP. Read STUDY.md and _index.md first, then distill the 1.4 transcript into concept pages and an objective page.

Claude reads the operating schema, then starts writing concept pages under `concepts/` and an objective page at `objectives/1.4.md`, following the templates in STUDY.md. Every mutating call logs to `_log.md` automatically.

## Step 9 — Obsidian client setup (recommended)

The wiki is plain markdown and works in any editor, but the interactive quizzes and two-way sync only work in Obsidian with the right plugins. Open `C:\Users\elimu\SecPlus-Wiki\wiki` as an Obsidian vault, then install the following.

### Dataview (required for quizzes and dynamic tables)

Powers the interactive quiz UI and any Dataview queries embedded in pages.

1. Settings → Community plugins → **Turn on community plugins** (if not already)
2. Browse → search **"Dataview"** by Michael Brenan → Install → Enable
3. Settings → Dataview → ensure **"Enable JavaScript queries"** is on (off by default for security)

Without this plugin, quiz pages render as raw code blocks instead of interactive widgets.

### Obsidian Git (recommended for two-way sync)

Auto-pulls MCP writes from Claude and auto-pushes your local edits back to GitHub. Without it, you `git pull` and `git push` manually.

1. Settings → Community plugins → Browse → **"Obsidian Git"** by Vinzent → Install → Enable
2. Open the plugin's settings:
   - **Auto pull interval (minutes):** `1` — picks up MCP writes within a minute
   - **Pull updates on startup:** on
   - **Vault backup interval (minutes):** `5` — auto-commits and pushes your manual edits. Set to `0` to disable if you only edit through Claude.
   - **Commit message:** `obsidian: {{date}}` — distinguishes your manual commits from MCP writes in `_log.md`
3. Authentication on first push:
   - HTTPS: Windows' Git Credential Manager handles it — login popup appears the first time
   - SSH: if you have a key set up, `git remote set-url origin git@github.com:Esagem/SecPlus-Wiki.git`

**Conflict caveat:** if you edit a page in Obsidian while Claude is also editing it via MCP, you'll get a merge conflict on the next pull. The MCP server's SHA-based concurrent-write detection prevents silent overwrites server-side. Resolve manually in the file — rare in practice.

### Sortable (optional, for the vocab table)

Adds click-to-sort behavior to plain markdown tables. Useful for `synthesis/vocab.md` — sort by term, objective, or tags by clicking the column header.

Settings → Community plugins → Browse → **"Sortable"** by Vasile Câmpeanu → Install → Enable. Reading view tables become sortable.

### Quiz mechanics

Quiz pages render as interactive widgets in Reading view (or Live Preview) once Dataview's JavaScript queries are enabled. Click an option:

- Green → correct, the question locks
- Red → wrong, that option disables and you keep trying
- Every option carries a one-line explanation, right or wrong

Quiz state is purely runtime UI — it doesn't write back to the markdown file, so reloading resets the quiz. To leave a durable trace, ask Claude to write a session note (`sessions/YYYY-MM-DD-<slug>.md`) with your score and missed questions; that's a real file change and pushes to GitHub.

### Regenerating the video index

`wiki/synthesis/video-index.md` was built by a one-time script that pulls playlist metadata from YouTube. To regenerate (e.g., after new videos are added to the Messer playlist):

```powershell
cd C:\Users\elimu\SecPlus-Wiki
pip install yt-dlp --quiet
python fetch_video_urls.py
git add wiki/synthesis/video-index.md wiki/transcripts/video_map.json
git commit -m "Regenerate video index"
git push
```

The script is idempotent — overwrites the existing `video-index.md` plus `transcripts/video_map.json` (the programmatic source of truth in raw JSON form).

## Troubleshooting

- **`wiki_index` returns "Page not found":** Worker can't see `wiki/_index.md`. Verify the PAT has Contents read access to `Esagem/SecPlus-Wiki` and that you pushed the wiki content in Step 1.
- **Mutating calls return "Authentication required":** You set `AUTH_TOKEN` but Claude isn't sending it. Edit the connector in Claude and paste the token under bearer auth.
- **Edits work but `_log.md` never updates:** The PAT is probably read-only. Recreate it with Contents read+write.
- **`wiki_search` is slow on first run:** Expected — it fetches every page to build the BM25 index. Fine for <500 pages; add KV caching later if you outgrow that.
- **`npm install` complains about missing peer deps:** Wrangler 3 sometimes warns about TypeScript versions; safe to ignore as long as `wrangler deploy` works.

## Rotating the GitHub PAT

When the PAT expires:

```powershell
cd C:\Users\elimu\SecPlus-Wiki\server
npx wrangler secret put GITHUB_TOKEN
# paste the new PAT
```

No redeploy needed — secrets are picked up live.
