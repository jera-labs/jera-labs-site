import { cn } from "@/lib/utils";

type ConnectionLineProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  className?: string;
};

export function ConnectionLine({
  x1,
  y1,
  x2,
  y2,
  className,
}: ConnectionLineProps) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      className={cn("stroke-tech-teal/40", className)}
      strokeWidth="1.25"
    />
  );
}
