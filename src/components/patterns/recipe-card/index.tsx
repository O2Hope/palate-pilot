import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type RecipeCardProps = {
  name: string;
  dietLabels: string[];
  cautionLabels: string[];
  calories: number;
  time: number;
  cuisineType: string;
  mealType: string;
  dishType: string;
  image: string;
};

export const RecipeCard = ({
  name,
  dietLabels = [],
  cautionLabels = [],
  image,
  calories,
  time,
  cuisineType = "",
  mealType,
  dishType,
}: RecipeCardProps) => {
  return (
    <Card className="hover:scale-105 ease-in duration-200 hover:cursor-pointer">
      <CardHeader >
        <CardTitle>{name}</CardTitle>
        <div className="flex items-center text-xs text-muted-foreground space-x-2">
          <div>
          {cuisineType} 
          </div>
          <Separator className="h-4" orientation="vertical" />
          <div>
          {mealType}
          </div>
          <Separator   className="h-4" orientation="vertical" />
          <div>
          {dishType}
          </div>
        </div>
        <h3 className=" text-xs text-muted-foreground">{Math.round(calories)} kcal</h3>
        <h3 className=" text-xs text-muted-foreground">{time} min</h3>
      </CardHeader>
      
      <CardContent>
        <img
          src={image}
          alt="Recipe Name"
          className="w-full h-48 object-cover rounded-sm"
        />
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <div className="flex flex-wrap gap-2 justify-around">
          {dietLabels.map((label) => (
            <Badge key={label}>{label}</Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 justify-between">
          {cautionLabels.map((label) => (
            <Badge variant="destructive" className="b" key={label}>
              {label}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};
