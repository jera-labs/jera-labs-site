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
  repetitiveOps: Repeat,
  disconnectedSystems: Link2,
  messyCommercial: Users,
  ideasToValidate: Rocket,
  hardToUseInfo: BarChart3,
  opsLimitedGrowth: TrendingUp,
};
