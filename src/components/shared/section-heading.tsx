import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-3 sm:space-y-4",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Tag className="text-balance font-display text-[1.75rem] font-semibold leading-[1.2] tracking-tight text-ivory-white sm:text-4xl sm:leading-[1.15] lg:text-[2.75rem]">
        {title}
      </Tag>
      {description ? (
        <p className="text-pretty text-[0.95rem] leading-relaxed text-soft-gray/90 sm:text-base lg:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
