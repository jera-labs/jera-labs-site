import { homeSections } from "@/content/home";
import type { NavItemId } from "@/types";

export type NavigationItem = {
  id: NavItemId;
  hash: string;
  labelKey: NavItemId;
};

/** One-page nav: scrolls to Home sections */
export const navigationItems: NavigationItem[] = [
  { id: "home", hash: homeSections.hero, labelKey: "home" },
  {
    id: "whatWeSolve",
    hash: homeSections.problemSolutions,
    labelKey: "whatWeSolve",
  },
  {
    id: "howWeWork",
    hash: homeSections.thinkingProcess,
    labelKey: "howWeWork",
  },
  { id: "about", hash: homeSections.foundersPreview, labelKey: "about" },
];
