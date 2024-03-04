import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="h-[480px] mt-16 mx-auto bg-[url('/hero.png')] bg-cover bg-center  rounded-[12px] flex flex-col justify-end ">
      <h1 className="text-5xl text-white font-bold text-center drop-shadow-md mb-16">
        Homemade Spaghetti and Meatballs
      </h1>
      <p className="my-6 mx-6 text-white drop-shadow-md">
      A classic comfort food dish that's perfect for any occasion
      </p>
      <div className="flex max-w-lg ml-6 gap-2 pb-16 relative">
        <Input className="h-14" />
        <Button size="lg" className="absolute inset-y-2 right-2 px-4 py-2">Search</Button>
      </div>
    </section>
  );
};
