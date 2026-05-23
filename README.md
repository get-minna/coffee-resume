# Stewart Huang — Glyph Supply Co Resume

A monochromatic, Glyph-inspired barista resume built with Next.js. Content lives in [`lib/resume-data.ts`](lib/resume-data.ts); edit that file to update copy, links, and sections.

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build
pnpm start
```

For a local GitHub Pages preview:

```bash
GITHUB_PAGES=true pnpm build
npx serve out
```

## Deploy to GitHub Pages

Live URL: **https://get-minna.github.io/coffee-resume/**

1. Push to `main` — the [deploy workflow](.github/workflows/deploy-pages.yml) runs automatically.
2. In the repo: **Settings → Pages → Build and deployment → Source** → select **GitHub Actions** (one-time setup).
3. Check the **Actions** tab for the deploy status.

## Deploy to production (Vercel)

1. Push this repo to GitHub (`get-minna/coffee-resume`).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected).
4. Build command: `pnpm build` · Install command: `pnpm install`
5. Deploy. Vercel assigns a `*.vercel.app` URL; add a custom domain in project settings if needed.

Alternatively, with the [Vercel CLI](https://vercel.com/docs/cli):

```bash
pnpm add -g vercel   # or: npx vercel
vercel link
vercel --prod
```

## Export PDF

Use **Export PDF** in the page footer for a downloaded PDF, or the browser print dialog (Save as PDF).
