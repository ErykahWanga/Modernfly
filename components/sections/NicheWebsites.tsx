import * as React from "react";
import { NICHE_DEMOS, DemoItem } from "@/lib/constants";
import { Card3DTilt } from "../ui/Card3DTilt";
import { Smartphone, PieChart, Layers, Laptop } from "lucide-react";

interface NicheWebsitesProps {
  filter: string;
  onSelect: (id: string, name: string) => void;
  activeId: string;
  borderRadius: number;
  isCompact: boolean;
}

export function NicheWebsites({
  filter,
  onSelect,
  activeId,
  borderRadius,
  isCompact
}: NicheWebsitesProps) {
  
  // Apply our search categorization filter
  const visibleDemos = NICHE_DEMOS.filter(
    (item) => filter === "all" || item.category === filter
  );

  const getIcon = (category: string) => {
    switch (category) {
      case "mobile":
        return <Smartphone className="w-5 h-5 text-emerald-600" />;
      case "saas":
        return <PieChart className="w-5 h-5 text-amber-600" />;
      default:
        return <Laptop className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      
      {/* Dynamic Group Title */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <h2 className="text-base font-bold text-slate-900 font-sans tracking-wide">
            Dynamic Niche Prototypes
          </h2>
        </div>
        <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">
          Select Card to render live
        </span>
      </div>

      {visibleDemos.length === 0 ? (
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center text-xs text-slate-400 font-light">
          No designs found matching the current Category filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {visibleDemos.map((demo) => {
            const isActive = activeId === demo.id;
            return (
              <div key={demo.id}>
                <Card3DTilt intensity={8}>
                <div
                  onClick={() => onSelect(demo.id, demo.title)}
                  style={{ borderRadius: `${borderRadius}px` }}
                  className={`border bg-white cursor-pointer transition-all ${
                    isActive 
                      ? "border-emerald-500 shadow-sm shadow-emerald-500/10 bg-emerald-50/5" 
                      : "border-slate-200/60 hover:border-slate-350"
                  } ${isCompact ? "p-4" : "p-6"}`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl">
                      {getIcon(demo.category)}
                    </div>
                    <span className="text-[9px] font-mono font-semibold tracking-wider text-slate-400 uppercase bg-slate-100 px-2 py-0.5 rounded-md">
                      {demo.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 tracking-wide text-sm font-sans flex items-center gap-1.5">
                      {demo.title}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping" />
                      )}
                    </h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {demo.subtitle}
                    </p>
                  </div>

                  {/* Micro metric footer data */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-sans font-light">
                      {demo.metricLabel}
                    </span>
                    <span className="font-mono font-bold text-slate-800">
                      {demo.metric}
                    </span>
                  </div>

                </div>
              </Card3DTilt>
            </div>
          );
        })}
        </div>
      )}

    </div>
  );
}
