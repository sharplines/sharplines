# Sharplines Studio — Website Build Spec

**For: Claude Code agent. Read this entire file before writing any code.**
This spec is the source of truth. Where the existing Astro template conflicts with this spec, the spec wins. Where something is genuinely ambiguous, choose the simplest option consistent with the Voice Rules (§2) and Design System (§3), and leave a `TODO(arya):` comment.

---

## 1. Project snapshot

| Field | Value |
|---|---|
| Business | Sharplines Studio |
| Domain | sharplines.ca |
| What it is | Digital growth studio for local GTA businesses: conversion-first websites, local SEO, reviews automation, booking, AI phone intake, social autopilot, Google Ads, and a client dashboard |
| Founders | Arya Khaligh, Amir Gholizad — senior software engineers with years in the tech industry |
| Service area | Toronto & the GTA |
| Phone | (514) 560-2266 — ⚠️ `TODO(arya): replace with 416/647 number before launch; 514 reads as Montreal and undermines local positioning` |
| Email | hi@sharplines.ca |
| Address | None published (omit address everywhere; no fake address in schema) |
| Flagship proof | Provolta Electric (provolta.ca) — licensed Toronto electrician (residential, commercial, industrial & automation). Result: **2× more residential and commercial clients** since the rebuild. `TODO(arya): confirm written permission + get a 1-sentence quote` |
| Primary CTA | **Free homepage preview** — "See your new homepage before you spend a dollar." 48-hour turnaround, no obligation. |
| Secondary CTA | Book a 15-min call |
| Stack | Astro (use the provided template repo as the base), Tailwind if the template has it; otherwise vanilla CSS with the tokens in §3 |

**Positioning line (internal north star, not printed verbatim):** Experienced builders who grow leads and customers for local GTA businesses by making them the obvious choice online.

---

## 2. Voice & copy rules

> **v2 — updated 2026-07-05 at Arya's direction.** The authoritative, expanded voice
> guide is **`.claude/skills/site-copy/SKILL.md`** — it MUST be followed for every
> piece of visitor-facing text (pages, CTAs, FAQs, meta tags, alt text, form
> messages). Where older sample copy in §6–§7 conflicts with it, the skill wins;
> bring the sample into compliance when you touch it. Summary below.

- Tone model: **fieldmark.studio** — warm, plain, calm, complete sentences that
  explain rather than pitch. Confidence comes from being specific, not loud.
- **No em-dashes (`—`) anywhere in visible copy** (Arya: reads as AI-written).
  Use a period, a comma, or restructure. En-dash only in numeric ranges (`2–3 weeks`).
  Also banned: "it's not X, it's Y", "whether you're X or Y", rhetorical hype
  questions, colon-formula headlines, stacked hype adjectives.
- Audience: busy owner-operators (1–10 employees). They care about **booked jobs**,
  not marketing.
- Plain verbs, short sentences, active voice, second person ("you get", not "clients receive").
- Concrete over clever: "More calls from Google" beats "Amplify your digital presence."
- Numbers wherever honest: "2× more clients", "48-hour preview", "15-minute call".
- Mention AI as an outcome, not a buzzword: say "your phone gets answered after hours
  and you get a text with the details", not "AI-powered voice agent."
- **Banned words:** solutions, synergy, leverage (verb), cutting-edge, revolutionize,
  digital transformation, unleash, empower, elevate, seamless, "world-class", plus the
  AI-speak list in the skill (unlock, streamline, effortless, "on autopilot", …).
- Claims must be verifiable or clearly framed: the only client metric we publish is Provolta's 2× (client-reported). Do not invent testimonials, client counts, star ratings, or years-in-business for the studio.
- Experience framing (exact angle to use): the founders' experience is **engineering experience**, i.e. "built by two senior software engineers who've spent years shipping software in tech." Never imply years running an agency.
- Sentence case everywhere, including buttons and headings. No exclamation marks.

---

## 3. Design system

> **v2 — updated 2026-07-03 at Arya's direction.** The brand moved from the earlier
> quiet chalk-blue "instrument" look to a **warm, bold, colour-block** style: a full-bleed
> photo hero and full-width saturated colour sections, one typeface, big display type.
> This section supersedes v1 entirely. **Mobile is the priority — ~80% of visitors are on
> phones; design and QA mobile first.**

Aesthetic brief: confident, warm, editorial. Big photography, big type, bold colour blocks
that alternate down the page. Premium but human — not a quiet tool, not a busy brochure.
The boldness lives in the colour and the composition; the copy and layout stay disciplined.

### 3.1 Signature — colour-block rhythm + the sharp line

