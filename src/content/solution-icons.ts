import {
  BarChart3,
  Link2,
  Repeat,
  Rocket,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ProblemSolutionItemId } from "@/content/home";

export const problemSolutionIcons: Record<ProblemSolutionItemId, LucideIcon> = {
  manualRepetitive: Repeat,
  disconnectedTools: Link2,
  disorganizedCustomer: Users,
  hardToScale: TrendingUp,
  digitalExperiences: Rocket,
  lackOfVisibility: BarChart3,
};
