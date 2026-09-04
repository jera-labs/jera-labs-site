import { getTranslations } from "next-intl/server";
import { PrimaryButton } from "@/components/shared/primary-button";
import { getWhatsAppUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";

type PageCtaProps = {
  title: string;
  description?: string;
  ctaLabel: string;
  className?: string;
};

export async function PageCta({
  title,
  description,
  ctaLabel,
  className,
}: PageCtaProps) {
  const t = await getTranslations("WhatsApp");

  return (
    <div
      className={cn(
        "mt-14 border-t border-soft-gray/10 pt-10 text-center sm:mt-16 sm:pt-12",
        className,
      )}
    >
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ivory-white sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-soft-gray/80 sm:text-base">
          {description}
        </p>
      ) : null}
      <div className="mt-6 flex justify-center">
        <PrimaryButton
          href={getWhatsAppUrl("alejandro", t("prefillAlejandro"))}
          external
        >
          {ctaLabel}
        </PrimaryButton>
      </div>
    </div>
  );
}
