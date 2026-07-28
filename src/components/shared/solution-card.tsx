import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type SolutionCardProps = {
  icon: LucideIcon;
  body: string;
  className?: string;
};

export function SolutionCard({ icon: Icon, body, className }: SolutionCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col gap-4 border border-soft-gray/10 bg-ocean-navy/20 p-5 transition-colors duration-300 hover:border-tech-teal/30 hover:bg-ocean-navy/35 sm:p-6 motion-reduce:transition-none",
        className,
      )}
    >
      <Icon
        className="h-5 w-5 text-tech-teal"
        strokeWidth={1.75}
        aria-hidden
      />
      <p className="text-sm leading-relaxed text-ivory-white sm:text-base">
        {body}
      </p>
    </article>
  );
}
