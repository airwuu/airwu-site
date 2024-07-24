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
      href: "mailto:wu@ucmerced.edu",
    },
    {
      label: "Linkedin",
      href: "https://linkedin.com/in/airwu",
    },
    {
      label: "Github",
      href: "https://github.com/airwuu",
    },
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1-Hom_NUzmNiUlRIBktHUnA1UwOtPrX3d/view?usp=sharing",
    },
  ],
  links: {
    github: "https://github.com/airwuu",
    linkedin: "https://linkedin.com/in/airwu",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    mail: "mailto:wu@ucmerced.edu",
    resume:
      "https://drive.google.com/file/d/1-Hom_NUzmNiUlRIBktHUnA1UwOtPrX3d/view?usp=sharing", //Replace with resume link
  },
};
