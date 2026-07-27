import { getTranslations } from "next-intl/server";
import {
  homeSections,
  problemSolutionItemIds,
  type ProblemSolutionItemId,
} from "@/content/home";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SolutionCard } from "@/components/shared/solution-card";

export async function ProblemSolutions() {
  const t = await getTranslations("ProblemSolutions");

  return (
    <section
      id={homeSections.problemSolutions}
      className="relative border-b border-soft-gray/10"
      aria-labelledby="problem-solutions-heading"
    >
      <Container className="py-[var(--section-y)]">
        <Reveal className="mx-auto max-w-3xl">
          <SectionHeading
            id="problem-solutions-heading"
            as="h2"
            align="center"
            title={t("title")}
            description={t("description")}
            className="mx-auto"
          />
        </Reveal>

        <ul className="mt-10 grid list-none grid-cols-1 gap-8 p-0 sm:mt-12 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:mt-14 lg:gap-x-10">
          {problemSolutionItemIds.map(
            (id: ProblemSolutionItemId, index) => (
              <li key={id} className="min-w-0">
                <Reveal delay={0.04 * (index + 1)} className="h-full">
                  <SolutionCard
                    index={index + 1}
                    title={t(`items.${id}.title`)}
                    body={t(`items.${id}.body`)}
                  />
                </Reveal>
              </li>
            ),
          )}
        </ul>
      </Container>
    </section>
  );
}
