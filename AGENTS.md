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
- **Every section must earn its mobile height** (2026-07-05, repeated across sections). Arya
  keeps cutting phone scroll: name-only trade tiles, compact icon-beside-title service cards,
  display headings stepped down on small screens. A visitor should be able to review or skip
  any section in one flick. Build a compact <620–720px variant for anything tall before
  shipping it.
- **When in doubt, optimise for leads.** Prefer choices that get more form fills / calls.
- **Pricing exists to win clients, not margin** (2026-07-05). Published, simple, $0 down;
  Arya is explicitly happy if most clients take the cheapest plan ("Start here" tag lives on
  it). Strip any term that could scare a lead away: he cut "30 days' notice", the ad-spend
  caveat, and buyout mechanics. The client owns their website outright, always say so plainly.
- **Simplify before decorating** (2026-07-05, "focus on what matters"). When a section feels
  off, remove clutter first: repeated link labels, caps micro-labels, fine print, extra
  colour blocks. Fewer, warmer elements beat more elements.
- **Soft-technical aesthetic** (2026-07-05, "less code-like"). Arya likes the engineered look
  but wants it softened for trades owners: warm ivory cards (14px radius + soft shadow;
  buttons/inputs keep 3px), human sentences instead of spec-sheet rows, coral checkmarks over
  terminal dots, no uppercase row labels. "Think deep, coherent, professional and modern."
- **Feature lists are bullets, never paragraphs** (2026-07-05). One item per line; a
  comma-separated prose list is "hard to read".
- **Trust sections stay, but must look premium** (2026-07-05). If something "looks cheap"
  (old founders avatar strip), redesign it in the card language rather than deleting it —
  faces and proof build the trust that makes the pricing land.
- **Blocks share the container width.** Cards/grids must span the same width as the sections
  above and below them; no arbitrary narrower caps.
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
  directly under the hero) → proof(green) → pricing(green, ivory plan cards) → services(mint) →
  dashboard(coral) → results(mint) → how(green) → founders(mint) → FAQ(mint) → CTA(green) →
  footer(ink). (ProofBar + results/case-study are removed from the page "for now" by Arya
  2026-07-05; imports remain, so pricing currently sits right under the coral who-we-help block.)
- Hero media: looping muted `public/videos/hero.mp4` — warm studio/workspace clip Arya supplied
  2026-07-05 (source: stock download "UHD 2560x1080 30fps", compressed to 1920×810 H.264 CRF 28,
  no audio, faststart, 1.6MB via ffmpeg, now installed via brew). Poster
  `public/images/hero-poster.jpg` = its first frame, so playback starts without a jump.
- **Voice (MANDATORY for all visitor-facing text): follow `.claude/skills/site-copy/SKILL.md`**
  (invoke the `site-copy` skill before writing or editing any copy — pages, CTAs, FAQs,
  meta tags, alt text, form messages). Set by Arya 2026-07-05: warm/plain Fieldmark-style
  register, **no em-dashes ever in visible copy**, no AI-sounding constructions, banned-word
  list, lead-gen + SEO rules. Spec §2 carries the summary; the skill wins over older §6–§7
  sample copy. Only published client metric is Provolta's client-reported 2×. Never invent
  testimonials/ratings/agency years.

