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
  // Paired problem → fix blocks (Arya, 2026-07-05: "explain the pain ... and our
  // solution to that"). Each pain is a scene the owner recognizes from their own
  // week; each fix names the mechanism we build and lands the money implication.
  // 4 pairs per trade, 5 for electricians (the flagship). Replaces pains + plan.
  problems: { title: string; pain: string; fixTitle: string; fix: string }[];
  proof: string; // Provolta line for the photo band (band photo alt comes from imgAlt)
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
    problems: [
      {
        title: 'The 9pm no-power call goes to whoever picks up.',
        pain: "Half the house is dark, the breaker won't reset, and the homeowner is calling down the Google results until a person answers. You're elbow-deep in a panel or at the dinner table. Nobody leaves a voicemail with the lights out.",
        fixTitle: 'Missed calls get answered, sorted, and texted to you.',
        fix: 'The call gets picked up, the address and the problem get taken down, and the urgent ones reach your phone as a text you can act on. You ring back the no-power call tonight and let the pot-light quote wait until morning. One saved emergency a month covers the plan on its own.',
      },
      {
        title: 'Quoting eats the evenings you already worked.',
        pain: '"How much to add a plug", with no photos, no panel size, no postal code. You text questions back and forth all night, drive across the city to see it, and half the time the job was never real. The serious customer waits in line behind them.',
        fixTitle: 'The quote form does the sorting before it reaches you.',
        fix: 'It asks for the job type, photos of the panel, the area and the timeline. Number-collectors rarely finish it, and the ones who do hand you enough to price from the truck in five minutes. You quote more jobs in less time and only drive to the real ones.',
      },
      {
        title: 'The searches that pay are already claimed.',
        pain: 'The homeowner who just ordered an EV is searching tonight. So is the one whose insurer gave them 30 days to deal with the old panel. Right now those calls go to the shops that claimed the searches years ago, not to the shops doing the best work.',
        fixTitle: 'A page for every job you want more of.',
        fix: 'EV chargers, service upgrades, knob-and-tube and aluminum rewires: each gets its own page that answers exactly what that customer is nervous about, from panel capacity to the rebate to the permit, and ends at your quote form. Deadline work and rebate work arrive ready to book, and they rarely haggle.',
      },
      {
        title: 'You look smaller online than you are on site.',
        pain: "Ten years of clean panels and tidy conduit, and not one photo where a customer can find it. Fourteen reviews, and the newest is from two winters ago. A property manager comparing you against a bigger shop sees nothing that says you're the safer pick.",
        fixTitle: 'Your proof gets collected and put where it sells.',
        fix: 'Every finished job triggers a friendly review request while the customer is still happy, so the count climbs every month instead of once a winter. Your licence, insurance and best work sit on the site where a careful buyer actually looks. The shop that shows its proof is the shop that gets shortlisted.',
      },
      {
        title: "Three shops own the map, and you're not one of them.",
        pain: 'The same three names sit at the top of Google for your area, and their work is no better than yours. They set up their profiles properly years ago and kept feeding them. They show up first, so they get called first.',
        fixTitle: 'Your Google profile gets run like it matters.',
        fix: 'Categories, services, photos and posts kept current, pages for the neighbourhoods you actually want to work, and fresh reviews feeding the profile every month. Local rankings usually move over two to four months, and you see what changed as it climbs. No overnight promises, just the work that moves it.',
      },
    ],
    proof: 'Everything above already runs for Provolta Electric, a licensed Toronto contractor. Their clients doubled since the rebuild.',
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
    problems: [
      {
        title: 'At 11pm with water on the floor, they call until someone answers.',
        pain: "A burst pipe doesn't leave a voicemail. The homeowner works down the list, and the first plumber who answers gets the job. If you're under a sink or asleep, you never even know it rang.",
        fixTitle: 'Your phone gets answered at 11pm, and you get the details.',
        fix: "The call is picked up, the address and the problem are taken, and a text reaches you with what's flooding and where. You call back the burst pipe first and book the dripping faucet for Tuesday. One caught emergency a month pays for the plan several times over.",
      },
      {
        title: "The drain calls find you. The repipes don't.",
        pain: 'The quick, low-margin calls come in all day. The jobs that build the year, repipes, water service upgrades, backwater valves after a wet week, go to whoever owns those searches, and it usually is not the best plumber in the area.',
        fixTitle: 'Pages for the jobs you actually want.',
        fix: 'Each money job gets its own page that answers what the homeowner is weighing and ends at a form that collects the details. The site leads with the work you want more of, and the form separates a reno rough-in from a clogged sink before you ever pick up the phone. The mix improves without a single extra call.',
      },
      {
        title: 'Strangers decide from your reviews before you ever quote.',
        pain: 'Letting a plumber into the house is a trust decision, and it happens on your Google profile before your phone rings. Two dozen reviews against a competitor\'s two hundred reads like a verdict, even when your work is better.',
        fixTitle: 'Every finished job asks for its review.',
        fix: 'A friendly follow-up lands while the relief of working plumbing is still fresh, with a direct link to your review page. Anyone unhappy reaches you first instead of Google. The count climbs week by week, and the next emergency search picks the plumber with the proof.',
      },
      {
        title: "Building managers can't shortlist what they can't verify.",
        pain: "A property manager with six buildings hands out steady work, but only to shops that look like they can carry it: insurance they can check, response times in writing, invoices that don't need chasing. If your site can't answer that in one visit, you never hear about the contract you lost.",
        fixTitle: 'The site carries the paperwork answers up front.',
        fix: 'A page for property managers and commercial work states your insurance, WSIB and response times plainly, with a direct way to request a certificate. The manager who checks you out at 7am finds what they need to add you to the list. One building on the roster outpays a month of drain calls.',
      },
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
    problems: [
      {
        title: "No-heat nights don't wait for business hours.",
        pain: "When the furnace quits at 11pm in January, the homeowner isn't filling in a contact form. They're calling, and whoever answers gets a same-week replacement decision. The shops with someone picking up after hours are collecting those winters.",
        fixTitle: 'After-hours calls get answered, and the no-heat ones reach you now.',
        fix: "The call is taken, the details are captured, and a no-heat emergency lands on your phone as a text right away, so you decide tonight whether it's a truck roll now or first thing tomorrow. The tune-up request books itself for next week instead. Nobody bounces to the next name on the list.",
      },
      {
        title: "Every furnace quote is a three-way comparison you never see.",
        pain: 'The homeowner collects three quotes and decides on things you never get to present: reviews, warranty terms, whether the website answered the questions they felt silly asking. The lowest bid does not always win. The most convincing one does.',
        fixTitle: 'The site makes your quote the convincing one.',
        fix: 'Financing sits beside every big number, the warranty is in writing, reviews lead the page, and the furnace and heat pump pages answer what people actually compare: brands, timelines, rebates, what happens on install day. When three quotes are close, the shop that already answered everything gets the call-back.',
      },
      {
        title: 'Heat pump questions changed, and the rebate rules keep moving.',
        pain: 'Programs open and close, dollar figures move, and homeowners search with half-right numbers from a neighbour. The shops answering those searches in plain words are collecting the installs while everyone else waits for the phone to ring.',
        fixTitle: 'A heat pump page that stays current.',
        fix: 'It explains what qualifies in plain words, keeps up as the programs shift, and ends at your quote form. The paperwork side stays with you. The customer arrives already decided, with realistic numbers, and you stop repeating the same twenty-minute explanation on every call.',
      },
      {
        title: 'The quiet months pay for the loud ones, if anything fills them.',
        pain: 'Spring and fall are when the phone goes quiet, and a shop with no maintenance-plan base starts every season from zero. The steady shops sold their tune-up plans in the mild weeks while everyone else waited for a cold snap.',
        fixTitle: 'Tune-up plans get sold in the shoulder seasons.',
        fix: 'Maintenance plans sit front and centre with online booking, and campaigns go out in the mild months when the calendar has room. The plan base grows a little every spring and fall, and January stops being a lottery.',
      },
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
    problems: [
      {
        title: 'Forty April inquiries, and half never hear back.',
        pain: "The spring rush lands while you're building crews and quoting nonstop. Voicemails pile up, messages sit unread, and the customers you didn't answer hired someone by Friday. The season's revenue gets decided in three chaotic weeks.",
        fixTitle: 'Every inquiry gets caught and sorted, even mid-rush.',
        fix: "Calls get answered, the form collects the property details and photos up front, and everything lands in one place ordered by what it's worth. You call the interlock project first and slot the weekly cut when the crew van has room. April chaos stops costing you the season's best jobs.",
      },
      {
        title: 'Your best work is invisible unless they stood on the driveway.',
        pain: 'Five-figure backyards, and the only people who ever see them are the client and the neighbours. The camera roll holds hundreds of before-and-afters that nobody searching for a landscaper will ever find. Design-build clients shortlist from galleries, and your gallery is a phone.',
        fixTitle: 'The portfolio goes where the searches happen.',
        fix: 'Before-and-afters organized by neighbourhood and project type, on a site built for the areas you want more of. Send photos from the job and they go up, and out to Instagram on schedule, without you opening an app. The finished yard sells the next one.',
      },
      {
        title: 'Quotes send you across the city for jobs that were never real.',
        pain: 'An address, a vague "backyard makeover", and an evening drive to meet someone who wanted a number to beat their brother-in-law\'s price. Estimate season burns your best hours on the least serious people.',
        fixTitle: 'The form filters before you drive.',
        fix: 'Photos, rough size, budget range and timeline come in up front. Serious projects book a visit, number-shoppers filter themselves out, and weekly-cut inquiries route straight to a price. Your evenings go back to the jobs that pay for them.',
      },
      {
        title: 'The seasonal windows close before you notice they opened.',
        pain: "Snow contracts get signed weeks before the first storm, spring cleanups the same in March. Miss a window while you're heads-down on fall installs, and that revenue went to whoever showed up on time.",
        fixTitle: 'Campaigns go out when the window opens, not when you remember.',
        fix: 'The snow page, the cleanup page and the ads are scheduled to the calendar, ready before each window opens. Commercial lots see response times in writing, homeowners see one price for the season. The quiet months get booked while you\'re still busy with the loud ones.',
      },
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
    problems: [
      {
        title: 'The DM booking dance eats your day between cuts.',
        pain: '"You free Saturday?" Three messages to land a time, two more when they move it, all typed with a client in the chair. Half the book runs through Instagram, and Instagram doesn\'t keep a calendar.',
        fixTitle: 'One link turns DMs into booked slots.',
        fix: 'The booking page holds your real availability, applies whatever deposit or card-on-file rule you set, and sends the reminders. "Book through the link" becomes the whole conversation, and the calendar fills itself while you cut. The phone goes back in your pocket.',
      },
      {
        title: 'A no-show at 2pm is thirty minutes of silence.',
        pain: 'The Saturday ones hurt most, because that slot was turned down twice before it sat empty. A chair that goes quiet twice a day adds up to a missing day every week, and the no-show never even texts.',
        fixTitle: 'Reminders cut the no-shows, and a card on file ends the repeats.',
        fix: 'Confirmations and reminders go out automatically, moving a booking takes one tap instead of an apology, and if someone keeps burning slots, the card on file makes the third time different. You set the policy. The system just applies it politely.',
      },
      {
        title: 'New people in the neighbourhood pick a barber in five minutes.',
        pain: 'They search, compare three shops, judge the photos and the latest review, and book. If your best fades live only on Instagram and your Google profile shows two photos and an old phone number, you just lost a client who would have come every three weeks for years.',
        fixTitle: 'Your Google profile shows what your Instagram already knows.',
        fix: 'The profile gets your cuts, your hours, your chairs and your reviews, kept current, with booking one tap away. The site holds the gallery where search can actually find it. The five-minute decision starts landing your way.',
      },
      {
        title: 'Slow Tuesdays stay slow on walk-ins alone.',
        pain: "Saturday runs itself. It's Tuesday at 2pm that decides whether the month works, and walk-in traffic doesn't take appointments. The chairs need a book that fills the quiet hours too.",
        fixTitle: 'Reviews and rebooking fill the weekday book.',
        fix: 'Every happy client gets asked for a Google review while the cut is still fresh, and rebooking prompts land right when it grows out. The book stops depending on the weather and the walk-in. Tuesday gets appointments too.',
      },
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
    problems: [
      {
        title: "You're asking for their keys before they've met you.",
        pain: 'A stranger in the house is the whole objection. The homeowner compares three cleaning companies at 10pm, and the one that shows insurance, vetting and a wall of reviews gets the walkthrough. A thin profile ends the conversation before your price is ever seen.',
        fixTitle: 'The trust answers go first, everywhere.',
        fix: "Your insurance, your vetting, your guarantees and the same-cleaner-each-visit promise sit on top of every page, with reviews right beside them and growing after every clean. The keys question gets answered before it's asked. Trust is the sale, so the site sells it.",
      },
      {
        title: "Quote ping-pong loses the easiest clients you'll ever book.",
        pain: 'Beds, baths, pets, frequency, back and forth over two days to price a condo clean, and the customer who wanted it simple already booked whoever answered instantly. The people who buy weekly cleaning are buying convenience first.',
        fixTitle: 'Beds and baths in, price out, booked.',
        fix: 'Standard cleans quote themselves on the site and land in the calendar with reminders attached. Bigger jobs, move-outs and offices route to a short form with photos. You wake up to booked cleans instead of open negotiations.',
      },
      {
        title: 'One-off cleans keep you busy without building anything.',
        pain: 'Move-outs and deep cleans fill this week and promise nothing about the next. The weekly clients who carry a cleaning business through the slow months need a different pitch, and a site built around one-time bookings never makes it.',
        fixTitle: 'The site sells the schedule, not the visit.',
        fix: 'Recurring plans lead, priced per visit so the standing appointment reads like the sensible choice, and the booking flow defaults to weekly and bi-weekly. Happy one-timers get a friendly nudge onto the schedule. The standing Thursday client is the whole point, so the site is built to create them.',
      },
      {
        title: 'Commercial contracts go to companies that look like companies.',
        pain: 'An office manager comparing janitorial quotes needs insurance certificates, references and a company that will still exist next quarter. If the site reads like a phone number and a price list, the contract conversation never starts.',
        fixTitle: 'A commercial page with the paperwork ready.',
        fix: 'Insurance and WSIB stated plainly, a direct way to request the certificate, references offered before they are asked for. Managers move slowly and check everything, and the site holds up at every check. One signed office pays like a whole street of houses.',
      },
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
    imgAlt: 'A roofer in a hard hat and gloves fastens framing on a flat commercial roof.',
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
    problems: [
      {
        title: "Every homeowner starts out assuming you're the storm chaser.",
        pain: "The door-knocker stories poisoned the well. A $15,000 decision now starts from suspicion you didn't earn, and the first thing every homeowner does is look for reasons to rule you out. A thin website is the first reason they find.",
        fixTitle: 'Proof stacked exactly where the doubt lives.',
        fix: 'Licence, insurance, warranty terms in writing, and finished roofs photographed in their own neighbourhood, all front and centre, with reviews leading and growing after every job. When someone looking for reasons to rule you out runs out of reasons, you get the call-back.',
      },
      {
        title: "Storm week floods the phone while you're on a roof.",
        pain: "The wind drops, and thirty calls land in two days, urgent, half-informed and all at once, while your crews tarp and patch. The calls you can't take get taken by someone else, and storm week decides a roofer's whole quarter.",
        fixTitle: 'Storm calls get answered, logged and ranked.',
        fix: 'Every call gets picked up and the details captured: address, damage, whether water is coming in. You work down one list sorted by urgency instead of a full voicemail box, and the tarping jobs that cannot wait find you first. Nobody gives up and dials the next name.',
      },
      {
        title: 'Insurance claims confuse homeowners into stalling.',
        pain: "A homeowner with hail damage and an adjuster's letter doesn't know what's covered, what to photograph or who to let on the roof. Confused people stall, and stalled claims drift to whoever the insurance company suggests.",
        fixTitle: "A claims page that answers what the adjuster's letter doesn't.",
        fix: 'It walks through the process in plain words, what to document, how the timelines run, where your roofer fits in, and it ends at a form that takes the claim details. You arrive as the roofer who already explained it honestly, and that trust survives all the way to the signature.',
      },
      {
        title: 'A $15,000 yes takes weeks, and the silence loses it.',
        pain: "Three or four quotes, weeks of thinking, a spouse to convince. The job is won during the quiet stretch, and if nothing keeps you present while they decide, the yes lands with whoever followed up. You're on roofs all day. Following up is nobody's job.",
        fixTitle: 'Inspections that book themselves, follow-ups that actually happen.',
        fix: 'The free-inspection offer sits on every page with online booking, and the follow-up runs on its own instead of on memory. The pipeline between storms stops depending on your evenings. When the homeowner finally decides, you are the roofer still in the room.',
      },
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
    problems: [
      {
        title: "The phone rings while both hoists are up and nobody's at the desk.",
        pain: "A check-engine light picks a shop the same afternoon it comes on. The driver searches \"mechanic near me\", calls the first two names, and goes wherever a person answers. If that call rings out while you're under a car, every oil change and brake job they'd have brought you for years just parked one block over.",
        fixTitle: 'Missed calls get answered, and the car still comes to you.',
        fix: 'The call is picked up, the vehicle and the problem get written down, and you get a text between jobs. You call back in ten minutes instead of never, with the bay already in mind. The customer for life stays yours.',
      },
      {
        title: 'Drivers assume the worst until someone proves otherwise.',
        pain: "Everyone has an overcharge story, and they walk in braced for another one. Against the dealership's ad budget, your edge is being visibly the honest shop, and \"visibly\" is the part most independents never get around to.",
        fixTitle: 'The site leads with what distrust checks first.',
        fix: 'Straight talk about pricing, the warranty on your work in writing, and a wall of real reviews before anything else, growing after every visit. The driver braced for a fight relaxes before they ever call, and from there the trust does the selling.',
      },
      {
        title: 'Tire season jams the phone the same weeks every year.',
        pain: 'First snowfall, and everyone who put it off calls within three days. The desk drowns, the schedule tangles, and the overflow books wherever a free slot is visible online.',
        fixTitle: 'Changeover weeks book themselves in advance.',
        fix: "Reminders go out before the rush with a booking link, slots fill in order, and walk-in chaos turns into a schedule. The season's revenue books earlier and spreads wider, and nobody sits on hold while your bays are full.",
      },
      {
        title: 'Oil changes drift away one forgotten reminder at a time.',
        pain: "The maintenance visits that should return on their own quietly don't. Life gets busy, the windshield sticker fades, and eighteen months later your customer has a new regular shop because a coupon landed at the right moment.",
        fixTitle: 'Reminders and reviews keep the regulars regular.',
        fix: 'Service reminders land when the interval comes due, booking takes two taps, and a review request follows every good visit so the profile keeps growing. The customers you already earned keep coming back, and their searches keep finding you first.',
      },
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
