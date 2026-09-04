import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { founderIds, founderPhotos } from "@/content/home";
import { Container } from "@/components/layout/container";
import { PageCta } from "@/components/shared/page-cta";
import { SectionHeading } from "@/components/shared/section-heading";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return createPageMetadata("about", locale);
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tFounders = await getTranslations("FoundersPreview");
  const tMeaning = await getTranslations("JeraMeaning");
  const tWhy = await getTranslations("WhyJera");
  const tCta = await getTranslations("FinalCta");
  const tPage = await getTranslations("InternalPages");

  return (
    <Container className="py-[var(--section-y)]">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          as="h1"
          align="center"
          title={tFounders("title")}
          description={tFounders("description")}
          className="mx-auto"
        />
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-soft-gray/85 sm:text-base">
          {tFounders("bridge")}
        </p>
      </div>

      <ul className="mt-10 grid list-none grid-cols-1 gap-6 p-0 sm:mt-12 md:grid-cols-2 md:gap-8">
        {founderIds.map((id) => {
          const name = tFounders(`founders.${id}.name`);
          return (
            <li key={id}>
              <article className="flex h-full gap-4 border-t border-soft-gray/10 pt-5 sm:gap-5 sm:pt-6">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden border border-soft-gray/15 sm:h-20 sm:w-20">
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
                    {tFounders(`founders.${id}.role`)}
                  </p>
                  <p className="mt-2 text-sm text-soft-gray/90">
                    {tFounders(`founders.${id}.focus`)}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-soft-gray/80 sm:text-base">
                    {tFounders(`founders.${id}.body`)}
                  </p>
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      <div className="mx-auto mt-14 max-w-3xl border-t border-soft-gray/10 pt-10 text-center sm:mt-16 sm:pt-12">
        <SectionHeading
          as="h2"
          align="center"
          title={tWhy("title")}
          className="mx-auto"
        />
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ivory-white/90 sm:text-lg">
          {tWhy("lead")}
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-soft-gray/85 sm:text-base">
          {tWhy("body")}
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-soft-gray/85 sm:text-base">
          {tWhy("closing")}
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-3xl border-t border-soft-gray/10 pt-10 text-center sm:mt-16 sm:pt-12">
        <div className="relative mx-auto mb-6 h-14 w-14 sm:h-16 sm:w-16">
          <Image
            src="/brand/jera-mark.png"
            alt=""
            fill
            className="object-contain opacity-90"
            sizes="64px"
          />
        </div>
        <SectionHeading
          as="h2"
          align="center"
          title={tMeaning("title")}
          description={tMeaning("description")}
          className="mx-auto"
        />
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-soft-gray/85 sm:text-base">
          {tMeaning("closing")}
        </p>
        <p className="mx-auto mt-6 max-w-xl text-sm text-soft-gray/75">
          {tPage("aboutClosing")}
        </p>
      </div>

      <PageCta
        title={tCta("title")}
        description={tPage("ctaSupport")}
        ctaLabel={tCta("alejandro.cta")}
      />
    </Container>
  );
}
