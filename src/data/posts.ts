export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "hello-world",
    title: "Hello World",
    date: "2026-03-25",
    excerpt:
      "Welcome to my blog. This is the first post on cryptocanuck.com.",
    content: `Welcome to cryptocanuck.com! This is the very first post on the blog, and I'm excited to share the journey of building this site from the ground up.

The site is built with Next.js and Once UI, a combination that makes it straightforward to create a fast, modern web experience. Next.js provides the foundation with its App Router, server components, and built-in optimizations, while Once UI delivers a clean and consistent design system out of the box.

One of the goals for this project is to document the things I learn along the way — from web development techniques to insights about the crypto space in Canada. Whether you're a developer, a crypto enthusiast, or just curious, I hope you'll find something useful here.

Stay tuned for more posts. There's a lot to cover and I'm looking forward to sharing it all.`,
  },
];
