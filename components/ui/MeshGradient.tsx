import * as React from "react";

export function MeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Absolute top glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-400/10 blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-amber-200/15 blur-[100px]" />
      
      {/* Central noise/grid simulation */}
      <div className="absolute inset-0 opacity-[0.015]" 
        style={{
          backgroundImage: `radial-gradient(#12101e 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  );
}
