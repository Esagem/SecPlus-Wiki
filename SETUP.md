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

## Optional: Obsidian for direct editing

Open `C:\Users\elimu\SecPlus-Wiki\wiki` as an Obsidian vault. You can edit pages directly and push to GitHub; the MCP server will see the new content on the next read. The concurrent-write detection in the Worker prevents silent overwrites if you edit in Obsidian while a Claude session is also editing — the second writer gets a clear "re-read and retry" error.

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
