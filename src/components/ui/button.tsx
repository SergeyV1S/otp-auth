import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

import { Spinner } from "./spinner";

const buttonVariants = cva(
  "inline-flex relative items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        contained_primary:
          "bg-blue-500 text-white hover:bg-hover-primary focus:bg-brand focus:border focus:border-border-light disabled:opacity-60",
        text_primary:
          "text-blue-500 bg-transparent hover:bg-blue-100 hover:text-hover-primary focus:text-brand focus:border focus:border-border-light disabled:opacity-60",
        link_primary:
          "text-text-secondary px-0 w-fit no-underline relative before:content-[''] before:bottom-[2px] before:transition-all before:duration-200 before:left-0 before:absolute before:rounded-xl before:w-0 before:h-[2px] before:bg-blue-500 focus:before:bg-blue-600 focus:text-blue-600 hover:text-blue-500 hover:before:bg-blue-500 hover:before:w-full disabled:opacity-60 flex items-center gap-2 duration-200 p-0",
        outline_secondary:
          "text-text-secondary bg-transparent border border-slate-200 hover:bg-border-light hover:border-slate-300 disabled:opacity-60",
        contained_secondary:
          "text-text-secondary bg-transparent hover:border-light hover:text-slate-600 focus:text-slate-600 disabled:opacity-60",
        link_secondary:
          "text-text-secondary px-0 w-fit no-underline relative inline-block before:content-[''] before:bottom-[2px] before:transition-all before:duration-200 before:left-0 before:absolute before:rounded-xl before:w-0 before:h-[2px] before:bg-text-secondary before:inline-block focus:before:bg-slate-600 focus:text-slate-600 hover:text-slate-800 hover:before:bg-slate-800 hover:before:w-full disabled:opacity-60"
      },
      size: {
        default: "h-11 py-2 px-4 space-x-2 rounded-lg",
        xs: "h-6 rounded-md text-xs",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 py-4 px-8 space-x-2 rounded-2xl",
        icon: "h-9 w-9 border-none",
        xl: "h-14 rounded-2xl max-md:h-10 max-md:text-xs"
      }
    },
    defaultVariants: {
      variant: "contained_primary",
      size: "default"
    }
  }
);

const Button = ({
  className,
  variant,
  size,
  loading,
  disabled,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
  }) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot='button'
      disabled={loading || disabled}
      className={cn(buttonVariants({ variant, size, className }), "cursor-pointer")}
      {...props}
    >
      {loading && <Spinner size={16} />}
      {!loading && children}
    </Comp>
  );
};

export { Button, buttonVariants };
