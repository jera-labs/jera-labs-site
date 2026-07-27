"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { navigationItems } from "@/content/navigation";
import { Link, usePathname } from "@/i18n/navigation";
import { Container } from "@/components/layout/container";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Logo } from "@/components/shared/logo";
import { PrimaryButton } from "@/components/shared/primary-button";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("Navigation");
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
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || menuOpen
          ? "border-soft-gray/10 bg-deep-graphite/95 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-header items-center justify-between gap-3 sm:gap-4">
        <Logo
          size="md"
          className="relative z-50 shrink-0"
          priority
          onClick={() => setMenuOpen(false)}
        />

        <nav
          className="hidden min-w-0 items-center gap-0.5 lg:flex"
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

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <LocaleSwitcher label={t("language")} />
          <PrimaryButton href="/contact">{t("cta")}</PrimaryButton>
        </div>

        <MobileMenu open={menuOpen} onOpenChange={setMenuOpen} />
      </Container>
    </header>
  );
}
