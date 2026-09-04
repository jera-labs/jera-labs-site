"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { navigationItems } from "@/content/navigation";
import { usePathname } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Logo } from "@/components/shared/logo";
import { PrimaryButton } from "@/components/shared/primary-button";
import { SectionAnchor } from "@/components/shared/section-anchor";
import { getWhatsAppUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("Navigation");
  const tWhatsApp = useTranslations("WhatsApp");
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(navigationItems[0]?.hash ?? "hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const ids = navigationItems.map((item) => item.hash);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          );
        const top = visible[0]?.target;
        if (top?.id) setActiveHash(top.id);
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

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
        <div className="relative flex min-w-0 flex-1 items-center justify-start pointer-events-none">
          <Logo
            size="md"
            className="pointer-events-auto shrink-0"
            priority
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <nav
          className="absolute left-1/2 top-1/2 z-[60] hidden -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 lg:flex"
          aria-label="Main"
        >
          {navigationItems.map((item) => {
            const isActive = isHome && activeHash === item.hash;
            return (
              <SectionAnchor
                key={item.id}
                hash={item.hash}
                className={cn(
                  "cursor-pointer whitespace-nowrap rounded-[var(--radius-control)] px-2.5 py-2 text-sm transition-colors xl:px-3",
                  isActive
                    ? "text-tech-teal"
                    : "text-soft-gray/85 hover:text-ivory-white",
                )}
              >
                {t(item.labelKey)}
              </SectionAnchor>
            );
          })}
        </nav>

        <div className="relative flex flex-1 items-center justify-end gap-2 sm:gap-3 pointer-events-none">
          <div className="pointer-events-auto hidden items-center gap-3 lg:flex">
            <LocaleSwitcher label={t("language")} />
            <PrimaryButton
              href={getWhatsAppUrl("alejandro", tWhatsApp("prefillAlejandro"))}
              external
            >
              {t("cta")}
            </PrimaryButton>
          </div>
          <MobileMenu open={menuOpen} onOpenChange={setMenuOpen} className="pointer-events-auto" />
        </div>
      </div>
    </header>
  );
}
