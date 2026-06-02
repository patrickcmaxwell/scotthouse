export const NAV = [
  { href: "/private-lessons", label: "Private Lessons" },
  { href: "/junior-golf", label: "Junior Golf" },
  { href: "/campus-academy", label: "CAMPUS Academy" },
  { href: "/about", label: "About" },
] as const;

export const FOOTER_LINKS = [
  ...NAV,
  { href: "/contact", label: "Contact" },
] as const;

export const CONTACT = {
  club: "Westwood Golf Club",
  city: "Houston, Texas",
  phone: "(713) 555-0142",
  phoneHref: "tel:7135550142",
  email: "scott@scotthausegolf.com",
} as const;
