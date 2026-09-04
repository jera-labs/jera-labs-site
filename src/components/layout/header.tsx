"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { navigationItems } from "@/content/navigation";
import { Link, usePathname } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Logo } from "@/components/shared/logo";
import { PrimaryButton } from "@/components/shared/primary-button";
import { getWhatsAppUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("Navigation");
  const tWhatsApp = useTranslations("WhatsApp");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled || menuOpen
          ? "border-soft-gray/10 bg-deep-graphite/95 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="relative flex h-header w-full items-center gap-3 px-[var(--page-gutter)] sm:gap-4">
        <div className="relative z-50 flex min-w-0 flex-1 items-center justify-start">
          <Logo
            size="md"
            className="shrink-0"
            priority
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 lg:flex"
          aria-label="Main"
        >
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-sm px-2.5 py-2 text-sm transition-colors xl:px-3",
                  isActive
                    ? "text-tech-teal"
                    : "text-soft-gray/85 hover:text-ivory-white",
                )}
              >
                {t(item.labelKey)}
              </Link>
            );
          })}
        </nav>

        <div className="relative z-50 flex flex-1 items-center justify-end gap-2 sm:gap-3">
          <div className="hidden items-center gap-3 lg:flex">
            <LocaleSwitcher label={t("language")} />
            <PrimaryButton
              href={getWhatsAppUrl("alejandro", tWhatsApp("prefillAlejandro"))}
              external
            >
              {t("cta")}
            </PrimaryButton>
          </div>
          <MobileMenu open={menuOpen} onOpenChange={setMenuOpen} />
        </div>
      </div>
    </header>
  );
}
