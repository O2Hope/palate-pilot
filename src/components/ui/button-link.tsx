import { Button } from "./button";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
};

export const ButtonLink = ({
  href,
  children,
  className,
  size = "default",
}: ButtonLinkProps) => {
  return (
    <Button asChild type="submit" size={size} className={className || ""}>
      <a href={href || ""}>{children}</a>
    </Button>
  );
};
