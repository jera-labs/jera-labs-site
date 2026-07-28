import { cn } from "@/lib/utils";

type ProcessStepProps = {
  index: number;
  title: string;
  body: string;
  isLast?: boolean;
  className?: string;
};

export function ProcessStep({
  index,
  title,
  body,
  isLast = false,
  className,
}: ProcessStepProps) {
  const label = String(index).padStart(2, "0");

  return (
    <div
      className={cn(
        "relative flex flex-col md:min-w-0 md:flex-1",
        className,
      )}
    >
      {/* Mobile vertical connector */}
      <div className="relative grid grid-cols-[2rem_minmax(0,1fr)] gap-4 md:hidden">
        <div className="relative flex h-full flex-col items-center">
          <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-tech-teal/40 bg-deep-graphite font-display text-xs font-medium tabular-nums text-tech-teal">
            {label}
          </span>
          {!isLast ? (
            <span aria-hidden className="mt-1 w-px flex-1 bg-soft-gray/20" />
          ) : null}
        </div>
        <div className={cn("min-w-0 pb-8", isLast && "pb-0")}>
          <h3 className="font-display text-lg font-semibold tracking-tight text-ivory-white">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-soft-gray/80">
            {body}
          </p>
        </div>
      </div>

      {/* Desktop horizontal step */}
      <div className="hidden md:block">
        <div className="flex items-center">
          <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-tech-teal/40 bg-deep-graphite font-display text-xs font-medium tabular-nums text-tech-teal">
            {label}
          </span>
          {!isLast ? (
            <span aria-hidden className="mx-2 h-px flex-1 bg-soft-gray/20" />
          ) : null}
        </div>
        <div className="mt-4 pr-3">
          <h3 className="font-display text-base font-semibold tracking-tight text-ivory-white lg:text-lg">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-soft-gray/80">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}
