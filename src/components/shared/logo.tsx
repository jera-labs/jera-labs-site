import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  priority?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: {
    mark: 28,
    markClass: "h-7 w-7",
    textClass: "text-base",
    gapClass: "gap-2",
  },
  md: {
    mark: 32,
    markClass: "h-8 w-8",
    textClass: "text-base sm:text-lg",
    gapClass: "gap-2.5",
  },
  lg: {
    mark: 36,
    markClass: "h-9 w-9",
    textClass: "text-lg sm:text-xl",
    gapClass: "gap-2.5",
  },
} as const;

export function Logo({
  className,
  showWordmark = true,
  priority = false,
  onClick,
  size = "md",
}: LogoProps) {
  const s = sizes[size];

  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        "inline-flex items-center text-ivory-white transition-opacity hover:opacity-90",
        s.gapClass,
        className,
      )}
      aria-label="Jera Labs"
    >
      <span className={cn("relative inline-flex shrink-0", s.markClass)}>
        <Image
          src="/brand/jera-mark.png"
          alt={showWordmark ? "" : "Jera Labs"}
          width={s.mark}
          height={s.mark}
          className="h-full w-full object-contain"
          priority={priority}
        />
      </span>
      {showWordmark ? (
        <span
          className={cn(
            "font-display font-bold tracking-tight whitespace-nowrap",
            s.textClass,
          )}
        >
          Jera Labs
        </span>
      ) : null}
    </Link>
  );
}
