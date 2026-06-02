import * as React from "react";
import { FEATURES } from "../../lib/constants";
import { CheckCircle2, Award, Zap, Compass } from "lucide-react";

export function Features() {
  const ICONS = [
    <Zap className="w-5 h-5 text-emerald-600" />,
    <Compass className="w-5 h-5 text-emerald-600" />,
    <Award className="w-5 h-5 text-emerald-600" />,
  ];

  return (
    <div id="features" className="flex flex-col gap-5 py-6">
      
      {/* Visual Header */}
      <div className="flex flex-col gap-1.5 border-b border-slate-100 pb-3">
        <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-emerald-600 block">
          CORE SPEED UTILITY
        </span>
        <h2 className="text-xl font-extrabold text-slate-900 tracking-tight font-sans">
          State of the Art Core Parameters
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {FEATURES.map((feat, i) => (
          <div key={i} className="bg-slate-50 border border-slate-200/50 p-5 rounded-2xl flex flex-col gap-3.5">
            <div className="p-2.5 bg-white border border-slate-200 rounded-xl self-start">
              {ICONS[i] || <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
            </div>
            
            <div className="space-y-1">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-sans tracking-wide">
                {feat.title}
              </h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                {feat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
