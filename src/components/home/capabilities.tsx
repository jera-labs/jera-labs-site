import { Code2, Link2, Sparkles, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import {
  capabilityCategoryIds,
  homeSections,
  type CapabilityCategoryId,
} from "@/content/home";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const categoryIcons: Record<CapabilityCategoryId, LucideIcon> = {
  development: Code2,
  automation: Workflow,
  integration: Link2,
  appliedAi: Sparkles,
};

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

        <ul className="mt-10 grid list-none grid-cols-1 gap-4 p-0 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:gap-6">
          {capabilityCategoryIds.map((id, index) => {
            const Icon = categoryIcons[id];
            const items = splitItems(t(`categories.${id}.items`));

            return (
              <li key={id} className="min-w-0">
                <Reveal delay={0.04 * (index + 1)} className="h-full">
                  <article className="group flex h-full min-h-[14rem] flex-col gap-4 border border-soft-gray/10 bg-ocean-navy/20 p-6 transition-colors duration-300 hover:border-tech-teal/30 hover:bg-ocean-navy/35 sm:min-h-[16rem] sm:p-7 lg:p-8 motion-reduce:transition-none">
                    <Icon
                      className="h-6 w-6 text-tech-teal"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <h3 className="font-display text-xl font-semibold tracking-tight text-ivory-white sm:text-2xl">
                      {t(`categories.${id}.title`)}
                    </h3>
                    <p className="text-pretty text-sm leading-relaxed text-soft-gray/80 sm:text-base">
                      {t(`categories.${id}.body`)}
                    </p>
                    <ul className="mt-auto flex list-none flex-wrap gap-2 p-0 pt-2">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="border border-tech-teal/25 px-2.5 py-1 text-xs leading-snug text-tech-teal sm:text-[0.8rem]"
                        >
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
