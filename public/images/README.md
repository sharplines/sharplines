# Images — drop your assets here

Files in `public/` are served from the site root, so `public/images/hero.jpg`
is referenced in code as `/images/hero.jpg`.

## Photo slots to fill (all currently placeholders)

| Slot | Section | Referenced in |
|------|---------|---------------|
| `hero.jpg`      | Full-bleed hero background | `src/pages/index.astro` → `.hero-bg img` (currently `hero.svg`) |
| `challenge.jpg` | "Stand Out in a Crowded Market" media block | `src/pages/index.astro` → `.challenge-media` (currently a black placeholder box) |
| `workspace.jpg` | "Built for…" studio photo | `src/pages/index.astro` → `.built-media` (currently a gradient box) |

## How to swap one in

1. Drop the file here, e.g. `public/images/hero.jpg`.
2. Tell me the filename + slot and I'll wire it into `index.astro` and redeploy —
   or edit the corresponding element yourself.

Photos: JPG/WebP, hero ideally ≥1920px wide. Logo: SVG/PNG.
