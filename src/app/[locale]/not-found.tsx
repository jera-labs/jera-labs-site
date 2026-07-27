import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";

export default async function NotFound() {
  const t = await getTranslations("InternalPages");

  return (
    <Container className="py-[var(--section-y)]">
      <div className="mx-auto max-w-xl text-center">
        <SectionHeading
          as="h1"
          align="center"
          title={t("notFoundTitle")}
          description={t("notFoundDescription")}
          className="mx-auto"
        />
        <Link
          href="/"
          className="mt-8 inline-flex text-sm text-tech-teal transition-colors hover:text-ivory-white"
        >
          {t("notFoundCta")}
        </Link>
      </div>
    </Container>
  );
}
