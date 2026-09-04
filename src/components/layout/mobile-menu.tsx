"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { navigationItems } from "@/content/navigation";
import { Link } from "@/i18n/navigation";
import { PrimaryButton } from "@/components/shared/primary-button";
import { LocaleSwitcher } from "./locale-switcher";
import { getWhatsAppUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
  const t = useTranslations("Navigation");
  const tWhatsApp = useTranslations("WhatsApp");

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-sm text-ivory-white"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? t("closeMenu") : t("openMenu")}
        onClick={() => onOpenChange(!open)}
      >
        {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
      </button>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-deep-graphite/60 backdrop-blur-[2px] transition-opacity",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
        onClick={() => onOpenChange(false)}
      />

      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={cn(
          "fixed inset-x-0 top-header z-40 max-h-[calc(100dvh-var(--header-height))] overflow-y-auto border-b border-soft-gray/10 bg-deep-graphite/98 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition-[transform,opacity] duration-200",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <nav
          className="mx-auto flex w-full flex-col gap-1 px-[var(--page-gutter)] py-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
          aria-label="Mobile"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="rounded-sm px-3 py-3.5 text-base text-soft-gray transition-colors hover:bg-ocean-navy/50 hover:text-ivory-white active:bg-ocean-navy/60"
              onClick={() => onOpenChange(false)}
            >
              {t(item.labelKey)}
            </Link>
          ))}

          <div className="mt-3 flex flex-col gap-4 border-t border-soft-gray/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <LocaleSwitcher label={t("language")} />
            <PrimaryButton
              href={getWhatsAppUrl("alejandro", tWhatsApp("prefillAlejandro"))}
              external
              className="w-full sm:w-auto sm:min-w-[10rem]"
              onClick={() => onOpenChange(false)}
            >
              {t("cta")}
            </PrimaryButton>
          </div>
        </nav>
      </div>
    </div>
  );
}
