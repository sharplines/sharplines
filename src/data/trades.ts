// Trade tiles for the home TradeGrid (§6.1) and Nav dropdown (§3.4).
// Full trade-page content (pains/plan/faq/meta) lives in the content
// collection built with the /for/[slug] pages after home-page greenlight.
export interface Trade {
  slug: string;
  label: string; // display label (some differ from a title-cased slug)
  hook: string;  // one-line hook (§7)
}

export const trades: Trade[] = [
  { slug: 'electricians', label: 'Electricians',            hook: 'Show up first for "electrician near me".' },
  { slug: 'plumbers',     label: 'Plumbers',                hook: 'Be the first call when the pipe bursts.' },
  { slug: 'hvac',         label: 'HVAC',                    hook: 'Book the season before it starts.' },
  { slug: 'landscapers',  label: 'Landscapers & gardeners', hook: 'Turn your best yards into your next clients.' },
  { slug: 'barbers',      label: 'Barbershops & salons',    hook: 'Full chairs, fewer no-shows.' },
  { slug: 'cleaners',     label: 'Cleaning services',       hook: 'Recurring clients, not one-off gigs.' },
  { slug: 'roofers',      label: 'Roofers',                 hook: 'Be the roofer people trust when the storm hits.' },
  { slug: 'auto-repair',  label: 'Auto repair shops',       hook: 'Fill the bays, keep them coming back.' },
];
