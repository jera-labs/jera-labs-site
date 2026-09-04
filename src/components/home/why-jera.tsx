import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export async function WhyJera() {
  const t = await getTranslations("WhyJera");

  return (
    <section
      id="why-jera"
      className="section-surface section-surface-warm relative"
      aria-labelledby="why-jera-heading"
    >
      <Container className="py-[var(--section-y)]">
        <Reveal className="mx-auto max-w-4xl text-center">
          <SectionHeading
            id="why-jera-heading"
            as="h2"
            align="center"
            title={t("title")}
            className="mx-auto"
          />
          <p className="mt-5 text-pretty text-base leading-relaxed text-ivory-white/90 sm:mt-6 sm:text-lg">
            {t("lead")}
          </p>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-soft-gray/85 sm:text-base">
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
