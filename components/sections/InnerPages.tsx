import * as React from "react";
import { INNER_PAGES } from "../../lib/constants";
import { FileText, ArrowRight, ShieldCheck } from "lucide-react";

interface InnerPagesProps {
  activePageId: string;
  onSelectPage: (id: string, label: string) => void;
  borderRadius: number;
}

export function InnerPages({ activePageId, onSelectPage, borderRadius }: InnerPagesProps) {
  return (
    <div className="flex flex-col gap-4">
      
      {/* Title */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-5 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
          <h2 className="text-base font-bold text-slate-900 font-sans tracking-wide">
            Interactive Auxiliary Pages
          </h2>
        </div>
        <span className="text-[10px] text-slate-400 font-mono text-right uppercase">
          Render dynamic sub-layouts
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {INNER_PAGES.map((page) => {
          const isSelected = activePageId === page.id;
          return (
            <div
              key={page.id}
              onClick={() => onSelectPage(page.id, page.title)}
              style={{ borderRadius: `${borderRadius}px` }}
              className={`border p-4.5 cursor-pointer transition-all flex flex-col justify-between hover:-translate-y-0.5 select-none ${
                isSelected
                  ? "bg-amber-50/5 border-amber-500 shadow-sm shadow-amber-500/10"
                  : "bg-white border-slate-200/50 hover:border-slate-300"
              }`}
            >
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <FileText className={`w-4 h-4 ${isSelected ? "text-amber-600" : "text-slate-450"}`} />
                  {isSelected && (
                    <span className="text-[8px] font-mono font-bold uppercase text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                      ACTIVE
                    </span>
                  )}
                </div>
                <h4 className="text-xs font-bold text-slate-900 tracking-wide font-sans">
                  {page.title}
                </h4>
                <p className="text-[11px] text-slate-400 font-light leading-normal">
                  {page.desc}
                </p>
              </div>

              <div className="flex items-center justify-end mt-4">
                <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-400 group-hover:text-slate-900 flex items-center gap-1">
                  Preview <ArrowRight className="w-3 h-3 text-slate-300" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
