import { Button } from "./button";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  target?: "_blank" | "_self" | "_parent" | "_top";
  ariaLabel?: string;
};

export const ButtonLink = ({
  href,
  children,
  className,
  size = "default",
  variant,
  target = "_self",
  ariaLabel
}: ButtonLinkProps) => {
  return (
    <Button asChild type="submit" variant={variant} size={size} className={className || ""}>
      <a aria-label={ariaLabel} href={href || ""} target={target}>{children}</a>
    </Button>
  );
};
