import * as React from "react";
import { cn } from "../../lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  className?: string;
}

export function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-6 shadow-sm shadow-slate-100/50",
        {
          "transition-all duration-300 hover:shadow-md hover:shadow-emerald-500/5 hover:border-emerald-500/25 hover:-translate-y-0.5":
            hoverEffect,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
