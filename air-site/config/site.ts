export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "airwu.dev",
  description: "Aaron's website",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Email",
      href: "/profile",
    },
    {
      label: "Linkedin",
      href: "/dashboard",
    },
    {
      label: "Github",
      href: "/projects",
    },
    {
      label: "Discord",
      href: "/projects",
    },
    {
      label: "Resume",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/airwuu",
    linkedin: "https://linkedin.com/in/airwu",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "", //Replace with resume link
  },
};
