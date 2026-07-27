import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-sans text-[0.65rem] font-medium uppercase tracking-[0.16em] text-tech-teal sm:text-xs sm:tracking-[0.22em]",
        className,
      )}
    >
      {children}
    </p>
  );
}
