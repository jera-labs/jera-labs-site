export const homeSections = {
  hero: "hero",
  systemProblem: "system-problem",
  problemSolutions: "problem-solutions",
  thinkingProcess: "thinking-process",
  capabilities: "capabilities",
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

export const capabilityModuleIds = [
  "landingPages",
  "institutionalSites",
  "webApps",
  "mvps",
  "dashboards",
  "internalSystems",
  "crmCommercial",
  "automations",
  "integrations",
  "appliedAi",
] as const;

export type CapabilityModuleId = (typeof capabilityModuleIds)[number];
