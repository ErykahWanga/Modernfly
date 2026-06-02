import * as React from "react";
import { ListTodo, Check } from "lucide-react";

export default function MobileApp2Page() {
  return (
    <div className="p-8 bg-white max-w-lg mx-auto rounded-[32px] border border-slate-200 shadow-xl space-y-6">
      <div className="flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">Hf</span>
        <div className="flex flex-col">
          <h1 className="text-base font-bold text-slate-900 tracking-wide">HabitForge Pro</h1>
          <span className="text-[10px] font-mono text-slate-400">DEMO PAGE SUB-MODULE</span>
        </div>
      </div>

      <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col gap-3 text-xs text-slate-500 font-light">
        <p>A minimalist personal companion:</p>
        <div className="flex flex-col gap-2 mt-2 text-slate-800">
          <div className="flex items-center gap-2 bg-white px-3 py-2 border border-slate-150 rounded-xl">
            <span className="p-0.5 bg-emerald-500 rounded text-white flex items-center justify-center"><Check className="w-3 h-3" /></span>
            <span>Completed 45 minutes yoga session flow</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-3 py-2 border border-slate-150 rounded-xl">
            <span className="p-0.5 bg-slate-200 rounded text-slate-400 flex items-center justify-center"><Check className="w-3 h-3" /></span>
            <span className="text-slate-400 line-through">Drink 3 liters structural alkaline elements water</span>
          </div>
        </div>
      </div>
    </div>
  );
}
