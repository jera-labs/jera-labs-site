import { getTranslations } from "next-intl/server";
import { homeSections } from "@/content/home";
import { Container } from "@/components/layout/container";
import { PrimaryButton } from "@/components/shared/primary-button";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export async function FinalCta() {
  const t = await getTranslations("FinalCta");

  return (
    <section
      id={homeSections.finalCta}
      className="relative border-b border-soft-gray/10"
      aria-labelledby="final-cta-heading"
    >
      <Container className="py-[var(--section-y)]">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <SectionHeading
            id="final-cta-heading"
            as="h2"
            align="center"
            title={t("title")}
            description={t("description")}
            className="mx-auto"
          />
          <div className="mt-8">
            <PrimaryButton href="/contact">{t("cta")}</PrimaryButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
