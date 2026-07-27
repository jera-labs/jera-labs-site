export const homeSections = {
  hero: "hero",
  systemProblem: "system-problem",
  problemSolutions: "problem-solutions",
} as const;

export const systemProblemItemIds = [
  "manualProcesses",
  "disconnectedTools",
  "scatteredInfo",
  "unvalidatedIdeas",
] as const;

export type SystemProblemItemId = (typeof systemProblemItemIds)[number];

export const problemSolutionItemIds = [
  "repetitiveOps",
  "disconnectedSystems",
  "messyCommercial",
  "ideasToValidate",
  "hardToUseInfo",
  "opsLimitedGrowth",
] as const;

export type ProblemSolutionItemId = (typeof problemSolutionItemIds)[number];
