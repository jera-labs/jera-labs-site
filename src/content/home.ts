export const homeSections = {
  hero: "hero",
  systemProblem: "system-problem",
} as const;

export const systemProblemItemIds = [
  "manualProcesses",
  "disconnectedTools",
  "scatteredInfo",
  "unvalidatedIdeas",
] as const;

export type SystemProblemItemId = (typeof systemProblemItemIds)[number];
