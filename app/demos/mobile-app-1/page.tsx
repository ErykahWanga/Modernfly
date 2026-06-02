import * as React from "react";
import { ArrowLeft, Clock, Zap, Heart } from "lucide-react";

export default function MobileApp1Page() {
  return (
    <div className="p-8 bg-white max-w-lg mx-auto rounded-[32px] border border-slate-200 shadow-xl space-y-6">
      <div className="flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">Eco</span>
        <div className="flex flex-col">
          <h1 className="text-base font-bold text-slate-900 tracking-wide">EcoPulse Runner</h1>
          <span className="text-[10px] font-mono text-slate-400">DEMO PAGE SUB-MODULE</span>
        </div>
      </div>

      <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col gap-4 text-xs text-slate-500 font-light">
        <p>Continuous telemetry updates representing biometric fitness calculations:</p>
        
        <div className="grid grid-cols-2 gap-3.5 mt-2 text-slate-800">
          <div className="p-3 bg-white border border-slate-150 rounded-xl space-y-1">
            <span className="text-[9px] font-mono font-medium text-slate-400 block upper">SPORTS HEARTRATE</span>
            <strong className="text-sm font-black text-slate-900">144 BPM</strong>
          </div>
          <div className="p-3 bg-white border border-slate-150 rounded-xl space-y-1">
            <span className="text-[9px] font-mono font-medium text-slate-400 block upper">CALORIE FLOWS</span>
            <strong className="text-sm font-black text-slate-900">420 kCal</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