1. **Shorter hero** (~62vh desktop, ~74svh mobile — deliberately *not* full-screen, so the next
   section peeks in) with a **looping muted video** (image poster; `prefers-reduced-motion`
   falls back to the poster), a dark-green scrim, and the left-aligned display headline lower-left.
2. **Alternating full-width colour blocks** down the page — coral / dark-green / mint — each a
   distinct, edge-to-edge section. This rhythm *is* the memorable device.
3. **The "sharp line"** (nods to the name): a 3px **coral** rule that snaps in under the hero's
   key phrase (~400ms, slight overshoot), plus the thin top-rule on section labels and the
   underline on link hover. Respect `prefers-reduced-motion`: render instantly, no animation.

### 3.2 Palette (use these exact tokens)

```css
--green:   #0E2F28;  /* dark green: dark sections, headings on light, hero scrim */
--coral:   #F4462F;  /* accent: primary CTAs, the signature colour block, eyebrows, the line */
--coral-dk:#DB3B27;  /* coral hover/pressed */
--mint:    #E6EFE9;  /* page background */
--ivory:   #FFFFF0;  /* cream: text on dark blocks, light cards */
--ink:     #171717;  /* body text on light, footer background */
```

Backgrounds are `--mint` (default) with edge-to-edge `--coral` / `--green` blocks and an
`--ink` footer. Text: `--ink` on light, `--ivory` on dark/coral, headings `--green` on light.
Keep it to these six tokens — no gradients beyond the hero scrim, no extra accents.

### 3.3 Type — one typeface

- **Everything** uses a single family: **Figtree** (variable) — the free stand-in for the
  reference's licensed **Halyard Display**. Swap in Halyard via Adobe Fonts if it's ever licensed.
- Headings weight 400–500, tracking -0.02em; body 400. Display type is large and confident.
- **Eyebrows:** uppercase, letter-spaced +0.16em, ~0.8rem, in `--coral` (ivory on coral blocks).
- **Section labels** (alt style): title-case with a thin top rule (the "sharp line").
- Load via Fontsource (`@fontsource-variable/figtree`); `font-display: swap`.
- Fluid scale: hero H1 clamp(2.6rem,8.5vw,5.5rem); signature blocks clamp(3rem,12vw,6.5rem);
  feature clamp(2.1rem,6vw,4rem); section clamp(1.75rem,4.5vw,2.75rem); body ~1.05rem/1.55.

### 3.4 Layout & components

- Max-width 1200–1280px; generous section padding (clamp 64px mobile → 128px desktop). Bold
  colour blocks run full-bleed edge-to-edge; inner content stays in the container.
- Corners: 3px radius on buttons/inputs. Service cards = ivory with a hairline border and a
  **4px coral left border on hover**. Case-study screenshot sits in a bordered, soft-shadowed frame.
- Section pattern: eyebrow → big heading → content. Number eyebrows **only** in "How it works"
  (01/02/03). Contact-form inputs are **underline-only** (no boxes), labels above.
- Buttons (rounded rect, ≥48px, sentence case): `coral` (primary), `green`, `ivory`,
  `outline-dark` (green border on light), `outline-light` (ivory border on dark/photo).
- Nav: **transparent over the hero with ivory text**, turns solid `--green` on scroll; wordmark
  "Sharplines" left; links Services · Who we help ▾ (8 trades) · Results · About · Contact;
  right: coral "Get my free preview". Mobile: hamburger → full green panel.
- **Mobile sticky bottom CTA bar** (`MobileCTA`): coral "Get my free preview" + tap-to-call —
  the primary mobile lead path. Shown < 940px only.
- Footer: `--ink` bg, 4 cols — wordmark + one-liner; Services; Who we help; Contact + privacy +
  "© 2026 Sharplines Studio".
- Home colour rhythm: hero(video) → who-we-help(coral, signature block — sits directly under
  the hero) → proof(green) → pricing(green, hairline plan cards) → services(mint) →
  dashboard(coral) → results(mint) → how-it-works(green) → founders(mint) → FAQ(mint) →
  CTA "Connect"(green) → footer(ink).
- Motion: fade-up on entry (14px, once, gated behind `.js` so content is never hidden) + the
  hero coral line snap. Nothing else animates.
- Quality floor: responsive to 360px, visible focus (2px coral/ivory outline), semantic
  landmarks, alt text on all images, Lighthouse ≥ 95 all categories.

---

## 4. Tech & conventions (Astro)

