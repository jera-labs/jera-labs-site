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

        <ol className="mx-auto mt-10 max-w-3xl list-none p-0 sm:mt-12 lg:mt-14">
          {thinkingProcessStepIds.map(
            (id: ThinkingProcessStepId, index) => (
              <li key={id}>
                <Reveal delay={0.04 * (index + 1)}>
                  <ProcessStep
                    index={index + 1}
                    title={t(`steps.${id}.title`)}
                    body={t(`steps.${id}.body`)}
                    isLast={index === thinkingProcessStepIds.length - 1}
                  />
                </Reveal>
              </li>
            ),
          )}
        </ol>
      </Container>
    </section>
  );
}
