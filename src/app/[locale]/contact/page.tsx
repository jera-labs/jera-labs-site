import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/layout/container";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return createPageMetadata("contact", locale);
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Contact");

  return (
    <Container className="py-[var(--section-y)]">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          as="h1"
          align="center"
          title={t("title")}
          description={t("description")}
          className="mx-auto"
        />
        <p className="mt-5 text-center text-sm text-soft-gray/80">
          {t("orEmail")}{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-tech-teal transition-colors hover:text-ivory-white"
          >
            {siteConfig.email}
          </a>
        </p>
      </div>
      <div className="mt-10 sm:mt-12">
        <ContactForm />
      </div>
    </Container>
  );
}
