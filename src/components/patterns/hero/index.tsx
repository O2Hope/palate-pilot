import { Input } from "@/components/ui/input";
import { useForm, type SubmitHandler } from "react-hook-form";
import { ButtonLink } from "@/components/ui/button-link";

type Inputs = {
  search: string;
};

export const Hero = () => {
  const {
    register,
    watch,
  } = useForm<Inputs>();

  return (
    <section className="py-8 mx-auto rounded-[12px] flex flex-col   justify-center  shadow-sm items-center gap-4">
      <h1 className="inline-block bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent text-7xl py-6">
        Find your next big dish
      </h1>
      <p className="text-muted-foreground">
        Search over up to 1 Million different recipes. Always FREE 🥰. No signup
        required
      </p>
      <div className="flex  px-6 gap-2 my-12 relative w-[600px]">
        <Input
          placeholder="Search recipes"
          {...register("search", { required: true })}
          className="h-14"
        />
        <ButtonLink
          href={`/search?q=${watch("search")}`}
          size="lg"
          className="absolute inset-y-2 right-8 px-4 py-2"
        >
          Search
        </ButtonLink>
      </div>
    </section>
  );
};
