import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Nutrients = {
  label: string;
  total: number;
  unit: string;
};

type RecipeContentProps = {
  ingredients: string[];
  author: string;
  url: string;
  nutrients: Nutrients[];
};

export const RecipeContent = ({
  ingredients,
  author,
  url,
  nutrients = [],
}: RecipeContentProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Ingredients</AccordionTrigger>
        <AccordionContent>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Nutrients</AccordionTrigger>
        <AccordionContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Label</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {nutrients.map((n) => (
                <TableRow key={n.label}>
                  <TableCell className="font-medium">{n.label}</TableCell>
                  <TableCell>
                    {n.total.toFixed(2)}
                    {n.unit}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Preparation</AccordionTrigger>
        <AccordionContent>
          This recipe is brought to you by <b>{author}</b>. You can find the
          preparation instructions {" "}
          <a className="text-primary " href={url} target="_blank">
            here
          </a>
          .
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
