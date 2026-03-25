# cryptocanuck.com — Design Spec

## Overview

Personal developer profile and resume website for cryptocanuck.com. Technically oriented, built with Next.js and Once UI design system. Self-hosted deployment via Coolify.

## Tech Stack

- **Framework:** Next.js (App Router)
- **UI System:** Once UI (`npx create-once-ui-app@latest`)
- **Styling:** Once UI design tokens + theming system
- **Content:** Hardcoded in components (no CMS, no markdown)
- **Deployment:** Self-hosted via Coolify

## Architecture

### Approach

Bootstrap with the Once UI starter template (`create-once-ui-app`). Single-page scroll layout for the homepage with all main sections. Blog lives as a separate `/blog` route. Widget section is a placeholder for Phase 2.

### Route Structure

```
/              — Homepage (single-page scroll with all sections)
/blog          — Blog post listing
/blog/[slug]   — Individual blog post
```

### Project Structure

```
src/
  app/
    layout.tsx          — Root layout (Once UI provider, theme config, nav)
    page.tsx            — Homepage (composes section components)
    blog/
      page.tsx          — Blog listing
      [slug]/
        page.tsx        — Individual blog post
  components/
    Header.tsx          — Sticky nav with section links + blog route link
    Footer.tsx          — Site footer
    sections/
      Hero.tsx          — Name, tagline, social links
      About.tsx         — Photo + bio
      Resume.tsx        — Experience timeline + skills
      Projects.tsx      — Project cards grid
      Widgets.tsx       — Placeholder widget slots (Phase 2)
      Contact.tsx       — Contact links / social
```

## Sections — Homepage

### Header (sticky nav)

- Left: "cryptocanuck" brand text/logo
- Right: Navigation links anchoring to page sections (About, Resume, Projects, Widgets, Contact) + Blog link (navigates to `/blog`)
- Once UI `Header` component with `SmartLink` for nav items
- Responsive: collapses to hamburger on mobile

### Hero

- Full-width section with subtle gradient background
- Subheading: role/descriptor (e.g., "Developer / Builder / Canuck")
- Main heading: name
- Body text: one-liner about the site
- CTA row: social links (GitHub, LinkedIn, etc.) as Once UI `Button` or `IconButton` components
- Once UI `Column`, `Heading`, `Text`, `Row` for layout

### About

- Two-column layout: avatar/photo on left, bio text on right
- Bio is hardcoded paragraph(s)
- Once UI `Row`, `Column`, `Text`, `Avatar` (or styled image)
- Stacks vertically on mobile

### Resume

- Two-column layout: Experience (left) + Skills (right)
- **Experience:** Vertical timeline with role, company, date range, brief description per entry
- **Skills:** Tag cloud / pill list grouped by category
- Once UI `Column`, `Text`, `Tag` components
- Stacks vertically on mobile

### Projects

- Section heading + 2-column card grid
- Each card: project name, short description, tech tags, link to repo/demo
- Once UI `Grid`, `Card` (or styled `Column` with border), `Tag`, `SmartLink`
- Responsive: single column on mobile

### Widgets (Phase 2 placeholder)

- Section heading + 3-column grid of dashed placeholder cards
- Each slot labeled with planned widget name (e.g., "Anthropic Token Tracker")
- Marked as "Coming Soon" or "Phase 2"
- This section will be fully built out in a future iteration

### Contact

- Simple row of contact/social links
- Email, GitHub, LinkedIn, Twitter/X
- Once UI `Row`, `Button` or `SmartLink` components

### Footer

- Minimal footer: "cryptocanuck.com — Built with Next.js + Once UI"
- Once UI `Row`, `Text`

## Blog

- **Listing page (`/blog`):** List of blog posts with title, date, excerpt
- **Post page (`/blog/[slug]`):** Full blog post content
- Blog content is hardcoded for now (can migrate to MDX later)
- Same header/footer as homepage
- Blog posts defined as an array of objects in a data file or directly in the component

## Theming

- Use Once UI's built-in theming system
- Default config: system-detected dark/light mode, cyan brand color, orange accent, gray neutral
- These defaults can be customized later via Once UI's config
- All spacing, typography, and colors use Once UI design tokens

## Responsive Design

- Once UI provides responsive primitives
- All sections stack vertically on mobile
- Nav collapses to hamburger menu on small screens
- Project/widget grids go to single column on mobile

## Phase 2 (Out of Scope for Now)

- Anthropic token consumption tracker widget
- Additional widgets (GitHub stats, uptime monitor, crypto ticker, etc.)
- Widget data fetching / API integration
- Blog migration to MDX if needed
- SEO optimization (meta tags, OG images)

## Success Criteria

- Site loads and renders all sections correctly
- Dark/light mode works via Once UI theming
- Responsive layout works on mobile/tablet/desktop
- Blog route works with at least one placeholder post
- Clean, professional appearance using Once UI components
- Ready for Coolify deployment (standard Next.js build)
