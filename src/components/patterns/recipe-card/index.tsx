import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type RecipeCardProps = {
  url: string;
  name: string;
  dietLabels: string[];
  calories: number;
  time: number;
  cuisineType: string;
  mealType: string;
  dishType: string;
  image: string;
};

export const RecipeCard = ({
  url,
  name,
  dietLabels = [],
  image,
  calories,
  time,
  cuisineType = "",
  mealType,
  dishType,
}: RecipeCardProps) => {
  const id = url.split("/").pop()?.split("?")[0];
  return (
    <Card className="hover:scale-105 ease-in duration-200">
      <CardHeader>
        <CardTitle className="truncate">{name}</CardTitle>
        <div className="flex items-center text-xs text-muted-foreground space-x-2">
          <div className="truncate">{cuisineType}</div>
          <Separator className="h-4" orientation="vertical" />
          <div className="truncate">{mealType}</div>
          <Separator className="h-4" orientation="vertical" />
          <div className="truncate">{dishType}</div>
        </div>
        <h3 className=" text-xs text-muted-foreground">
          {Math.round(calories)} kcal
        </h3>
        <h3 className=" text-xs text-muted-foreground">{time} min</h3>
      </CardHeader>

      <CardContent>
        <img
          src={image}
          alt="Recipe photo"
          className="w-full h-48 object-cover rounded-sm"
        />
      </CardContent>
      <CardFooter className="flex-col gap-2 pb-4">
        <div className="flex flex-wrap gap-2 justify-around">
          {dietLabels.map((label) => (
            <Badge key={label}>{label}</Badge>
          ))}
        </div>
        <ButtonLink variant="link" href={`/recipe?id=${id}`}>
          View Recipe
        </ButtonLink>
      </CardFooter>
    </Card>
  );
};
