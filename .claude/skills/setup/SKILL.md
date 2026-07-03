---
name: setup
description: Bootstrap the SharpLines agency site on the same tech stack as Provolta (Astro + GitHub + Netlify + Netlify Forms/Functions + Pushover + optional GA4/GTM), but under SharpLines' own accounts. Use when setting up the repo, hosting, forms, lead notifications, analytics, or domain for the first time.
---

# Bootstrap the SharpLines site (same stack as Provolta, new accounts)

SharpLines is a web design / ads / social-media agency. The site reuses the exact
Provolta tech setup: **Astro static build → GitHub → Netlify continuous deploy**, with
**Netlify Forms + a Netlify Function that pushes leads to Pushover**, and optional GA4/GTM.
Everything below runs under **SharpLines' own accounts**, kept fully separate from Provolta.

> Reference (Provolta, do not reuse its accounts): repo `github.com/provoltainc/provolta-site`,
> Netlify site `pro-volta`, domain `provolta.ca`.

## Accounts to create (checklist, all new)

- [ ] **GitHub** account or org for SharpLines (e.g. `sharplinesagency`) + a repo
- [ ] **Netlify** account (sign up / log in with the SharpLines GitHub account)
- [ ] **Pushover** account (for lead push notifications) — app token + user key
- [ ] **Google account** for **GA4 + GTM** (optional, ID-gated) and **Search Console**
- [ ] **Domain registrar** for the SharpLines domain (or buy DNS via Netlify)

Use one shared inbox (e.g. `hello@sharplines.xx`) as the login email for all of them so
handoff is clean.

## 1. Code — GitHub

The site is a standard Astro project. Two ways to seed the repo:

**A. Copy the Provolta codebase as a starting point** (fastest):
```
cp -R /Users/apple/projects/provolta-site/. /Users/apple/projects/sharplines/
cd /Users/apple/projects/sharplines
rm -rf node_modules dist .git
git init -b main
```
Then rebrand: `src/config/site.ts` (name, phone, email, services, areas), `astro.config.mjs`
(`site:` URL, drop the `fa/fr/zh` i18n locales unless the agency needs them), copy in new
`public/images/`, and update `netlify.toml` comments. Keep the component system and tokens.

**B. Start clean** with `npm create astro@latest` and add `@astrojs/sitemap`.

Create the GitHub repo and push (GitHub CLI, logged in as the SharpLines account):
```
gh auth login                       # authenticate as the SharpLines GitHub user/org
gh repo create sharplinesagency/sharplines-site --private --source=. --remote=origin
git add -A && git commit -m "Initial SharpLines site"
git push -u origin main
```
> Make sure `gh auth status` shows the SharpLines account, not `provoltainc`. Use
> `gh auth switch` if both are logged in.

## 2. Hosting + CI — Netlify

1. In Netlify → **Add new site → Import from Git** → pick the SharpLines GitHub repo.
2. Build settings come from `netlify.toml` (already in the repo):
   - Build command: `npm run build`
   - Publish dir: `dist`
   - `NODE_VERSION = 22`
   - Functions dir: `netlify/functions` (esbuild bundler)
3. Deploy. Every push to `main` now rebuilds and ships automatically. Note the temp URL
   (e.g. `sharplines.netlify.app`) — rename the site under Site settings if you want.

CLI note (same machine quirk as Provolta): the Netlify CLI needs a CA bundle env var in
non-interactive shells or TLS fails:
```
NODE_EXTRA_CA_CERTS=/etc/ssl/cert.pem netlify api listSites
```

## 3. Lead capture — Netlify Forms

The `QuoteForm` component already posts to Netlify Forms and redirects to `/thank-you/`.
No wiring needed beyond deploying. After the first real submission, forms appear under
**Netlify → Forms**. Turn on **Forms → Notifications → Email** to get leads by email.

## 4. Lead push notifications — Netlify Function + Pushover

`netlify/functions/submission-created.mjs` fires on every verified form submission and
pushes the lead to the owner's phone via Pushover. To activate under SharpLines:

1. Create a **Pushover** account, install the app, note your **user key**.
2. Pushover dashboard → **Create an Application/API Token** (name it "SharpLines Site") →
   note the **API token**.
3. In **Netlify → Site settings → Environment variables**, add:
   - `PUSHOVER_TOKEN` = the SharpLines app token
   - `PUSHOVER_USER`  = the SharpLines user (or group) key
4. Redeploy (env vars only apply to new builds). If either var is missing the function
   no-ops and returns 200, so a misconfig never blocks a real lead.

## 5. Analytics — GA4 / GTM (optional)

Analytics is ID-gated in `src/config/site.ts` (`analytics.gtmId` / `analytics.ga4Id`) —
tags load ONLY when an ID is set; conversion events (`call_click` / `quote_click` /
`generate_lead`) always push to `dataLayer`. To enable:
1. Create a **GA4 property** (get `G-XXXXXXXXXX`) and/or a **GTM container** (`GTM-XXXXXXX`)
   under the SharpLines Google account.
2. Paste the ID(s) into `site.ts`, commit, push.
3. Add the SharpLines domain to **Google Search Console** and submit `sitemap-index.xml`.

## 6. Domain + DNS

1. Register the SharpLines domain (or buy it in Netlify → Domains).
2. Netlify → **Domain management → Add custom domain** → follow the DNS instructions
   (either point the registrar's nameservers to Netlify DNS, or add the A/CNAME records).
3. Netlify provisions HTTPS (Let's Encrypt) automatically once DNS resolves.
4. Update `site:` in `astro.config.mjs` to the final `https://sharplines.xx/` so the
   sitemap and canonical URLs are correct, then push.

## Done / verify

```
npm run build                                          # must end with "Complete!"
git push origin main                                   # ships it
curl -sS -o /dev/null -w "HTTP %{http_code}\n" https://<sharplines-netlify-url>
```
Expect `HTTP 200`. Submit a test lead and confirm the Pushover push + email arrive.

## Account separation reminder

- Keep SharpLines and Provolta on **separate** GitHub, Netlify, and Pushover accounts.
- Before any `git push` / `gh` / `netlify` command, confirm the CLI is authed as the
  SharpLines account, not `provoltainc` / `provoltainc@gmail.com`.
- Once live, add a `deploy` skill mirroring Provolta's for the day-to-day push-to-ship flow.