- Keep the provided template's tooling; add if missing: `@astrojs/sitemap`, Fontsource packages, sharp for image optimization.
- **Content collections:** create `src/content/trades/` — one entry per trade page (schema in §7). Trade pages are a single template (`/for/[slug].astro`) rendering collection data. This is the pattern for everything repeatable.
- Components to build: `Nav`, `Footer`, `Hero`, `ProofBar`, `ServiceCard`, `CaseStudyFeature`, `StepTimeline`, `TradeGrid`, `FounderStrip`, `FAQ` (accessible accordion, `<details>`-based), `ContactForm`, `CTABand`, `ChalkLine` (the signature element).
- One `<ContactForm />` component reused everywhere (§8).
- Images: Astro `<Image />`, AVIF/WebP, lazy except hero.
- SEO plumbing: per-page `title`/`description` from §9, canonical URLs, OG tags, JSON-LD via a `<Schema />` component.
- No client-side JS beyond: nav dropdown, FAQ accordion (if not `<details>`), form submit, chalk-line animation. Ship zero JS frameworks.

---

## 5. Sitemap

```
/                         Home
/services                 All 7 services + dashboard (anchored sections)
/work                     Results — Provolta case study
/about                    Founders + how we work
/contact                  Form + direct contact
/for/electricians         Trade page ─┐
/for/plumbers                         │
/for/hvac                             │
/for/landscapers                      ├─ one template, 8 data entries
/for/barbers                          │
/for/cleaners                         │
/for/roofers                          │
/for/auto-repair                     ─┘
/privacy                  Privacy policy
/404                      Not found
```

---

## 6. Page specs (copy is final unless marked TODO — use it verbatim)

### 6.1 Home `/`

**Hero** (copy rewritten 2026-07-05 per §2 v2 voice)
- Eyebrow (mono): `FOR LOCAL BUSINESSES IN TORONTO AND THE GTA`
- H1: `We turn local searches into booked jobs.` (chalk line draws under "booked jobs")
- Sub: `Sharplines builds the website, the reviews, and the follow-up that make your business the one people call. Based in Toronto, working across the GTA.`
- Buttons: `Get my free homepage preview` (primary, → /contact with `?offer=preview`) · `Book a 15-minute call` (secondary, → /contact)
- Under buttons (mono, small): `Free preview in 48 hours · No obligation`

**ProofBar** (3 items, hairline-separated):
- `2× more clients for Provolta Electric, Toronto`
- `Built by senior software engineers`
- `Websites, reviews, booking and ads from one team`

**Pricing** (added 2026-07-05 — Arya adopted a $0-down monthly model, two plans; sits before the services grid, dark green block, `id="pricing"`, component `Pricing.astro`) — eyebrow `PRICING`, H2 `Clear pricing, nothing up front.`, lede `Both plans run month to month and start at $0 down. You see the free homepage preview before you pay anything, and you can start small and move up any time.` Two plan cards, hairline rows, subgrid-aligned side by side ≥760px, stacked on mobile. Prices CAD; anchor (struck) price beside current. The client owns the site outright on both plans (no buyout mechanics — Arya, 2026-07-05).
1. **Growth** — $179/mo (was $249), coral border + `Start here` tag (Arya wants most clients landing here). Upfront `$0. We waive the $1,000 setup fee.` Term `Monthly. Cancel any time.` Includes (bulleted list, one item per line — Arya 2026-07-05): a custom site that's yours to keep · hosting · unlimited edits through your dashboard · support when you need it. Guarantee `You see the free preview before you pay a dollar.`
2. **Autopilot** — $649/mo (was $949). Upfront `$0. We waive the $2,500 setup fee.` Term `Monthly. Cancel any time.` (30-days'-notice wording dropped at Arya's direction 2026-07-05.) Includes (bulleted list): everything in Growth · Google Business Profile · pages for each area you serve · review follow-ups · online booking · call tracking · a monthly report · Google **and Meta** ads run and tracked, with muted note `Ad spend goes straight to the platforms.` Guarantee `More leads within 90 days.` Pays for itself at about 2 jobs a month.

Single CTA under the grid (one offer per page, per the site-copy skill): coral `Get my free homepage preview` → /contact?offer=preview, fine print `Free preview in 48 hours · No obligation · Prices in Canadian dollars`.

