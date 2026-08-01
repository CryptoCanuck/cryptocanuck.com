# cryptocanuck.com

The CryptoCanuck technical portfolio: AI infrastructure, edge compute,
industrial data systems, and open-source engineering work.

The current design is an **Edge Control Room**—a dark, systems-oriented visual
language built around operational diagrams, high-contrast typography, and
small amounts of purposeful motion. It uses the architecture of Vercel's
[SEO Next.js Starter](https://vercel.com/templates/next.js/seo-starter) as its
foundation, with a completely original interface and content system.

## Stack

- Next.js 15 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4 tooling with a custom global visual system
- Next.js metadata, robots, sitemap, favicon, and Open Graph routes

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
pnpm lint
pnpm build
```

## Configuration

The application has production-safe defaults in `src/config.ts`. To override
them, copy `.env.example` to `.env.local` and update the public variables.

## Project structure

```text
src/
  app/          Page, visual system, metadata routes, and generated assets
  components/   Shared site chrome
  config.ts     Site identity and canonical URL
```

## Credits

The project retains the MIT license from the original SEO starter by Leo Wang.
All portfolio design, copy, and system diagrams in this repository are original
to this site.
