import { getTranslations } from "next-intl/server";
import {
  capabilityCategoryIds,
  homeSections,
  type CapabilityCategoryId,
} from "@/content/home";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

function splitItems(items: string) {
  return items
    .split("·")
    .map((item) => item.trim())
    .filter(Boolean);
}

export async function Capabilities() {
  const t = await getTranslations("Capabilities");

  return (
    <section
      id={homeSections.capabilities}
      className="section-surface section-surface-navy relative"
      aria-labelledby="capabilities-heading"
    >
      <Container className="py-[var(--section-y)]">
        <Reveal className="mx-auto max-w-3xl">
          <SectionHeading
            id="capabilities-heading"
            as="h2"
            align="center"
            title={t("title")}
            description={t("description")}
            className="mx-auto"
          />
        </Reveal>

        <ul className="mt-10 list-none border-y border-soft-gray/15 p-0 sm:mt-12 lg:mt-14 lg:grid lg:grid-cols-4 lg:divide-x lg:divide-soft-gray/15">
          {capabilityCategoryIds.map((id: CapabilityCategoryId, index) => {
            const items = splitItems(t(`categories.${id}.items`));
            const label = String(index + 1).padStart(2, "0");

            return (
              <li
                key={id}
                className="min-w-0 border-b border-soft-gray/15 last:border-b-0 lg:border-b-0"
              >
                <Reveal delay={0.04 * (index + 1)} className="h-full">
                  <article className="flex h-full flex-col px-0 py-8 sm:px-1 sm:py-9 lg:px-5 lg:py-10 xl:px-6">
                    <p className="font-display text-sm font-medium tabular-nums text-tech-teal">
                      {label}
                    </p>
                    <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-ivory-white sm:text-2xl">
                      {t(`categories.${id}.title`)}
                    </h3>
                    <p className="mt-3 text-pretty text-sm leading-relaxed text-soft-gray/80 sm:text-[0.95rem]">
                      {t(`categories.${id}.body`)}
                    </p>
                    <ul className="mt-5 flex list-none flex-wrap gap-2 p-0 sm:mt-6">
                      {items.map((item) => (
                        <li key={item} className="chip-tag">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