**Services grid** — eyebrow `WHAT YOU GET`, H2 `Everything a local business needs to win online.` Seven `ServiceCard`s (title / two-line blurb / anchor link to /services#slug):
1. **Websites that sell** — A fast, clean site built to turn visitors into calls and quotes. We rebuild it from scratch and take it live in weeks.
2. **Get found on Google** — Local SEO and your Google Business Profile, tuned so you show up when your neighbourhood searches for what you do.
3. **Reviews that keep coming** — Every finished job triggers a friendly follow-up asking for a Google review. Your rating climbs while you work.
4. **Online booking** — Customers book you in two taps. Reminders cut no-shows.
5. **Never miss a call** — After hours, your phone gets answered, the details get taken, and you get a text with who called and why.
6. **Social media, handled** — Your best work, posted to Instagram and TikTok on schedule. You send photos; we handle the rest.
7. **Ads that pay for themselves** — Google Ads aimed at people ready to hire, tracked to the call, so you know what every dollar brought back.

Below the grid, a full-width card: **The Sharplines dashboard** — `Log in any time and type what you want changed, like "add a photo of yesterday's panel job" or "post about our spring special". It's live in minutes. No tickets, no waiting on an agency.` Link: `See how it works →` (/services#dashboard). (A stock coding photo was tried in this card 2026-07-05 and removed the same day — Arya didn't like it; keep this card text-only.)

**CaseStudyFeature** — eyebrow `RESULTS`, H2 `Provolta Electric doubled their clients.` Body: `A licensed Toronto electrician serving homes, businesses, and industrial sites. We rebuilt provolta.ca from the ground up, with a clear homepage, pages for the neighbourhoods they serve, and a quote form people actually finish. Since launch, Provolta reports 2× more residential and commercial clients.` Visual: site screenshot `TODO(arya): asset`. Link: `Read the full story →` (/work). Optional pull-quote slot: `TODO(arya): Provolta quote + permission`.

**StepTimeline** — eyebrow `HOW IT WORKS`, H2 `Three steps, no risk.` (numbered 01–03):
1. **Preview** — Tell us your business name. Within 48 hours you'll see a homepage designed for you. It's free, and there are no strings attached.
2. **Launch** — Like it? We build the full site and switch on the systems you choose. Most launches take 2–3 weeks.
3. **Grow** — Reviews, rankings, bookings, and posts run week after week. You'll see every call and lead in your dashboard.

**TradeGrid** — eyebrow `WHO WE HELP`, H2 `Built for the businesses that keep the GTA running.` 8 tiles linking to /for/* (label + one-line hook from §7 data). Footer line: `Don't see your trade? The same approach works for most local businesses. Get in touch.`

**FounderStrip** — eyebrow `WHO'S BEHIND IT`, H2 `Meet the two engineers behind Sharplines.` Body: `Sharplines is Arya Khaligh and Amir Gholizad, two senior software engineers who spent years shipping software in tech. We now put that experience toward one problem: getting local businesses more customers. Everything we build is fast, measurable, and yours to keep.` Photos: `TODO(arya): supply photos (stock placeholders for now, 4:5 ratio)`.

**FAQ** (5):
1. *How much does it cost?* — Plans start at $179 a month with $0 down, and the full pricing is published right on this page. The preview is free either way, so you see the work before you spend anything. (updated 2026-07-05 for published pricing)
2. *What's the catch with the free homepage preview?* — There isn't one. We design a homepage concept for your business in 48 hours. If you don't love it, you've lost nothing.
3. *How fast will I see results?* — The site and booking improvements show up right away. Reviews build within weeks. Google rankings usually take two to four months, and we'll show you the progress along the way.
4. *I already have a website.* — Most of our clients did. If your site isn't bringing you calls, it isn't doing its job. The free preview shows you the difference side by side.
5. *Am I locked into a contract?* — No. Both plans are monthly and you can cancel any time, and the website we build is yours. (updated 2026-07-05 to match published pricing terms)

**CTABand** (ink bg, paper text): H2 `See your new homepage before you spend a dollar.` + `<ContactForm variant="short" />` + mono line `Prefer to talk? (514) 560-2266 · hi@sharplines.ca`

### 6.2 Services `/services`
Hero: H1 `Everything you need to be the obvious choice.` Sub: `Pick one service or run the full system. Either way, it's one team, one dashboard, one number to call.`
Then 8 anchored sections (`#websites #seo #reviews #booking #phone #social #ads #dashboard`). Each: mono eyebrow (category), H3, 2 short paragraphs expanding the §6.1 blurb (what it is → what changes for the owner), and a 3-item "What's included" list. Keep each section under 120 words. End with CTABand. `TODO(claude-code): write these 8 expansions following §2 voice; lead every section with the owner outcome, not the mechanism.`

### 6.3 Work `/work`
H1 `Results, not promises.` Provolta case study long-form: Challenge (a skilled licensed electrician invisible online) → Build (conversion-first Astro site, neighbourhood pages across the GTA, trust signals — licence numbers, certifications — front and centre, a quote form with an urgency selector) → Result (2× residential and commercial clients, client-reported). Screenshots ×3 `TODO(arya)`. Closing CTABand: `Your business could be the next case study.`

### 6.4 About `/about`
H1 `Precision people.` Founder bios (2–3 sentences each, engineering framing per §2) + "How we work" trio: **Verifiable** (we only claim what we can show), **Plain-spoken** (no jargon, no padded reports), **Fast** (software people move in days, not quarters). Photos `TODO(arya)`. CTABand.

### 6.5 Contact `/contact`
H1 `Start with a free preview.` Sub: `Fill this in and you'll hear from us the same business day. Your homepage preview will be ready within 48 hours.` `<ContactForm variant="full" />` + direct contact block. If URL has `?offer=preview`, preselect interest = "Free homepage preview".

### 6.6 Privacy `/privacy`
Plain-language policy: what the form collects, that it's used only to respond and provide services, email/SMS contact requires consent and every message includes an opt-out, no selling data, contact for deletion. `TODO(claude-code): draft ~400 words, PIPEDA/CASL-aware, plain English; note at top of PR that a lawyer should review — this is not legal advice.`

### 6.7 404
H1 `This page doesn't exist.` Sub: `The chalk line stops here. Head home or tell us what you were looking for.` Buttons: home / contact.

---

## 7. Trade pages — template + data

**Template** (`/for/[slug].astro`), sections in order:
1. Hero — eyebrow `FOR {TRADE} · TORONTO & GTA`, H1 = `h1`, sub = `sub`, both CTAs
2. Pains — H2 `Sound familiar?`, 3 `pain` cards
3. Plan — H2 `The Sharplines playbook for {trade}`, 4 `plan` items (title + line)
4. Proof — Provolta feature (electricians page: full case study block; all others: compact ProofBar variant)
5. FAQ — 3 trade-specific Q&As
6. `<ContactForm variant="full" />` with trade preselected + closing line `closing`

**Collection schema:** `{ slug, trade, hook, h1, sub, pains[3]{title,body}, plan[4]{title,body}, faq[3]{q,a}, closing, metaTitle, metaDescription }`

**Data (final copy):**

**electricians** — hook: `Show up first for "electrician near me".`
- h1: `More panel upgrades. Fewer missed emergency calls.`
- sub: `We built provolta.ca — and the calls followed. The same system is ready for your electrical business.`
- pains: (1) *Invisible at 9pm* — Emergencies happen after hours. If your phone rings out, that burst-panel job goes to whoever answers. (2) *Losing to the map pack* — Three competitors own the top of Google in your area. Their work isn't better — their presence is. (3) *High-ticket jobs need trust* — EV chargers and rewires are $2,000+ decisions. A dated site quietly tells people to keep scrolling.
- plan: (1) *A site that shows your licence, not just your logo* — ECRA/ESA number, insurance, certifications above the fold, because that's what people verify. (2) *Neighbourhood pages that rank* — "Electrician in Leaside" gets its own page. Multiply by every area you serve. (3) *After-hours intake* — Every missed call gets answered, qualified by urgency, and texted to you. (4) *Reviews after every job* — Automatic follow-ups turn finished work into five stars.
- faq: (1) *Do you understand electrical work?* — We built and run the site for Provolta Electric, a licensed Toronto contractor — residential, commercial, and industrial. We know what an ESA number means and why it belongs above the fold. (2) *Can you help me sell EV charger installs?* — Yes — dedicated landing page plus ads aimed at homeowners searching for exactly that. (3) *What about emergency calls?* — Our after-hours intake flags genuine emergencies first, so you can choose to jump on the profitable ones.
- closing: `The next "electrician near me" search in your area is coming tonight. Be the answer.`
- meta: `Websites & Marketing for Electricians in Toronto | Sharplines` / `We rebuilt Provolta Electric's site and clients doubled. Conversion-first websites, local SEO, reviews and after-hours call intake for GTA electricians. Free homepage preview.`

**plumbers** — hook: `Be the first call when the pipe bursts.`
- h1: `When water's on the floor, be the plumber they find.`
- sub: `Emergency plumbing is won in the first search result and the first answered call. We make sure both are yours.`
- pains: (1) *Emergencies can't wait for callbacks* — A flooded kitchen calls the next number the second yours rings out. (2) *Directory sites are eating your margin* — Lead brokers charge you for your own customers. Your site should bring you leads you don't pay per-call for. (3) *No reviews, no trust* — Homeowners letting a stranger in check your Google rating first. A thin profile costs you jobs silently.
- plan: (1) *An emergency-first website* — Tap-to-call at the top, urgency-sorted quote form, response-time promise front and centre. (2) *Own "plumber near me"* — Google Business Profile tuned and neighbourhood pages built for every area you cover. (3) *24/7 call capture* — Missed calls get answered and triaged; you get a text with the address and the problem. (4) *A review engine* — Every cleared drain becomes a request for five stars, automatically.
- faq: (1) *I get most work from word of mouth — why bother?* — Word of mouth now includes Google: people hear your name, then search it. What they find decides whether they call. (2) *Can you make emergencies find me specifically?* — Yes — "emergency plumber + area" pages and ads run around the clock, when your competitors' offices are closed. (3) *How fast can this launch?* — Preview in 48 hours; most plumbing sites launch inside 3 weeks.
- closing: `Somewhere in the GTA a pipe just burst. Make sure they find you.`
- meta: `Websites & Marketing for Plumbers in Toronto | Sharplines` / `Emergency-first websites, local SEO, 24/7 call capture and review automation for GTA plumbers. See your new homepage free in 48 hours.`

**hvac** — hook: `Book the season before it starts.`
- h1: `Full schedules in July and January.`
- sub: `Heating and cooling is feast or famine. The businesses that win book maintenance plans in the quiet months and own the search results in the loud ones.`
- pains: (1) *Seasonal whiplash* — Slammed during heat waves and cold snaps, quiet between. (2) *Big tickets, big skepticism* — A furnace replacement is a $5,000+ decision made by comparing three websites. (3) *One-and-done customers* — Installs without maintenance plans mean starting from zero every season.
- plan: (1) *A site built around seasons* — Furnace-forward in fall, AC-forward in spring, financing options visible. (2) *Maintenance plans, front and centre* — Recurring-revenue tune-up plans, sold and booked online. (3) *Search domination in your areas* — Neighbourhood pages plus ads that scale up exactly when demand spikes. (4) *Reviews + booking* — Five-star follow-ups and two-tap appointment booking with reminders.
- faq: (1) *Can you handle both heating and cooling messaging?* — Yes — the site rotates seasonal emphasis, so you're never advertising AC in a cold snap. (2) *Do financing options really matter?* — On $5K+ tickets, "from $89/month" visibly outperforms a bare price. We build it in. (3) *Can customers book tune-ups online?* — Yes, straight into your calendar, with reminders that cut no-shows.
- closing: `The next heat wave is coming. Be booked solid before it hits.`
- meta: `Websites & Marketing for HVAC Companies in Toronto | Sharplines` / `Seasonal websites, maintenance-plan booking, local SEO and ads for GTA heating & cooling companies. Free homepage preview in 48 hours.`

**landscapers** — trade label: `Landscapers & gardeners`, hook: `Turn your best yards into your next clients.`
- h1: `Your work is visual. Your marketing should be too.`
- sub: `Landscaping and garden work sells itself — when people can see it. We put your transformations in front of the neighbourhoods you want to work in.`
- pains: (1) *Your portfolio lives in your camera roll* — Hundreds of before/afters nobody sees. (2) *Spring chaos, winter silence* — The season books itself; the shoulder months don't. (3) *Quotes eat your evenings* — Driving to estimate jobs that were never serious.
- plan: (1) *A portfolio-first site* — Before/after galleries by neighbourhood and project type — proof does the selling. (2) *Instagram & TikTok on autopilot* — Send photos from the job; we turn them into a steady feed. (3) *Smarter quote requests* — Forms that collect photos, size and budget up front, so you only drive to real jobs. (4) *Seasonal campaigns* — Spring cleanup ads in March, snow contracts in October — booked before the rush.
- faq: (1) *I'm booked all summer — why market?* — To book the *right* jobs — bigger projects, better neighbourhoods — and to fill April and November. (2) *I don't have time for social media.* — You don't need it. Photos go in a shared album; posting happens on schedule without you. (3) *Do you handle both landscaping and garden maintenance?* — Yes — one-off builds and recurring maintenance each get their own pages and booking flow.
- closing: `The neighbours are already admiring your work. Let's make sure they know who did it.`
- meta: `Websites & Marketing for Landscapers & Gardeners in Toronto | Sharplines` / `Portfolio-first websites, social autopilot and seasonal campaigns for GTA landscaping and garden businesses. Free homepage preview.`

**barbers** — trade label: `Barbershops & salons`, hook: `Full chairs, fewer no-shows.`
- h1: `Every empty chair is money walking past your window.`
- sub: `Your next regular is scrolling Instagram or searching "barber near me" right now. We make sure they find you — and actually show up.`
- pains: (1) *No-shows burn your day* — A missed 30-minute slot is gone forever. (2) *Instagram is your portfolio, but it's inconsistent* — Great fades, posted whenever there's time — which is never. (3) *Walk-in dependence* — Slow Tuesdays stay slow when your books aren't online.
- plan: (1) *Booking that runs itself* — Two-tap online booking with automatic reminders that slash no-shows. (2) *A feed that stays fresh* — Your cuts, posted consistently to Instagram and TikTok. (3) *Own your local search* — "Barber near me" and your shop name, ranking with photos, hours and reviews that pull people in. (4) *Reviews after every cut* — A friendly automatic follow-up turns regulars into five-star reviews.
- faq: (1) *I use [booking app] already — do I need this?* — We work with your booking system or set up a better one; the difference is everything around it driving people *into* it. (2) *Can you post my content for me?* — Yes — drop photos in a shared album and they go out on schedule, captioned and tagged. (3) *Does this work for salons and beauty too?* — The same playbook fits salons, brows, lashes and nails.
- closing: `Tuesday at 2pm shouldn't be empty. Let's fill the book.`
- meta: `Websites & Marketing for Barbershops in Toronto | Sharplines` / `Online booking, social autopilot, local SEO and review automation for GTA barbershops and salons. Free homepage preview in 48 hours.`

**cleaners** — trade label: `Cleaning services`, hook: `Recurring clients, not one-off gigs.`
- h1: `Build a client list that cleans up every week.`
- sub: `One-time cleans pay once. Weekly clients pay forever. We build the trust signals and booking flow that turn searchers into standing appointments.`
- pains: (1) *Trust is the whole sale* — You're asking strangers to hand over their keys. A thin online presence kills that at hello. (2) *Quote ping-pong* — Back-and-forth messages to price a two-bedroom condo, again and again. (3) *Feast-or-famine one-offs* — Move-out cleans keep the lights on but never compound.
- plan: (1) *A trust-first website* — Insurance, vetting, guarantees, and real reviews before anything else. (2) *Instant online quotes* — Beds, baths, frequency → price → booked. No ping-pong. (3) *Recurring plans by design* — Weekly and bi-weekly plans positioned as the default, not the upsell. (4) *Reviews + rebooking automation* — Five-star follow-ups and reminders that keep clients on schedule.
- faq: (1) *Residential, commercial, or Airbnb?* — Each gets its own page and pricing flow — they search differently. (2) *Can people really book without talking to me?* — Yes, for standard cleans. Complex jobs route to a quick quote form with photos. (3) *How do I stand out from cheaper cleaners?* — You don't win on price; you win on trust. That's exactly what the site is built to show.
- closing: `Your next weekly client is searching right now. Be the obvious safe choice.`
- meta: `Websites & Marketing for Cleaning Services in Toronto | Sharplines` / `Trust-first websites, instant quotes and recurring-client booking for GTA cleaning companies. Free homepage preview in 48 hours.`

**roofers** — hook: `Be the roofer people trust when the storm hits.`
- h1: `Roofing is a trust business. Look like the safe choice.`
- sub: `Homeowners are terrified of roofing scams. The contractor who looks credible online wins the $15,000 job before the first ladder goes up.`
- pains: (1) *Scam shadow* — Storm-chaser horror stories make homeowners suspicious of everyone — including the good contractors. (2) *Huge tickets, long decisions* — A roof is one of the biggest cheques a homeowner writes; they compare three or four companies. (3) *Weather-driven demand spikes* — After a storm, whoever's visible gets the calls.
- plan: (1) *Credibility everywhere* — Licensing, insurance, warranties, manufacturer certifications and real project photos, front and centre. (2) *Neighbourhood proof* — Job galleries by area: "roofs we've done near you" beats any slogan. (3) *Storm-response readiness* — Emergency tarping and inspection pages that rank when weather hits. (4) *Financing & inspection funnels* — "From $/month" framing and free-inspection booking that fills the pipeline.
- faq: (1) *How do I stand apart from door-knockers?* — By showing everything they can't: verifiable licensing, addresses of completed jobs, warranty terms in writing. (2) *Is a free-inspection offer worth it?* — It's the highest-converting roofing CTA there is — when the follow-up is systematic. We build the whole funnel. (3) *Can you target insurance-claim work?* — Yes — dedicated pages that explain the claims process build trust with storm-damage searches.
- closing: `The next storm is a when, not an if. Be the roofer they already trust.`
- meta: `Websites & Marketing for Roofers in Toronto | Sharplines` / `Trust-first websites, storm-response SEO and inspection funnels for GTA roofing contractors. Free homepage preview in 48 hours.`

**auto-repair** — trade label: `Auto repair shops`, hook: `Fill the bays, keep them coming back.`
- h1: `Empty bays don't pay the rent.`
- sub: `Drivers pick a mechanic twice: once in a panic, once for life. We make sure both searches end at your shop.`
- pains: (1) *The dealer's marketing budget* — Dealerships outspend you everywhere except trust — your actual advantage, if people can see it. (2) *Panic searches go elsewhere* — "Mechanic near me open now" is a customer for life for whoever answers. (3) *No system for repeat visits* — Oil changes and seasonal tires should return automatically; instead they drift.
- plan: (1) *A site that disarms distrust* — Straight talk about pricing, warranties on work, and reviews that lead. (2) *Own the panic search* — Local SEO tuned for "near me, open now" moments. (3) *Online booking + reminders* — Book a bay in two taps; seasonal reminders bring tires and tune-ups back on schedule. (4) *Reviews engine* — Every happy customer asked, automatically, while the experience is fresh.
- faq: (1) *People think all mechanics overcharge — can a website fix that?* — It can show the opposite: transparent pricing, warranty terms and a wall of reviews change the conversation before they call. (2) *Can customers book specific services?* — Yes — oil change, brakes, diagnostics, tires each with real time slots. (3) *What about seasonal tire rushes?* — Reminder campaigns and booking pages go live before the rush, so the schedule fills itself.
- closing: `Someone's check-engine light just came on. Be the shop they trust with it.`
- meta: `Websites & Marketing for Auto Repair Shops in Toronto | Sharplines` / `Trust-building websites, local SEO and booking systems for GTA auto repair shops. Free homepage preview in 48 hours.`

---

## 8. Contact form

Two variants of one component:
- **short** (CTA bands): Name · Business name · Phone · button `Get my free preview`
- **full** (/contact, trade pages): Name · Business name · Trade/industry (select: the 8 trades + Other) · Phone · Email · Current website (optional, url) · What are you interested in? (select: Free homepage preview [default] / Full website / Get found on Google / Reviews & booking / Phone answering / Social & ads / Not sure yet) · Anything we should know? (textarea, optional)

Rules: labels in mono style above inputs; 48px inputs; inline validation (name + phone or email required); honeypot field + minimum-time check for spam; no CAPTCHA at launch. Consent microcopy under the button: `By sending this you're okay with us contacting you about your request. No newsletters, no spam — ever.` (link "Privacy" → /privacy).
Success state (inline, replaces form): `Got it. You'll hear from us today — and your preview lands within 48 hours.` Failure state: show the error, keep field values, offer `hi@sharplines.ca` as fallback.
Delivery: Astro API route → Resend (`RESEND_API_KEY` env) emailing hi@sharplines.ca with all fields + page source. If no key present, fall back to a Web3Forms endpoint (`WEB3FORMS_KEY`). `TODO(arya): pick provider + add key.`

---

## 9. SEO & schema

- Titles/descriptions: trade pages per §7; Home: `Websites & Marketing for Local GTA Businesses | Sharplines Studio` / `Sharplines builds websites, local SEO, reviews, booking and ad systems that get Toronto & GTA businesses more booked jobs. See your new homepage free in 48 hours.`; write the remaining pages in the same voice, ≤60/≤155 chars.
- JSON-LD: sitewide `ProfessionalService` (name, url, telephone, email, `areaServed: Toronto & Greater Toronto Area` — **no address**); each trade page adds `Service` + `FAQPage` (from its 3 FAQs); /work adds nothing extra.
- One OG image at launch (1200×630: dark-green background, "Sharplines" wordmark, a coral sharp-line accent, tagline `More booked jobs.`) — generate as a static asset; per-page OG images are post-launch.
- `@astrojs/sitemap` + robots.txt; canonical on every page; trade pages interlink (footer of each: "Also see: 3 sibling trades").

---

## 10. Assets needed from Arya (build proceeds with placeholders)

1. Logo files (until then: wordmark per §3.4) · 2. Founder photos (4:5) · 3. Provolta screenshots ×3 + written permission + quote · 4. 416/647 phone number · 5. Resend or Web3Forms key · 6. Favicon (fallback: coral "S" on dark green)

## 11. Build order & acceptance

Order: tokens/global CSS → Nav/Footer/ChalkLine → Home → ContactForm + API route → trades collection + template (8 pages) → Services → Work → About → Contact → Privacy/404 → SEO/schema/sitemap → polish pass.

Ship checklist: Lighthouse ≥95 ×4 · works at 360px · form delivers + spam-guarded · reduced-motion honored · keyboard nav + visible focus · all copy matches this spec §2 voice · zero banned words · schema validates (Rich Results test) · no placeholder text visible except marked TODOs.
