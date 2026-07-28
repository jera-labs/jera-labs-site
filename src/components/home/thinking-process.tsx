import { getTranslations } from "next-intl/server";
import {
  homeSections,
  thinkingProcessStepIds,
  type ThinkingProcessStepId,
} from "@/content/home";
import { Container } from "@/components/layout/container";
import { ProcessStep } from "@/components/shared/process-step";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export async function ThinkingProcess() {
  const t = await getTranslations("ThinkingProcess");

  return (
    <section
      id={homeSections.thinkingProcess}
      className="relative border-b border-soft-gray/10"
      aria-labelledby="thinking-process-heading"
    >
      <Container className="py-[var(--section-y)]">
        <Reveal className="mx-auto max-w-3xl">
          <SectionHeading
            id="thinking-process-heading"
            as="h2"
            align="center"
            title={t("title")}
            className="mx-auto"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <ol className="mt-10 flex list-none flex-col p-0 sm:mt-12 md:mt-14 md:flex-row md:items-start md:gap-0">
            {thinkingProcessStepIds.map(
              (id: ThinkingProcessStepId, index) => (
                <li key={id} className="md:flex md:min-w-0 md:flex-1">
                  <ProcessStep
                    index={index + 1}
                    title={t(`steps.${id}.title`)}
                    body={t(`steps.${id}.body`)}
                    isLast={index === thinkingProcessStepIds.length - 1}
                  />
                </li>
              ),
            )}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
