const baseURL = "https://cryptocanuck.com";

const meta = {
  home: {
    path: "/",
    title: "cryptocanuck",
    description:
      "Developer profile and resume — cryptocanuck.com",
    image: "/images/og/home.jpg",
    canonical: "https://cryptocanuck.com",
    robots: "index,follow",
    alternates: [{ href: "https://cryptocanuck.com", hrefLang: "en" }],
  },
  blog: {
    path: "/blog",
    title: "Blog — cryptocanuck",
    description: "Technical writing and project updates from cryptocanuck.",
  },
};

const schema = {
  logo: "",
  type: "Person",
  name: "cryptocanuck",
  description: meta.home.description,
  email: "",
};

export { meta, schema, baseURL };
