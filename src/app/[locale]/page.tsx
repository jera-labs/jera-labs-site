import { setRequestLocale } from "next-intl/server";
import { Capabilities } from "@/components/home/capabilities";
import { FinalCta } from "@/components/home/final-cta";
import { FoundersPreview } from "@/components/home/founders-preview";
import { Hero } from "@/components/home/hero";
import { JeraMeaning } from "@/components/home/jera-meaning";
import { ProblemSolutions } from "@/components/home/problem-solutions";
import { SystemProblem } from "@/components/home/system-problem";
import { ThinkingProcess } from "@/components/home/thinking-process";
import { createPageMetadata } from "@/lib/metadata";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HomePageProps) {
  await params;
  return createPageMetadata("home");
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <SystemProblem />
      <ProblemSolutions />
      <ThinkingProcess />
      <Capabilities />
      <FoundersPreview />
      <JeraMeaning />
      <FinalCta />
    </>
  );
}
