import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, value, onChange, required,...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-[35px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-2 text-[14px] placeholder:text-white/60 outline-none",
        className
      )}
      ref={ref}
      {...props} 
      onChange={onChange}
      value={value}
      required={required}
      />)
  );
})
Input.displayName = "Input"

export { Input }
