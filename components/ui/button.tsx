"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex justify-center items-center rounded-full whitespace-nowrap text-[14px] font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default: "bg-accent text-primary hover:bg-accent-hover hover:accent-glow transform-gpu",
        primary: "bg-primary text-white",
        outline: "border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary",
      },
      size: {
        default: "h-[35px] px-4",
        md: "h-[35px] px-4",
        lg: "h-[46px] px-6 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  asChild?: boolean;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp: React.ElementType = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref as any}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
