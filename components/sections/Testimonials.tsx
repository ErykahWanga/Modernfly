import * as React from "react";
import { TESTIMONIALS } from "../../lib/constants";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  return (
    <div className="flex flex-col gap-4">
      
      {/* Title */}
      <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
        <span className="w-1.5 h-5 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
        <h2 className="text-base font-bold text-slate-900 font-sans tracking-wide">
          Developer Testimonials
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="bg-white border border-slate-200/50 p-6 rounded-3xl flex flex-col justify-between gap-6 relative overflow-hidden">
            <Quote className="absolute top-4 right-4 w-12 h-12 text-slate-100 pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 font-light leading-relaxed italic relative z-10">
                "{t.quote}"
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-950 font-bold text-white text-[11px] flex items-center justify-center">
                {t.author.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-900 tracking-wide font-sans">{t.author}</span>
                <span className="text-[10px] font-mono text-slate-400">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
