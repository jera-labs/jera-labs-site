import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  problemSolutionItemIds,
  type ProblemSolutionItemId,
} from "@/content/home";
import { problemSolutionIcons } from "@/content/solution-icons";
import { Container } from "@/components/layout/container";
import { PageCta } from "@/components/shared/page-cta";
import { SectionHeading } from "@/components/shared/section-heading";
import { SolutionCard } from "@/components/shared/solution-card";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return createPageMetadata("whatWeSolve", locale);
}

export default async function WhatWeSolvePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ProblemSolutions");
  const tCta = await getTranslations("FinalCta");
  const tPage = await getTranslations("InternalPages");

  return (
    <Container className="py-[var(--section-y)]">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          as="h1"
          align="center"
          title={t("title")}
          description={t("description")}
          className="mx-auto"
        />
      </div>

      <ul className="mt-10 grid list-none grid-cols-1 gap-3 p-0 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
        {problemSolutionItemIds.map((id: ProblemSolutionItemId) => (
          <li key={id} className="min-w-0">
            <SolutionCard
              icon={problemSolutionIcons[id]}
              body={t(`items.${id}.body`)}
            />
          </li>
        ))}
      </ul>

      <PageCta
        title={tCta("title")}
        description={tPage("ctaSupport")}
        ctaLabel={tCta("cta")}
      />
    </Container>
  );
}
