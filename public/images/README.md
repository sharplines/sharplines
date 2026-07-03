# Images — drop your assets here

Anything in `public/` is served from the site root, so a file at
`public/images/workspace.svg` is referenced in code as `/images/workspace.svg`.

## To replace the placeholders

1. Drop your photo into this folder, e.g. `public/images/workspace.jpg`.
2. Update the reference in `src/pages/index.astro`:
   - Full-width image band → currently `<img src="/images/workspace.svg" ...>`
     change to `/images/workspace.jpg`.
3. Add a logo the same way if you have one (e.g. `public/images/logo.svg`) and I can
   swap the text wordmark in `src/components/Header.astro` for it.

Recommended: JPG/WebP for photos, SVG/PNG for logos. Aim for the hero/band image to be
~1600px wide or larger.

Just tell me the filenames + which section each belongs to and I'll wire them in.
