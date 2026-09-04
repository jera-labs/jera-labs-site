"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type LocaleSwitcherProps = {
  className?: string;
  label: string;
};

export function LocaleSwitcher({ className, label }: LocaleSwitcherProps) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const nextLocale: Locale = locale === "es" ? "en" : "es";

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: nextLocale })}
      className={cn(
        "inline-flex min-h-9 cursor-pointer items-center gap-1.5 rounded-full bg-gunmetal/70 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-200 hover:bg-gunmetal active:scale-[0.98] motion-reduce:active:scale-100",
        className,
      )}
      aria-label={`${label}: ${locale.toUpperCase()} → ${nextLocale.toUpperCase()}`}
    >
      <span
        className={cn(
          "transition-colors duration-200",
          locale === "es" ? "text-tech-teal" : "text-soft-gray/55",
        )}
        aria-hidden
      >
        ES
      </span>
      <span className="text-soft-gray/35" aria-hidden>
        /
      </span>
      <span
        className={cn(
          "transition-colors duration-200",
          locale === "en" ? "text-tech-teal" : "text-soft-gray/55",
        )}
        aria-hidden
      >
        EN
      </span>
    </button>
  );
}
