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
  imgAlt: string; // hero photo (/images/trades/{slug}.jpg), one plain sentence
  sub: string;
  // Optional domain-fluency section (Arya, 2026-07-05: show we know how the
  // trade's customer types differ; never lecture the trade about their own
  // trade). Rendered between hero and pains when present.
  segmentsHeading?: string;
  segments?: { title: string; body: string }[];
  segmentsKicker?: string;
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
    imgAlt: 'An electrician tests a panel with a multimeter.',
    noun: 'electricians',
    h1: 'More panel upgrades and EV installs. Fewer missed emergency calls.',
    h1Accent: 'emergency calls.',
    sub: 'We build and run the website for Provolta Electric, a licensed Toronto contractor working residential, commercial and industrial. They report twice as many clients since the rebuild.',
    segmentsHeading: "Residential, commercial and industrial don't buy the same way.",
    segments: [
      { title: 'Residential', body: 'Service upgrades from 60 or 100 amps to 200, rewires, pot lights, EV chargers, hot tubs and backup generators. Homeowners read your reviews and check your ESA licence before they call, and a lot of the good jobs start with an insurance letter about knob-and-tube or aluminum wiring and a deadline attached. The site answers the permit, timeline and cost questions up front, so the people who call are already close to booking.' },
      { title: 'Commercial', body: "Tenant fit-outs, LED retrofits, service maintenance and permitted work for offices, restaurants and retail. Property managers don't browse and they don't wait. They shortlist whoever quotes fast, sends a certificate of insurance without being chased, can work after hours so the tenant stays open, and picks up the second time too." },
      { title: 'Industrial and automation', body: "Machine wiring, control panels, three-phase power, PLCs. This work is won on reputation and referral, so the site's job is quieter. It has to hold up when a plant engineer or a purchasing manager looks you up before an RFQ, and show the certifications and the finished jobs that prove you can actually do the work." },
    ],
    segmentsKicker: 'Some shops run all three. Most pick a lane. We build the site around the work you actually want more of, and it quietly screens out the calls you would rather not take.',
    pains: [
      { title: 'Invisible at 9pm', body: 'The panel is sparking and the breaker won\'t reset. If your phone rings out, that job goes to whoever answers, and you never even know it happened.' },
      { title: 'Losing to the map pack', body: 'Three shops own the top of Google in your area and their work is no better than yours. They just show up first, so they get the call first.' },
      { title: 'Big jobs need trust', body: 'A 200-amp service upgrade, an EV charger or a full rewire is a $2,000 to $6,000 decision. A dated site quietly tells people to keep scrolling to the next electrician.' },
    ],
    plan: [
      { title: 'A quote form that sorts the work', body: 'It asks what the job is, where, and how urgent, so a service upgrade doesn\'t read like an outlet swap and a real emergency doesn\'t sit unread in an inbox overnight.' },
      { title: 'Pages for the searches that pay', body: '"200 amp panel upgrade Toronto", "knob and tube replacement", "EV charger installer", "Tesla wall connector", plus every neighbourhood you cover. One page each, because that is exactly what people type into Google.' },
      { title: 'An EV charger page that closes', body: 'It answers what homeowners actually ask before they book: whether their panel has the capacity, what the ESA permit and inspection involve, which rebates apply, and the real installed cost. Then ads point the people who just bought the car straight at it.' },
      { title: 'Ready for the insurance deadlines', body: 'Knob-and-tube, aluminum wiring, an old 60-amp panel. When the insurer sets a date, the homeowner searches with the letter in hand, and the electrician whose site explains the fix and the permit is the one who gets called.' },
      { title: 'After-hours calls answered and sorted', body: 'Calls you miss get picked up, and you get a text with who called, where, and how urgent, so you jump on the burst-panel job tonight and let the outlet swap wait until morning.' },
      { title: 'Reviews after the jobs that count', body: 'Finished a big upgrade or an EV install? The customer gets a friendly follow-up asking for a Google review while the work is still fresh, so your profile keeps climbing.' },
    ],
    faq: [
      { q: 'Have you worked with electricians before?', a: 'Yes. We build and run the site for Provolta Electric, a licensed Toronto contractor working across residential, commercial and industrial. Everything on this page came straight out of that work.' },
      { q: 'I only do residential. Does this still fit?', a: "Yes, and it works the other way too. The site leads with the work you want, so a two-person residential shop isn't fielding factory RFQs, and an industrial shop isn't quoting pot lights." },
      { q: 'Can you help me sell more EV charger installs?', a: 'Yes, and it is one of the best searches to own right now. EV chargers get their own page that answers panel capacity, the ESA permit and inspection, rebates and real cost, plus ads aimed at people who just ordered a car.' },
      { q: 'Do you handle the ESA permits and inspections?', a: "No, that stays with you. We're not electricians and we don't pull permits. What we do is explain the ESA permit and inspection process to homeowners in plain words on the site, so they aren't surprised by it and you spend less time explaining the basics before you can quote." },
      { q: 'What about emergency calls?', a: 'Your after-hours calls get answered and sorted by urgency, so you can jump on the profitable ones and let the rest wait until morning without losing the customer.' },
    ],
    closing: "The next \"electrician near me\" search in your area happens tonight. Be the answer.",
    metaTitle: 'Websites for Toronto electricians | Sharplines Studio',
    metaDescription: 'We build the website for Provolta Electric, and their clients doubled. Websites, local SEO and reviews for GTA electricians. Free preview in 48 hours.',
  },
  {
    slug: 'plumbers',
    imgAlt: 'A plumber fits a valve to a radiator pipe.',
    noun: 'plumbers',
    h1: "When water's on the floor, be the plumber they find.",
    h1Accent: 'they find.',
    sub: 'Emergency plumbing goes to the first search result and the first answered call. We make sure both are yours, across Toronto and the GTA.',
    segmentsHeading: "Emergencies, renos and property managers don't call for the same reasons.",
    segments: [
      { title: 'Emergency and repair', body: 'Burst pipes, backed-up drains, a sump pump that quits mid-storm, no hot water on a Sunday. This work is won on speed: first in the search, a number they can tap, someone who picks up at 2am. Nobody compares three quotes with water on the floor.' },
      { title: 'Renovation and installs', body: "Bathroom and kitchen rough-ins, water heaters, softeners, backwater valves. Planned work, compared over weeks, won by photos of finished jobs and quotes that come back fast. And every time it rains hard, Toronto's basement-flooding subsidy sends homeowners searching for backwater valves." },
      { title: 'Property managers and commercial', body: "Multi-unit buildings, restaurants, retail. They keep a short list, and getting on it takes fast quotes, insurance they can verify, and invoices that show up without chasing. One good building leads to the next." },
    ],
    segmentsKicker: 'Emergency calls pay tonight. Renos pay better. Buildings pay every month. The site leads with the mix you want, and it quietly screens out the calls you would rather not take.',
    pains: [
      { title: "Emergencies can't wait", body: 'A flooded kitchen calls the next number the second yours rings out.' },
      { title: 'Paying for your own leads', body: 'Lead brokers charge you for customers who were already looking for you. Your own site brings you calls you never pay per lead for.' },
      { title: 'Thin profile, lost trust', body: 'Homeowners letting a stranger into the house check your Google reviews first. A thin profile costs you jobs without you ever knowing.' },
    ],
    plan: [
      { title: 'An emergency-first website', body: 'Tap-to-call at the top and a quote form that asks how urgent it is, so a flooded basement reaches you now and a faucet swap books for Tuesday.' },
      { title: 'Pages for the searches that pay', body: '"Emergency plumber North York", "backwater valve installation", "water heater replacement", plus every neighbourhood you cover. One page each, because that is what people type.' },
      { title: 'Calls answered around the clock', body: 'Missed calls get answered and the details get taken. You get a text with the address and the problem, so you ring back the burst pipe first.' },
      { title: 'Reviews after every job', body: 'Every finished job ends with a friendly request for a Google review, sent automatically while the relief is still fresh.' },
    ],
    proof: provoltaLine,
    faq: [
      { q: 'I get most of my work from word of mouth. Do I still need this?', a: 'Word of mouth now includes Google. People hear your name, then search it, and what they find decides whether they call.' },
      { q: 'Can the site bring me better jobs, and fewer $99 drain calls?', a: 'Yes. The site leads with the work you want more of, and the quote form asks enough up front that a reno inquiry looks different from a clogged sink before you ever call back.' },
      { q: 'Can you bring me emergency work specifically?', a: 'Yes. Pages and ads for "emergency plumber" in your areas run around the clock, including the hours when other shops stop picking up.' },
      { q: 'How fast can this launch?', a: 'Your free preview is ready in 48 hours, and most plumbing sites launch inside three weeks.' },
    ],
    closing: 'Somewhere in the GTA a pipe just burst. Make sure they find you.',
    metaTitle: 'Websites for Toronto plumbers | Sharplines Studio',
    metaDescription: 'Emergency-first websites, local SEO and around-the-clock call answering for GTA plumbers. See your new homepage free within 48 hours. $0 down.',
  },
  {
    slug: 'hvac',
    imgAlt: 'A technician checks the pressure gauges on an air conditioner.',
    noun: 'HVAC companies',
    h1: 'Full schedules in July and January.',
    h1Accent: 'July and January.',
    sub: 'Heating and cooling runs feast or famine. The GTA companies that win book maintenance plans in the quiet months and own the search results when the weather turns.',
    segmentsHeading: 'A dead furnace, a tune-up plan and a rooftop unit sell differently.',
    segments: [
      { title: 'Replacement and install', body: 'A furnace that dies in January is a same-day decision made between three quotes. A fast visit, a clear price and financing on the page win it. And heat pump rebates have changed what people search for; the site keeps up with that.' },
      { title: 'Maintenance and protection plans', body: 'Fall tune-ups, spring AC checks, a plan that spreads the cost over the year. This is the steady revenue between seasons, and it sells online in the mild months while the phone is quiet.' },
      { title: 'Light commercial', body: 'Rooftop units over restaurants, shops and small offices. Owners want response times in writing and a tech who knows RTUs. They pick once and stay for years, so being findable the one time they look is the whole game.' },
    ],
    segmentsKicker: 'The install pays today. The plan pays all year. The site sells both, and it leans the right way for the season.',
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
      { q: 'What about heat pump rebates?', a: 'The site explains what qualifies in plain words and keeps up as the programs change, so people call you ready to book instead of asking Google. The paperwork side stays with you.' },
    ],
    closing: 'The next heat wave is already on the way. Be booked before it lands.',
    metaTitle: 'Websites for Toronto HVAC companies | Sharplines Studio',
    metaDescription: 'Seasonal websites, maintenance plan booking and local SEO for GTA heating and cooling companies. See a free homepage preview within 48 hours. $0 down.',
  },
  {
    slug: 'landscapers',
    imgAlt: 'A landscaper trims a tall cedar hedge.',
    noun: 'landscapers and gardeners',
    h1: 'Your work is visual. Your marketing should be too.',
    h1Accent: 'should be too.',
    sub: 'Great yards sell themselves when people can see them. We put your transformations in front of the GTA neighbourhoods you want to work in.',
    segmentsHeading: 'Design builds, weekly maintenance and snow are three different businesses.',
    segments: [
      { title: 'Design and build', body: 'Interlock, decks, full backyard projects. Five-figure jobs sold on photos of finished work. People shortlist from galleries long before they ask for a quote, so the portfolio does the heavy lifting.' },
      { title: 'Maintenance', body: "Weekly cuts, spring and fall cleanups, garden care. The economics run on density: ten lawns on three streets beat twenty scattered across the city. Area pages and referral timing are how that density gets built." },
      { title: 'Snow and seasonal', body: 'Snow contracts sell in October, long before the first storm. Commercial lots want response times on paper; homeowners want one price for the season. Both search early, decide once, and stay if you show up.' },
    ],
    segmentsKicker: 'Builds pay big. Maintenance pays steady. Snow pays the winter. The site leads with the lane you want to grow.',
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
    imgAlt: 'A barber works on a client\'s cut in the shop.',
    noun: 'barbershops and salons',
    h1: 'Every empty chair is money walking past your window.',
    h1Accent: 'your window.',
    sub: 'Your next regular is searching "barber near me" or scrolling Instagram right now. We make sure they find you, book you, and actually show up.',
    pains: [
      { title: 'No-shows burn your day', body: 'A missed 30-minute slot is gone forever, and the Saturday ones hurt most.' },
      { title: 'Booked through DMs', body: 'Half your bookings arrive by Instagram DM, and every one takes three messages between cuts to pin down.' },
      { title: 'Walk-in dependence', body: "Slow Tuesdays stay slow when your book isn't online." },
    ],
    plan: [
      { title: 'Booking that runs itself', body: 'Two-tap online booking with automatic reminders that cut no-shows. If the repeat offenders keep at it, a card on file makes them think twice.' },
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
    imgAlt: 'A cleaner in coveralls squeegees a floor-to-ceiling window.',
    noun: 'cleaning companies',
    h1: 'Build a client list that cleans up every week.',
    h1Accent: 'every week.',
    sub: 'One-time cleans pay once, and weekly clients pay all year. We build the trust and the booking flow that turn searchers into standing appointments.',
    segmentsHeading: "Homes, offices and Airbnbs don't hire the same way.",
    segments: [
      { title: 'Residential recurring', body: 'Weekly and bi-weekly homes. Trust decides it: insured, vetted, the same cleaner each visit. Pricing by beds and baths sits right on the site, because the person who books without a phone call is the one who stays for years.' },
      { title: 'Commercial and janitorial', body: 'Offices, clinics, condo common areas. Managers compare quotes, references and certificates of insurance, and they move slowly. Worth it: one contract can outlast fifty one-off cleans.' },
      { title: 'Airbnb and turnovers', body: 'Same-day windows between checkout and check-in, photo confirmation when the unit is ready, linens handled. Hosts try you once, then book you every week after. The site speaks their language: turnaround time and reliability.' },
    ],
    segmentsKicker: 'One-off cleans fill gaps. Standing clients build the business. The site is built to turn a first clean into a schedule.',
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
    imgAlt: 'A roofer works near the ridge of a roof.',
    noun: 'roofers',
    h1: 'Roofing is a trust business. Look like the safe choice.',
    h1Accent: 'safe choice.',
    sub: 'A new roof is one of the biggest cheques a homeowner writes, and they research hard before they call. The contractor who looks credible online wins the job before the first ladder goes up.',
    segmentsHeading: 'Full replacements, storm repairs and flat roofs are different jobs.',
    segments: [
      { title: 'Replacement', body: 'A shingle roof is a five-figure cheque decided over weeks between three or four quotes. Reviews, warranty terms in writing and photos of jobs near them are what tip it. Nobody signs a roof contract off a thin website.' },
      { title: 'Repair and storm', body: 'Lost shingles, leaks, emergency tarping after wind. Won on speed, and on being visible the week the weather turns. Insurance claims come with their own questions, and the roofer who answers them plainly gets trusted with the rest of the job.' },
      { title: 'Flat and commercial', body: 'Flat roofs over shops, plazas and low-rises. Property managers want inspection reports, a maintenance schedule and a certificate of insurance before anyone climbs a ladder. Different buyer, same rule: look like the safe choice.' },
    ],
    segmentsKicker: 'Storm work fills the weeks. Replacements pay the year. The site catches both, and it holds up to the research that comes before a big cheque.',
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
    imgAlt: 'A mechanic leans into an engine bay in the shop.',
    noun: 'auto repair shops',
    h1: "Empty bays don't pay the rent.",
    h1Accent: 'the rent.',
    sub: 'Drivers pick a mechanic twice, once in a panic and once for life. We make sure both of those searches end at your shop.',
    pains: [
      { title: "The dealership's ad budget", body: 'Dealerships outspend you everywhere except trust. That is your advantage, if people can see it.' },
      { title: 'Panic searches go elsewhere', body: '"Mechanic near me open now" is a customer for life for whoever answers.' },
      { title: 'No system for repeat visits', body: 'Oil changes and seasonal tires should come back on their own. Instead they drift, until the first snowfall when everyone calls in the same week.' },
    ],
    plan: [
      { title: 'A site that disarms distrust', body: 'Straight talk about pricing, warranties on the work, and reviews that lead the page.' },
      { title: 'Own the panic search', body: 'Local SEO tuned for the "near me, open now" moment. That driver becomes a customer for life if you answer.' },
      { title: 'Booking and reminders', body: 'Book a bay in two taps, and reminders go out before the tire rush, so changeover week runs on a schedule instead of a jammed phone line.' },
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
