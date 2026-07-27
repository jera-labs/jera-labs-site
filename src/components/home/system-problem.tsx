import { getTranslations } from "next-intl/server";
import {
  homeSections,
  systemProblemItemIds,
  type SystemProblemItemId,
} from "@/content/home";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { TransformationRow } from "@/components/shared/transformation-row";

export async function SystemProblem() {
  const t = await getTranslations("SystemProblem");

  return (
    <section
      id={homeSections.systemProblem}
      className="relative border-b border-soft-gray/10"
      aria-labelledby="system-problem-heading"
    >
      <Container className="py-[var(--section-y)]">
        <Reveal className="mx-auto max-w-3xl">
          <SectionHeading
            id="system-problem-heading"
            as="h2"
            align="center"
            title={t("title")}
            description={t("description")}
            className="mx-auto"
          />
        </Reveal>

        <ul className="mx-auto mt-10 w-full max-w-3xl list-none p-0 sm:mt-12">
          {systemProblemItemIds.map((id: SystemProblemItemId, index) => (
            <li key={id}>
              <Reveal delay={0.04 * (index + 1)}>
                <TransformationRow
                  index={index + 1}
                  from={t(`items.${id}.from`)}
                  to={t(`items.${id}.to`)}
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
