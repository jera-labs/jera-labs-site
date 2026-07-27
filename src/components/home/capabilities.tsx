import { getTranslations } from "next-intl/server";
import {
  capabilityModuleIds,
  homeSections,
  type CapabilityModuleId,
} from "@/content/home";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

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

        <Reveal delay={0.08}>
          <ul className="mt-10 grid list-none grid-cols-1 gap-x-8 gap-y-0 p-0 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {capabilityModuleIds.map((id: CapabilityModuleId) => (
              <li
                key={id}
                className="border-t border-soft-gray/10 py-4 text-base text-ivory-white sm:py-5 sm:text-lg"
              >
                {t(`modules.${id}`)}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
