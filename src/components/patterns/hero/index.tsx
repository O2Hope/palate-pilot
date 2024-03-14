import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { ButtonLink } from "@/components/ui/button-link";
import { navigate } from "astro:transitions/client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

type Inputs = {
  search: string;
};

export const Hero = () => {
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

  return (
    <section className=" mx-auto rounded-[12px] flex flex-col justify-center  items-center gap-4 text-center">
      <h1 className="inline-block bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent text-5xl md:text-7xl py-6">
        Find your next big dish
      </h1>
      <p className="text-muted-foreground">
        Search over up to 1 Million different recipes 🍽️. Always FREE 🥰. No
        signup required
      </p>
      <div className="flex px-6 gap-2 my-12 relative w-full">
        <Input
          {...register("search")}
          placeholder="Search recipes"
          onKeyDown={onEnter}
          className="h-14"
        />
        <Button
          onClick={handleSearch}
          size="lg"
          className="absolute inset-y-2 right-8 px-4 py-2"
        >
          {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
          Search
        </Button>
      </div>
    </section>
  );
};
