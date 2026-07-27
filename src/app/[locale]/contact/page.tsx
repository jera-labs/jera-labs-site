import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/layout/container";
import { Link } from "@/i18n/navigation";
import { createPageMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/shared/section-heading";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  await params;
  return createPageMetadata("contact");
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations("Navigation");
  const tPlaceholder = await getTranslations("Placeholder");

  return (
    <Container className="space-y-6 py-[var(--section-y)]">
      <SectionHeading title={tNav("contact")} description={tPlaceholder("comingSoon")} />
      <Link
        href="/"
        className="inline-flex text-sm text-tech-teal transition-colors hover:text-ivory-white"
      >
        {tPlaceholder("backHome")}
      </Link>
    </Container>
  );
}
