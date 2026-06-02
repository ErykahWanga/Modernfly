import * as React from "react";
import { Cpu, Server, Play } from "lucide-react";

export default function SaaSPage() {
  return (
    <div className="p-8 bg-white max-w-lg mx-auto rounded-[32px] border border-slate-200 shadow-xl space-y-6">
      <div className="flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs">Qf</span>
        <div className="flex flex-col">
          <h1 className="text-base font-bold text-slate-900 tracking-wide">QuantumFlow SaaS</h1>
          <span className="text-[10px] font-mono text-slate-400">DEMO PAGE SUB-MODULE</span>
        </div>
      </div>

      <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col gap-4 text-xs text-slate-500 font-light">
        <p>Dynamic streaming server metrics sandbox interface:</p>
        <div className="space-y-2 mt-1">
          <div className="flex justify-between font-mono text-slate-700 text-[11px]">
            <span>Active Broker Clusters:</span>
            <span>4 Regions</span>
          </div>
          <div className="flex justify-between font-mono text-slate-700 text-[11px]">
            <span>Processing Rate:</span>
            <span>42,000 requests/ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
