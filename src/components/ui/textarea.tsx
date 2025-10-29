import * as React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.ComponentPropsWithoutRef<typeof TextareaAutosize> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <TextareaAutosize
        ref={ref}
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none",
          className
        )}
        minRows={1}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
