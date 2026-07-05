# CLAUDE.md — Sharplines Studio site

@AGENTS.md

## Non-negotiable: copy voice

Before writing or editing ANY visitor-facing text (page copy, headlines, CTAs, FAQs,
meta titles/descriptions, alt text, form/status messages, 404s), read and follow
**`.claude/skills/site-copy/SKILL.md`** (the `site-copy` skill). Hard floor:

- **No em-dashes (`—`) in visible copy, ever.** Use a period, a comma, or restructure.
  Arya reads em-dashes and marketing jargon as AI-written copy; it's his #1 complaint.
- Warm, plain, Fieldmark-style register: complete sentences, customer's words, no hype.
- Run the skill's pre-ship checklist (includes `grep -rn "—" src/`) before committing copy.

## Owner directions from Arya (learned 2026-07-05, still standing)

- **Arya edits the repo while you work** (his own editor or a parallel session). Files
  change mid-task: re-read a file before every Edit, never revert a change you didn't
  make, and record his decisions in AGENTS.md/spec when they land.
- **The home page is long; don't add sections.** New content goes inside existing
  sections. Imagery is taste-driven: he wants the page visually rich, but he rejects
  photos that don't feel right even after asking for them (a coding stock photo was
  requested, shipped, and removed the same day). Keep visual additions small and easy
  to revert, and treat his sign-off on the specific asset as part of the job.
- **Typography**: one family everywhere. Figtree is the deliberate free stand-in for
  Fieldmark's Halyard Display (verified: fieldmark.studio serves halyard-display via
  Adobe Fonts, big headings at weight 400 with normal tracking; the airy look is
  big-but-light type, not bold). Prefer tuning Figtree's usage toward that over
  switching or buying fonts. If Halyard is ever licensed: Arya's own license only,
  ideally a self-hosted Darden Studio web license. Never serve fonts from a borrowed
  or university Adobe subscription (license violation + the font dies with the account).
- **Media must be compressed before shipping** (ffmpeg is installed via brew).
  Hero-style video: ~1920px wide, H.264 CRF 28, muted, `+faststart`, aim ≤3MB.
  Photos: resize to ~1600px, aim ≤200KB. Poster images = the video's first frame so
  playback starts without a jump. Beware stock "transparent" PNGs with a baked-in
  checkerboard (the supplied logo had one; it was luma-keyed onto an ivory tile).
- **Prices are Arya's call.** Never invent or adjust plan numbers or anchors; the
  source of truth is `Pricing.astro` + spec §6.1 (current: Growth $179 was $249,
  Autopilot $495 was $849).
- **Verify visually in the running browser**, don't assume from code. Dev server on
  :4321 (kill anything else squatting the port, e.g. Provolta's dev server). The
  Chrome-extension tab is locked ~500px wide; that IS the mobile check, and mobile is
  the product. Measure layout with JS (getBoundingClientRect) when a screenshot looks
  wrong; screenshots can lag mid-scroll or mid-load.

## Layout & design system (learned 2026-07-05, still standing)

- **One shared content width, everything left-aligned.** This is Arya's most-repeated
  layout note (it drove many rounds of edits). The nav/top bar, every section, and the
  body blocks inside them (founders bio, FAQ list, the CTA form) must all span the same
  full content width (the `.container` inner width) and start at the same left edge.
  Do NOT cap body text or the FAQ into a narrow reading column, and do not centre a
  heading unless he asks: match "the width of the sections above." The nav
  "Get my free preview" button right-aligns to that same right edge. When alignment is
  in question, measure left/right edges with getBoundingClientRect rather than eyeballing.
- **Card language ("v3 soft").** Repeatable blocks are ivory (`--ivory`) cards: 14px
  radius, soft shadow, coral accents/checkmarks. Used by pricing, services, founders,
  and the CTA form. Buttons and inputs keep the 3px radius token; cards use 14px. When
  Arya says "like the pricing section," he means an ivory card in this language.
- **Forms are boxed cards, not underlines.** He found thin underline inputs "too small."
  Inputs are filled, boxed, ~54px tall, stacked vertically, inside an ivory card. The
  homepage CTA form fields: Name, Phone, Email (optional), a "what do you need"
  description (optional), then a full-width coral button. Keep the Netlify Forms wiring,
  honeypot, and inline success state intact.
- **Hero is deliberately not full-screen** (~62vh) so the coral "Who we help" block peeks
  in beneath it; "Who we help" sits directly under the hero. The hero is a muted looping
  video with a dark-green scrim and left-aligned display headline.
- **Founders block** = one ivory card with the two real photos + first names only (never
  last names, in captions or bio). The small circular-avatar strip "looked cheap" and was
  rejected; keep it as a card.
- **Home services grid = 6** (clean 3×2, no orphan tile). During this session Arya also
  removed the Provolta case-study/Results section, the proof bar, and the dashboard
  "See how it works" link. Those components still exist in the repo but are unplaced;
  don't re-add them to the page without asking.
- **Deploy is manual and sometimes blocked.** `netlify deploy --prod` (continuous deploy
  is not wired). Prod publish intermittently returns `Forbidden` while draft deploys still
  work, most likely a Netlify limit after many deploys in a day. Arya is fine batching
  changes in the repo without deploying ("it's okay to not deploy for now") — don't spam
  retries; surface it and move on.
