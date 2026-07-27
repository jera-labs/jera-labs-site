import type { AppPathname, NavItemId } from "@/types";

export type NavigationItem = {
  id: NavItemId;
  href: AppPathname;
  labelKey: NavItemId;
};

export const navigationItems: NavigationItem[] = [
  { id: "home", href: "/", labelKey: "home" },
  { id: "whatWeSolve", href: "/what-we-solve", labelKey: "whatWeSolve" },
  { id: "howWeWork", href: "/how-we-work", labelKey: "howWeWork" },
  { id: "about", href: "/about", labelKey: "about" },
  { id: "contact", href: "/contact", labelKey: "contact" },
];
