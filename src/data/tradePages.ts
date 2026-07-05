// Full trade-page content for /for/[slug] (spec §7 substance, rewritten into the
// site-copy voice per §2 v2 — the spec's sample copy predates the skill and used
// em-dashes / banned phrases; the skill wins). Deviation from spec §4: a typed TS
// module instead of a content collection — same single-template pattern, less
// machinery for 8 entries. Tiles/nav still come from trades.ts.
// The only client claim used is Provolta's published, client-reported 2×.

export interface TradePage {
  slug: string;
  noun: string; // how the trade reads mid-sentence ("HVAC companies")
  h1: string;
  h1Accent: string; // the phrase inside h1 that takes the coral line (keep short; nowrap)
  sub: string;
  pains: { title: string; body: string }[];
  plan: { title: string; body: string }[];
  proof?: string; // one-line Provolta proof; omitted where the sub already carries it
  faq: { q: string; a: string }[];
  closing: string; // lede beside the closing form
  metaTitle: string; // ≤ 60 chars
  metaDescription: string; // 140–160 chars
}

const provoltaLine =
  'It is the same system we build and run for Provolta Electric, a licensed Toronto electrician that reports twice as many clients since their rebuild.';

export const tradePages: TradePage[] = [
  {
    slug: 'electricians',
    noun: 'electricians',
    h1: 'More panel upgrades. Fewer missed emergency calls.',
    h1Accent: 'emergency calls.',
    sub: 'We build and run the website for Provolta Electric, a licensed Toronto contractor that reports twice as many clients since the rebuild. The same system is ready for your electrical business.',
    pains: [
      { title: 'Invisible at 9pm', body: 'Emergencies happen after hours. If your phone rings out, that burst-panel job goes to whoever answers.' },
      { title: 'Losing to the map pack', body: 'Three competitors own the top of Google in your area, and their work is no better than yours. They just show up first.' },
      { title: 'Big jobs need trust', body: 'An EV charger or a rewire is a $2,000+ decision. A dated site quietly tells people to keep scrolling.' },
    ],
    plan: [
      { title: 'Your licence above the fold', body: "Your ECRA/ESA number, insurance and certifications sit right at the top, because that's what people check before they call." },
      { title: 'A page for every neighbourhood', body: '"Electrician in Leaside" gets its own page, and so does every other area you serve. That is how you show up in more searches.' },
      { title: 'After-hours calls, answered', body: 'Every missed call gets answered, the details get taken, and you get a text with who called and why.' },
      { title: 'Reviews after every job', body: 'Every finished job triggers a friendly follow-up asking for a Google review. Your rating climbs while you work.' },
    ],
    faq: [
      { q: 'Do you understand electrical work?', a: 'Yes. We build and run the site for Provolta Electric, a licensed Toronto contractor doing residential, commercial and industrial work. We know what an ESA number means and why it belongs at the top of the page.' },
      { q: 'Can you help me sell EV charger installs?', a: 'Yes. You get a dedicated EV charger page plus ads aimed at homeowners searching for exactly that.' },
      { q: 'What about emergency calls?', a: 'Your after-hours calls get answered and sorted by urgency, so you can jump on the profitable ones and let the rest wait until morning.' },
    ],
    closing: "The next \"electrician near me\" search in your area happens tonight. Be the answer.",
    metaTitle: 'Websites for Toronto electricians | Sharplines Studio',
    metaDescription: 'We build the website for Provolta Electric, and their clients doubled. Websites, local SEO and reviews for GTA electricians. Free preview in 48 hours.',
  },
  {
    slug: 'plumbers',
    noun: 'plumbers',
    h1: "When water's on the floor, be the plumber they find.",
    h1Accent: 'they find.',
    sub: 'Emergency plumbing goes to the first search result and the first answered call. We make sure both are yours, across Toronto and the GTA.',
    pains: [
      { title: "Emergencies can't wait", body: 'A flooded kitchen calls the next number the second yours rings out.' },
      { title: 'Paying for your own leads', body: 'Lead brokers charge you for customers who were already looking for you. Your own site brings you calls you never pay per lead for.' },
      { title: 'Thin profile, lost trust', body: 'Homeowners letting a stranger into the house check your Google reviews first. A thin profile costs you jobs without you ever knowing.' },
    ],
    plan: [
      { title: 'An emergency-first website', body: 'Tap-to-call at the top and a quote form that asks how urgent it is, so the real emergencies reach you first.' },
      { title: 'Own "plumber near me"', body: 'Your Google Business Profile tuned, plus a page for every neighbourhood you cover.' },
      { title: 'Calls answered around the clock', body: 'Missed calls get answered and the details get taken. You get a text with the address and the problem.' },
      { title: 'Reviews after every job', body: 'Every cleared drain ends with a friendly request for a Google review, sent automatically.' },
    ],
    proof: provoltaLine,
    faq: [
      { q: 'I get most of my work from word of mouth. Do I still need this?', a: 'Word of mouth now includes Google. People hear your name, then search it, and what they find decides whether they call.' },
      { q: 'Can you bring me emergency work specifically?', a: 'Yes. Pages and ads for "emergency plumber" in your areas run around the clock, including the hours when other shops stop picking up.' },
      { q: 'How fast can this launch?', a: 'Your free preview is ready in 48 hours, and most plumbing sites launch inside three weeks.' },
    ],
    closing: 'Somewhere in the GTA a pipe just burst. Make sure they find you.',
    metaTitle: 'Websites for Toronto plumbers | Sharplines Studio',
    metaDescription: 'Emergency-first websites, local SEO and around-the-clock call answering for GTA plumbers. See your new homepage free within 48 hours. $0 down.',
  },
  {
    slug: 'hvac',
    noun: 'HVAC companies',
    h1: 'Full schedules in July and January.',
    h1Accent: 'July and January.',
    sub: 'Heating and cooling runs feast or famine. The GTA companies that win book maintenance plans in the quiet months and own the search results when the weather turns.',
    pains: [
      { title: 'Seasonal whiplash', body: 'Slammed during heat waves and cold snaps, quiet in between.' },
      { title: 'Big tickets, big doubts', body: 'A furnace replacement is a $5,000+ decision, and homeowners compare three or four websites before they call anyone.' },
      { title: 'One-and-done customers', body: 'Installs without maintenance plans mean starting from zero every season.' },
    ],
    plan: [
      { title: 'A site that follows the seasons', body: 'Furnace-forward in fall, AC-forward in spring, with financing visible on the big tickets.' },
      { title: 'Maintenance plans front and centre', body: 'Tune-up plans customers can book online, so the quiet months fill up too.' },
      { title: 'Show up when demand spikes', body: 'Neighbourhood pages plus ads that scale up exactly when the weather does.' },
      { title: 'Reviews and booking', body: 'Friendly review follow-ups after every job, and two-tap booking with reminders that cut no-shows.' },
    ],
    proof: provoltaLine,
    faq: [
      { q: 'Can you handle both heating and cooling?', a: "Yes. The site shifts its emphasis with the season, so you're never leading with AC in a cold snap." },
      { q: 'Do financing options really matter?', a: 'Yes. On a $5,000 furnace, a monthly price is an easier yes than a lump sum, so we put financing right beside the big numbers.' },
      { q: 'Can customers book tune-ups online?', a: 'Yes, straight into your calendar, with reminders that cut no-shows.' },
    ],
    closing: 'The next heat wave is already on the way. Be booked before it lands.',
    metaTitle: 'Websites for Toronto HVAC companies | Sharplines Studio',
    metaDescription: 'Seasonal websites, maintenance plan booking and local SEO for GTA heating and cooling companies. See a free homepage preview within 48 hours. $0 down.',
  },
  {
    slug: 'landscapers',
    noun: 'landscapers and gardeners',
    h1: 'Your work is visual. Your marketing should be too.',
    h1Accent: 'should be too.',
    sub: 'Great yards sell themselves when people can see them. We put your transformations in front of the GTA neighbourhoods you want to work in.',
    pains: [
      { title: 'Your portfolio lives in your camera roll', body: 'Hundreds of before-and-after photos that nobody searching for a landscaper ever sees.' },
      { title: 'Spring chaos, winter silence', body: "The season books itself. The shoulder months don't." },
      { title: 'Quotes eat your evenings', body: 'Driving across town to estimate jobs that were never serious.' },
    ],
    plan: [
      { title: 'A portfolio-first site', body: 'Before-and-after galleries by neighbourhood and project type. The proof does the selling.' },
      { title: 'Your work, posted for you', body: 'Send photos from the job and they go out to Instagram and TikTok on schedule. You never open the apps.' },
      { title: 'Quote requests that respect your time', body: 'The form collects photos, size and budget up front, so you only drive to real jobs.' },
      { title: 'Campaigns that follow the seasons', body: 'Spring cleanup ads in March and snow contracts in October, booked before the rush.' },
    ],
    proof: provoltaLine,
    faq: [
      { q: "I'm booked all summer. Why would I market?", a: 'To book the right jobs. Bigger projects, better neighbourhoods, and work that fills April and November too.' },
      { q: "I don't have time for social media.", a: "You don't need it. Photos go in a shared album, and posting happens on schedule without you." },
      { q: 'Do you handle landscaping and garden maintenance?', a: 'Yes. One-off builds and recurring maintenance each get their own pages and their own booking flow.' },
    ],
    closing: 'The neighbours already admire your work. Make sure they know who did it.',
    metaTitle: 'Websites for GTA landscapers | Sharplines Studio',
    metaDescription: 'Portfolio-first websites, social posting and seasonal campaigns for GTA landscaping and garden businesses. See a free homepage preview within 48 hours.',
  },
  {
    slug: 'barbers',
    noun: 'barbershops and salons',
    h1: 'Every empty chair is money walking past your window.',
    h1Accent: 'your window.',
    sub: 'Your next regular is searching "barber near me" or scrolling Instagram right now. We make sure they find you, book you, and actually show up.',
    pains: [
      { title: 'No-shows burn your day', body: 'A missed 30-minute slot is gone forever.' },
      { title: 'Instagram is your portfolio, posted whenever', body: "Great fades go up when there's time, and there's never time." },
      { title: 'Walk-in dependence', body: "Slow Tuesdays stay slow when your book isn't online." },
    ],
    plan: [
      { title: 'Booking that runs itself', body: 'Two-tap online booking with automatic reminders that cut no-shows.' },
      { title: 'A feed that stays fresh', body: 'Your cuts, posted to Instagram and TikTok on a schedule. You just send the photos.' },
      { title: 'Own your local search', body: '"Barber near me" and your shop name, showing up with photos, hours and reviews that pull people in.' },
      { title: 'Reviews after every cut', body: 'A friendly automatic follow-up asks every happy client for a Google review.' },
    ],
    proof: provoltaLine,
    faq: [
      { q: 'I already use a booking app. Do I need this?', a: 'We work with the booking system you have, or set up a better one. What we add is everything around it that sends people into it.' },
      { q: 'Can you post my content for me?', a: 'Yes. Drop photos in a shared album and they go out on schedule, captioned and tagged.' },
      { q: 'Does this work for salons too?', a: 'Yes. The same playbook fits salons, brows, lashes and nails.' },
    ],
    closing: "Tuesday at 2pm shouldn't be empty. Let's fill the book.",
    metaTitle: 'Websites for Toronto barbershops | Sharplines Studio',
    metaDescription: 'Online booking, social posting, local SEO and review follow-ups for GTA barbershops and salons. See a free homepage preview within 48 hours. $0 down.',
  },
  {
    slug: 'cleaners',
    noun: 'cleaning companies',
    h1: 'Build a client list that cleans up every week.',
    h1Accent: 'every week.',
    sub: 'One-time cleans pay once, and weekly clients pay all year. We build the trust and the booking flow that turn searchers into standing appointments.',
    pains: [
      { title: 'Trust is the whole sale', body: 'You are asking strangers to hand over their keys. A thin online presence ends that conversation before it starts.' },
      { title: 'Quote ping-pong', body: 'Message after message to price a two-bedroom condo, again and again.' },
      { title: 'Feast-or-famine one-offs', body: 'Move-out cleans keep the lights on, but they never add up to a steady week.' },
    ],
    plan: [
      { title: 'A trust-first website', body: 'Insurance, vetting, guarantees and real reviews, all before anything else.' },
      { title: 'Instant online quotes', body: 'Beds, baths and frequency in, price out, booked. No back-and-forth.' },
      { title: 'Recurring plans by design', body: 'Weekly and bi-weekly plans sit front and centre, priced to make the standing appointment the easy choice.' },
      { title: 'Reviews and rebooking', body: 'Friendly review follow-ups after every clean, and reminders that keep clients on schedule.' },
    ],
    proof: provoltaLine,
    faq: [
      { q: 'Residential, commercial or Airbnb?', a: 'Each one gets its own page and its own pricing flow, because they search differently.' },
      { q: 'Can people really book without talking to me?', a: 'Yes, for standard cleans. Bigger jobs route to a short quote form with photos.' },
      { q: 'How do I stand out from cheaper cleaners?', a: 'Price shoppers were never your best clients. The site leads with insurance, guarantees and reviews, because trust is what wins the weekly contract.' },
    ],
    closing: 'Your next weekly client is searching right now. Be the safe choice they land on.',
    metaTitle: 'Websites for GTA cleaning companies | Sharplines Studio',
    metaDescription: 'Trust-first websites, instant quotes and recurring booking for GTA cleaning companies. See a free homepage preview within 48 hours. $0 down, no contract.',
  },
  {
    slug: 'roofers',
    noun: 'roofers',
    h1: 'Roofing is a trust business. Look like the safe choice.',
    h1Accent: 'safe choice.',
    sub: 'A new roof is one of the biggest cheques a homeowner writes, and they research hard before they call. The contractor who looks credible online wins the job before the first ladder goes up.',
    pains: [
      { title: 'The scam shadow', body: 'Storm-chaser stories make homeowners suspicious of every roofer, including the good ones.' },
      { title: 'Huge tickets, long decisions', body: 'Homeowners compare three or four companies on a $15,000 job. Reviews and proof decide it.' },
      { title: 'Storms reward the visible', body: 'After bad weather, whoever shows up in the search results gets the calls.' },
    ],
    plan: [
      { title: 'Credibility everywhere', body: 'Licensing, insurance, warranties, certifications and real project photos, front and centre.' },
      { title: 'Proof by neighbourhood', body: 'Job galleries by area. Roofs you have done near them beat any slogan.' },
      { title: 'Ready when weather hits', body: 'Emergency tarping and inspection pages that are already ranking when the storm lands.' },
      { title: 'Inspections that book themselves', body: 'A free-inspection offer with online booking and a follow-up that actually happens, so the pipeline fills between storms.' },
    ],
    proof: provoltaLine,
    faq: [
      { q: 'How do I stand apart from door-knockers?', a: 'By showing everything they cannot. Verifiable licensing, completed jobs near the customer, and warranty terms in writing.' },
      { q: 'Is a free inspection offer worth it?', a: 'Yes, when the follow-up is systematic. We build the offer, the booking and the follow-up as one piece.' },
      { q: 'Can you help with insurance claim work?', a: 'Yes. A page that explains the claims process in plain words builds trust with storm-damage searches.' },
    ],
    closing: 'Another storm is coming, and homeowners will search the minute it passes. Be the roofer they already trust.',
    metaTitle: 'Websites for Toronto roofers | Sharplines Studio',
    metaDescription: 'Websites that make GTA roofers the safe choice, with storm-ready pages and inspection booking. See a free homepage preview within 48 hours. $0 down.',
  },
  {
    slug: 'auto-repair',
    noun: 'auto repair shops',
    h1: "Empty bays don't pay the rent.",
    h1Accent: 'the rent.',
    sub: 'Drivers pick a mechanic twice, once in a panic and once for life. We make sure both of those searches end at your shop.',
    pains: [
      { title: "The dealership's ad budget", body: 'Dealerships outspend you everywhere except trust. That is your advantage, if people can see it.' },
      { title: 'Panic searches go elsewhere', body: '"Mechanic near me open now" is a customer for life for whoever answers.' },
      { title: 'No system for repeat visits', body: 'Oil changes and seasonal tires should come back on their own. Instead they drift.' },
    ],
    plan: [
      { title: 'A site that disarms distrust', body: 'Straight talk about pricing, warranties on the work, and reviews that lead the page.' },
      { title: 'Own the panic search', body: 'Local SEO tuned for the "near me, open now" moment.' },
      { title: 'Booking and reminders', body: 'Book a bay in two taps, and seasonal reminders bring tires and tune-ups back on schedule.' },
      { title: "Reviews while it's fresh", body: 'Every happy customer gets asked for a Google review, automatically, right after the visit.' },
    ],
    proof: provoltaLine,
    faq: [
      { q: 'People assume mechanics overcharge. Can a website change that?', a: 'It can show the opposite. Transparent pricing, warranty terms and a wall of real reviews change the conversation before they call.' },
      { q: 'Can customers book specific services?', a: 'Yes. Oil changes, brakes, diagnostics and tires each get real time slots.' },
      { q: 'What about the seasonal tire rush?', a: 'Reminder campaigns and booking pages go live before the rush, so the schedule fills early.' },
    ],
    closing: "Someone's check engine light just came on. Be the shop they trust with it.",
    metaTitle: 'Websites for Toronto auto repair shops | Sharplines Studio',
    metaDescription: 'Trust-building websites, local SEO and online booking for GTA auto repair shops. See a free homepage preview within 48 hours. $0 down, cancel any time.',
  },
];
