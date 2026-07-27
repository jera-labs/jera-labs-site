import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type TransformationRowProps = {
  from: string;
  to: string;
  index: number;
  className?: string;
};

export function TransformationRow({
  from,
  to,
  index,
  className,
}: TransformationRowProps) {
  const label = String(index).padStart(2, "0");

  return (
    <div
      className={cn(
        "group flex flex-col gap-2 border-b border-soft-gray/10 py-5 sm:flex-row sm:items-center sm:gap-4 sm:py-5",
        className,
      )}
    >
      <span className="w-8 shrink-0 font-display text-sm font-medium tabular-nums text-tech-teal">
        {label}
      </span>

      <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <p className="min-w-0 flex-1 text-sm text-soft-gray/70 sm:text-base">
          {from}
        </p>

        <ArrowRight
          className="hidden h-4 w-4 shrink-0 text-tech-teal/70 transition-transform duration-300 group-hover:translate-x-0.5 sm:block"
          strokeWidth={1.75}
          aria-hidden
        />

        <p className="min-w-0 flex-1 font-display text-base font-semibold tracking-tight text-ivory-white sm:text-right">
          {to}
        </p>
      </div>
    </div>
  );
}
