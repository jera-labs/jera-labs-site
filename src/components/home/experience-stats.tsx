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
      className="section-surface section-surface-glow relative"
      aria-labelledby="experience-stats-heading"
    >
      <Container className="py-[var(--section-y)]">
        <Reveal className="mx-auto max-w-3xl">
          <SectionHeading
            id="experience-stats-heading"
            as="h2"
            align="center"
            title={t("title")}
            className="mx-auto"
          />
        </Reveal>

        <ul className="mt-10 grid w-full list-none grid-cols-1 gap-4 p-0 sm:mt-12 sm:grid-cols-3 sm:gap-5 lg:gap-6">
          {experienceStatIds.map((id: ExperienceStatId, index) => (
            <li key={id} className="min-w-0">
              <Reveal delay={0.05 * (index + 1)} className="h-full">
                <article className="flex h-full flex-col items-center justify-center border border-soft-gray/10 bg-ocean-navy/25 px-6 py-10 text-center backdrop-blur-[2px] sm:px-8 sm:py-12 lg:py-14">
                  <p className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-tech-teal sm:text-4xl">
                    {t(`stats.${id}.value`)}
                  </p>
                  <p className="mt-3 text-pretty text-sm leading-snug text-soft-gray/85 sm:mt-4 sm:text-base">
                    {t(`stats.${id}.label`)}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={0.2} className="mx-auto mt-10 max-w-3xl text-center sm:mt-12">
          <p className="text-pretty text-sm leading-relaxed text-soft-gray/85 sm:text-base">
            {t("closing")}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
