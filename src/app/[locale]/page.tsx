import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/hero";
import { ProblemSolutions } from "@/components/home/problem-solutions";
import { SystemProblem } from "@/components/home/system-problem";
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
    </>
  );
}
