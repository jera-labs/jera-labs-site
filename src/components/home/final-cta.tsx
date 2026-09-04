import { getTranslations } from "next-intl/server";
import { homeSections } from "@/content/home";
import { Container } from "@/components/layout/container";
import { PrimaryButton } from "@/components/shared/primary-button";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { getWhatsAppUrl, siteConfig } from "@/lib/constants";

export async function FinalCta() {
  const t = await getTranslations("FinalCta");
  const tWhatsApp = await getTranslations("WhatsApp");

  return (
    <section
      id={homeSections.finalCta}
      className="section-surface section-surface-glow relative"
      aria-labelledby="final-cta-heading"
    >
      <Container className="py-[var(--section-y)]">
        <Reveal className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <SectionHeading
            id="final-cta-heading"
            as="h2"
            align="center"
            title={t("title")}
            description={t("description")}
            className="mx-auto max-w-3xl"
          />

          <ul className="mt-10 grid w-full list-none grid-cols-1 gap-4 p-0 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            <li>
              <article className="flex h-full flex-col items-center border border-soft-gray/10 bg-ocean-navy/20 px-5 py-6 text-center sm:px-6 sm:py-7">
                <p className="text-sm text-soft-gray/80">{t("karla.focus")}</p>
                <p className="mt-2 font-display text-lg font-semibold text-ivory-white">
                  Karla
                </p>
                <p className="mt-1 text-xs text-soft-gray/70">
                  {siteConfig.whatsapp.karla.display}
                </p>
                <div className="mt-5">
                  <PrimaryButton
                    href={getWhatsAppUrl("karla", tWhatsApp("prefillKarla"))}
                    external
                  >
                    {t("karla.cta")}
                  </PrimaryButton>
                </div>
              </article>
            </li>
            <li>
              <article className="flex h-full flex-col items-center border border-soft-gray/10 bg-ocean-navy/20 px-5 py-6 text-center sm:px-6 sm:py-7">
                <p className="text-sm text-soft-gray/80">
                  {t("alejandro.focus")}
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-ivory-white">
                  Alejandro
                </p>
                <p className="mt-1 text-xs text-soft-gray/70">
                  {siteConfig.whatsapp.alejandro.display}
                </p>
                <div className="mt-5">
                  <PrimaryButton
                    href={getWhatsAppUrl(
                      "alejandro",
                      tWhatsApp("prefillAlejandro"),
                    )}
                    external
                  >
                    {t("alejandro.cta")}
                  </PrimaryButton>
                </div>
              </article>
            </li>
          </ul>

          <div className="mt-8 space-y-2 text-sm text-soft-gray/80">
            <p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-tech-teal transition-colors hover:text-ivory-white"
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="text-soft-gray/60">{siteConfig.domainLabel}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
