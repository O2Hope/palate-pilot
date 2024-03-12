import { PersonIcon, HomeIcon, FileTextIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ButtonLink } from "@/components/ui/button-link";
import { useForm } from "react-hook-form";

type Inputs = {
  search: string;
};

export const Header = () => {
  const { register, watch } = useForm<Inputs>();

  return (
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
            <div className="relative">
              <Input
                placeholder="Search recipes"
                {...register("search", { required: true })}
                className="h-12 w-[300px]"
              />
              <ButtonLink
                href={`/search?q=${watch("search")}`}
                size="sm"
                className="absolute inset-y-2 right-2 px-4 py-1"
              >
                Search
              </ButtonLink>
            </div>
            <li>
              <ButtonLink
                variant="ghost"
                href="/"
              >
                <HomeIcon className="mr-2 h-4 w-4" />
                Home
              </ButtonLink>
            </li>
            <li>
              <Button variant="ghost">
                <FileTextIcon className="mr-2 h-4 w-4" />
                Recipes
              </Button>
            </li>
            <li>
              <Button>
                <PersonIcon className="mr-2 h-4 w-4" />
                Login or Signup
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
