---
name: trade-pages
description: How to write and deepen the eight Sharplines trade pages (/for/[slug]) so each one proves real domain fluency and converts that trade's owner into a free-preview lead. Use when adding or editing any trade page content in src/data/tradePages.ts or the /for/[slug].astro template. Pair with the site-copy skill for voice; service-pages is the sibling standard for /services.
---

# Sharplines trade pages

One page per trade, at `/for/[slug]`, data in `src/data/tradePages.ts`, one template.
This is the standard Arya set after rejecting the first electricians draft (2026-07-05)
and approving the rework ("I love it"). Voice comes from **`site-copy`**; run it first.
Structure below mirrors the `service-pages` skill so the site reads as one thing.

## The one rule that makes these good

A trade page earns trust by proving we understand **how this trade's customers find,
compare and hire**, and what each kind of job is worth. Never by explaining the trade to
the tradesperson. "We know what an ESA number means" got rejected in exactly those words:
the reader knows everything about their own trade and nothing impresses them less than
an outsider reciting it.

Two failure modes to delete on sight (same as service pages):

- **Marketing air.** "Boost your visibility", "online presence". Cut anything that could
  describe any agency selling anything.
- **Explaining their business to them.** Write about the *customer's* behaviour and the
  *website's* job. The owner's own expertise is off limits as a topic.

The fix is always: **one concrete buying behaviour, then what the site does about it,
then the plain money implication.** "When the insurer sets a deadline, the homeowner
searches with the letter in hand, and the contractor whose site explains the fix gets
the call."

## When a trade gets the segments section (and when it doesn't)

The optional "The work" section (`segments` / `segmentsHeading` / `segmentsKicker`)
exists for trades whose customer types genuinely buy differently. Not every industry
needs this detail (Arya, 2026-07-05).

**The test:** can you name three buyer types for this trade and say, without reaching,
how each one *finds*, *compares*, and *decides* differently? If yes, write the section.
If you are padding a second column, skip the section and put the depth into pains and
playbook instead.

- **Segments YES:** electricians (residential / commercial / industrial), plumbers
  (emergency / reno-install / property managers), HVAC (replacement / maintenance plans /
  light commercial), landscapers (design-build / maintenance / snow), cleaners
  (residential recurring / commercial-janitorial / Airbnb), roofers (replacement /
  storm repair / flat & commercial).
- **Segments NO:** barbers, auto repair. One buyer type dominates and buys one way;
  their depth lives in operator-true pains ("half your bookings arrive by DM") and
  playbook items instead.

Each segment body answers, in 2–4 sentences: what the work is (named like an insider
names it), how that buyer finds and picks, and what the site's job is for that buyer.
The kicker states the lanes-and-money truth and lands the filtering promise: the site
leads with the work they want and screens out the rest.

## Research before writing (from the owner's chair)

Think each trade through before touching copy; template-filling is visible and fatal.

1. **Service lines and what each pays.** Which jobs are the bread, which are the butter,
   which does the owner wish they got more of, which do they resent.
2. **Triggers with deadlines.** These are gold: insurance letters (knob-and-tube,
   aluminum wiring, 60-amp panels), rebate programs (EV chargers, heat pumps, Toronto's
   basement-flooding subsidy for backwater valves), first snowfall, checkout-to-check-in
   windows, storm weeks. A deadline turns a browser into a caller.
3. **The growing search to own.** Every trade has an EV-charger equivalent: a search
   that is getting bigger and that incumbents haven't claimed yet. Arya explicitly likes
   this angle; find it honestly or leave it out.
4. **The filtering wish.** Every owner has calls they'd rather not take. The site sorts
   work as much as it attracts work; say so.
5. **Verify regional facts.** ESA/ECRA, city subsidy programs, rebates: only claim what
   is checkably true, phrased generically enough to survive program changes.

## Honesty rules

- Provolta Electric is the **only** client. The electricians page may claim direct
  experience; every other trade uses the shared `provoltaLine` and claims only that the
  *system* transfers. Never imply a plumbing or roofing client exists.
- The only metric anywhere is Provolta's client-reported 2×.
- Boundary answers build trust: say plainly what stays with the owner (permits,
  licences, the actual trade work). The electricians "Do you handle the ESA permits?"
  FAQ, answered "No, that stays with you", is the pattern.

## Page anatomy (template: src/pages/for/[slug].astro)

Green hero (video) → mint segments (when present) → coral "Sound familiar?" pains →
mint playbook (one ivory card, coral checks, 4–6 items) + proof line → green pricing
strip (published numbers only, links /#pricing) → mint FAQ (3–5) + sibling links →
CTABand `id="preview"` with full form, trade preselected, `closing` as lede.
`Service` + `FAQPage` JSON-LD are generated from the data automatically.

FAQ patterns that work: the fit question ("I only do residential"), the boundary
question ("Do you handle the permits?"), the growing-search question (EV chargers),
logistics (emergencies, launch time). Answer starts with the answer.

## Hero media

Each trade has a looping muted video, supplied by Arya in `../sharplines_photos`
(originals stay there; never commit them).

- Compress: `ffmpeg -i in.mp4 -vf "scale=1280:-2,fps=30" -c:v libx264 -crf 28 -preset
  medium -an -movflags +faststart public/videos/trades/{slug}.mp4`. Aim ≤ 3MB; trim
  duration (`-t 10`) or raise CRF for noisy footage (foliage needed CRF 32).
- Poster = the video's first frame, ≤ 200KB, at `public/images/trades/{slug}.jpg`
  (`ffmpeg -frames:v 1 -q:v 4..7`). Playback then starts without a jump.
- The template autoplays muted/looped/playsinline and falls back to the poster under
  `prefers-reduced-motion`. `imgAlt` in the data labels the media.

## SEO (per page)

`metaTitle` ≤ 60 chars ("Websites for Toronto electricians | Sharplines Studio"
pattern). `metaDescription` 140–160, this voice, free-preview offer included. H1 stays
a hook in the owner's words; the title tag carries the search phrasing. One natural
place mention in eyebrow/sub. Sibling-trade links close the FAQ section.

## Pre-ship checklist

1. Run the **site-copy** checklist (em-dash grep, banned words, read-aloud,
   you-vs-we count).
2. **The operator-nod test:** read every segment and playbook item as the trade's
   owner. Anything they would roll their eyes at, or that tells them their own job,
   gets cut. When unsure, Arya reviews before deploy; he knows these owners.
3. Every claim verifiable; regional programs phrased to survive change; no invented
   clients or metrics.
4. Meta lengths verified. JSON-LD present in the built page.
5. Check at ≤ 400px: every section skippable in one flick; video ≤ 3MB, poster ≤ 200KB.
