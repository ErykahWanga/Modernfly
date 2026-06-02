import * as React from "react";
import { Layers, Activity, Smartphone, CheckSquare, RefreshCcw, Send } from "lucide-react";

interface PreviewCardProps {
  id: string;
  title: string;
  onOpenConsole: () => void;
  onTriggerLog: (action: string) => void;
  borderRadius: number;
}

export function PreviewCard({ id, title, onOpenConsole, onTriggerLog, borderRadius }: PreviewCardProps) {
  const [inputText, setInputText] = React.useState("");
  const [isSent, setIsSent] = React.useState(false);

  const handleSendLivePayload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    setIsSent(true);
    onTriggerLog(`Transmitting key telemetry text block: "${inputText}"`);
    setTimeout(() => {
      setIsSent(false);
      setInputText("");
      onTriggerLog(`Receiver node confirmed buffer ingestion.`);
    }, 1200);
  };

  return (
    <div
      style={{ borderRadius: `${borderRadius}px` }}
      className="bg-white border border-slate-200/60 p-6 flex flex-col gap-6 shadow-sm shadow-slate-100/50"
    >
      
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-emerald-500" />
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-slate-900 font-sans tracking-wide">
              Selected: <span className="text-emerald-700">{title}</span>
            </h3>
            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">
              Live Workspace Controller
            </span>
          </div>
        </div>

        <button
          onClick={onOpenConsole}
          className="px-3.5 py-1.5 text-[10px] font-mono uppercase bg-slate-950 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-sm self-start cursor-pointer"
        >
          Open Simulator Sandbox
        </button>
      </div>

      {/* Render sub view layouts depending on the active ID */}
      {id === "api-docs" ? (
        <div className="space-y-4">
          <div className="p-4 bg-slate-950 rounded-2xl font-mono text-[11px] text-slate-300 space-y-2 leading-relaxed">
            <div className="text-emerald-400">GET /v1/telemetry/nodes HTTP/1.1</div>
            <div>Host: api.modernfly.run</div>
            <div>Authorization: Bearer mfly_live_9d8s2</div>
            <div className="pt-2 border-t border-white/5 text-slate-500">
              Response: Status 200 OK
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[9px] font-mono text-slate-400 uppercase">Interactive Query Sandbox</span>
            <form onSubmit={handleSendLivePayload} className="flex gap-2">
              <input
                type="text"
                placeholder="Enter search parameters or filter tag..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 bg-slate-50 border border-slate-200 px-3.5 py-2 text-xs rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-800"
              />
              <button
                type="submit"
                disabled={isSent}
                className="p-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-xl transition-all flex items-center justify-center disabled:opacity-50 cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      ) : id === "pricing" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-50/50 border border-slate-200 p-4.5 rounded-2xl text-center space-y-1.5">
            <span className="text-[9px] font-mono tracking-wider text-slate-400 uppercase block">Developer Core</span>
            <div className="text-xl font-black text-slate-900">$29/mo</div>
            <p className="text-[10px] text-slate-400 font-light">Up to 4 global active DNS nodes.</p>
          </div>
          <div className="bg-emerald-500 text-slate-950 border border-emerald-600 p-4.5 rounded-2xl text-center space-y-1.5 shadow-sm shadow-emerald-500/10">
            <span className="text-[9px] font-mono tracking-wider text-emerald-800 uppercase block">Scale Enterprise</span>
            <div className="text-xl font-black">$149/mo</div>
            <p className="text-[10px] text-emerald-950/80 font-normal">Infinite clusters & continuous SLA.</p>
          </div>
        </div>
      ) : id === "contact" ? (
        <div className="space-y-4">
          <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex items-start gap-3">
            <CheckSquare className="w-4.5 h-4.5 text-emerald-600 mt-0.5" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-emerald-800">Operational Nodes Status</span>
              <p className="text-[11px] text-emerald-600 font-light leading-relaxed">
                Direct client ticketing queries are fully online. Typical initial response latency is strictly under 14 minutes.
              </p>
            </div>
          </div>
          <button
            onClick={() => onTriggerLog("Direct Support Pipeline contact form initiated.")}
            className="w-full py-3 border border-slate-200 hover:border-slate-350 text-slate-700 bg-white hover:bg-slate-50 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            Initiate Contact Node Pipeline
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="aspect-video bg-slate-100 border border-slate-200 rounded-[20px] flex items-center justify-center relative overflow-hidden">
            <Smartphone className="w-12 h-12 text-slate-300 animate-pulse" />
            
            <div className="absolute inset-x-0 bottom-0 bg-white/70 backdrop-blur-sm border-t border-slate-200/50 p-3 flex items-center justify-between text-[11px]">
              <span className="text-slate-500 font-mono">RENDER_QUALITY: ULTRA</span>
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                🟢 Live Dynamic Syncing
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-xs font-mono text-slate-400">
            <div className="flex flex-col bg-slate-50 p-2.5 rounded-xl border border-slate-150">
              <span>ACTIVE CORES</span>
              <strong className="text-slate-800 font-bold block text-sm mt-0.5">8 Clusters</strong>
            </div>
            <div className="flex flex-col bg-slate-50 p-2.5 rounded-xl border border-slate-150">
              <span>DNS LATENCY</span>
              <strong className="text-slate-800 font-bold block text-sm mt-0.5">0.45 ms</strong>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
