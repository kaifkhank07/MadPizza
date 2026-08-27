import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  target?: "_self" | "_blank";
  rel?: string;
  ariaLabel?: string;
  disabled?: boolean;
  variant?: "primary" | "white";
}

export default function Button({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  target = "_self",
  rel,
  ariaLabel,
  disabled = false,
  variant = "primary",
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-primary hover:bg-primary-dark text-white",
    white: "bg-white hover:bg-white/90 text-primary",
  };

  const baseClasses = `${variantClasses[variant]} text-lg sm:text-xl font-normal tracking-wider px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg border-b-3 border-accent hover:shadow-accent/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={baseClasses}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
}
