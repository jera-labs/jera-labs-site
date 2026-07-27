"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type LocaleSwitcherProps = {
  className?: string;
  label: string;
};

export function LocaleSwitcher({ className, label }: LocaleSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(nextLocale: Locale) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div
      className={cn("inline-flex items-center gap-1", className)}
      role="group"
      aria-label={label}
    >
      {routing.locales.map((item) => {
        const isActive = item === locale;
        return (
          <button
            key={item}
            type="button"
            onClick={() => switchLocale(item)}
            className={cn(
              "rounded-sm px-2 py-1 text-xs font-medium uppercase tracking-wide transition-colors",
              isActive
                ? "text-tech-teal"
                : "text-soft-gray/70 hover:text-ivory-white",
            )}
            aria-pressed={isActive}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
