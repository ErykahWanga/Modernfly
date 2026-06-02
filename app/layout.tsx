import * as React from "react";
import "../src/index.css"; // Ensure Vite Tailwind compiles properly

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden selection:bg-emerald-100 selection:text-slate-900">
      
      {/* Absolute top grid decoration */}
      <div className="absolute inset-0 modernfly-mesh-pattern -z-20 pointer-events-none" />
      
      {children}
    </div>
  );
}
