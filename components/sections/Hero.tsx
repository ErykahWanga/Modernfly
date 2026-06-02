import * as React from "react";
import { Sparkles, ArrowUpRight, ShieldCheck, Heart, Zap, RefreshCcw } from "lucide-react";
import { motion } from "motion/react";
import DeviceCluster from "@/src/components/DeviceCluster";

interface HeroProps {
  onNotify: (msg: string) => void;
  accentColor: string;
}

export function Hero({ onNotify, accentColor }: HeroProps) {
  return (
    <section id="hero-section" className="relative py-12 md:py-16 overflow-hidden">
      
      {/* Light glow elements */}
      <div className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-[5%] w-60 h-60 rounded-full bg-amber-400/5 blur-[90px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Texts Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200/60 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span className="text-[10px] font-bold tracking-wider font-mono uppercase text-emerald-800">
              NEXT-GEN VISUAL PREVIEW HUB
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08] font-sans">
              Create and preview exquisite <span className="bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent">luminous interfaces</span> instantly.
            </h1>
            <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed max-w-xl">
              Experience dynamic responsiveness, clean modern card presets, custom spacing densities, and live mockups. Engineered explicitly in high-fidelity bright themes with zero bloated dependencies.
            </p>
          </div>

          {/* Call to actions indicators */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#showcase"
              onClick={() => onNotify("🚀 Scrolling to the main interactive catalog")}
              className="px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs tracking-wider uppercase rounded-xl transition-all shadow-md shadow-slate-900/10 hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
            >
              Explore Showcase Catalog
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            
            <button
              onClick={() => {
                onNotify("✨ Generated pristine responsive layout blueprint");
              }}
              className="px-5 py-3 border border-slate-300 hover:border-slate-400 bg-white text-slate-700 font-semibold text-xs tracking-wider uppercase rounded-xl transition-all hover:bg-slate-50 cursor-pointer"
            >
              Configure Blueprint Setup
            </button>
          </div>

          {/* Social Proof Tags */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-slate-200/65 w-full">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-[11px] font-mono font-medium text-slate-500">100/100 Lighthouse Speed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-[11px] font-mono font-medium text-slate-500">Zero Tracker Overheads</span>
            </div>
            <div className="flex items-center gap-1.5">
              <RefreshCcw className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-[11px] font-mono font-medium text-slate-500">Dynamic Hot Rendering</span>
            </div>
          </div>

        </div>

        {/* Dynamic Graphic Stage Cluster Column */}
        <div className="lg:col-span-5 h-full min-h-[380px] lg:min-h-[440px] bg-slate-50/50 border border-slate-200/60 rounded-[32px] p-6 shadow-sm relative overflow-hidden flex items-center justify-center">
          
          {/* Internal ambient nodes */}
          <div className="absolute top-4 left-4 flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          </div>
          
          <div className="absolute top-4 right-4 text-[9px] font-mono text-slate-400">
            SYSTEM_RENDERING: HYBRID
          </div>

          <DeviceCluster />
        </div>

      </div>
    </section>
  );
}
