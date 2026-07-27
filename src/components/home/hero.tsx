import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/container";
import { GridBackground } from "@/components/graphics/grid-background";
import { JeraSystemGraphic } from "@/components/graphics/jera-system-graphic";
import { Eyebrow } from "@/components/shared/eyebrow";
import { PrimaryButton } from "@/components/shared/primary-button";
import { SecondaryButton } from "@/components/shared/secondary-button";
import { Reveal } from "@/components/shared/reveal";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className="relative overflow-hidden border-b border-soft-gray/10">
      <GridBackground />
      <Container className="relative grid items-center gap-10 py-[var(--section-y)] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-8 xl:gap-12">
        <Reveal className="relative min-w-0">
          {/* Mobile: logo as text backdrop */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center lg:hidden"
          >
            <div className="relative aspect-square w-[min(78vw,19rem)] opacity-[0.22]">
              <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_center,rgba(46,199,201,0.28)_0%,transparent_68%)]" />
              <Image
                src="/brand/jera-mark.png"
                alt=""
                fill
                className="object-contain object-center"
                sizes="(max-width: 1023px) 78vw, 0px"
                priority
              />
            </div>
          </div>

          <div className="relative z-10 space-y-5 sm:space-y-6 lg:space-y-7">
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h1 className="text-balance font-display text-[1.75rem] font-semibold leading-[1.2] tracking-tight text-ivory-white sm:text-4xl sm:leading-[1.15] lg:text-[2.75rem] xl:text-5xl xl:leading-[1.12]">
              {t("title")}
            </h1>
            <p className="text-pretty max-w-xl text-[0.95rem] leading-relaxed text-soft-gray/90 sm:text-base lg:text-lg">
              {t("description")}
            </p>
            <div className="flex w-full max-w-md flex-col gap-3 pt-1 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center">
              <PrimaryButton href="/contact" className="w-full sm:w-auto">
                {t("primaryCta")}
              </PrimaryButton>
              <SecondaryButton href="/how-we-work" className="w-full sm:w-auto">
                {t("secondaryCta")}
              </SecondaryButton>
            </div>
          </div>
        </Reveal>

        {/* Desktop: logo as side graphic */}
        <Reveal
          delay={0.1}
          className="hidden justify-end lg:flex"
        >
          <JeraSystemGraphic />
        </Reveal>
      </Container>
    </section>
  );
}
