# CLAUDE.md

Guidance for Claude Code (claude.ai/code) working in this repository.

## Project

Single-page personal site for Ethan Fang, built with **Astro 5** (`astro.config.mjs`, no UI framework — just `.astro` components and plain CSS). Deployed at `https://ethanfang.com`.

The visual language follows turbopuffer.com: JetBrains Mono for headings and UI chrome, Space Grotesk for prose, a cool near-white page with near-black ink and a single peach accent, square 1px-bordered panels, and a dotted block offset behind them in place of a blurred shadow.

## Running locally

```
npm install   # first time
npm run dev   # http://localhost:4321
```

Other scripts: `npm run build` (static output to `dist/`), `npm run preview` (serve the build).

## Layout

- `src/pages/index.astro` — the home route. Hero (calligraphy + name), a Previously note, then Work / Research / Projects / Gallery tab panels rendered from typed data files.
- `src/pages/tennis.astro`, `src/pages/vantura.astro` — long-form pages. Both import `src/styles/post.css`; neither carries its own `<style>` block.
- `src/layouts/Base.astro` — shared `<html>` shell. Imports `src/styles/global.css`, renders a `<slot />`, then `Footer`.
- `src/components/` — `Footer`, `Logo`.
- `src/data/` — typed content arrays (`projects.ts`, `research.ts`, `work.ts`, `gallery.ts`) consumed by `index.astro`.
- `public/calligraphy.png` — served verbatim at `/calligraphy.png` (used as both favicon and hero image).
- `public/dotted.svg` — the 7x13 dot tile behind every `.box`.

## Editing content

- **Work entries:** edit `src/data/work.ts`. `domain` / `mark` feed the `Logo` component; `href` makes the row a link.
- **Projects:** edit `src/data/projects.ts`. `href` is optional.

## Styling

- Design tokens live on `:root` in `src/styles/global.css` as bare HSL triples, so they are only valid inside `hsl(...)`: write `hsl(var(--accent))`, never `var(--accent)`.
- `.box` gives an element the square border plus the dotted offset shadow. The shadow is a `::after` at `z-index: -1`, so a `.box` must not sit inside an element that creates a stacking context.
- Headings are lowercased by `text-transform`. Anything that must keep its case needs `text-transform: none`, as `.entry__title` does.

## Notes

- TypeScript is enabled (`tsconfig.json`) for `.ts` files in `src/data/`.
- No tests, no linter configured.
