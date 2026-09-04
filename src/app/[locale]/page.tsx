import { setRequestLocale } from "next-intl/server";
import { Capabilities } from "@/components/home/capabilities";
import { ExperienceStats } from "@/components/home/experience-stats";
import { FinalCta } from "@/components/home/final-cta";
import { FoundersPreview } from "@/components/home/founders-preview";
import { Hero } from "@/components/home/hero";
import { PerspectiveSplit } from "@/components/home/perspective-split";
import { ProblemSolutions } from "@/components/home/problem-solutions";
import { SystemProblem } from "@/components/home/system-problem";
import { ThinkingProcess } from "@/components/home/thinking-process";
import { createPageMetadata } from "@/lib/metadata";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HomePageProps) {
  const { locale } = await params;
  return createPageMetadata("home", locale);
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <SystemProblem />
      <ProblemSolutions />
      <Capabilities />
      <ExperienceStats />
      <ThinkingProcess />
      <PerspectiveSplit />
      <FoundersPreview />
      <FinalCta />
    </>
  );
}
