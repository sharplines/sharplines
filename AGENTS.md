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

## Design system (see spec §3)
- Palette: `--paper #FAF9F7` · `--ink #17181C` · `--steel #6B7080` · `--hairline #E3E1DC`
  · `--chalk #2946E8` · `--chalk-dk #1C31C7`. No gradients, no other accents.
- Type: Archivo (display 600/700), Instrument Sans (body 400/500), IBM Plex Mono
  (mono eyebrows/labels, uppercase +0.08em). Tokens in `src/styles/global.css`.
- Signature: the **chalk line** — snaps under the hero's key phrase, is the link-hover
  underline + focus accent, and a left-gutter rail on desktop (`.rail`/`.rail__tick`).
  Respect `prefers-reduced-motion` (all handled in global.css).
- Voice (spec §2): plain, concrete, sentence case, no exclamation marks. **Banned words:**
  solutions, synergy, leverage, cutting-edge, revolutionize, digital transformation,
  unleash, empower, elevate, seamless, world-class. Only published client metric is
  Provolta's client-reported 2×. Never invent testimonials/ratings/agency years.

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
- **Mobile sticky CTA bar** (`MobileCTA.astro`) added for lead capture (not in spec) — free
  preview + tap-to-call, ≤900px only. Justified by the mobile/leads priorities above.
- **Fonts**: Fontsource per spec (was briefly a Google Fonts link during the earlier
  fieldmark experiment — that whole direction is discarded).
- **@astrojs/sitemap** deferred — its current version crashes this build; re-add during the
  SEO pass (spec §11 late step) with a pinned/working version.
- **Images**: founders = Unsplash stock portraits (grayscale, clearly placeholder, 4:5,
  `TODO(arya)` to replace). Case study = live screenshot of provolta.ca via thum.io
  (real asset — Arya's own client). Using plain `<img loading=lazy>`; migrate to Astro
  `<Image>` (AVIF/WebP) in the Lighthouse/polish pass.

## Open TODO(arya) (from spec §10)
416/647 phone (currently 514, reads as Montreal) · logo files · founder photos · Provolta
permission + quote + 3 screenshots · Resend/Web3Forms key · favicon (temp chalk "S" shipped).

## Status
- **Home page `/`** built and deployed (all §6.1 sections). Awaiting Arya's greenlight
  before building the rest (services, work, about, contact, 8 trade pages, privacy, 404).
- Build order for the rest: spec §11.
