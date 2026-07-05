---
name: site-copy
description: Voice and language rules for ALL Sharplines visitor-facing copy. MUST be followed whenever writing or editing any text a visitor can read — page copy, headlines, CTAs, FAQs, form/status messages, meta titles and descriptions, alt text, OG tags, 404s, emails. Also use when asked to review or fix the tone of existing copy.
---

# Sharplines copy voice

Every word a visitor reads follows this guide. It is the authoritative voice rule
(set by Arya, 2026-07-05): where sample copy in `docs/site-spec.md` §6–§7 conflicts
with this guide, this guide wins, and the spec copy gets rewritten to comply when touched.

## The register

Write like a trusted local pro explaining things across the counter: warm, plain,
specific, unhurried. The tone model is **fieldmark.studio** — calm complete sentences
that explain rather than pitch, a small consistent vocabulary (trust, calls, booked
jobs), and confidence that comes from being specific, not loud.

Touchstone, theirs: *"Instead of scrambling to create materials yourself, you get
reliable design support built specifically for your brand."*
Ours, same register: *"Instead of chasing every missed call, you get a text with who
called and why, and the job is already in your calendar."*

The reader is a busy owner-operator (1–10 employees). They care about booked jobs,
not marketing. They can smell copy written by a machine or a marketer; both lose the sale.

## Hard rules — punctuation and AI tells

These are the patterns Arya explicitly rejected. Zero tolerance in visible copy:

1. **No em-dashes (`—`), ever.** Not in headlines, body, buttons, alt text, or meta
   tags. Replace with a period (usually best), a comma, or restructure the sentence.
   - En-dash (`–`) only inside numeric ranges: `2–3 weeks`. Nowhere else.
   - Hyphens in compound words are fine. The middle dot (`·`) stays as a visual
     separator in small meta lines (`Free preview in 48 hours · No obligation`).
2. **No "It's not X, it's Y"** and no "not just X, but Y".
3. **No "Whether you're a plumber or a painter…"** openers.
4. **No rhetorical hype questions** ("Ready to grow?"). Functional questions that a
   real person would ask are fine: "Don't see your trade?", "Prefer to talk?".
5. **No colon-formula headlines** ("Sharplines: growth that works").
6. **No stacked hype adjectives.** One concrete claim beats three vague ones.
7. Sentence case everywhere, including buttons and headings. No exclamation marks.
   No emoji. No Title Case.

## Words

**Banned outright** (spec §2 list plus AI-speak): solutions, synergy, leverage (verb),
cutting-edge, revolutionize, digital transformation, unleash, empower, elevate,
seamless, world-class, unlock, supercharge, skyrocket, streamline, effortless,
hassle-free, game-changing, next-level, innovative, robust, holistic, harness,
transform (as hype), "on autopilot", "in today's digital world/landscape",
"look no further", "we've got you covered", "take your business to the next level".

**Use the customer's words, not the industry's:** "show up on Google", not "search
visibility". "More calls", not "lead generation". "Your phone gets answered after
hours", not "AI-powered voice agent" (AI is an outcome, never a buzzword). "A quote
form people actually finish", not "optimized conversion funnel". If an owner wouldn't
say the word to another owner, don't print it.

## Sentences

- Complete sentences by default, like Fieldmark. Punchy fragments are allowed only in
  short labels (card titles, proof-bar items), not in body copy.
- Short sentences, varied length. If a sentence needs an em-dash to breathe, it's two
  sentences.
- Second person. "You" and "your" should outnumber "we" and "our" on every page.
- Contractions are welcome: you'll, we'll, it's, don't.
- When you make a claim, follow it with the plain why or how in the next sentence.
- Read it aloud. If you wouldn't say it to an owner across the counter, rewrite it.

## Lead generation

- **Five-second test above the fold:** what we do, who it's for, what to do next.
  Each in plain words, no scrolling needed.
- **One offer per page: the free homepage preview.** Repeat it; never invent a
  competing CTA. Secondary action is always "book a 15-minute call".
- **CTA label = verb + what they get.** "Get my free homepage preview", "Book a
  15-minute call". Never "Submit", "Learn more", or "Get started" as a primary.
- **Risk-removers sit beside every CTA**, stated plainly: free, 48 hours, no
  obligation, no long-term contract.
- **Specific beats superlative.** Numbers, timeframes, and place names sell:
  "48 hours", "2× more clients", "Toronto". Only true ones (see Truth).
- **Answer objections where they happen**, and answer the question in the first
  sentence ("Am I locked into a contract?" starts with "No.").
- Every section ends somewhere to go: one link, plainly labelled with its destination.

## SEO

- One search intent per page. The H1 states it naturally in customer language and
  includes the place (Toronto, the GTA, a neighbourhood) when honest and natural.
- `<title>` ≤ 60 characters: what + where + brand
  ("Websites for Toronto electricians | Sharplines Studio").
- Meta description 140–160 characters, written in this same voice, including the
  free-preview offer when it fits. It's ad copy, not a keyword list.
- FAQ headings phrased the way people actually ask ("How much does a website cost?").
  These match voice searches and win featured snippets.
- Alt text describes the image in one plain sentence. Link text says where the link
  goes. No keyword stuffing in either.
- Never bend the voice for a keyword. One natural mention in the H1, the opening
  paragraph, and the meta tags is enough.

## Truth

- Only verifiable claims. The single published metric is Provolta's client-reported
  2×. Never invent testimonials, client counts, star ratings, or years in business.
- Founder framing is engineering experience ("senior software engineers who spent
  years shipping software in tech"), never implied agency years.
- State limits plainly: "Google rankings usually take two to four months." Honesty
  about timelines is a trust signal, not a weakness.
- No fake urgency or scarcity. No countdowns, no "only 3 spots left".

## Before/after (from the 2026-07-05 rewrite)

| Rejected | Shipped |
|---|---|
| …make GTA businesses the obvious choice — then keeps the calls coming. | …make your business the one people call. Based in Toronto, working across the GTA. |
| See my new homepage — free | Get my free homepage preview |
| Reviews on autopilot | Reviews that keep coming |
| Win the storm season — and the trust battle. | Be the roofer people trust when the storm hits. |
| No long-term lock-in. We keep clients by performing, month after month. | No. There's no long-term contract. We keep clients by getting results, month after month. |

## Pre-ship checklist

Run this before committing any copy change:

1. `grep -rn "—" src/` — every hit must be a code comment, never rendered text.
2. Grep the diff for the banned words above.
3. Read every new sentence aloud; apply the across-the-counter test.
4. Count "you/your" vs "we/our" on the page; you must win.
5. Every number, name, and claim: verifiable, or cut.
6. New page? Confirm H1, `<title>` (≤ 60 chars), and meta description (140–160 chars)
   follow the SEO rules, and the primary CTA is the free preview with risk-removers.
