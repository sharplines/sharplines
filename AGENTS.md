# AGENTS.md — Sharplines Studio site

Working notes for any agent on this repo. Keep this current as decisions land.

## Source of truth
- **`docs/site-spec.md`** is the authoritative build spec (voice, design system, page
  specs, trade data, SEO). When code and spec conflict, the spec wins. Read it before
  changing anything substantial.
- Business: **Sharplines Studio** — digital growth studio for local GTA businesses
  (websites, local SEO, reviews, booking, AI phone intake, social, ads, dashboard).
- Domain (future): **sharplines.ca**. Live preview: https://sharplines-studio.netlify.app

## Owner priorities (from Arya, over the spec baseline)
- **Mobile is the product.** ~80% of visitors are on phones. Design/verify mobile first;
  desktop is secondary. Every new section must be checked at ≤400px.
- **When in doubt, optimise for leads.** Prefer choices that get more form fills / calls.
- **Use real/stock imagery, never empty boxes.** No blank placeholder frames in front of
  the user — put a real or stock image in every slot.
- Casing is **"Sharplines"** (not "SharpLines"). Wordmark underlines "Sharp" in chalk blue.

## Stack & deploy
- Astro (static) + vanilla CSS with tokens (no Tailwind). Fonts via Fontsource.
- Repo: github.com/sharplines/sharplines. Host: Netlify site `sharplines-studio`.
- Deploy (manual for now): `npm run build` then
  `NODE_EXTRA_CA_CERTS=/etc/ssl/cert.pem TMPDIR=./.tmp netlify deploy --prod --dir=dist`.
  The `TMPDIR` + `NODE_EXTRA_CA_CERTS` env vars are required in this sandbox (temp-dir
  perms + TLS). Continuous deploy from GitHub is **not** wired yet — TODO.
- CLIs are authed as the **sharplines** GitHub account and **Sharplines** Netlify team —
  keep separate from Provolta.

## Design system (v2 — see spec §3, updated 2026-07-03)
- **Warm colour-block style** (replaced the earlier chalk-blue "instrument" look at Arya's
  direction): full-bleed photo hero + full-width saturated colour blocks, one typeface, big
  display type. Bold in colour/composition, disciplined in copy/layout.
- Palette: `--green #0E2F28` · `--coral #F4462F` (+`--coral-dk #DB3B27`) · `--mint #E6EFE9`
  (page bg) · `--ivory #FFFFF0` · `--ink #171717`. Only these six. Tokens in `src/styles/global.css`.
- Type: **one family — Figtree** (`@fontsource-variable/figtree`), stand-in for the reference's
  licensed Halyard Display. Headings 400–500, -0.02em; eyebrows uppercase +0.16em in coral.
- Signature: full-bleed photo hero + alternating coral/green/mint blocks; a coral "sharp line"
  snaps under the hero keyword (`.line-accent`) and is the link-hover underline.
  Respect `prefers-reduced-motion` (all handled in global.css).
- Home colour rhythm: hero(video, ~62vh not full-screen) → who-we-help(coral, signature; sits
  directly under the hero) → proof(green) → services(mint) → dashboard(coral) → results(mint) →
  how(green) → founders(mint) → FAQ(mint) → CTA(green) → footer(ink).
- Hero media: looping muted `public/videos/hero.mp4` (2.8MB Pexels café clip, free licence),
  poster `public/images/hero-poster.jpg` (a frame of it). TODO(arya): supply a better clip.
- **Voice (MANDATORY for all visitor-facing text): follow `.claude/skills/site-copy/SKILL.md`**
  (invoke the `site-copy` skill before writing or editing any copy — pages, CTAs, FAQs,
  meta tags, alt text, form messages). Set by Arya 2026-07-05: warm/plain Fieldmark-style
  register, **no em-dashes ever in visible copy**, no AI-sounding constructions, banned-word
  list, lead-gen + SEO rules. Spec §2 carries the summary; the skill wins over older §6–§7
  sample copy. Only published client metric is Provolta's client-reported 2×. Never invent
  testimonials/ratings/agency years.

## Structure
- `src/components/` — Nav, Footer, MobileCTA, Hero, ProofBar, ServiceCard, CaseStudyFeature,
  StepTimeline, TradeGrid, FounderStrip, FAQ, ContactForm, CTABand.
- `src/data/trades.ts` — 8 trade tiles (slug/label/hook) for Nav dropdown + TradeGrid.
  Full trade-page content becomes a content collection when `/for/[slug]` is built.
- `src/layouts/Base.astro` — fonts, SEO/OG, JSON-LD (ProfessionalService, no address), Nav
  + Footer + MobileCTA, fade-up observer.

## Decisions & deviations (revisit as needed)
- **ContactForm delivery**: posts to **Netlify Forms** today (works with zero keys, inline
  success state) instead of the spec's Resend API route — because no `RESEND_API_KEY` yet
  and a working form beats a blocked one. Migrate to Resend (spec §8) when Arya supplies a
  key. Honeypot + 2.5s min-fill spam guard included.
- **Mobile sticky CTA bar** (`MobileCTA.astro`) added for lead capture (not in original spec;
  now documented in §3.4) — coral "free preview" + tap-to-call, shown < 940px.
- **v2 rebrand (2026-07-03)**: home restyled to the warm colour-block look (see Design system).
  Content/sections/voice unchanged — only the visual layer + `docs/site-spec.md` §3 changed.
- **Fonts**: single family **Figtree** via `@fontsource-variable/figtree` (dropped the v1
  Archivo/Instrument Sans/IBM Plex Mono trio).
- **@astrojs/sitemap** deferred — its current version crashes this build; re-add during the
  SEO pass (spec §11 late step) with a pinned/working version.
- **Images** (`public/images/`): hero is now a looping video (`public/videos/hero.mp4`) with
  poster `hero-poster.jpg`. `founder-arya.jpg` / `founder-amir.jpg` = real founder photos Arya
  supplied (Image #1 = Amir, #2 = Arya), first names only in captions + bio. `provolta-site.png`
  = real screenshot of provolta.ca via thum.io (Arya's own client). Plain `<img loading=lazy>`;
  migrate to Astro `<Image>` (AVIF/WebP) in the Lighthouse/polish pass.
- **Home services grid = 6** (not 7): dropped "Social media, handled" to make a clean 3×2 and
  keep the strongest direct lead-drivers. Social still lives in the footer + on /services. Swap
  if Arya prefers a different six.

## Open TODO(arya) (from spec §10)
416/647 phone (currently 514, reads as Montreal) · logo files · founder photos · Provolta
permission + quote + 3 screenshots · Resend/Web3Forms key · favicon (temp coral "S" on green shipped).

## Status
- **Home page `/`** built and deployed in the v2 warm colour-block style (all §6.1 sections).
  Verified on desktop; mobile authored mobile-first but NOT yet screenshot-verified (the Chrome
  extension viewport is locked at desktop width — check on a real phone).
- Awaiting Arya's greenlight before building the rest (services, work, about, contact, 8 trade
  pages, privacy, 404). Build order: spec §11.
