import type * as React from "react";

import { cn } from "@/lib";

export type InputProps<Component extends React.ElementType = "input"> = {
  component?: Component;
  className?: string;
  isValidationError?: boolean;
} & TComponentPropsWithRef<Component>;

const InputBase = ({
  className,
  ref,
  isValidationError,
  component: Component = "input",
  ...props
}: InputProps) => (
  <Component
    className={cn(
      "flex h-12 max-md:h-10 w-full rounded-lg border-2 border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground max-md:placeholder:text-xs max-md:text-xs focus-visible:outline-none focus-visible:border-ring disabled:cursor-not-allowed disabled:bg-input-disabled disabled:text-text-disabled disabled:shadow-none",
      isValidationError && "border-border-error focus-visible:border-ring-error",
      className
    )}
    ref={ref}
    {...props}
  />
);

InputBase.displayName = "Input";

export const Input = InputBase as <Component extends React.ElementType = "input">(
  props: InputProps<Component>
) => React.ReactElement;
