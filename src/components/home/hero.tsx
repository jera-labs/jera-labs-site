import { getTranslations } from "next-intl/server";
import { homeSections } from "@/content/home";
import { Container } from "@/components/layout/container";
import { GridBackground } from "@/components/graphics/grid-background";
import { JeraSystemGraphic } from "@/components/graphics/jera-system-graphic";
import { Eyebrow } from "@/components/shared/eyebrow";
import { PrimaryButton } from "@/components/shared/primary-button";
import { Reveal } from "@/components/shared/reveal";
import { SectionAnchor } from "@/components/shared/section-anchor";
import { getWhatsAppUrl } from "@/lib/constants";

export async function Hero() {
  const t = await getTranslations("Hero");
  const tWhatsApp = await getTranslations("WhatsApp");

  return (
    <section
      id={homeSections.hero}
      className="section-surface section-surface-base relative overflow-hidden"
    >
      <GridBackground />
      <Container className="relative grid items-center gap-10 py-[var(--section-y)] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-8 xl:gap-12">
        <div className="relative min-w-0">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center lg:hidden"
          >
            <JeraSystemGraphic
              ambient
              className="w-[min(78vw,19rem)] max-w-none opacity-[0.28]"
            />
          </div>

          <div className="relative z-10 space-y-5 sm:space-y-6 lg:space-y-7">
            <Reveal>
              <Eyebrow>{t("eyebrow")}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-balance font-display text-[1.75rem] font-semibold leading-[1.2] tracking-tight text-ivory-white sm:text-4xl sm:leading-[1.15] lg:text-[2.75rem] xl:text-5xl xl:leading-[1.12]">
                {t("title")}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-tech-teal sm:text-xs sm:tracking-[0.16em]">
                {t("pillars")}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-pretty max-w-xl text-[0.95rem] leading-relaxed text-soft-gray/90 sm:text-base lg:text-lg">
                {t("description")}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="flex w-full max-w-md flex-col gap-3 pt-1 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center">
                <PrimaryButton
                  href={getWhatsAppUrl(
                    "alejandro",
                    tWhatsApp("prefillAlejandro"),
                  )}
                  external
                  className="w-full sm:w-auto"
                >
                  {t("primaryCta")}
                </PrimaryButton>
                <SectionAnchor
                  hash={homeSections.thinkingProcess}
                  className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-[var(--radius-control)] border border-tech-teal/70 bg-transparent px-5 py-2.5 text-sm font-medium text-tech-teal transition-colors duration-200 hover:border-tech-teal hover:bg-tech-teal/10 sm:w-auto"
                >
                  {t("secondaryCta")}
                </SectionAnchor>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.12} className="hidden justify-end lg:flex">
          <JeraSystemGraphic />
        </Reveal>
      </Container>
    </section>
  );
}
