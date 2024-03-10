import { Button } from "./button";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
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
