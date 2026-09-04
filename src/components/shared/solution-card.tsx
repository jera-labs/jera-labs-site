import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type SolutionCardProps = {
  icon: LucideIcon;
  title: string;
  body: string;
  className?: string;
};

export function SolutionCard({
  icon: Icon,
  title,
  body,
  className,
}: SolutionCardProps) {
  return (
    <article
      className={cn(
        "hover-lift surface-card group flex h-full flex-col gap-3 bg-ocean-navy/20 p-5 hover:border-tech-teal/30 hover:bg-ocean-navy/35 sm:gap-4 sm:p-6",
        className,
      )}
    >
      <Icon
        className="h-5 w-5 text-tech-teal"
        strokeWidth={1.75}
        aria-hidden
      />
      <h3 className="font-display text-base font-semibold tracking-tight text-ivory-white sm:text-lg">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-soft-gray/80 sm:text-[0.95rem]">
        {body}
      </p>
    </article>
  );
}
