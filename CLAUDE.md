# CLAUDE.md

Guidance for Claude Code (claude.ai/code) working in this repository.

## Project

Single-page personal site for Ethan Fang, built with **Astro 5** (`astro.config.mjs`, no UI framework — just `.astro` components and plain CSS). Deployed at `https://ethanfang.com`.

## Running locally

```
npm install   # first time
npm run dev   # http://localhost:4321
```

Other scripts: `npm run build` (static output to `dist/`), `npm run preview` (serve the build).

## Layout

- `src/pages/index.astro` — the only route. Hero (calligraphy + name) followed by Work and Projects sections, both rendered from typed data files.
- `src/layouts/Base.astro` — shared `<html>` shell. Imports `src/styles/global.css`, renders `Footer` after a `<slot />`.
- `src/components/` — `Footer`, `Logo`.
- `src/data/` — typed content arrays (`projects.ts`, `work.ts`) consumed by `index.astro`.
- `public/calligraphy.png` — served verbatim at `/calligraphy.png` (used as both favicon and hero image).

## Editing content

- **Work entries:** edit `src/data/work.ts`. `domain` / `mark` feed the `Logo` component; `href` makes the row a link.
- **Projects:** edit `src/data/projects.ts`. `href` is optional.

## Notes

- TypeScript is enabled (`tsconfig.json`) for `.ts` files in `src/data/`.
- No tests, no linter configured.
