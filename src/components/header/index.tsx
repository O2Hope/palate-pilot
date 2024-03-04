import { PersonIcon, HomeIcon, FileTextIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-[1440px] mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Palate Pilot</h1>
        <nav>
          <ul className="flex gap-2 items-center">
            <li>
            <Button variant="ghost">
            <HomeIcon className="mr-2 h-4 w-4" />Home
                </Button>
            </li>
            <li>
            <Button variant="ghost">
                <FileTextIcon className="mr-2 h-4 w-4"/>Recipes
                </Button>
            </li>
            <li>
              <Button>
                <PersonIcon className="mr-2 h-4 w-4" />Login or Signup
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
