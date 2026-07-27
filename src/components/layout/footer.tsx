import { getTranslations } from "next-intl/server";
import { navigationItems } from "@/content/navigation";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/shared/logo";
import { siteConfig } from "@/lib/constants";

export async function Footer() {
  const tNav = await getTranslations("Navigation");
  const tFooter = await getTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-soft-gray/10 bg-ocean-navy/40">
      <Container className="grid gap-8 py-10 sm:gap-10 sm:py-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="min-w-0 space-y-3 sm:space-y-4">
          <Logo size="md" />
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-tech-teal sm:text-xs sm:tracking-[0.2em]">
            {tFooter("tagline")}
          </p>
          <p className="max-w-md text-sm leading-relaxed text-soft-gray/85">
            {tFooter("description")}
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex text-sm text-tech-teal transition-colors hover:text-ivory-white"
          >
            {siteConfig.email}
          </a>
        </div>

        <div className="min-w-0 space-y-4">
          <nav
            className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2"
            aria-label="Footer"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-sm text-soft-gray/85 transition-colors hover:text-ivory-white"
              >
                {tNav(item.labelKey)}
              </Link>
            ))}
          </nav>
          <p className="max-w-sm text-sm leading-relaxed text-soft-gray/70">
            {tFooter("runeNote")}
          </p>
        </div>
      </Container>

      <div className="border-t border-soft-gray/10">
        <Container className="py-4">
          <p className="text-xs text-soft-gray/60">
            © {year} {tFooter("rights")}
          </p>
        </Container>
      </div>
    </footer>
  );
}
