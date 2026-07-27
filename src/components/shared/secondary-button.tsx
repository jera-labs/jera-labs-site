import { PrimaryButton } from "./primary-button";
import type { AppPathname } from "@/types";

type SecondaryButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: AppPathname;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function SecondaryButton({
  children,
  className,
  href,
  ...props
}: SecondaryButtonProps) {
  if (href) {
    return (
      <PrimaryButton href={href} variant="secondary" className={className}>
        {children}
      </PrimaryButton>
    );
  }

  return (
    <PrimaryButton variant="secondary" className={className} {...props}>
      {children}
    </PrimaryButton>
  );
}
