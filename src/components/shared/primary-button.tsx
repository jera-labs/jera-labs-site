import { Link } from "@/i18n/navigation";
import type { AppPathname } from "@/types";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "href"> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps & {
  href: AppPathname;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-signal-orange text-ivory-white hover:bg-[#ff6a35] border border-transparent",
  secondary:
    "bg-transparent text-tech-teal border border-tech-teal/70 hover:border-tech-teal hover:bg-tech-teal/10",
  ghost:
    "bg-transparent text-ivory-white border border-transparent hover:text-tech-teal",
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tech-teal focus-visible:ring-offset-2 focus-visible:ring-offset-deep-graphite disabled:pointer-events-none disabled:opacity-50";

export function PrimaryButton(props: ButtonAsButton | ButtonAsLink) {
  const { children, className, variant = "primary" } = props;
  const classes = cn(baseClasses, variantClasses[variant], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      disabled={buttonProps.disabled}
      onClick={buttonProps.onClick}
      aria-label={buttonProps["aria-label"]}
    >
      {children}
    </button>
  );
}
