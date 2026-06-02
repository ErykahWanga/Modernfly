import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "mono";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium font-sans tracking-wide rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/50 active:scale-[0.98] select-none",
          {
            // Primary - Dynamic Bright Lime / Vibrant Emerald
            "bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20":
              variant === "primary",
            // Secondary - Slick Light Gray
            "bg-slate-100 hover:bg-slate-200 text-slate-900 shadow-sm border border-slate-200/50":
              variant === "secondary",
            // Outline - Pristine border with smooth hover
            "bg-transparent border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400":
              variant === "outline",
            // Mono - Tech aesthetic
            "bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs tracking-wider border border-slate-800":
              variant === "mono",
          },
          {
            "px-3 py-1.5 text-xs": size === "sm",
            "px-5 py-2.5 text-sm": size === "md",
            "px-7 py-3.5 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
