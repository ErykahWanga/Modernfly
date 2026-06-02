import * as React from "react";
import { X, Play, RefreshCw, Terminal, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  onTriggerLog: (action: string) => void;
}

export function PreviewModal({
  isOpen,
  onClose,
  title,
  onTriggerLog
}: PreviewModalProps) {
  const [liveValue, setLiveValue] = React.useState("https://api.modernfly.run/v1/telemetry");
  const [responseStatus, setResponseStatus] = React.useState<"idle" | "loading" | "success">("idle");
  const [simulatedCore, setSimulatedCore] = React.useState(2);

  const handleExecute = () => {
    setResponseStatus("loading");
    onTriggerLog(`Injected request payload to ${liveValue} with core: ${simulatedCore}`);
    setTimeout(() => {
      setResponseStatus("success");
      onTriggerLog(`DNS pipeline executed successfully. Core return: 200 OK`);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="preview-modal-root" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/45 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
            className="w-full max-w-2xl bg-white border border-slate-200 shadow-2xl rounded-3xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-slate-800" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                  Global Telemetry Console: <span className="text-emerald-600">{title}</span>
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-slate-200/50 text-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Sandbox Elements */}
            <div className="p-6 space-y-6">
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Mock Node Endpoint Target
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={liveValue}
                    onChange={(e) => setLiveValue(e.target.value)}
                    className="flex-1 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl font-mono text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                  <button
                    onClick={handleExecute}
                    disabled={responseStatus === "loading"}
                    className="px-5 bg-slate-950 hover:bg-slate-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 disabled:opacity-50 transition-colors cursor-pointer"
                  >
                    {responseStatus === "loading" ? (
                      <RefreshCw className="w-4.5 h-4.5 animate-spin" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                    Execute
                  </button>
                </div>
              </div>

              {/* Slider simulation */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Simulation Cluster Cores
                  </label>
                  <span className="text-xs font-mono font-bold text-slate-800">{simulatedCore} Nodes</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={simulatedCore}
                  onChange={(e) => setSimulatedCore(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Status Output Box */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Terminal Response Output
                </span>
                <div className="bg-slate-950 p-4.5 rounded-2xl min-h-[110px] text-[11px] font-mono leading-relaxed flex flex-col gap-1.5 shadow-inner">
                  <div className="text-slate-500">[$] status --list</div>
                  {responseStatus === "idle" && (
                    <div className="text-slate-400 font-light">Idle. Configure payload settings above and execute.</div>
                  )}
                  {responseStatus === "loading" && (
                    <div className="text-emerald-400 flex items-center gap-2">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Fetching pipeline stream indices...
                    </div>
                  )}
                  {responseStatus === "success" && (
                    <>
                      <div className="text-emerald-400 flex items-center gap-1.5 font-bold">
                        <Check className="w-3.5 h-3.5" /> Pipeline Status: 200 OK (Loaded in 11.2ms)
                      </div>
                      <div className="text-slate-400">
                        {`{`}
                        <div className="pl-4">"instance": "modernfly-cluster-${simulatedCore}",</div>
                        <div className="pl-4">"latency": "11.2ms",</div>
                        <div className="pl-4">"payloadReady": true</div>
                        {`}`}
                      </div>
                    </>
                  )}
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3.5">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-950 transition-colors font-sans cursor-pointer"
              >
                Cancel Sandbox
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
