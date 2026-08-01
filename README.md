# cryptocanuck.com

The CryptoCanuck technical portfolio, focused on AI infrastructure, edge
compute, industrial data systems, and open-source engineering.

The site is designed as an **Edge Control Room**: a dark, systems-oriented
interface built around operational diagrams, high-contrast typography, and
purposeful motion. It keeps the architecture of Vercel's
[SEO Next.js Starter](https://vercel.com/templates/next.js/seo-starter), with an
original interface and content system.

## Technology stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 15.2 with the App Router |
| UI | React 19 |
| Language | TypeScript 5.8 in strict mode |
| Styling | Tailwind CSS 4, PostCSS 8, and a custom CSS design system |
| SEO | Next.js Metadata API plus generated sitemap, robots, icon, and Open Graph assets |
| Analytics | Optional Google Analytics through `@next/third-parties` |
| Tooling | pnpm, ESLint 9, and `eslint-config-next` |

The rebuild uses the `src/app` directory throughout; the previous Pages Router,
JavaScript, and Yarn-based structure is no longer part of the application.

## Local development

### Prerequisites

- Node.js 18.18 or newer
- pnpm

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the Next.js development server |
| `pnpm build` | Create an optimized production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint across the project |

Run the validation checks before opening a pull request:

```bash
pnpm lint
pnpm build
```

## Configuration

The application has production-safe defaults in `src/config.ts`. Copy
`.env.example` to `.env.local` when you need to override them.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_NAME` | No | Site and author name used in metadata |
| `NEXT_PUBLIC_TITLE` | No | Default page and social-card title |
| `NEXT_PUBLIC_DESCRIPTION` | No | Search and social description |
| `NEXT_PUBLIC_URL` | No | Canonical production URL |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` | No | Enables Google Analytics when set |

On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` is used as the canonical URL when
`NEXT_PUBLIC_URL` is not provided.

## Project structure

```text
src/
  app/
    globals.css   Tailwind import, design tokens, and the visual system
    layout.tsx    Global metadata, analytics, header, and footer
    page.tsx      Portfolio content and system diagrams
    robots.ts     Generated crawler directives
    sitemap.ts    Generated sitemap
  components/     Shared site chrome
  config.ts       Site identity and canonical URL configuration
public/
  og.png          Default Open Graph image
```

## Credits

The project retains the MIT license from the original SEO starter by Leo Wang.
All portfolio design, copy, and system diagrams in this repository are original
to this site.
