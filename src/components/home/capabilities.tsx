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

export async function Capabilities() {
  const t = await getTranslations("Capabilities");

  return (
    <section
      id={homeSections.capabilities}
      className="relative border-b border-soft-gray/10"
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

        <ul className="mt-10 grid list-none grid-cols-1 gap-3 p-0 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {capabilityCategoryIds.map((id, index) => {
            const Icon = categoryIcons[id];
            return (
              <li key={id} className="min-w-0">
                <Reveal delay={0.04 * (index + 1)} className="h-full">
                  <article className="group flex h-full flex-col gap-4 border border-soft-gray/10 bg-ocean-navy/20 p-5 transition-colors duration-300 hover:border-tech-teal/30 hover:bg-ocean-navy/35 sm:p-6 motion-reduce:transition-none">
                    <Icon
                      className="h-5 w-5 text-tech-teal"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ivory-white">
                      {t(`categories.${id}.title`)}
                    </h3>
                    <p className="text-sm leading-relaxed text-soft-gray/80">
                      {t(`categories.${id}.body`)}
                    </p>
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
