# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Branching

Always create a new branch before making changes — never commit directly to `main`. Branch names must follow the pattern `akshay/<short-description>`, e.g. `akshay/add-skills-section`.

## Commands

```bash
npm run dev        # Start dev server (Vite + Remix)
npm run build      # Production build
npm run typecheck  # TypeScript type checking
```

There is no test suite. Linting uses `@remix-run/eslint-config` via `.eslintrc.cjs` (run with `npx eslint .`).

## Architecture

This is a **Remix v2 app deployed on Vercel**, built with React + TypeScript + Vite. It renders a single-page resume site.

**Route structure:**
- `app/routes/_index.tsx` — root route (`/`), renders the `Resume` component
- `app/routes/resume.tsx` — `/resume` route, also renders `Resume`
- `app/routes/edge.tsx` — `/edge` route, same content but with `export const config = { runtime: "edge" }` for Vercel Edge Runtime

**Key files:**
- `app/components/Resume.tsx` — the single Resume component containing all content (hardcoded HTML/JSX)
- `app/styles/Resume.css` — all styling, including dark mode via `@media (prefers-color-scheme: dark)`
- `app/root.tsx` — app shell with `@vercel/analytics` injected

Font Awesome 6 icons are loaded via CDN in `_index.tsx` and `edge.tsx` `links` exports. The `vercelPreset()` in `vite.config.ts` enables Vercel-specific optimizations.
