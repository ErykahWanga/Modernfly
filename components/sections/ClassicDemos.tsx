import * as React from "react";
import { Layers, Activity, Server, Cpu, TrendingUp } from "lucide-react";

export function ClassicDemos() {
  const [activeTab, setActiveTab] = React.useState<"telemetry" | "infra">("telemetry");

  const STATS = [
    { label: "Uptime SLA", val: "99.982%", sub: "Global DNS check" },
    { label: "Active Pipelines", val: "1,204/sec", sub: "Parallel threads" },
    { label: "Response Delay", val: "11.4ms", sub: "Mean load delay" },
  ];

  return (
    <div id="classic-demos" className="bg-slate-50 border border-slate-200/60 rounded-[32px] p-6 flex flex-col gap-5 mt-4">
      
      {/* Group title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/40 pb-4">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-emerald-600" />
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-slate-800 font-sans tracking-wide">
              Infrastructure Sandbox Indicators
            </h3>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
              Mock metrics streaming controller
            </span>
          </div>
        </div>

        {/* Tab triggers */}
        <div className="flex bg-slate-200/60 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab("telemetry")}
            className={`px-3 py-1 text-[10px] font-mono uppercase rounded-lg transition-all cursor-pointer ${
              activeTab === "telemetry" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Stream Data
          </button>
          <button
            onClick={() => setActiveTab("infra")}
            className={`px-3 py-1 text-[10px] font-mono uppercase rounded-lg transition-all cursor-pointer ${
              activeTab === "infra" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Core Quotas
          </button>
        </div>
      </div>

      {activeTab === "telemetry" ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {STATS.map((stat, i) => (
            <div key={i} className="bg-white border border-slate-200 p-4.5 rounded-2xl shadow-sm hover:border-emerald-200/70 transition-colors">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                {stat.label}
              </span>
              <div className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-1">
                {stat.val}
                {i === 1 && <TrendingUp className="w-4 h-4 text-emerald-500 animate-bounce" />}
              </div>
              <span className="text-[10px] text-slate-400 block mt-1 font-light">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white border border-slate-200 p-5 rounded-2xl flex flex-col gap-3">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-slate-600 flex items-center gap-1">
              <Server className="w-3.5 h-3.5 text-slate-400" /> API Node Availability
            </span>
            <span className="text-emerald-600 font-bold">14 Online / 0 Offline</span>
          </div>
          
          {/* Progress bar visual model */}
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex gap-0.5">
            <div className="h-full bg-emerald-500 w-[70%]" />
            <div className="h-full bg-emerald-400 w-[15%]" />
            <div className="h-full bg-amber-400/80 w-[10%]" />
            <div className="h-full bg-slate-300 w-[5%]" />
          </div>

          <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
            <span>Primary DNS Load</span>
            <span>Usage Quota Reset: 2h 15m</span>
          </div>
        </div>
      )}

    </div>
  );
}