## Structure
- `src/components/` — Nav, Footer, MobileCTA, Hero, ProofBar, Pricing, ServiceCard,
  CaseStudyFeature, StepTimeline, TradeGrid, FounderStrip, FAQ, ContactForm, CTABand.
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
  (A stock coding photo in the home dashboard card was tried and removed 2026-07-05 at
  Arya's direction — keep that card text-only.)
- **Home services grid = 6** (not 7): dropped "Social media, handled" to make a clean 3×2 and
  keep the strongest direct lead-drivers. Social still lives in the footer + on /services. Swap
  if Arya prefers a different six.
- **Published pricing, $0-down monthly model (Arya, 2026-07-05)**: `Pricing.astro` on home
  before the services grid (spec §6.1 has full copy). Two CAD plans, both $0 down with the
  setup fee waived, anchor (struck) prices beside current: **Growth $179/mo** (was $249;
  site + hosting + unlimited dashboard edits + support; cancel any time; coral border +
  "Start here" tag — Arya wants most clients landing here) and **Autopilot $495/mo** (was
  $849; adds GBP, area pages, reviews, booking, call tracking, monthly report, Google **and
  Meta** ads; 90-day more-leads guarantee). Both plans: monthly, cancel any time, includes
  shown as bulleted lists. The client owns the site outright
  on both plans ("it's their website" — no buyout/12-payment mechanics; an earlier 3-plan
  version with those was replaced same day). Single CTA = free preview (one offer per page).
  Home FAQ #1 and #5 updated to match. Numbers Claude picked for Arya to confirm: $1,000 /
  $2,500 waived-setup anchors.
  **v3 softened card design (Arya, 2026-07-05, "less code-like")**: ivory cards on the green
  block, 14px corners (cards only — buttons/inputs keep the 3px token), soft shadow, coral
  checkmarks instead of dots, upfront+term merged into one sentence under the price, no
  uppercase row labels, one-line tagline per plan. Growth card: 3px coral border +
  coral-tinted shadow.
- **Services grid soften (Arya, 2026-07-05, "a bit soulless / simplify clutter")**: per-card
  coral line icons (inline SVGs in `ServiceCard.astro`), caps "Learn more →" labels removed
  (whole card was already the link; label was also a voice violation), 14px radius on service
  cards + dashboard band to match pricing v3, grid gap 1.25rem. A coral accent card on
  "Websites that sell" was tried and reverted the same day (Arya: keep it light). Mobile
  (<620px): compact cards (icon beside title, tighter padding, 0.92rem blurb) because six
  stacked full cards made the phone scroll too long (`.scard--accent` kept, unused).
- **FounderStrip v2 (Arya, 2026-07-05, "looks cheap")**: replaced the small circular avatars +
  caps labels + detached full-width paragraph with one ivory card (14px radius, soft shadow)
  holding two rounded 4:5 portraits and the bio beside them (stacked on mobile). Kept because
  it builds trust; only the presentation changed, copy untouched.
- **Who-we-help mobile compaction (Arya, 2026-07-05, "too much scroll to reach pricing")**:
  trade tiles are two-column and name-only below 720px (hooks hidden, 0.9rem padding), the
  display heading steps down below 620px. Hooks + big type return on desktop.
- **Contact page `/contact` (2026-07-05)**: spec §6.5 copy verbatim. One green block, single
  purpose (free preview): H1 + sub + "Free · No obligation · No contract" line, full-variant
  form in an ivory card (form comes right after the heading on mobile; desktop puts the
  what-happens-next 01/02/03 list + tap-to-call/email in the left column via grid areas).
  `?offer=preview` interest preselect was already wired in ContactForm.
- **Trade pages `/for/[slug]` ×8 (2026-07-05)**: one template + `src/data/tradePages.ts`.
  Deviations from spec, on purpose: (a) data is a typed TS module, NOT a content collection
  (§4) — same single-template pattern, less machinery; (b) §7 sample copy was rewritten into
  the site-copy voice (it predates the skill: em-dashes, "on autopilot", "five stars" etc.);
  substance/angles kept; (c) no proof SECTION — proof is one Provolta line under the playbook
  (hero sub on electricians), matching Arya pulling the heavy proof blocks from home.
  Page rhythm mirrors home: green hero (short H1 + coral line-accent, CTA anchors to the
  on-page form `#preview`) → coral "Sound familiar?" pains (hairline rows mobile / 3 ruled
  cols desktop) → mint playbook as ONE ivory card with coral checks → green pricing strip
  (published $179/$0-down numbers only, links to /#pricing) → mint FAQ (3 real questions) +
  "Not your trade?" sibling links (§9 interlinking) → CTABand with full form, trade
  preselected, per-trade closing line as lede. Each page: title ≤60, meta 140–160, and
  `Service` + `FAQPage` JSON-LD inline.
- **Nav `solid` mode (2026-07-05)**: `Base navSolid` → nav starts (and stays) green instead
  of transparent-over-hero. Needed because subpage heroes are shorter than the 0.8·vh scroll
  threshold, which left ivory links floating over light blocks (measured, not eyeballed).
  Home keeps the transparent hero behaviour; use `navSolid` on every non-home page.
- **CTABand props (2026-07-05)**: optional `lede`, `preselectTrade`, `id`, plus existing
  `heading`/`variant`. Default heading stays "See your new homepage before you spend a dollar."
- **Cal.com booking (Arya, 2026-07-05)**: element-click popup (Arya's chosen embed mode),
  event `sharplines-vqqmqp/15min`, brand var `cal-brand` set to coral `#F4462F`. Loader is a
  single inline `<script>` in `Base.astro` (before `</body>`, `forwardQueryParams` on); any
  element with `data-cal-link`/`data-cal-namespace="15min"`/`data-cal-config` opens it.
  Reusable trigger = `src/components/BookCall.astro` (renders a `<button>` carrying those
  attrs + a `<slot>`; default label "Book a 15-minute call", the site-copy skill's secondary
  CTA). **Free preview stays the single primary offer; booking is the secondary everywhere.**
  Placed in: Hero secondary (was a dead `/contact` link), CTABand copy column, `/contact`
  aside, Footer contact column, desktop Nav (subtle text link, hidden <940px) + mobile menu,
  and the mobile sticky bar. Rationale from Arya's funnel: cold outreach ~10/day, so
  self-scheduling kills phone tag ("I'll text you the link, grab a time"). **Gotcha:** Astro
  scopes component styles, so styling the BookCall `<button>` from a parent needs `:global()`
  (only truly global classes like `.btn` reach it) — every consumer uses `:global(.foo)` for
  the trigger's helper class. Cal wiring verified in-browser (Cal.loaded, `15min` ns present);
  the extension's synthetic click doesn't fire Cal's trusted-event listener, real taps do.
- **MobileCTA redesign (Arya, 2026-07-05, "looks a bit dated ... they'll mostly use phone")**:
  the old flat edge-to-edge strip with two hairline-outline icon squares read dated. Now a
  floating rounded **card** (14px radius, side margins, soft shadow, blur; v3 language) holding
  three one-tap actions kept because the audience is phone-first: coral "Get my free preview"
  (primary) + two filled soft icon buttons (`:global(.mcta__icon)`, translucent ivory fill,
  20px icons, 3px button radius) for book (Cal popup) and tap-to-call. Call stays in the bar on
  Arya's note that visitors mostly use phones. 514 number still reads Montreal (open TODO).
- **Trade-hero photos (2026-07-05, Arya asked for photos on the new pages)**: one Pexels
  photo per trade in `public/images/trades/{slug}.jpg`, shown beside the hero copy ≥900px
  (4:3, 14px radius + soft shadow, card language) and after the CTA on mobile (16:10 so
  pains stay one flick away). 1200×900 crops via the Pexels CDN (`?w=1200&h=900&fit=crop`),
  all ≤200KB (ffmpeg `-q:v`, NOT sips — sips formatOptions made them bigger). Selection
  criteria that survived review: documentary hands-at-work, warm tones, no visible brand
  logos, no camera-facing stock smiles, GTA-plausible (rejected a palm-tree garden).
  Pexels IDs for provenance/swaps: electricians 33531830 · plumbers 29226620 ·
  hvac 6471912 · landscapers 24595772 · barbers 19664892 (small shop-logo on polo,
  flagged to Arya) · cleaners 6197122 (coral overalls, on-palette) · roofers 37623622 ·
  auto-repair 4481942. Pexels license: free, no attribution required. **Arya's sign-off on
  the specific photos is still part of the job — swap any he dislikes.**
  Pexels access: the API needs a key, but search works in the user's Chrome tab and the
  `images.pexels.com` CDN downloads fine with curl + a browser UA + `-e https://www.pexels.com/`
  (sequential; parallel bursts get blocked).
  **Superseded 2026-07-05 (same day): trade heroes are now VIDEOS.** Arya supplied one
  clip per trade (originals in `../sharplines_photos`, never committed). Compressed to
  `public/videos/trades/{slug}.mp4` (1280w, CRF 28, 30fps, muted, faststart, ≤3MB;
  the noisy landscaper footage needed CRF 32 + a 10s trim). Posters = first frame,
  ≤200KB, overwrote the Pexels stills at `public/images/trades/{slug}.jpg`, so the
  Pexels IDs above are historical. Template autoplays muted/loop/playsinline with a
  reduced-motion poster fallback (same pattern as the home Hero).
- **Contact-page people row (2026-07-05)**: the real founder photos (56px, 4:5, 10px radius,
  `object-position: center 22%` like the founders card) + "You'll hear directly from Arya or
  Amir." under What-happens-next. Real faces beat stock on the conversion page; deliberate.
- **Electricians page v2 (Arya, 2026-07-05, "this is ridiculous, of course I know
  everything")**: HARD copy rule learned. Never write lines that lecture the trade about
  their own trade ("we know what an ESA number means" got rejected). Domain fluency is
  shown by SPECIFICS a real operator would nod at: how residential / commercial /
  industrial customers buy differently, insurance letters (aluminum wiring, knob-and-tube,
  60-amp panels), COIs for property managers, EV rebates + panel capacity. Arya explicitly
  likes the EV-charger angle; keep it. Implementation: optional `segments` /
  `segmentsHeading` / `segmentsKicker` in `tradePages.ts` render a mint "The work" section
  between hero and pains (hairline rows mobile, coral-ruled 3-col desktop). Colour rhythm
  became green→mint→coral→mint→green→mint→green. FAQ pattern: "Have you worked
  with electricians before?" answered with the Provolta build, plus "I only do residential.
  Does this still fit?" mirroring the some-do-all-three-most-pick-a-lane reality.
  **Approved by Arya ("I love it") and rolled out 2026-07-05**: segments written for the
  5 other trades where buyer types genuinely differ (plumbers, HVAC, landscapers,
  cleaners, roofers); barbers + auto repair deliberately skip the section ("not every
  industry needs this detail") and carry their depth in operator-true pains/playbook
  instead. The build standard lives in **`.claude/skills/trade-pages/SKILL.md`**
  (sibling of `service-pages`); read it before touching any trade page.

## Open TODO(arya) (from spec §10)
416/647 phone (currently 514, reads as Montreal) · Provolta permission + quote + 3 screenshots ·
Resend/Web3Forms key.
- **Favicon (done 2026-07-05)**: real brush-stroke "S" logo Arya supplied
  (`~/Downloads/Sharplines Logo Black.png`; its "transparency" was a baked-in checkerboard, so the
  mark was luma-keyed out and composited on an ivory tile). Files: `favicon-16/32/512.png`,
  `apple-touch-icon.png`, `favicon.ico` in `public/`; old temp `favicon.svg` removed. Ask Arya's
  designer for a true transparent-background export for future logo uses (nav, OG image).

## Status
- **Home page `/`** built and deployed in the v2 warm colour-block style (all §6.1 sections).
  Verified on desktop and at ~500px via the Chrome extension (its tab is locked ~500px wide
  and won't resize; that width doubles as the phone check — still eyeball a real phone
  before launch).
- **Chrome-extension viewport note**: the locked width VARIES by session (~500px one day,
  1642px desktop the next) and `resize_window` doesn't take. When it's stuck at desktop,
  do the phone check by injecting same-origin 420px iframes of the pages and scrolling
  their `contentWindow` (set `scrollBehavior='auto'` first or `scrollTo` silently no-ops).
- **Pricing section** added 2026-07-05 (two-plan $0-down model, see Decisions). Desktop uses
  CSS subgrid to align rows across the two cards; check the stacked cards on a real phone.
- **`/contact` + 8 `/for/[slug]` trade pages** built 2026-07-05 (see Decisions). Verified
  desktop + 420px; copy checklist run (0 em-dashes/banned words, you>we on every new page);
  content edges measured equal to home (238–1390 @1642px viewport). Committed, NOT deployed
  (prod deploy still returns Forbidden; Arya ok batching).
- **Trade pages deepened + video heroes (2026-07-05)**: segments on 6 of 8 trades, video
  hero on all 8, `trade-pages` skill written. Awaiting Arya's review of the 5 new
  segment sections and the videos.
- Remaining pages: services, work, about, privacy, 404. Build order: spec §11.
