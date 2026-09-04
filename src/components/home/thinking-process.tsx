import { getTranslations } from "next-intl/server";
import {
  homeSections,
  thinkingProcessStepIds,
  type ThinkingProcessStepId,
} from "@/content/home";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export async function ThinkingProcess() {
  const t = await getTranslations("ThinkingProcess");

  return (
    <section
      id={homeSections.thinkingProcess}
      className="section-surface section-surface-base relative"
      aria-labelledby="thinking-process-heading"
    >
      <Container className="py-[var(--section-y)]">
        <Reveal className="mx-auto max-w-3xl">
          <SectionHeading
            id="thinking-process-heading"
            as="h2"
            align="center"
            title={t("title")}
            description={t("description")}
            className="mx-auto"
          />
        </Reveal>

        <ol className="mx-auto mt-10 max-w-3xl list-none space-y-0 p-0 sm:mt-12">
          {thinkingProcessStepIds.map(
            (id: ThinkingProcessStepId, index) => {
              const label = String(index + 1).padStart(2, "0");
              const isLast = index === thinkingProcessStepIds.length - 1;

              return (
                <li key={id}>
                  <Reveal delay={0.04 * (index + 1)}>
                    <div className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6">
                      <div className="relative flex flex-col items-center">
                        <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-control)] border border-tech-teal/40 bg-deep-graphite font-display text-xs font-medium tabular-nums text-tech-teal sm:h-11 sm:w-11 sm:text-sm">
                          {label}
                        </span>
                        {!isLast ? (
                          <span
                            aria-hidden
                            className="mt-1 w-px flex-1 bg-soft-gray/20"
                          />
                        ) : null}
                      </div>
                      <div className={isLast ? "pb-0" : "pb-8 sm:pb-10"}>
                        <h3 className="font-display text-lg font-semibold tracking-tight text-ivory-white sm:text-xl">
                          {t(`steps.${id}.title`)}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-soft-gray/80 sm:text-base">
                          {t(`steps.${id}.body`)}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            },
          )}
        </ol>
      </Container>
    </section>
  );
}
