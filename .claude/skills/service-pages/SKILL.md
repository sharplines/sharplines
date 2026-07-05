---
name: service-pages
description: How to build the seven Sharplines Service pages (/services/[slug]) so each one ranks on its own search intent and converts a trades owner into a free-preview lead. Use when writing, editing, or scaffolding any service page (Websites that sell, Get found on Google, Reviews that keep coming, Online booking, Never miss a call, Social media handled, Ads that pay for themselves). Pair with the site-copy skill for voice; this skill owns structure, SEO, and the per-service depth.
---

# Sharplines service pages

One page per service, at `/services/[slug]`, one search intent each. This skill is the
build standard Arya signed off on after the electricians trade page (2026-07-05). It owns
**structure, SEO, and the depth of each service's argument.** Voice and word choice come
from the **`site-copy`** skill, which you must run before writing a line. Read both.

## The one rule that makes these good

A service page earns trust by proving we understand **how the thing works and what it is
worth in the owner's world.** Not by announcing that we understand marketing, and never by
explaining the owner's own trade back to them (see the memory
`copy-never-lecture-the-customer` and the electricians page). The reader is a busy
owner-operator who has been pitched "boost your online presence" a hundred times. Beat that
by being concrete about the mechanism and honest about the money.

Two failure modes to delete on sight:

- **Marketing air.** "Boost visibility", "digital storefront", "online presence",
  "engagement". If it could describe any agency selling anything, cut it.
- **Explaining their business to them.** "Homeowners search on their phones these days."
  They know. Say what *we* do about it that they can't be bothered to.

The fix is always the same shape: **one concrete mechanism, then the plain money math.**
"Missed calls get answered and texted to you with who called and how urgent. One captured
emergency job a month covers the plan."

## Who reads it (unchanged across the site)

Owner-operator, 1–10 staff, ~80% on a phone. Mobile is the product; every section must earn
its phone height and be skippable in one flick (AGENTS owner priorities). They care about
booked jobs and money kept, not features. One offer per page: the free homepage preview.

## Page anatomy

Mirror the trade-page rhythm (`src/pages/for/[slug].astro`) so the site feels like one
thing. Same colour blocks, same ivory-card language, `navSolid` nav, `CTABand` form on-page.
Build it as a typed data module (`src/data/servicePages.ts`) + one template
(`src/pages/services/[slug].astro`), the exact pattern `tradePages.ts` uses. Do not invent
new components; reuse `FAQ` and `CTABand`.

Sections, top to bottom:

1. **Hero (green).** Eyebrow "What we do · Toronto & the GTA". H1 = the outcome in the
   owner's words, with the place when it is honest and natural, and a short coral
   `line-accent` phrase. Sub = one sentence naming the mechanism, plus the Provolta 2×
   proof where it fits. CTA = "Get my free homepage preview" + "Free preview in 48 hours ·
   No obligation". Hero visual = a small **CSS product artifact** in the ivory-card
   language, not a stock photo (shipped 2026-07-05; awaiting Arya's taste sign-off like
   all imagery): the mechanism drawn as UI — missed-call text summary, review-request SMS,
   map-pack rows, booking time picker, mini phone site, social post frame (reuses the real
   landscapers poster), ad-to-call row. Template owns them (`artifact` key in the data).
   Truth rule for artifacts: depict OUR product's output (requests, summaries, bookings,
   tracking), never fake social proof — no invented reviewer names, star counts, or
   customer praise. Cards 14px; button/input stubs inside keep the 3px token. Keep each
   artifact under ~360px tall on a phone.
2. **What it costs you today (coral pains).** Three concrete ways this owner loses money
   *right now* without this service. Specific to the service, not generic. Hairline rows on
   mobile, three ruled columns on desktop (reuse the `.pains` styles).
3. **How it actually works (mint, ivory-card playbook).** 4–6 items, the real moving parts
   in plain words. This is where fluency shows. Coral checkmarks. Each item = a title
   fragment + one or two complete sentences (what it is, then why it pays).
4. **What it's worth (one honest line, inside the playbook block or just under it).** The
   money math in the owner's terms, no invented numbers. "One saved job a month covers it."
   The only hard metric on the whole site is Provolta's client-reported 2×.
5. **Pricing strip (green).** Which plan this service lives in (Growth $179 or Autopilot
   $495), $0 down, cancel any time, the site is theirs to keep. Link to `/#pricing`. Never
   invent or move prices (Pricing.astro + spec §6.1 are the source of truth).
