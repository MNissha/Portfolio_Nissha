import { navLinkSchema, type NavLink } from "../types/navLink.js";

const rawNavLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const navLinks: NavLink[] = navLinkSchema.array().parse(rawNavLinks);
