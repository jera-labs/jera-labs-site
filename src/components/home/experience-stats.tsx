import { getTranslations } from "next-intl/server";
import {
  experienceStatIds,
  homeSections,
  type ExperienceStatId,
} from "@/content/home";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export async function ExperienceStats() {
  const t = await getTranslations("ExperienceStats");

  return (
    <section
      id={homeSections.experienceStats}
      className="section-surface section-surface-navy relative"
      aria-labelledby="experience-stats-heading"
    >
      <Container className="py-[var(--section-y)]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionHeading
            id="experience-stats-heading"
            as="h2"
            align="center"
            title={t("title")}
            className="mx-auto"
          />
          <p className="mt-4 text-pretty text-sm leading-relaxed text-soft-gray/85 sm:text-base">
            {t("closing")}
          </p>
        </Reveal>

        <ul className="mx-auto mt-10 grid max-w-4xl list-none grid-cols-1 gap-4 p-0 sm:mt-12 sm:grid-cols-3 sm:gap-5">
          {experienceStatIds.map((id: ExperienceStatId, index) => (
            <li key={id} className="min-w-0">
              <Reveal delay={0.05 * (index + 1)} className="h-full">
                <article className="surface-card hover-lift flex h-full min-h-[7.5rem] flex-col justify-center bg-ocean-navy/20 px-5 py-6 text-center sm:min-h-[8rem] sm:px-6 sm:py-7">
                  <p
                    className={
                      id === "areas"
                        ? "text-balance font-display text-base font-semibold leading-snug tracking-tight text-tech-teal sm:text-lg"
                        : "font-display text-2xl font-semibold tracking-tight text-tech-teal sm:text-[1.65rem]"
                    }
                  >
                    {t(`stats.${id}.value`)}
                  </p>
                  <p className="mt-2 text-pretty text-xs leading-relaxed text-soft-gray/80 sm:text-sm">
                    {t(`stats.${id}.label`)}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
