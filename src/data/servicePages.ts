// Service pages (/services/[slug]) — one search intent per service.
// Build standard: .claude/skills/service-pages/SKILL.md (structure/SEO/depth)
// + site-copy skill (voice). Same data-module pattern as tradePages.ts.
// The only published metric anywhere is Provolta's client-reported 2×.

export type ServiceSlug =
  | 'websites'
  | 'local-seo'
  | 'reviews'
  | 'booking'
  | 'call-answering'
  | 'social'
  | 'ads';

// Hero visual: a small CSS product artifact rendered by the template
// (no stock photos on these pages; the artifact shows the mechanism).
export type ServiceArtifact =
  | 'phone-site'      // websites: mini site above the fold on a phone
  | 'map-pack'        // local-seo: search + map-pack rows
  | 'review-request'  // reviews: the follow-up text
  | 'booking-card'    // booking: two-tap time picker
  | 'call-summary'    // call-answering: what a missed call turns into
  | 'social-post'     // social: a posted before/after
  | 'ad-call';        // ads: ad tracked to the call it made

export interface ServiceItem { title: string; body: string }
export interface ServiceFaq { q: string; a: string }

export interface ServicePage {
  slug: ServiceSlug;
  anchorId: string;   // legacy /services#anchor this page grew out of (hub card id)
  label: string;      // card title (matches home services grid)
  blurb: string;      // one-liner for the hub card
  icon: string;       // ServiceCard icon key
  metaTitle: string;        // ≤ 60 chars — count it
  metaDescription: string;  // 140–160 chars — count it
  h1: string;
  h1Accent: string;   // substring of h1 that takes the coral line
  sub: string;        // the mechanism in one or two sentences; Provolta 2× where honest
  artifact: ServiceArtifact;
  pains: ServiceItem[];     // 3 — what this costs the owner today, concretely
  how: ServiceItem[];       // 4–6 — the real moving parts, coral checks
  worth: string;            // the plain money line under the playbook
  plan: 'growth' | 'autopilot' | 'either'; // pricing strip variant (published numbers only)
  faq: ServiceFaq[];        // 3–4 real objections, answer first
  siblings: [ServiceSlug, ServiceSlug];
  tradeLink?: { slug: string; noun: string }; // natural /for link, e.g. plumbers
  closing: string;          // CTABand lede
}