6. **FAQ (mint) + sibling links.** The three or four real objections for *this* service
   (see per-service briefs), phrased the way people ask them. Answer the question in the
   first sentence. Then "Also useful:" links to two sibling services and, where natural, a
   trade page.
7. **CTABand (green), form on-page**, `id="preview"`, `variant="full"`, per-service `lede`.

## SEO rules (per page)

Follow the `site-copy` SEO section; specifics for service pages:

- **One intent per page.** Do not let "Get found on Google" also try to sell websites.
- **H1** states the outcome in customer language, place included when natural.
- **`<title>` ≤ 60 chars:** what + where + brand, e.g. `Online booking for GTA trades |
  Sharplines`. Verify the count.
- **Meta description 140–160 chars**, this voice, with the free-preview offer when it fits.
- **JSON-LD inline:** `Service` (name, `areaServed` = Toronto & GTA, `provider` =
  Sharplines) + `FAQPage` built from the page's own Q&As. Copy the pattern from the trade
  template.
- **Interlink:** every service links to two sibling services and, where honest, to relevant
  trade pages (an electrician reading "Never miss a call" should reach `/for/electricians`).
- Never bend a sentence for a keyword. One natural mention in the H1, first paragraph, and
  meta tags is plenty.

## Conversion rules

- Five-second test above the fold: what this does, who it's for, what to do next.
- One offer: the free homepage preview, repeated, risk-removers beside it (free, 48 hours,
  no obligation, no long contract). Secondary action only ever "book a 15-minute call".
- "You/your" must outnumber "we/our" on the page.
- Answer the objection where it lives. Start the answer with the answer.
- Every section ends somewhere to go.

## The seven services: depth briefs

For each service: the real objection (why they have not done it), the mechanism (what we
actually do, in honest moving parts), the money angle, the searches to own, and what not to
say. Think each one through from the owner's chair before writing; do not template-fill.
Ground every capability claim in the real product (site, local SEO, reviews, booking, phone
intake, social, ads, dashboard) and in Provolta where it is honest. Never invent metrics.

### 1. Websites that sell  ·  slug `websites`
- **Objection:** "I already have a website," or "my nephew made me one," or "a site won't
  bring me calls."
- **Mechanism:** fast, mobile-first, a quote form that sorts jobs by type and urgency,
  tap-to-call at the top, trust up front (licence, insurance, real project photos, reviews),
  one page for each money-making service, and unlimited edits through your dashboard. You own
  the site outright.
- **Money:** it is a tool that books jobs, not a brochure. One extra job a month covers it.
- **Own:** "website for electricians / plumbers / [trade] Toronto", "small business website
  GTA".
- **Don't say:** "stunning", "beautiful", "digital storefront", "online presence". Sell
  booked jobs, not looks.

### 2. Get found on Google  ·  slug `local-seo`
- **Objection:** "SEO is a scam," "it takes forever," "I tried it and nothing happened."
- **Mechanism:** your Google Business Profile tuned properly (categories, services, photos,
  regular posts), a page for each neighbourhood you serve, on-page work for the searches that
  actually pay, consistent name/address/phone everywhere, and reviews feeding your rank.
- **Money:** the map pack and the first few results get almost all the clicks. Showing up
  there is calls your competitors take today only because they appear first.
- **Honesty:** say the timeline plainly. Local rankings usually move over two to four months.
  That honesty is a trust signal.
- **Own:** "show up on Google", "rank on Google Maps", "[trade] near me", "local SEO Toronto".
- **Don't say:** "guarantee number one", "SEO magic", any keyword-stuffed sentence.

### 3. Reviews that keep coming  ·  slug `reviews`
- **Objection:** "asking for reviews is awkward," "I forget to ask," "I already have some."
- **Mechanism:** a friendly follow-up text or email after each finished job, with a direct
  link to your Google review page, sent while the work is still fresh. Happy customers reach
  the review form; anyone unhappy reaches you first, so you can fix it. We help you reply to
  reviews too.
- **Money:** reviews are the tiebreaker on every quote. More of them, and recent ones, wins
  the call and supports a higher price.
- **Own:** "get more Google reviews", "[trade] reviews Toronto".
- **Don't say:** never buy or fake reviews, never promise a star count or a number of reviews.

