import * as React from "react";
import { BLOG_PAGES } from "@/lib/constants";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";

export function BlogPages() {
  return (
    <div className="flex flex-col gap-4">
      
      {/* Title */}
      <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
        <span className="w-1.5 h-5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
        <h2 className="text-base font-bold text-slate-900 font-sans tracking-wide flex items-center gap-1.5">
          Aesthetic Journal <span className="text-[10px] text-slate-400 font-mono tracking-widest font-normal uppercase mt-0.5">/ Design & Speeds</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {BLOG_PAGES.map((blog, i) => (
          <div key={i} className="bg-white border border-slate-200/50 p-5 rounded-[20px] flex flex-col justify-between group hover:border-blue-300 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {blog.date}
                </span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
              
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-wide font-sans group-hover:text-blue-600 transition-colors">
                {blog.title}
              </h3>
              
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                {blog.snippet}
              </p>
            </div>

            <div className="mt-5 flex justify-end">
              <button 
                onClick={() => alert(`Opening tech journal: ${blog.title}`)}
                className="inline-flex items-center gap-1.5 text-[10px] font-bold font-mono tracking-wider uppercase text-slate-400 group-hover:text-slate-900 cursor-pointer"
              >
                Read Document <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-slate-900" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
