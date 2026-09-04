import { getTranslations } from "next-intl/server";
import { founderIds, homeSections } from "@/content/home";
import { Container } from "@/components/layout/container";
import { PrimaryButton } from "@/components/shared/primary-button";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const founderInitials = {
  alejandro: "AL",
  karla: "KV",
} as const;

export async function FoundersPreview() {
  const t = await getTranslations("FoundersPreview");

  return (
    <section
      id={homeSections.foundersPreview}
      className="section-surface section-surface-navy relative"
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
          {founderIds.map((id, index) => (
            <li key={id}>
              <Reveal delay={0.05 * (index + 1)}>
                <article className="flex h-full gap-4 border-t border-soft-gray/10 pt-5 sm:gap-5 sm:pt-6">
                  <span
                    aria-hidden
                    className="flex h-12 w-12 shrink-0 items-center justify-center border border-tech-teal/30 font-display text-sm font-semibold tracking-wide text-tech-teal"
                  >
                    {founderInitials[id]}
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-xl font-semibold tracking-tight text-ivory-white">
                      {t(`founders.${id}.name`)}
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
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={0.16} className="mt-8 flex justify-center sm:mt-10">
          <PrimaryButton href="/about">{t("cta")}</PrimaryButton>
        </Reveal>
      </Container>
    </section>
  );
}
