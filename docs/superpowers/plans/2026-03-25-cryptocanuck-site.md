# cryptocanuck.com Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a personal developer profile website at cryptocanuck.com using Next.js + Once UI, with a single-page scroll homepage and a blog route.

**Architecture:** Once UI starter template as foundation. Homepage composed of section components (Hero, About, Resume, Projects, Widgets placeholder, Contact) rendered in a single scroll. Blog at `/blog` with listing and post pages. All content hardcoded in components.

**Tech Stack:** Next.js (App Router), Once UI (`@once-ui-system/core`), TypeScript

**Spec:** `docs/superpowers/specs/2026-03-25-cryptocanuck-site-design.md`

---

## File Structure

```
src/
  app/
    layout.tsx              — (modify) Root layout, already provided by starter
    page.tsx                — (modify) Homepage, compose section components
    blog/
      page.tsx              — (create) Blog listing page
      [slug]/
        page.tsx            — (create) Individual blog post page
  components/
    Header.tsx              — (create) Sticky nav with section anchors + blog link
    Footer.tsx              — (create) Minimal site footer
    sections/
      Hero.tsx              — (create) Name, tagline, social CTAs
      About.tsx             — (create) Avatar + bio
      Resume.tsx            — (create) Experience timeline + skills tags
      Projects.tsx          — (create) Project cards grid
      Widgets.tsx           — (create) Phase 2 placeholder slots
      Contact.tsx           — (create) Contact/social links
  resources/
    once-ui.config.js       — (modify) Theme: cyan brand, orange accent, gray neutral
    seo.js                  — (modify) Site metadata for cryptocanuck.com
```

---

### Task 1: Scaffold Project with Once UI Starter

**Files:**
- Create: entire project via `create-once-ui-app`
- Modify: `src/resources/once-ui.config.js`
- Modify: `src/resources/seo.js`

- [ ] **Step 1: Scaffold the project**

