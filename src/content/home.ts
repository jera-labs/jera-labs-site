export const homeSections = {
  hero: "hero",
  systemProblem: "system-problem",
  problemSolutions: "problem-solutions",
  capabilities: "capabilities",
  experienceStats: "experience-stats",
  thinkingProcess: "thinking-process",
  projectsExperience: "projects-experience",
  whyJera: "why-jera",
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
  "manualRepetitive",
  "disconnectedTools",
  "disorganizedCustomer",
  "hardToScale",
  "digitalExperiences",
  "lackOfVisibility",
] as const;

export type ProblemSolutionItemId = (typeof problemSolutionItemIds)[number];

export const thinkingProcessStepIds = [
  "diagnosis",
  "proposal",
  "implementation",
  "testing",
  "deliverySupport",
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

export const experienceStatIds = [
  "projects",
  "years",
  "areas",
] as const;

export type ExperienceStatId = (typeof experienceStatIds)[number];
