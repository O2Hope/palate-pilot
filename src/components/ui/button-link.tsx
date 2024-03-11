import { Button } from "./button";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
};

export const ButtonLink = ({
  href,
  children,
  className,
  size = "default",
  variant 
}: ButtonLinkProps) => {
  return (
    <Button asChild type="submit" variant={variant} size={size} className={className || ""}>
      <a href={href || ""}>{children}</a>
    </Button>
  );
};
