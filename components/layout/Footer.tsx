import * as React from "react";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/50 py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Author information & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-sm font-bold text-slate-900 tracking-wide">
            modernfly
          </span>
          <p className="text-xs text-slate-400 font-light font-sans text-center md:text-left">
            © 2026 Modernfly Hub. Released under Apache-2.0. Clean, bright interfaces built for lightning speed.
          </p>
        </div>

        {/* Legal credentials */}
        <div className="flex items-center gap-6 text-xs text-slate-400">
          <span className="hover:text-slate-900 cursor-pointer transition-colors">Global Nodes</span>
          <span className="hover:text-slate-900 cursor-pointer transition-colors">Security Rules</span>
          <span className="hover:text-slate-900 cursor-pointer transition-colors">API SLA Status</span>
        </div>

      </div>
    </footer>
  );
}
