export const homeSections = {
  hero: "hero",
  systemProblem: "system-problem",
  problemSolutions: "problem-solutions",
  thinkingProcess: "thinking-process",
  capabilities: "capabilities",
  foundersPreview: "founders",
  jeraMeaning: "jera-meaning",
  finalCta: "final-cta",
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

export const thinkingProcessStepIds = [
  "understand",
  "analyze",
  "design",
  "build",
  "evolve",
] as const;

export type ThinkingProcessStepId = (typeof thinkingProcessStepIds)[number];

export const capabilityCategoryIds = [
  "development",
  "automation",
  "integration",
  "appliedAi",
] as const;

export type CapabilityCategoryId = (typeof capabilityCategoryIds)[number];

export const founderIds = ["alejandro", "karla"] as const;

export type FounderId = (typeof founderIds)[number];
