import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { founderIds } from "@/content/home";
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
      </div>

      <ul className="mt-10 grid list-none grid-cols-1 gap-6 p-0 sm:mt-12 md:grid-cols-2 md:gap-8">
        {founderIds.map((id) => {
          const initials = id === "alejandro" ? "AL" : "KA";
          return (
            <li key={id}>
              <article className="flex h-full gap-4 border-t border-soft-gray/10 pt-5 sm:gap-5 sm:pt-6">
                <span
                  aria-hidden
                  className="flex h-12 w-12 shrink-0 items-center justify-center border border-tech-teal/30 font-display text-sm font-semibold tracking-wide text-tech-teal"
                >
                  {initials}
                </span>
                <div className="min-w-0">
                  <p className="font-display text-xl font-semibold tracking-tight text-ivory-white">
                    {tFounders(`founders.${id}.name`)}
                  </p>
                  <p className="mt-2 text-sm font-medium text-tech-teal">
                    {tFounders(`founders.${id}.role`)}
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

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-soft-gray/85 sm:mt-10 sm:text-base">
        {tFounders("bridge")}
      </p>

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
        ctaLabel={tCta("cta")}
      />
    </Container>
  );
}
