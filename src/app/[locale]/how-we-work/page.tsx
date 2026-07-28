import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  thinkingProcessStepIds,
  type ThinkingProcessStepId,
} from "@/content/home";
import { Container } from "@/components/layout/container";
import { PageCta } from "@/components/shared/page-cta";
import { ProcessStep } from "@/components/shared/process-step";
import { SectionHeading } from "@/components/shared/section-heading";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return createPageMetadata("howWeWork", locale);
}

export default async function HowWeWorkPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ThinkingProcess");
  const tCta = await getTranslations("FinalCta");
  const tPage = await getTranslations("InternalPages");

  return (
    <Container className="py-[var(--section-y)]">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          as="h1"
          align="center"
          title={t("title")}
          description={tPage("howWeWorkIntro")}
          className="mx-auto"
        />
      </div>

      <ol className="mt-10 flex list-none flex-col p-0 sm:mt-12 md:flex-row md:items-start">
        {thinkingProcessStepIds.map((id: ThinkingProcessStepId, index) => (
          <li key={id} className="md:flex md:min-w-0 md:flex-1">
            <ProcessStep
              index={index + 1}
              title={t(`steps.${id}.title`)}
              body={t(`steps.${id}.body`)}
              isLast={index === thinkingProcessStepIds.length - 1}
            />
          </li>
        ))}
      </ol>

      <PageCta
        title={tCta("title")}
        description={tPage("ctaSupport")}
        ctaLabel={tCta("cta")}
      />
    </Container>
  );
}
