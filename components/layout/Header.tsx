import * as React from "react";
import { Sparkles, Compass, MessageSquare, Layers, Laptop } from "lucide-react";
import { MagneticWrapper } from "../ui/MagneticWrapper";

interface HeaderProps {
  onOpenTerminal: () => void;
  accentColor: string;
}

export function Header({ onOpenTerminal, accentColor }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-slate-200/40 px-6 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand identity */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-slate-950 flex items-center justify-center text-white font-black text-sm shadow-sm transition-transform hover:rotate-12 cursor-pointer">
            M
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-900 tracking-wide font-sans">
              modernfly
            </span>
            <span className="text-[10px] font-mono text-slate-400 tracking-widest font-normal">
              PREVIEW SYSTEM
            </span>
          </div>
        </div>

        {/* Global links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#hero-section" className="text-xs font-semibold uppercase text-slate-500 hover:text-slate-950 tracking-wider transition-colors">
            Core Fold
          </a>
          <a href="#showcase" className="text-xs font-semibold uppercase text-slate-500 hover:text-slate-950 tracking-wider transition-colors">
            Showcase Hub
          </a>
          <a href="#features" className="text-xs font-semibold uppercase text-slate-500 hover:text-slate-950 tracking-wider transition-colors">
            Performance
          </a>
          <a href="#pricing" className="text-xs font-semibold uppercase text-slate-500 hover:text-slate-950 tracking-wider transition-colors">
            Rates
          </a>
        </nav>

        {/* Quick controls */}
        <div className="flex items-center gap-3">
          <MagneticWrapper>
            <button
              onClick={onOpenTerminal}
              className="px-4 py-2 text-xs font-bold font-mono tracking-wider text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            >
              LAUNCH CONSOLE
            </button>
          </MagneticWrapper>
        </div>

      </div>
    </header>
  );
}
