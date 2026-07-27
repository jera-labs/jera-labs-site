import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { homeSections } from "@/content/home";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export async function JeraMeaning() {
  const t = await getTranslations("JeraMeaning");

  return (
    <section
      id={homeSections.jeraMeaning}
      className="relative overflow-hidden border-b border-soft-gray/10 bg-ocean-navy/30"
      aria-labelledby="jera-meaning-heading"
    >
      <Container className="relative py-[var(--section-y)]">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="relative mb-8 h-16 w-16 sm:mb-10 sm:h-20 sm:w-20">
            <Image
              src="/brand/jera-mark.png"
              alt=""
              fill
              className="object-contain opacity-90"
              sizes="80px"
            />
          </div>
          <SectionHeading
            id="jera-meaning-heading"
            as="h2"
            align="center"
            title={t("title")}
            description={t("description")}
            className="mx-auto"
          />
        </Reveal>
      </Container>
    </section>
  );
}
