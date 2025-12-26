"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex h-[35px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-2 text-[14px] placeholder:text-white/60 outline-none",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
