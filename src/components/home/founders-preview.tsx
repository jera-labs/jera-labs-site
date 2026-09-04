import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { founderIds, founderPhotos, homeSections } from "@/content/home";
import { Container } from "@/components/layout/container";
import { PrimaryButton } from "@/components/shared/primary-button";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { getWhatsAppUrl, siteConfig } from "@/lib/constants";

export async function FoundersPreview() {
  const t = await getTranslations("FoundersPreview");
  const tCta = await getTranslations("FinalCta");
  const tWhatsApp = await getTranslations("WhatsApp");
  const tMeaning = await getTranslations("JeraMeaning");

  return (
    <section
      id={homeSections.foundersPreview}
      className="section-surface section-surface-base relative"
      aria-labelledby="founders-heading"
    >
      <Container className="py-[var(--section-y)]">
        <Reveal className="mx-auto max-w-3xl">
          <SectionHeading
            id="founders-heading"
            as="h2"
            align="center"
            title={t("title")}
            description={t("description")}
            className="mx-auto"
          />
        </Reveal>

        <Reveal delay={0.06} className="mx-auto mt-6 max-w-2xl text-center sm:mt-8">
          <p className="text-sm leading-relaxed text-soft-gray/85 sm:text-base">
            {t("bridge")}
          </p>
        </Reveal>

        <ul className="mt-10 grid list-none grid-cols-1 gap-6 p-0 sm:mt-12 md:grid-cols-2 md:gap-8">
          {founderIds.map((id, index) => {
            const person = id;
            const prefill =
              id === "karla"
                ? tWhatsApp("prefillKarla")
                : tWhatsApp("prefillAlejandro");
            const cta =
              id === "karla" ? tCta("karla.cta") : tCta("alejandro.cta");
            const name = t(`founders.${id}.name`);

            return (
              <li key={id}>
                <Reveal delay={0.05 * (index + 1)} className="h-full">
                  <article className="surface-card hover-lift flex h-full flex-col bg-ocean-navy/15 p-5 hover:border-tech-teal/25 sm:p-6">
                    <div className="flex gap-4 sm:gap-5">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-soft-gray/15 sm:h-20 sm:w-20">
                        <Image
                          src={founderPhotos[id]}
                          alt={name}
                          fill
                          className="object-cover object-top"
                          sizes="80px"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-display text-xl font-semibold tracking-tight text-ivory-white">
                          {name}
                        </p>
                        <p className="mt-1 text-sm font-medium text-tech-teal">
                          {t(`founders.${id}.role`)}
                        </p>
                        <p className="mt-2 text-sm text-soft-gray/90">
                          {t(`founders.${id}.focus`)}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-soft-gray/80 sm:text-base">
                          {t(`founders.${id}.body`)}
                        </p>
                        <p className="mt-2 text-xs text-soft-gray/60">
                          {siteConfig.whatsapp[person].display}
                        </p>
                      </div>
                    </div>
                    <div className="mt-5">
                      <PrimaryButton
                        href={getWhatsAppUrl(person, prefill)}
                        external
                        className="w-full sm:w-auto"
                      >
                        {cta}
                      </PrimaryButton>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal delay={0.14} className="mx-auto mt-10 max-w-2xl sm:mt-14">
          <div className="surface-card hover-lift flex flex-col items-center bg-ocean-navy/20 px-6 py-8 text-center hover:border-tech-teal/20 sm:px-8 sm:py-10">
            <SectionHeading
              as="h3"
              align="center"
              title={tMeaning("title")}
              description={tMeaning("description")}
              className="mx-auto"
            />
            <p className="mt-4 max-w-lg text-pretty text-sm leading-relaxed text-soft-gray/85 sm:text-base">
              {tMeaning("closing")}
            </p>
            <div className="relative mx-auto mt-6 h-24 w-24 sm:mt-7 sm:h-28 sm:w-28">
              <Image
                src="/brand/jera-mark.png"
                alt=""
                fill
                className="object-contain opacity-90"
                sizes="112px"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