export const servicePages: ServicePage[] = [
  {
    slug: 'websites',
    anchorId: 'websites',
    label: 'Websites that sell',
    blurb: 'A fast, clean site built to turn visitors into calls and quotes. We rebuild it from scratch and take it live in weeks.',
    icon: 'browser',
    metaTitle: 'Websites for GTA trades that book jobs | Sharplines',
    metaDescription: 'A fast site with tap-to-call, a quote form people finish, and a page for every service you sell. See your new homepage free in 48 hours, no obligation.',
    h1: 'A website that books jobs, not a brochure.',
    h1Accent: 'books jobs',
    sub: "Fast on a phone, your number one tap away, and a quote form that sorts real jobs from tire-kickers. It's the build behind Provolta Electric's reported 2× more clients.",
    artifact: 'phone-site',
    pains: [
      {
        title: 'Slow pages lose the job quietly',
        body: "Most of your visitors are on a phone with one bar of patience. If the page drags or the number is buried, they're back on Google before it finishes loading, and you never know they came.",
      },
      {
        title: 'Quotes stall in email tag',
        body: "A form that just says 'message' gets you a vague email and three rounds of questions. A form that asks job type, urgency and photos gets you something you can price tonight.",
      },
      {
        title: "It doesn't say why you",
        body: "Licence, insurance, guarantees and photos of real work are what buyers compare. When they're missing, the cheaper quote wins by default.",
      },
    ],
    how: [
      {
        title: 'Built to load fast on a phone',
        body: 'Static pages, compressed images, nothing heavy. The site opens before their patience runs out, which is also what Google rewards.',
      },
      {
        title: 'Tap-to-call where thumbs live',
        body: 'Your number sits at the top of every page and dials in one tap. The caller who wants to talk never has to hunt for it.',
      },
      {
        title: 'A quote form people finish',
        body: 'Job type, urgency, a photo or two, done. You price from real details instead of chasing them over email.',
      },
      {
        title: 'Proof where first-timers look',
        body: 'Licence and insurance, guarantees, reviews and your own job photos, arranged above the fold instead of buried on an about page.',
      },
      {
        title: 'A page for every service you sell',
        body: 'Panel upgrades, drain repairs, fall cleanups: each money-maker gets its own page that can rank and convert on its own.',
      },
      {
        title: 'Yours, and easy to change',
        body: "You own the site outright. Log into the dashboard, type what you want changed, and it's live in minutes.",
      },
    ],
    worth: 'The math is simple: the site earns its keep when it books you one extra job a month.',
    plan: 'growth',
    faq: [
      {
        q: 'I already have a website. Why change it?',
        a: "If it brings you steady calls, don't. If it doesn't, it isn't doing its job, and the free preview shows you the difference side by side before you spend anything.",
      },
      {
        q: 'Do I own the site?',
        a: 'Yes, outright, on every plan. If you ever leave, the site leaves with you.',
      },
      {
        q: 'How long does it take?',
        a: 'The preview takes 48 hours. Most full sites launch in 2–3 weeks, and you approve everything before it goes live.',
      },
      {
        q: 'Can I make changes myself?',
        a: "Yes. Log into your dashboard and type what you want changed, like 'add photos from Tuesday's job'. It's live in minutes, and edits are unlimited on both plans.",
      },
    ],
    siblings: ['local-seo', 'booking'],
    tradeLink: { slug: 'electricians', noun: 'electricians' },
    closing: "Tell us your business name and trade. In 48 hours you'll see the homepage we'd build for you, free, and you decide from there.",
  },
  {
    slug: 'local-seo',
    anchorId: 'seo',
    label: 'Get found on Google',
    blurb: 'Local SEO and your Google Business Profile, tuned so you show up when your neighbourhood searches for what you do.',
    icon: 'pin',
    metaTitle: 'Local SEO for Toronto & GTA trades | Sharplines',
    metaDescription: 'Your Google Business Profile tuned, a page for every area you serve, reviews feeding your rank. Show up on Google when your neighbourhood searches.',
    h1: 'Show up on Google when they need you.',
    h1Accent: 'on Google',
    sub: 'Your Google Business Profile tuned properly, a page for every neighbourhood you serve, and reviews feeding your rank on the map.',
    artifact: 'map-pack',
    pains: [
      {
        title: 'The map pack goes to someone else',
        body: "When someone types 'roofer near me', the map and the first few results get almost all the calls. If you're not there, the job goes to whoever is, even when your work is better.",
      },
      {
        title: 'Your profile is working against you',
        body: "A half-filled Google Business Profile with old photos and the wrong categories tells Google you're not the best answer. It quietly sends your callers to the shop that finished theirs.",
      },
      {
        title: "One town over doesn't know you exist",
        body: "You'll happily drive to Vaughan or Ajax, but Google doesn't know that. Without a page for each area you serve, you only show up where your shop sits.",
      },
    ],
    how: [
      {
        title: 'Your Google Business Profile, finished properly',
        body: "Categories, services, service areas, photos and regular posts, kept current. It's the profile Google trusts enough to put on the map.",
      },
      {
        title: 'A page for every area you serve',
        body: "Etobicoke, Vaughan, Ajax: each gets a real page with local proof, so 'near me' works one town over too.",
      },
      {
        title: 'On-page work aimed at searches that pay',
        body: 'Emergency calls, installs, the jobs you actually want. The site speaks the words your customers type, without a single stuffed sentence.',
      },
      {
        title: 'Your name, address and phone, consistent everywhere',
        body: 'Directories, maps and your site all telling the same story. Small, boring, and one of the things Google checks.',
      },
      {
        title: 'Reviews feeding the rank',
        body: 'Fresh reviews are a signal on the map, and yours keep arriving because the asking happens automatically after every job.',
      },
    ],
    worth: "The calls already happen every day. Showing up just decides whose phone rings, and right now that's whoever appears first.",
    plan: 'autopilot',
    faq: [
      {
        q: 'How long until I show up higher?',
        a: "Local rankings usually move over two to four months, and you'll see the progress along the way. The profile fixes and area pages start working sooner; the compounding takes time.",
      },
      {
        q: 'I tried SEO before and nothing happened.',
        a: "That's common, and it's usually because the work was invisible: no new pages, no profile changes, a monthly report and little else. You'll see every change we make, and your dashboard shows every call that comes from search.",
      },
      {
        q: 'Is this the same as ads?',
        a: 'No. Ads stop the moment you stop paying. This builds rank that keeps sending calls, which is why it takes longer and why it lasts. The two work well together in a busy season.',
      },
      {
        q: 'Can you guarantee first place on Google?',
        a: 'No, and nobody honest can. What we can do is the work Google rewards and show you the movement month by month. If a company guarantees number one, keep your wallet shut.',
      },
    ],
    siblings: ['websites', 'reviews'],
    tradeLink: { slug: 'roofers', noun: 'roofers' },
    closing: "Tell us your trade and the areas you serve, and you'll see your free homepage preview in 48 hours. The Google work starts whenever you're ready.",
  },
  {
    slug: 'reviews',
    anchorId: 'reviews',
    label: 'Reviews that keep coming',
    blurb: 'Every finished job triggers a friendly follow-up asking for a Google review. Your rating climbs while you work.',
    icon: 'star',
    metaTitle: 'Get more Google reviews for your GTA business | Sharplines',
    metaDescription: 'A friendly follow-up goes out after every job with a direct link to your Google review page. Your rating climbs while you work. Free preview in 48 hours.',
    h1: 'Reviews that keep coming, without the awkward ask.',
    h1Accent: 'keep coming',
    sub: 'After every finished job, a friendly text goes out with a direct link to your Google review page, while the work is still fresh. You never have to ask twice, or at all.',
    artifact: 'review-request',
    pains: [
      {
        title: 'Ties go to the better reviewed',
        body: 'Every quote you send is being compared. When the work looks equal and your reviews are thinner or older, the other name gets the call, and you never hear why.',
      },
      {
        title: 'The ask never happens',
        body: "You mean to ask at the door, but you're already thinking about the next job. The happiest customer you had this month never got the link.",
      },
      {
        title: 'Old reviews read like a closed shop',
        body: "A profile that hasn't heard from a customer in a year makes people wonder if you're still taking work. Recent reviews do the selling for you.",
      },
    ],
    how: [
      {
        title: 'The ask goes out while the job is fresh',
        body: 'A short, friendly text or email lands the same day as the work, with a direct link to your Google review page. No accounts, no hunting, one tap.',
      },
      {
        title: 'Happy customers reach the form',
        body: 'The link takes them straight to the review box, so five minutes of goodwill actually turns into words on your profile.',
      },
      {
        title: 'Unhappy ones reach you first',
        body: 'Anyone having a bad day lands with you privately before they land on Google. You get the chance to fix it, which is usually all they wanted.',
      },
      {
        title: 'Replies handled with you',
        body: "Answering reviews, good and bad, shows the next customer someone's home. We draft the replies; you approve them from your dashboard.",
      },
      {
        title: 'It runs itself from your job list',
        body: 'Mark the job done and the follow-up handles itself. Nothing new to remember on a busy week.',
      },
    ],
    worth: 'Reviews break the tie on every quote you send. Fresh ones win you calls you never knew you were losing.',
    plan: 'autopilot',
    faq: [
      {
        q: "Isn't it awkward to ask for reviews?",
        a: "That's exactly what this removes. The ask arrives as a friendly message after the job, so nobody stands in a doorway hinting. Customers who had a good experience are usually glad to help.",
      },
      {
        q: 'What about a bad review?',
        a: 'The follow-up routes unhappy customers to you first, so you can make it right before it goes public. And when a bad one does land, a calm reply, which we help you write, often says more to readers than the review itself.',
      },
      {
        q: 'Can you just buy reviews or write them for us?',
        a: "No. Faked reviews break Google's rules and customers can smell them. Real, steady, recent reviews from real jobs are what this builds, and they're worth more anyway.",
      },
      {
        q: 'I already have good reviews. Do I need more?',
        a: 'Recency matters as much as the number. A steady trickle keeps your profile alive, feeds your rank on the map, and covers you when a competitor starts catching up.',
      },
    ],
    siblings: ['local-seo', 'social'],
    tradeLink: { slug: 'cleaners', noun: 'cleaning companies' },
    closing: "Start with the free homepage preview. Tell us reviews are the piece you care about and we'll show you exactly how the follow-up looks to your customers.",
  },
  {
    slug: 'booking',
    anchorId: 'booking',
    label: 'Online booking',
    blurb: 'Customers book you in two taps. Reminders cut no-shows.',
    icon: 'calendar',
    metaTitle: 'Online booking for GTA trades & salons | Sharplines',
    metaDescription: 'Customers book standard jobs in two taps, reminders cut no-shows, and quote-first work routes to a short form. See your new homepage free in 48 hours.',
    h1: 'Booked in two taps, even at midnight.',
    h1Accent: 'two taps',
    sub: 'Standard jobs go straight into your calendar with reminders that cut no-shows. Bigger jobs route to a short quote form with photos, so you still price the real work.',
    artifact: 'booking-card',
    pains: [
      {
        title: 'Phone tag loses the impatient ones',
        body: "A customer who wants Tuesday at nine doesn't want three voicemails to get it. If booking takes a conversation, plenty quietly go to whoever has a book-now button.",
      },
      {
        title: 'People book at night, you answer by day',
        body: 'Haircuts get planned at 10 pm on the couch, and detailing gets booked Sunday morning. If your calendar only opens when you pick up, those bookings land somewhere else.',
      },
      {
        title: 'Empty slots you already paid for',
        body: 'A no-show costs you the slot, the prep, and the customer you turned away for it. Without a reminder the day before, forgetting is normal, and the slot dies with it.',
      },
    ],
    how: [
      {
        title: 'Two taps from their couch',
        body: "Pick a service, pick a time, done. The booking lands in your calendar while you're mid-cut, mid-treatment or under a car, no call required.",
      },
      {
        title: 'Reminders that cut no-shows',
        body: 'A friendly text goes out before the appointment. People show up, or they cancel early enough for you to fill the slot.',
      },
      {
        title: 'Quote-first jobs stay quote-first',
        body: "A rewire or a full landscaping job doesn't book itself in. Bigger work routes to a short form with photos, and you price it like you always have.",
      },
      {
        title: 'Works with the calendar you have',
        body: 'Already using a booking system? We wire it into the site. Starting fresh? We set one up that fits how you take jobs.',
      },
      {
        title: 'Fewer wrong bookings',
        body: "Services, durations and prices are spelled out before anyone taps, so a beard trim doesn't land in a colour slot and a brake job doesn't book as an oil change.",
      },
    ],
    worth: "Bookings land while you're working or sleeping, and reminders protect the slots you already filled.",
    plan: 'autopilot',
    faq: [
      {
        q: 'My jobs need a quote first. Does booking still help?',
        a: 'Yes, because not everything needs a quote. Service calls, tune-ups and standard appointments book straight in, and anything bigger routes to a short quote form with photos. You keep pricing the real work yourself.',
      },
      {
        q: "Won't people book the wrong thing?",
        a: 'The booking menu is built to prevent that: services, durations and prices are spelled out before anyone taps, and only the jobs you choose can be booked directly. Everything else asks for a quote.',
      },
      {
        q: 'I take bookings by phone and it works fine.',
        a: "Keep doing that. Online booking catches the people who won't call: the 10 pm planners, the ones at work, the ones who hate phones. The phone line loses nothing.",
      },
      {
        q: 'Do I have to switch systems?',
        a: "No. If you already book through something you like, we connect it to the new site. If you don't, we set up a system that fits the way you take jobs.",
      },
    ],
    siblings: ['call-answering', 'websites'],
    tradeLink: { slug: 'barbers', noun: 'barbershops and salons' },
    closing: "Tell us how jobs get booked today, and you'll see a homepage with the booking built in. The preview is free and takes 48 hours.",
  },
  {
    slug: 'call-answering',
    anchorId: 'phone',
    label: 'Never miss a call',
    blurb: 'After hours, your phone gets answered, the details get taken, and you get a text with who called and why.',
    icon: 'phone',
    metaTitle: 'After-hours call answering for GTA trades | Sharplines',
    metaDescription: 'Missed calls get answered, the details get taken, and you get a text with who called and how urgent. One captured emergency can pay for the month.',
    h1: 'Every missed call, answered.',
    h1Accent: 'answered',
    sub: 'On a ladder, in a crawlspace, or asleep: your phone gets picked up, the details get taken, and the job lands in your texts sorted by urgency.',
    artifact: 'call-summary',
    pains: [
      {
        title: 'The emergency dials the next name',
        body: "A burst pipe or a dead panel doesn't leave a voicemail. It hangs up and calls the next listing, and that job is gone in about ninety seconds.",
      },
      {
        title: 'Voicemail is where jobs go to die',
        body: "Plenty of callers won't leave one, and the ones who do rarely give you the address, the problem, or a time you can actually reach them back.",
      },
      {
        title: 'Callbacks in the wrong order',
        body: 'Without notes you ring back blind, so the outlet swap gets your evening and the flooded basement gets your competitor.',
      },
    ],
    how: [
      {
        title: 'Missed calls get answered, warmly',
        body: "When you can't pick up, the call gets answered instead of ringing out. The caller talks to something warm and useful, not a beep.",
      },
      {
        title: 'The right questions get asked',
        body: "Name, address, what's wrong, how urgent, best time to call back. The details you'd ask for yourself, taken down every time.",
      },
      {
        title: 'You get a text, not a voicemail',
        body: 'Who called, where, what they need, and how urgent it is, in one message you can read from the job. No dialling into a mailbox.',
      },
      {
        title: 'Urgent jobs float to the top',
        body: 'A flooded kitchen reads as tonight. A faucet swap reads as this week. You ring back the profitable one first.',
      },
      {
        title: 'You always make the call',
        body: 'Nothing gets booked or promised without you. It takes the details; you decide the callback, the price, and the schedule.',
      },
    ],
    worth: 'One captured emergency job a month pays for the plan several times over.',
    plan: 'either',
    faq: [
      {
        q: 'Is this a robot answering my customers?',
        a: "It's AI, and we're upfront about that. It sounds warm, asks the right questions, and never pretends to be you. Your callers get help instead of a beep, and you get the details in a text.",
      },
      {
        q: 'What happens with real emergencies?',
        a: 'They get flagged first. The text you get reads urgent at the top, so the flooded-basement call never waits behind a quote request.',
      },
      {
        q: 'Do I have to change my number?',
        a: 'No. Your number stays yours. Missed and after-hours calls simply get answered instead of ringing out.',
      },
      {
        q: 'I answer my own phone all day. Do I need this?',
        a: "Then it only steps in when you can't: nights, weekends, or the hour you're elbow-deep in a job. You choose when it takes over.",
      },
    ],
    siblings: ['booking', 'ads'],
    tradeLink: { slug: 'plumbers', noun: 'plumbers' },
    closing: "Start with the free homepage preview. If missed calls are the leak, say so in the form and we'll walk you through the answering too.",
  },
  {
    slug: 'social',
    anchorId: 'social',
    label: 'Social media, handled',
    blurb: 'Your best work, posted to Instagram and TikTok on schedule. You send photos; we handle the rest.',
    icon: 'camera',
    metaTitle: 'Done-for-you social media for GTA businesses | Sharplines',
    metaDescription: 'You send the photos. They get posted to Instagram and TikTok, captioned and on schedule, so your work keeps selling. Free homepage preview in 48 hours.',
    h1: 'Instagram and TikTok, handled.',
    h1Accent: 'handled',
    sub: 'You drop job photos into a shared album. They come out captioned, on-brand, and posted on schedule, and your before-and-afters do the selling.',
    artifact: 'social-post',
    pains: [
      {
        title: 'Posting always loses to paying work',
        body: 'The photos sit on your phone because captions, hashtags and remembering to post lose to actual jobs every single day. So the feed goes quiet and the proof never gets seen.',
      },
      {
        title: 'An empty feed reads as closed',
        body: 'People who get your name from a neighbour check Instagram before they call. A page that stopped posting last winter makes them wonder if you did too.',
      },
      {
        title: 'Your best jobs sell nothing',
        body: 'That backyard transformation or fresh fade only sold the one customer who paid for it. Unposted, it convinces nobody else.',
      },
    ],
    how: [
      {
        title: 'You drop photos in an album',
        body: "Straight from the job, no editing, no captions. That's the whole job on your side.",
      },
      {
        title: 'They come out captioned and on-brand',
        body: "Each post gets written in your voice, tagged to your area, and scheduled. Before-and-afters lead, because they're what sells the work.",
      },
      {
        title: 'Posted on a schedule, not in bursts',
        body: 'A steady feed beats a busy week of posts followed by silence. Your page looks alive to the person a neighbour just sent your way.',
      },
      {
        title: 'You never open the apps',
        body: "No logins, no comments to babysit, no evenings lost to captions. It's done for you, and the hours stay on the tools.",
      },
      {
        title: 'Honest about what it does',
        body: 'For most local businesses, social supports Google and word of mouth rather than replacing them. It proves the work; the site and reviews close it.',
      },
    ],
    worth: 'The photos you already take start earning their keep, and the time it costs you is the time it takes to send a photo.',
    plan: 'either',
    faq: [
      {
        q: 'Does social media even bring in jobs?',
        a: "Directly, sometimes; indirectly, all the time. Most people check your feed after they've heard your name, so it works as proof that backs up referrals, reviews and Google. We'll never pretend it replaces those.",
      },
      {
        q: "I don't have time for this.",
        a: "That's the point: your side is sending photos from the job. Captions, scheduling and posting are handled, and you never open the apps.",
      },
      {
        q: 'What gets posted?',
        a: 'Your real work: before-and-afters, finished jobs, the crew doing the thing you want to be known for. Nothing generic, no stock photos, and you can veto anything.',
      },
      {
        q: 'Which plan is this in?',
        a: "Tell us social is the piece you care about and you'll get the exact cost before you commit to anything. The homepage preview is free either way.",
      },
    ],
    siblings: ['reviews', 'websites'],
    tradeLink: { slug: 'landscapers', noun: 'landscapers and gardeners' },
    closing: "Tell us what you do and mention social in the form. You'll see your free homepage preview in 48 hours, and we'll show you how the posting works alongside it.",
  },
  {
    slug: 'ads',
    anchorId: 'ads',
    label: 'Ads that pay for themselves',
    blurb: 'Google Ads aimed at people ready to hire, tracked to the call, so you know what every dollar brought back.',
    icon: 'trend',
    metaTitle: 'Google Ads for GTA trades, tracked to the call | Sharplines',
    metaDescription: 'Google Ads aimed at people searching for your service right now, landing on pages built to convert, tracked to the phone call. You see the real cost per call.',
    h1: 'Ads that pay for themselves, and prove it.',
    h1Accent: 'prove it',
    sub: 'Google Ads aimed at the searches that mean money today, landing on pages built to convert, with every call traced back to the ad that made it ring.',
    artifact: 'ad-call',
    pains: [
      {
        title: 'Boosted posts, zero jobs',
        body: "A boost reaches people scrolling, not people searching. You paid to be seen by neighbours who don't need a furnace fixed today, and it felt like proof that ads don't work.",
      },
      {
        title: "The emergency search you're not in",
        body: "Someone's typing 'water heater burst' at 11 pm with a credit card in hand. If the results are ads and you're not one of them, your price never even came up.",
      },
      {
        title: 'Spend with no receipts',
        body: "Money goes out, some calls come in, and nobody can say which ad brought which job. So you can't cut the waste or double down on the winner.",
      },
    ],
    how: [
      {
        title: 'Search ads on money searches',
        body: "'Emergency plumber Etobicoke', 'AC repair near me': the moments someone is ready to hire, not browsing. That's where your budget goes first.",
      },
      {
        title: 'Landing pages built to convert',
        body: 'The click lands on a page with your proof, your number one tap away, and a form people finish. The ad only pays off if the page does its job.',
      },
      {
        title: 'Every call traced to its ad',
        body: 'Call tracking ties the phone ringing to the exact ad and search behind it. You see a real cost per call, not a feeling.',
      },
      {
        title: 'Waste gets cut, winners get fed',
        body: 'Each month the losing keywords lose their budget and the profitable ones get more. The account gets sharper the longer it runs.',
      },
      {
        title: 'Meta brings them back',
        body: 'People who visited but never called see your work again on Instagram and Facebook. Small reminders, aimed only at people who already looked.',
      },
      {
        title: 'Spend that follows your season',
        body: "Scale up before the spring rush or storm season, down when you're booked solid. The budget is your money and it moves when you say.",
      },
    ],
    worth: "You're paying to reach people searching for exactly what you sell, right now, and you see what every dollar brought back.",
    plan: 'autopilot',
    faq: [
      {
        q: 'How much do I need to spend on ads?',
        a: "The ad spend is separate from the plan and it's your money, so you set it. We'll tell you plainly what a workable starting budget looks like for your trade and area before anything runs.",
      },
      {
        q: 'I tried ads once and got nothing.',
        a: "Usually that's the click landing on a homepage that doesn't convert, or budget spread across searches that don't buy. Fixing the landing page and narrowing to money searches is most of the job.",
      },
      {
        q: 'What return will I get?',
        a: 'Nobody can promise a return, and you should walk away from anyone who does. What you get is a real cost per call in your dashboard, so you decide with numbers instead of promises.',
      },
      {
        q: 'Which plan includes ads?',
        a: 'Autopilot, at $495 a month with $0 down. It covers the setup and running of Google and Meta ads plus everything else in the plan, and it carries the more-leads-within-90-days guarantee. The ad spend itself stays separate and yours.',
      },
    ],
    siblings: ['local-seo', 'call-answering'],
    tradeLink: { slug: 'hvac', noun: 'HVAC companies' },
    closing: "Get the free homepage preview first. Ads work when the page they land on converts, so you should see that page before you spend a dollar on clicks.",
  },
];

export const getService = (slug: string) => servicePages.find((s) => s.slug === slug);
