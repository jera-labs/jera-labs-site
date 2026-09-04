import { getTranslations } from "next-intl/server";
import { homeSections } from "@/content/home";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export async function ProjectsExperience() {
  const t = await getTranslations("ProjectsExperience");

  return (
    <section
      id={homeSections.projectsExperience}
      className="section-surface section-surface-base relative"
      aria-labelledby="projects-experience-heading"
    >
      <Container className="py-[var(--section-y)]">
        <Reveal className="mx-auto max-w-4xl text-center">
          <SectionHeading
            id="projects-experience-heading"
            as="h2"
            align="center"
            title={t("title")}
            description={t("description")}
            className="mx-auto"
          />
          <p className="mt-5 text-pretty text-sm leading-relaxed text-soft-gray/85 sm:mt-6 sm:text-base">
            {t("body")}
          </p>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-soft-gray/85 sm:text-base">
            {t("closing")}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
