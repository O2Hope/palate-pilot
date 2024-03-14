import {
  HomeIcon,
  ReloadIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ButtonLink } from "@/components/ui/button-link";
import { useForm } from "react-hook-form";
import { navigate } from "astro:transitions/client";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Inputs = {
  search: string;
};

type HeaderProps = {
  search?: boolean;
};

export const Header = ({ search }: HeaderProps) => {
  const { register, watch } = useForm<Inputs>();
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    watch("search") && setLoading(true);
    navigate(`/search?q=${watch("search")}`);
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      watch("search") && setLoading(true);
      navigate(`/search?q=${watch("search")}`);
    }
  };

  const Search = () => {
    return (
      <div className="relative">
        <Input
          placeholder="Search recipes"
          {...register("search", { required: true })}
          onKeyDown={onEnter}
          className="h-12 w-[300px]"
        />
        <Button
          size="sm"
          onClick={handleSearch}
          className="absolute inset-y-2 right-2 px-4 py-1"
        >
          {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
          Search
        </Button>
      </div>
    );
  };

  return (
    <TooltipProvider>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-[1440px] mx-auto px-4 py-4 flex items-center justify-between">
          <a
            href="/"
            className="text-2xl font-bold inline-block bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent"
          >
            Palate Pilot
          </a>
          <nav>
            <ul className="flex gap-2 items-center">
              {search && <Search />}
              <li>
                <Tooltip>
                  <TooltipTrigger>
                    <ButtonLink ariaLabel="home" variant="ghost" href="/">
                      <HomeIcon className="h-4 w-4" />
                    </ButtonLink>
                  </TooltipTrigger>
                  <TooltipContent>Home</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <ButtonLink
                      ariaLabel="github"
                      variant="ghost"
                      href="https://github.com/O2Hope/palate-pilot"
                      target="_blank"
                    >
                      <GitHubLogoIcon className="h-4 w-4" />
                    </ButtonLink>
                  </TooltipTrigger>
                  <TooltipContent>Github</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <ButtonLink
                      ariaLabel="linkedin"
                      variant="ghost"
                      href="https://www.linkedin.com/in/aruizdeveloper/"
                      target="_blank"
                    >
                      <LinkedInLogoIcon className="h-4 w-4" />
                    </ButtonLink>
                  </TooltipTrigger>
                  <TooltipContent>Linkedin</TooltipContent>
                </Tooltip>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </TooltipProvider>
  );
};
