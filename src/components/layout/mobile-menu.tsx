"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { navigationItems } from "@/content/navigation";
import { PrimaryButton } from "@/components/shared/primary-button";
import { SectionAnchor } from "@/components/shared/section-anchor";
import { LocaleSwitcher } from "./locale-switcher";
import { getWhatsAppUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
};

export function MobileMenu({ open, onOpenChange, className }: MobileMenuProps) {
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
    <div className={cn("lg:hidden", className)}>
      <button
        type="button"
        className="relative z-50 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-[var(--radius-control)] text-ivory-white"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? t("closeMenu") : t("openMenu")}
        onClick={() => onOpenChange(!open)}
      >
        {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
      </button>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-deep-graphite/60 backdrop-blur-[2px] transition-opacity duration-300 motion-reduce:transition-none",
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
          "fixed inset-x-0 top-header z-40 max-h-[calc(100dvh-var(--header-height))] overflow-y-auto border-b border-soft-gray/10 bg-deep-graphite/98 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0",
        )}
      >
        <nav
          className="mx-auto flex w-full flex-col gap-1 px-[var(--page-gutter)] py-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
          aria-label="Mobile"
        >
          {navigationItems.map((item) => (
            <SectionAnchor
              key={item.id}
              hash={item.hash}
              className="cursor-pointer rounded-[var(--radius-control)] px-3 py-3.5 text-base text-soft-gray transition-colors hover:bg-ocean-navy/50 hover:text-ivory-white active:bg-ocean-navy/60"
              onNavigate={() => onOpenChange(false)}
            >
              {t(item.labelKey)}
            </SectionAnchor>
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
