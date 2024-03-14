import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CheckIcon, ClipboardCopyIcon } from "@radix-ui/react-icons";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { useState } from "react";

type CopyButtonProps = {
  text: string;
};

export const CopyButton = ({ text }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button variant="outline" size="icon" onClick={handleCopy}>
            {copied ? <CheckIcon /> : <ClipboardCopyIcon />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>Copy to clipboard</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
