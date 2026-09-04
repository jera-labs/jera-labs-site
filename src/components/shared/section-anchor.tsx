"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { defaultLocale } from "@/lib/constants";
import { cn } from "@/lib/utils";

type SectionAnchorProps = {
  hash: string;
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
};

export function SectionAnchor({
  hash,
  children,
  className,
  onNavigate,
}: SectionAnchorProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const href = isHome
    ? `#${hash}`
    : `${locale === defaultLocale ? "" : `/${locale}`}/#${hash}`;

  return (
    <a
      href={href}
      className={cn("cursor-pointer", className)}
      onClick={() => onNavigate?.()}
    >
      {children}
    </a>
  );
}
