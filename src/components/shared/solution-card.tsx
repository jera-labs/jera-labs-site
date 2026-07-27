import { cn } from "@/lib/utils";

type SolutionCardProps = {
  index: number;
  title: string;
  body: string;
  className?: string;
};

export function SolutionCard({
  index,
  title,
  body,
  className,
}: SolutionCardProps) {
  const label = String(index).padStart(2, "0");

  return (
    <article
      className={cn(
        "flex h-full flex-col gap-3 border-t border-soft-gray/10 pt-5 sm:gap-4 sm:pt-6",
        className,
      )}
    >
      <span className="font-display text-sm font-medium tabular-nums text-tech-teal">
        {label}
      </span>
      <h3 className="font-display text-lg font-semibold tracking-tight text-ivory-white sm:text-xl">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-soft-gray/80 sm:text-base">
        {body}
      </p>
    </article>
  );
}