### 4. Online booking  ·  slug `booking`
- **Objection:** "my jobs need a quote first," "customers will book the wrong thing," "I
  prefer the phone."
- **Mechanism:** two-tap booking straight into your calendar with reminders that cut
  no-shows. Standard jobs book directly; bigger jobs route to a short quote form with photos.
  Works with the booking system you already use, or we set up a better one.
- **Money:** bookings land while you are on a ladder or asleep, and reminders mean fewer empty
  slots.
- **Own:** "online booking for [trade]", "book a [trade] online".
- **Don't say:** do not imply it replaces your judgment on quoting a real job.

### 5. Never miss a call  ·  slug `call-answering`
- **Objection:** "I don't want a robot answering my phone," "customers hate machines."
- **Mechanism:** the calls you miss, after hours or on a job, get answered. The caller's need
  and address are taken, and you get a text with who called, where, and how urgent, sorted so
  you ring back the profitable ones first. It sounds warm, and you always decide the callback.
- **Money:** the burst-panel or flooded-kitchen job goes to whoever answers. One captured
  emergency a month pays for the plan several times over.
- **AI framing:** AI is how it works, never the pitch. Lead with "your phone gets answered
  and you get the details," not "AI voice agent" (site-copy rule).
- **Own:** "24 hour answering for [trade]", "never miss a call", "after hours [trade]".
- **Don't say:** "AI-powered voice agent" as a headline, or anything that sounds like a call
  centre.

### 6. Social media, handled  ·  slug `social`
- **Objection:** "I don't have time," "I don't get social," "does it even bring jobs?"
- **Mechanism:** you drop photos from the job into a shared album, and we post them to
  Instagram and TikTok on a schedule, captioned and tagged and on-brand. Your before-and-afters
  do the selling. You never open the apps.
- **Money:** it keeps you top of mind and proves the work, which feeds referrals and reviews.
- **Honesty:** be straight that for most trades social supports search and word of mouth, it
  does not replace them. Do not promise followers or viral posts.
- **Own:** "social media for [trade]", "done for you social media Toronto".
- **Don't say:** "go viral", "grow your following", "engagement".

### 7. Ads that pay for themselves  ·  slug `ads`
- **Objection:** "ads just burn money," "I boosted a post once and got nothing," "too
  expensive for me."
- **Mechanism:** Google Search ads aimed at high-intent "near me" and "emergency" searches,
  Meta ads for awareness and to bring back people who visited, landing on the page built to
  convert, with call tracking so you can see which ad made the phone ring. Spend scales up with
  your busy season. This service is part of the Autopilot plan.
- **Money:** you are paying to reach people searching for exactly your service right now, and
  you see a real cost per call instead of a mystery.
- **Honesty:** the ad spend is separate and it is your money; say so. Never promise a return
  on ad spend number.
- **Own:** "Google Ads for [trade]", "[trade] advertising Toronto".
- **Don't say:** "ROAS", "guaranteed leads", or anything that hides that the spend is theirs.

## Worked reference: the tone to match

- **Whole-page tone benchmark:** `src/pages/for/[slug].astro` rendered for `electricians`.
  Match its depth and its across-the-counter register.
- **Gold-standard section copy** (a "How it actually works" item done right, for Never miss
  a call):
  > **The details reach you, not a voicemail.** A missed call gets answered, the address and
  > the problem get taken, and you get a text with who called and how urgent it is. You ring
  > back the burst-panel job tonight and let the outlet swap wait until morning.

  Note what it does: concrete mechanism, the owner's own examples, the money implied, zero
  buzzwords, "you" leads. That is the bar for every item on every service page.

## Pre-ship checklist

Run before committing any service page:

1. Run the **`site-copy`** pre-ship checklist first (em-dash grep `grep -rn "—" src/`,
   banned-word grep, read-aloud test, you-vs-we count).
2. Every "How it works" item: names a real mechanism and lands a plain benefit. No marketing
   air, no explaining the owner's trade to them.
3. Every claim is verifiable or cut. The only metric is Provolta's 2×. No invented numbers,
   no promised rankings or star counts.
4. Honest limits stated where they matter (SEO timeline, ad spend is theirs, social supports
   not replaces).
5. One offer (free preview) with risk-removers; one search intent; H1, `<title>` ≤ 60,
   meta 140–160 all correct; `Service` + `FAQPage` JSON-LD present; two sibling links.
6. Check it at ≤ 400px. Every section skippable in one flick, cards span the container width.
