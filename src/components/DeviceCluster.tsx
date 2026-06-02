/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Laptop, 
  Smartphone, 
  Grid, 
  Layers, 
  Activity, 
  TrendingUp, 
  UserCheck, 
  ArrowUpRight 
} from 'lucide-react';

export default function DeviceCluster() {
  return (
    <div id="device-cluster-isometric-container" className="relative w-full h-[380px] sm:h-[450px] md:h-[500px] flex items-center justify-center overflow-visible select-none">
      
      {/* Absolute background UV grid light trails */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:14px_24px] rounded-2xl pointer-events-none"></div>
      
      {/* Interactive 3D perspective floor shadow & cyan glowing ring connector */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[340px] h-[60px] bg-cyan-500/10 rounded-full blur-xl glow-cyan animate-pulse"></div>
      
      {/* Cyan glowing light ring connecting everything */}
      <svg className="absolute bottom-1 w-[380px] h-[90px] text-cyan-400 opacity-60 pointer-events-none" viewBox="0 0 300 80">
        <ellipse 
          cx="150" 
          cy="40" 
          rx="130" 
          ry="30" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeDasharray="6 4" 
          className="animate-[spin_40s_linear_infinite]"
        />
        <ellipse 
          cx="150" 
          cy="40" 
          rx="125" 
          ry="28" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.7" 
          className="animate-pulse"
        />
      </svg>

      {/* DEVICE 1: LARGE BEZEL-LESS TABLET */}
      {/* Displays gradient landing page (corresponding to image_0.png styled layout) */}
      <motion.div 
        id="bezelless-mock-tablet"
        className="absolute z-20 left-4 sm:left-12 top-4 w-[240px] sm:w-[280px] h-[170px] sm:h-[200px] bg-slate-950 rounded-2xl p-2.5 shadow-2xl border border-slate-700/50"
        style={{
          transform: 'perspective(1000px) rotateX(12deg) rotateY(18deg) rotateZ(-6deg)',
          transformStyle: 'preserve-3d'
        }}
        animate={{ 
          y: [0, -12, 0],
          rotateX: [12, 10, 12],
          rotateY: [18, 21, 18],
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        whileHover={{
          scale: 1.05,
          z: 30,
          boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.4)"
        }}
      >
        <div className="relative w-full h-full bg-gradient-to-br from-[#121131] to-[#040212] rounded-xl overflow-hidden p-2.5 flex flex-col justify-between border border-slate-800/40">
          
          {/* Tablet Status Header */}
          <div className="flex items-center justify-between border-b border-slate-800/40 pb-1">
            <span className="text-[7px] text-gray-400 font-mono">Applify Slate-Beta</span>
            <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
          </div>
          
          {/* Gradient Landing Page content mockup */}
          <div className="flex-1 flex flex-col justify-center text-center py-2 relative">
            <div className="absolute top-1 right-2 w-8 h-8 rounded-full bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-[10px] animate-spin">💠</div>
            <div className="space-y-1">
              <p className="text-[10px] sm:text-[11px] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Luminous UI Framework
              </p>
              <p className="text-[6px] sm:text-[7px] text-slate-300 max-w-[150px] mx-auto leading-relaxed">
                Build beautiful websites in half the time with zero configuration headers and footers.
              </p>
            </div>

            {/* Interactive Looking Pill buttons */}
            <div className="flex justify-center gap-1 mt-2">
              <span className="bg-cyan-500 text-slate-950 text-[5px] font-extrabold px-1.5 py-0.5 rounded-sm shadow">Live Demo</span>
              <span className="border border-slate-700 text-slate-300 text-[5px] px-1.5 py-0.5 rounded-sm">Learn More</span>
            </div>
          </div>

          {/* Quick Metrics at bottom */}
          <div className="grid grid-cols-3 gap-1 pt-1 border-t border-slate-800/30 text-[6px] text-gray-500">
            <div>
              <p className="font-mono text-white">99.98%</p>
              <p>Reliability</p>
            </div>
            <div>
              <p className="font-mono text-white">0.05ms</p>
              <p>TTFB Edge</p>
            </div>
            <div>
              <p className="font-mono text-white">142K</p>
              <p>Active Nodes</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* DEVICE 2: SLEEK MODERN SMARTPHONE */}
      {/* Displays blue dashboard mockup (metrics & progress indicators) */}
      <motion.div 
        id="bezelless-mock-smartphone"
        className="absolute z-30 right-4 sm:right-16 top-24 w-[110px] sm:w-[130px] h-[210px] sm:h-[250px] bg-slate-950 rounded-2xl p-2 shadow-2xl border border-slate-700/50"
        style={{
          transform: 'perspective(1000px) rotateX(10deg) rotateY(-18deg) rotateZ(8deg)',
          transformStyle: 'preserve-3d'
        }}
        animate={{ 
          y: [-5, 8, -5],
          rotateX: [10, 12, 10],
          rotateY: [-18, -15, -18],
        }}
        transition={{ 
          duration: 5.5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        whileHover={{
          scale: 1.05,
          z: 40,
          boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.4)"
        }}
      >
        <div className="relative w-full h-full bg-[#0a0f26] rounded-[14px] overflow-hidden p-2 flex flex-col justify-between border border-cyan-500/10">
          
          {/* Bezel details (Speaker / Bar) */}
          <div className="w-12 h-3 bg-slate-950 rounded-full mx-auto -mt-1 flex items-center justify-center gap-1 relative z-40">
            <span className="w-5 h-0.5 bg-slate-800 rounded-full"></span>
            <span className="w-1 h-1 bg-slate-800 rounded-full"></span>
          </div>

          <div className="flex-1 mt-1 flex flex-col justify-between">
            {/* Header section with blue theme */}
            <div className="flex items-center justify-between">
              <span className="text-[7px] font-bold text-cyan-400">Applify Hub Live</span>
              <Activity className="w-2.5 h-2.5 text-cyan-400 animate-pulse" />
            </div>

            {/* Current revenue or graph dashboard component mockup */}
            <div className="bg-[#10193f] rounded-lg p-1.5 border border-cyan-500/20 text-indigo-100 flex flex-col gap-0.5 mt-2">
              <span className="text-[5px] text-cyan-300 uppercase block tracking-wider">Estimated Scaling Profit</span>
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-bold font-mono text-white">$14,902.10</span>
                <span className="text-[5.5px] font-bold text-green-400">+12%</span>
              </div>
              
              {/* Mini Sparkline graph */}
              <div className="h-6 flex items-end gap-0.5 mt-1">
                <div className="h-2 w-full bg-cyan-400/30 rounded-sm"></div>
                <div className="h-3 w-full bg-cyan-400/45 rounded-sm"></div>
                <div className="h-5 w-full bg-cyan-400/60 rounded-sm"></div>
                <div className="h-2 w-full bg-cyan-400/20 rounded-sm"></div>
                <div className="h-4 w-full bg-cyan-400/50 rounded-sm"></div>
                <div className="h-6 w-full bg-emerald-400/80 rounded-sm"></div>
              </div>
            </div>

            {/* Simulated circular progress dials in smartphone app */}
            <div className="grid grid-cols-2 gap-1.5 mt-2">
              <div className="bg-[#0f1430] p-1.5 rounded-lg border border-slate-800/60 flex flex-col items-center justify-center">
                <span className="text-[4.5px] text-gray-400">CPU Usage</span>
                <div className="relative w-7 h-7 flex items-center justify-center mt-1">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="14" cy="14" r="11" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2.5" />
                    <circle cx="14" cy="14" r="11" fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeDasharray="69" strokeDashoffset="24" />
                  </svg>
                  <span className="absolute text-[6px] font-bold font-mono text-white">65%</span>
                </div>
              </div>
              <div className="bg-[#0f1430] p-1.5 rounded-lg border border-slate-800/60 flex flex-col items-center justify-center">
                <span className="text-[4.5px] text-gray-400">Node Sync</span>
                <div className="relative w-7 h-7 flex items-center justify-center mt-1">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="14" cy="14" r="11" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2.5" />
                    <circle cx="14" cy="14" r="11" fill="none" stroke="#10b981" strokeWidth="2.5" strokeDasharray="69" strokeDashoffset="7" />
                  </svg>
                  <span className="absolute text-[6px] font-bold font-mono text-white">90%</span>
                </div>
              </div>
            </div>

            {/* Dynamic Status Action */}
            <div className="mt-2 text-center">
              <span className="bg-[#22d3ee]/10 text-[#22d3ee] border border-[#22d3ee]/20 font-bold block py-1.5 text-[6.5px] uppercase tracking-wide rounded-md animate-pulse">
                System Active
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* DEVICE 3: BRUSHED ALUMINUM DESKTOP COMPUTER PUCK */}
      {/* Near the bottom, connected by a cyan glowing light ring */}
      <motion.div 
        id="desktop-puck-hardware"
        className="absolute z-40 bottom-12 w-[110px] sm:w-[130px] h-[55px] sm:h-[65px] bg-gradient-to-b from-[#b0cbd1] to-[#6e858a] rounded-xl p-0.5 shadow-2xl border-t border-white/20"
        style={{
          transform: 'perspective(1000px) rotateX(15deg) rotateY(5deg) rotateZ(1deg)',
        }}
        animate={{ 
          y: [0, -6, 0],
        }}
        transition={{ 
          duration: 4.8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        whileHover={{
          scale: 1.08,
          boxShadow: "0 22px 35px rgba(6, 182, 212, 0.3)"
        }}
      >
        <div className="relative w-full h-full bg-gradient-to-b from-[#e2eff2] to-[#8da6ac] rounded-[10px] flex flex-col justify-between p-1.5 shadow-inner">
          {/* Stylized Apple-like high-finish branding or indicator */}
          <div className="flex justify-between items-center px-1">
            <span className="text-[6.5px] font-extrabold text-[#3a4f54] tracking-widest font-display uppercase">Applify Studio</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 glow-cyan animate-pulse"></span>
          </div>

          {/* Brushed metallic aluminum texture details */}
          <div className="w-full flex justify-center gap-1.5 my-2">
            <span className="w-1.5 h-1.5 rounded-lg bg-slate-900/60 shadow"></span>
            <span className="w-1.5 h-1.5 rounded-lg bg-slate-900/60 shadow"></span>
            <span className="w-1.5 h-1.5 rounded-lg bg-slate-900/60 shadow"></span>
          </div>

          {/* Connected ring feedback detail at absolute bottom */}
          <div className="flex items-center justify-between border-t border-slate-300/40 pt-1 text-[5px] text-[#425e63] font-mono font-bold">
            <span>PCIe x16 Sub-Link</span>
            <span>OK</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
