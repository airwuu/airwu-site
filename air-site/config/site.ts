export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "airwu.dev",
  description: "Aaron's personal website",
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
      label: "Projects",
      href: "/calendar",
    },
    {
      label: "Blog",
      href: "/settings",
    },
    {
      label: "Resume",
      href: "/logout",
    },
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
      href: "/team",
    },
  ],
  links: {
    github: "https://github.com/airwuu",
    linkedin: "https://linkedin.com/in/airwu",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
