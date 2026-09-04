import { getTranslations } from "next-intl/server";
import { homeSections } from "@/content/home";
import { Container } from "@/components/layout/container";
import { PrimaryButton } from "@/components/shared/primary-button";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { getWhatsAppUrl } from "@/lib/constants";

export async function FinalCta() {
  const t = await getTranslations("FinalCta");
  const tNav = await getTranslations("Navigation");
  const tWhatsApp = await getTranslations("WhatsApp");

  return (
    <section
      id={homeSections.finalCta}
      className="section-surface section-surface-deep relative"
      aria-labelledby="final-cta-heading"
    >
      <Container className="py-[var(--section-y)]">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <SectionHeading
            id="final-cta-heading"
            as="h2"
            align="center"
            title={t("title")}
            description={t("description")}
            className="mx-auto"
          />

          <div className="mt-8 sm:mt-10">
            <PrimaryButton
              href={getWhatsAppUrl(
                "alejandro",
                tWhatsApp("prefillAlejandro"),
              )}
              external
            >
              {tNav("cta")}
            </PrimaryButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
