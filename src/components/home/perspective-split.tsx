import { getTranslations } from "next-intl/server";
import { homeSections } from "@/content/home";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export async function PerspectiveSplit() {
  const tProjects = await getTranslations("ProjectsExperience");
  const tWhy = await getTranslations("WhyJera");

  return (
    <section
      id={homeSections.perspective}
      className="section-surface section-surface-navy relative"
      aria-labelledby="perspective-heading"
    >
      <Container className="py-[var(--section-y)]">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <Reveal>
            <SectionHeading
              id="perspective-heading"
              as="h2"
              title={tProjects("title")}
              description={tProjects("description")}
            />
            <p className="mt-5 text-pretty text-sm leading-relaxed text-soft-gray/85 sm:text-base">
              {tProjects("body")}
            </p>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-soft-gray/85 sm:text-base">
              {tProjects("closing")}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeading as="h2" title={tWhy("title")} />
            <p className="mt-5 text-pretty text-base leading-relaxed text-ivory-white/90 sm:text-lg">
              {tWhy("lead")}
            </p>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-soft-gray/85 sm:text-base">
              {tWhy("body")}
            </p>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-soft-gray/85 sm:text-base">
              {tWhy("closing")}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
