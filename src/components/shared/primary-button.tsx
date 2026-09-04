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

type ButtonAsInternalLink = BaseProps & {
  href: AppPathname;
  external?: false;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type ButtonAsExternalLink = BaseProps & {
  href: string;
  external: true;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export type PrimaryButtonProps =
  | ButtonAsButton
  | ButtonAsInternalLink
  | ButtonAsExternalLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-signal-orange text-ivory-white hover:bg-[#ff6a35] border border-transparent",
  secondary:
    "bg-transparent text-tech-teal border border-tech-teal/70 hover:border-tech-teal hover:bg-tech-teal/10",
  ghost:
    "bg-transparent text-ivory-white border border-transparent hover:text-tech-teal",
};

const baseClasses =
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-control)] px-5 py-2.5 text-sm font-medium transition-[colors,transform,opacity] duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tech-teal focus-visible:ring-offset-2 focus-visible:ring-offset-deep-graphite disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none motion-reduce:active:scale-100";

export function PrimaryButton(props: PrimaryButtonProps) {
  const { children, className, variant = "primary" } = props;
  const classes = cn(baseClasses, variantClasses[variant], className);

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          className={classes}
          onClick={props.onClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={props.href}
        className={classes}
        onClick={props.onClick}
      >
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
