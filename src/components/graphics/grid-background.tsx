import { cn } from "@/lib/utils";

type GridBackgroundProps = {
  className?: string;
};

export function GridBackground({ className }: GridBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.07] sm:opacity-[0.1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, color-mix(in srgb, var(--soft-gray) 22%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in srgb, var(--soft-gray) 22%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 55% 50% at 30% 40%, black 10%, transparent 72%)",
        }}
      />
      <div className="absolute left-[-10%] top-[35%] h-56 w-56 rounded-full bg-ocean-navy/40 blur-3xl sm:h-64 sm:w-64 motion-safe:animate-[pulse_10s_ease-in-out_infinite]" />
      <div className="absolute right-[-5%] top-[20%] h-60 w-60 rounded-full bg-tech-teal/[0.07] blur-3xl sm:h-72 sm:w-72 motion-safe:animate-[pulse_12s_ease-in-out_infinite]" />
    </div>
  );
}
