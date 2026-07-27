import { cn } from "@/lib/utils";

type SystemNodeProps = {
  cx: number;
  cy: number;
  r?: number;
  accent?: boolean;
  className?: string;
};

export function SystemNode({
  cx,
  cy,
  r = 4,
  accent = false,
  className,
}: SystemNodeProps) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      className={cn(
        accent ? "fill-signal-orange" : "fill-tech-teal",
        className,
      )}
    />
  );
}