Run from the parent directory of the project (the starter will create a new folder, so we'll scaffold into a temp name and move contents):

```bash
cd C:/Users/rolox/Projects
npx create-once-ui-app@latest cryptocanuck-temp
```

Follow the prompts (accept defaults). Then move contents into our project directory:

```bash
cp -r cryptocanuck-temp/* cryptocanuck.com/
cp -r cryptocanuck-temp/.* cryptocanuck.com/ 2>/dev/null
rm -rf cryptocanuck-temp
```

- [ ] **Step 2: Install dependencies and verify it runs**

```bash
cd C:/Users/rolox/Projects/cryptocanuck.com
npm install
npm run dev
```

Expected: Dev server starts on `http://localhost:3000`, default Once UI starter page renders.

- [ ] **Step 3: Configure theming**

Modify `src/resources/once-ui.config.js` — set:
- `brand`: `"cyan"`
- `accent`: `"orange"`
- `neutral`: `"gray"`
- `theme`: `"system"` (auto dark/light mode)

Keep other defaults (border, surface, transition, scaling).

- [ ] **Step 4: Configure SEO metadata**

Modify `src/resources/seo.js` — set:
- `title`: `"cryptocanuck"`
- `description`: `"Developer profile and resume — cryptocanuck.com"`
- `url`: `"https://cryptocanuck.com"`

- [ ] **Step 5: Initialize git and commit**

```bash
cd C:/Users/rolox/Projects/cryptocanuck.com
git init
git add .
git commit -m "chore: scaffold project with Once UI starter"
```

---

### Task 2: Header Component

**Files:**
- Create: `src/components/Header.tsx`
- Modify: `src/app/layout.tsx` (add Header to layout)

- [ ] **Step 1: Create Header component**

Create `src/components/Header.tsx`:
- Left side: "cryptocanuck" text as brand/logo
- Right side: navigation links — About, Resume, Projects, Widgets, Contact (anchor links to `#about`, `#resume`, `#projects`, `#widgets`, `#contact`) + Blog link (href `/blog`)
- Use Once UI components: `Row`, `Text`, `SmartLink`
- Sticky positioning at top
- Responsive: hide nav links on mobile, show hamburger menu (can use Once UI patterns)

```tsx
"use client";

import { Row, Text, SmartLink, Flex } from "@once-ui-system/core";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Widgets", href: "#widgets" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  return (
    <Row
      as="header"
      horizontal="space-between"
      vertical="center"
      paddingX="l"
      paddingY="s"
      style={{ position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(12px)" }}
    >
      <SmartLink href="/">
        <Text variant="heading-strong-s">cryptocanuck</Text>
      </SmartLink>
      <Row gap="m" hide="s">
        {navItems.map((item) => (
          <SmartLink key={item.href} href={item.href}>
            <Text variant="body-default-s">{item.label}</Text>
          </SmartLink>
        ))}
      </Row>
    </Row>
  );
}
```

Note: The exact Once UI component API may differ slightly from this — adjust imports and props based on what the installed version provides. Check the Once UI docs or the starter code for the correct component names and prop signatures.

- [ ] **Step 2: Add Header to root layout**

Modify `src/app/layout.tsx` — import and render `<Header />` above the main content area (inside the body, before `{children}`).

- [ ] **Step 3: Verify Header renders**

Run `npm run dev`, confirm the header appears at the top with brand text and nav links.

- [ ] **Step 4: Commit**

```bash
git add src/components/Header.tsx src/app/layout.tsx
git commit -m "feat: add sticky Header with nav links"
```

---

### Task 3: Footer Component

**Files:**
- Create: `src/components/Footer.tsx`
- Modify: `src/app/layout.tsx` (add Footer to layout)

- [ ] **Step 1: Create Footer component**

Create `src/components/Footer.tsx`:
- Centered text: "cryptocanuck.com — Built with Next.js + Once UI"
- Use Once UI `Row`, `Text`
- Minimal styling, subtle opacity

```tsx
import { Row, Text } from "@once-ui-system/core";

export default function Footer() {
  return (
    <Row
      as="footer"
      horizontal="center"
      paddingX="l"
      paddingY="m"
      style={{ opacity: 0.5 }}
    >
      <Text variant="body-default-xs">
        cryptocanuck.com — Built with Next.js + Once UI
      </Text>
    </Row>
  );
}
```

- [ ] **Step 2: Add Footer to root layout**

Modify `src/app/layout.tsx` — import and render `<Footer />` below `{children}`.

- [ ] **Step 3: Verify Footer renders**

Run `npm run dev`, confirm footer appears at bottom of page.

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.tsx src/app/layout.tsx
git commit -m "feat: add Footer component"
```

---

### Task 4: Hero Section

**Files:**
- Create: `src/components/sections/Hero.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Hero component**

Create `src/components/sections/Hero.tsx`:
- Subheading: role/descriptor text (e.g., "Developer / Builder / Canuck")
- Main heading: name (placeholder for now)
- Body: one-liner description
- CTA row: GitHub, LinkedIn, Contact buttons/links
- Use Once UI `Column`, `Heading`, `Text`, `Row`, `Button` or `SmartLink`

```tsx
import { Column, Heading, Text, Row, Button } from "@once-ui-system/core";

export default function Hero() {
  return (
    <Column
      horizontal="center"
      paddingX="l"
      paddingY="xl"
      gap="m"
      style={{ textAlign: "center" }}
    >
      <Text variant="label-default-s" style={{ letterSpacing: "0.15em", textTransform: "uppercase" }}>
        Developer / Builder / Canuck
      </Text>
      <Heading variant="display-strong-l">
        Your Name
      </Heading>
      <Text variant="body-default-m" style={{ maxWidth: "600px", opacity: 0.7 }}>
        A technically-oriented personal site with live widgets, project showcases, and a dev blog.
      </Text>
      <Row gap="s" style={{ marginTop: "var(--static-space-m)" }}>
        <Button href="https://github.com/your-username" variant="secondary" size="s">
          GitHub
        </Button>
        <Button href="https://linkedin.com/in/your-profile" variant="secondary" size="s">
          LinkedIn
        </Button>
        <Button href="#contact" variant="secondary" size="s">
          Contact
        </Button>
      </Row>
    </Column>
  );
}
```

Note: Adjust component API to match the installed Once UI version.

- [ ] **Step 2: Wire into homepage**

Modify `src/app/page.tsx` — clear starter content, import and render `<Hero />`.

```tsx
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

- [ ] **Step 3: Verify Hero renders**

Run `npm run dev`, confirm Hero section displays with heading, tagline, and buttons.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/Hero.tsx src/app/page.tsx
git commit -m "feat: add Hero section"
```

---

### Task 5: About Section

**Files:**
- Create: `src/components/sections/About.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create About component**

Create `src/components/sections/About.tsx`:
- Section anchor: `id="about"`
- Two-column layout: avatar/photo placeholder on left, bio text on right
- Bio text is hardcoded paragraphs
- Use Once UI `Row`, `Column`, `Text`, `Heading`, `Avatar` (or styled image)
- Responsive: stacks vertically on mobile

```tsx
import { Row, Column, Heading, Text, Avatar } from "@once-ui-system/core";

export default function About() {
  return (
    <Column id="about" paddingX="l" paddingY="xl" gap="m">
      <Text variant="label-default-s" style={{ letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.5 }}>
        About
      </Text>
      <Row gap="l" wrap>
        <Avatar size="xl" src="/avatar.jpg" />
        <Column gap="s" style={{ flex: 1, minWidth: "280px" }}>
          <Heading variant="heading-strong-m">Who I Am</Heading>
          <Text variant="body-default-m" style={{ opacity: 0.7, lineHeight: 1.7 }}>
            Your bio goes here. Talk about your background, what you're passionate about,
            and what you're currently building. This is hardcoded directly in the component.
          </Text>
        </Column>
      </Row>
    </Column>
  );
}
```

- [ ] **Step 2: Add to homepage**

Modify `src/app/page.tsx` — import and render `<About />` after `<Hero />`.

- [ ] **Step 3: Verify About renders**

Run `npm run dev`, confirm About section displays with avatar placeholder and bio text.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/About.tsx src/app/page.tsx
git commit -m "feat: add About section"
```

---

### Task 6: Resume Section

**Files:**
- Create: `src/components/sections/Resume.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Resume component**

Create `src/components/sections/Resume.tsx`:
- Section anchor: `id="resume"`
- Two-column layout: Experience (left) + Skills (right)
- Experience: list of entries with role, company, date range — styled with left border accent
- Skills: tag/pill cloud grouped by category
- Use Once UI `Row`, `Column`, `Text`, `Heading`, `Tag`

```tsx
import { Row, Column, Heading, Text, Tag } from "@once-ui-system/core";

const experience = [
  { role: "Role Title", company: "Company Name", period: "2022 — Present", description: "Brief description of responsibilities and achievements." },
  { role: "Previous Role", company: "Previous Company", period: "2019 — 2022", description: "Brief description of responsibilities and achievements." },
];

const skills = [
  "TypeScript", "React", "Next.js", "Node.js", "Python",
  "Docker", "DevOps", "PostgreSQL", "AWS", "Git",
];

export default function Resume() {
  return (
    <Column id="resume" paddingX="l" paddingY="xl" gap="m">
      <Text variant="label-default-s" style={{ letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.5 }}>
        Resume
      </Text>
      <Row gap="xl" wrap>
        {/* Experience */}
        <Column gap="m" style={{ flex: 1, minWidth: "280px" }}>
          <Heading variant="heading-strong-s">Experience</Heading>
          {experience.map((exp, i) => (
            <Column key={i} gap="xs" style={{ borderLeft: "2px solid var(--brand-500)", paddingLeft: "var(--static-space-m)" }}>
              <Text variant="body-strong-s">{exp.role}</Text>
              <Text variant="body-default-xs" style={{ opacity: 0.5 }}>{exp.company} · {exp.period}</Text>
              <Text variant="body-default-s" style={{ opacity: 0.7 }}>{exp.description}</Text>
            </Column>
          ))}
        </Column>
        {/* Skills */}
        <Column gap="m" style={{ flex: 1, minWidth: "280px" }}>
          <Heading variant="heading-strong-s">Skills</Heading>
          <Row gap="xs" wrap>
            {skills.map((skill) => (
              <Tag key={skill} size="s" variant="brand">{skill}</Tag>
            ))}
          </Row>
        </Column>
      </Row>
    </Column>
  );
}
```

- [ ] **Step 2: Add to homepage**

Modify `src/app/page.tsx` — import and render `<Resume />` after `<About />`.

- [ ] **Step 3: Verify Resume renders**

Run `npm run dev`, confirm experience timeline and skills tags display correctly.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/Resume.tsx src/app/page.tsx
git commit -m "feat: add Resume section with experience and skills"
```

---

### Task 7: Projects Section

**Files:**
- Create: `src/components/sections/Projects.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Projects component**

Create `src/components/sections/Projects.tsx`:
- Section anchor: `id="projects"`
- 2-column card grid
- Each card: project name, description, tech tags, link
- Use Once UI `Column`, `Row`, `Grid`, `Text`, `Heading`, `Tag`, `SmartLink`

```tsx
import { Column, Grid, Heading, Text, Tag, Row, SmartLink } from "@once-ui-system/core";

const projects = [
  {
    name: "Project One",
    description: "Short description of what this project does and why it matters.",
    tags: ["Next.js", "TypeScript", "API"],
    url: "https://github.com/your-username/project-one",
  },
  {
    name: "Project Two",
    description: "Short description of what this project does and why it matters.",
    tags: ["Python", "ML", "Data"],
    url: "https://github.com/your-username/project-two",
  },
];

export default function Projects() {
  return (
    <Column id="projects" paddingX="l" paddingY="xl" gap="m">
      <Text variant="label-default-s" style={{ letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.5 }}>
        Projects
      </Text>
      <Grid columns="2" gap="m" tabletColumns="1">
        {projects.map((project) => (
          <SmartLink key={project.name} href={project.url} style={{ textDecoration: "none" }}>
            <Column
              gap="s"
              padding="l"
              style={{ border: "1px solid var(--neutral-200)", borderRadius: "var(--radius-m)" }}
            >
              <Heading variant="heading-strong-s">{project.name}</Heading>
              <Text variant="body-default-s" style={{ opacity: 0.6 }}>{project.description}</Text>
              <Row gap="xs" wrap>
                {project.tags.map((tag) => (
                  <Tag key={tag} size="s">{tag}</Tag>
                ))}
              </Row>
            </Column>
          </SmartLink>
        ))}
      </Grid>
    </Column>
  );
}
```

- [ ] **Step 2: Add to homepage**

Modify `src/app/page.tsx` — import and render `<Projects />` after `<Resume />`.

- [ ] **Step 3: Verify Projects renders**

Run `npm run dev`, confirm project cards display in a 2-column grid.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/Projects.tsx src/app/page.tsx
git commit -m "feat: add Projects section with card grid"
```

---

### Task 8: Widgets Placeholder Section

**Files:**
- Create: `src/components/sections/Widgets.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Widgets placeholder component**

Create `src/components/sections/Widgets.tsx`:
- Section anchor: `id="widgets"`
- 3-column grid of dashed-border placeholder cards
- Each labeled with planned widget name + "Coming Soon"

```tsx
import { Column, Grid, Heading, Text } from "@once-ui-system/core";

const widgetSlots = [
  "Anthropic Token Tracker",
  "Widget Slot",
  "Widget Slot",
];

export default function Widgets() {
  return (
    <Column id="widgets" paddingX="l" paddingY="xl" gap="m">
      <Text variant="label-default-s" style={{ letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.5 }}>
        Widgets
      </Text>
      <Grid columns="3" gap="m" tabletColumns="1">
        {widgetSlots.map((name, i) => (
          <Column
            key={i}
            horizontal="center"
            padding="l"
            gap="xs"
            style={{ border: "1px dashed var(--neutral-300)", borderRadius: "var(--radius-m)", textAlign: "center" }}
          >
            <Text variant="body-default-s" style={{ opacity: 0.5 }}>{name}</Text>
            <Text variant="body-default-xs" style={{ opacity: 0.3 }}>Coming Soon</Text>
          </Column>
        ))}
      </Grid>
    </Column>
  );
}
```

- [ ] **Step 2: Add to homepage**

Modify `src/app/page.tsx` — import and render `<Widgets />` after `<Projects />`.

- [ ] **Step 3: Verify Widgets placeholder renders**

Run `npm run dev`, confirm three placeholder cards display.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/Widgets.tsx src/app/page.tsx
git commit -m "feat: add Widgets placeholder section"
```

---

### Task 9: Contact Section

**Files:**
- Create: `src/components/sections/Contact.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create Contact component**

Create `src/components/sections/Contact.tsx`:
- Section anchor: `id="contact"`
- Heading + row of contact/social links
- Use Once UI `Column`, `Row`, `Text`, `Heading`, `Button` or `SmartLink`

```tsx
import { Column, Heading, Text, Row, Button } from "@once-ui-system/core";

const contacts = [
  { label: "Email", href: "mailto:your@email.com" },
  { label: "GitHub", href: "https://github.com/your-username" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-profile" },
  { label: "Twitter/X", href: "https://x.com/your-handle" },
];

export default function Contact() {
  return (
    <Column id="contact" paddingX="l" paddingY="xl" gap="m">
      <Text variant="label-default-s" style={{ letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.5 }}>
        Contact
      </Text>
      <Heading variant="heading-strong-m">Get in Touch</Heading>
      <Row gap="s" wrap>
        {contacts.map((c) => (
          <Button key={c.label} href={c.href} variant="secondary" size="s">
            {c.label}
          </Button>
        ))}
      </Row>
    </Column>
  );
}
```

- [ ] **Step 2: Add to homepage**

Modify `src/app/page.tsx` — import and render `<Contact />` after `<Widgets />`.

- [ ] **Step 3: Verify Contact renders**

Run `npm run dev`, confirm contact buttons display.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/Contact.tsx src/app/page.tsx
git commit -m "feat: add Contact section"
```

---

### Task 10: Blog Listing Page

**Files:**
- Create: `src/app/blog/page.tsx`

- [ ] **Step 1: Create blog listing page**

Create `src/app/blog/page.tsx`:
- Page heading: "Blog"
- List of blog posts (hardcoded array) with title, date, excerpt
- Each links to `/blog/[slug]`
- Use Once UI `Column`, `Heading`, `Text`, `SmartLink`

```tsx
import { Column, Heading, Text, SmartLink } from "@once-ui-system/core";

const posts = [
  {
    slug: "hello-world",
    title: "Hello World",
    date: "2026-03-25",
    excerpt: "Welcome to my blog. This is the first post on cryptocanuck.com.",
  },
];

export default function BlogPage() {
  return (
    <Column paddingX="l" paddingY="xl" gap="l" style={{ maxWidth: "720px", margin: "0 auto" }}>
      <Heading variant="display-strong-m">Blog</Heading>
      {posts.map((post) => (
        <SmartLink key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
          <Column gap="xs" padding="m" style={{ border: "1px solid var(--neutral-200)", borderRadius: "var(--radius-m)" }}>
            <Heading variant="heading-strong-s">{post.title}</Heading>
            <Text variant="body-default-xs" style={{ opacity: 0.5 }}>{post.date}</Text>
            <Text variant="body-default-s" style={{ opacity: 0.7 }}>{post.excerpt}</Text>
          </Column>
        </SmartLink>
      ))}
    </Column>
  );
}
```

- [ ] **Step 2: Verify blog listing page**

Run `npm run dev`, navigate to `http://localhost:3000/blog`. Confirm heading and post list render.

- [ ] **Step 3: Commit**

```bash
git add src/app/blog/page.tsx
git commit -m "feat: add blog listing page"
```

---

### Task 11: Blog Post Page

**Files:**
- Create: `src/app/blog/[slug]/page.tsx`

- [ ] **Step 1: Create blog post page**

Create `src/app/blog/[slug]/page.tsx`:
- Renders individual blog post by slug
- Hardcoded posts object (same data as listing, but with full content)
- 404 if slug not found
- Use Once UI `Column`, `Heading`, `Text`, `SmartLink`

```tsx
import { Column, Heading, Text, SmartLink } from "@once-ui-system/core";
import { notFound } from "next/navigation";

const posts: Record<string, { title: string; date: string; content: string }> = {
  "hello-world": {
    title: "Hello World",
    date: "2026-03-25",
    content: `Welcome to my blog. This is the first post on cryptocanuck.com.

I built this site with Next.js and Once UI. More posts coming soon — stay tuned for technical deep dives, project updates, and widget experiments.`,
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <Column paddingX="l" paddingY="xl" gap="m" style={{ maxWidth: "720px", margin: "0 auto" }}>
      <SmartLink href="/blog">
        <Text variant="body-default-s" style={{ opacity: 0.5 }}>← Back to blog</Text>
      </SmartLink>
      <Heading variant="display-strong-m">{post.title}</Heading>
      <Text variant="body-default-xs" style={{ opacity: 0.5 }}>{post.date}</Text>
      <Text variant="body-default-m" style={{ lineHeight: 1.8, whiteSpace: "pre-line" }}>
        {post.content}
      </Text>
    </Column>
  );
}
```

- [ ] **Step 2: Verify blog post page**

Run `npm run dev`, navigate to `http://localhost:3000/blog/hello-world`. Confirm post renders. Try a non-existent slug — confirm 404.

- [ ] **Step 3: Commit**

```bash
git add src/app/blog/[slug]/page.tsx
git commit -m "feat: add individual blog post page"
```

---

### Task 12: Final Verification and Polish

**Files:**
- Potentially modify any component for fixes

- [ ] **Step 1: Full smoke test**

Run `npm run dev` and verify:
1. Homepage loads with all sections in order: Hero → About → Resume → Projects → Widgets → Contact
2. Nav links scroll to correct sections
3. Blog link navigates to `/blog`
4. Blog post links work
5. Dark/light mode toggle works (if Once UI provides one, or test with system preference)
6. Page is responsive — check at mobile, tablet, desktop widths

- [ ] **Step 2: Fix any issues found**

Address any rendering, layout, or navigation issues discovered during smoke test.

- [ ] **Step 3: Production build test**

```bash
npm run build
```

Expected: Build completes with no errors. This confirms Coolify deployment will work (standard Next.js build).

- [ ] **Step 4: Commit any fixes**

```bash
git add -A
git commit -m "fix: polish and final adjustments"
```

- [ ] **Step 5: Final commit — mark base complete**

Only if there are no uncommitted changes from step 4:

```bash
git log --oneline -15
```

Verify the commit history looks clean and tells a coherent story.
