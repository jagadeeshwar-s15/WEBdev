import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "accent" | "outline" | "ghost";

type CommonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-pine text-cream hover:bg-pine-light shadow-[0_8px_24px_-10px_rgba(23,50,44,0.55)]",
  accent:
    "bg-clay text-cream hover:brightness-105 shadow-[0_8px_24px_-10px_rgba(188,107,59,0.55)]",
  outline: "border border-ink/20 text-ink hover:border-pine hover:text-pine bg-transparent",
  ghost: "text-ink hover:text-pine bg-transparent",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-clay";

export function Button({
  href,
  variant = "primary",
  className,
  children,
  icon,
  external,
  ...rest
}: CommonProps &
  (
    | ({ href: string; external?: boolean } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">)
    | ({ href?: undefined; external?: undefined } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">)
  )) {
  const classes = cn(base, variantClasses[variant], className);

  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal && !external) {
      return (
        <Link href={href} className={classes}>
          {icon}
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {icon}
      {children}
    </button>
  );
}
