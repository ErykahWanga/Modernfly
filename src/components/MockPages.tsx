/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Shield, 
  Terminal, 
  Check, 
  Zap, 
  Mail, 
  Send, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Play, 
  Layout, 
  Sparkles, 
  Cpu, 
  Code2, 
  Briefcase 
} from 'lucide-react';

export function APIDocsPreview() {
  const [activeTab, setActiveTab2] = useState<'GET' | 'POST' | 'DELETE'>('GET');
  const codeExamples = {
    GET: `// Fetch current applet status
curl -X GET "https://api.applify.dev/v1/status" \\
  -H "Authorization: Bearer app_live_83k9a2"`,
    POST: `// Initialize new digital deployment instance
curl -X POST "https://api.applify.dev/v1/deploy" \\
  -H "Authorization: Bearer app_live_83k9a2" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Elysian Landing",
    "template": "SaaS_V3",
    "region": "us-west-1"
  }'`,
    DELETE: `// Terminate deployment session
curl -X DELETE "https://api.applify.dev/v1/sessions/sess_910" \\
  -H "Authorization: Bearer app_live_83k9a2"`
  };

  const responseExamples = {
    GET: `{
  "status": "online",
  "uptime": "99.998%",
  "latency": "14ms",
  "current_build": "v2.8.4"
}`,
    POST: `{
  "id": "dep_8a2f9",
  "status": "provisioning",
  "dns_mapping": "elysian.applify.app",
  "created_at": "2026-06-01T20:29:00Z"
}`,
    DELETE: `{
  "id": "sess_910",
  "status": "terminated",
  "active_connections": 0
}`
  };

  return (
    <div id="api-docs-preview-container" className="bg-[#0b0f19] text-gray-300 font-mono text-xs rounded-xl border border-slate-800/80 p-4 h-full flex flex-col shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/60 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <Terminal className="text-cyan-400 w-4 h-4 animate-pulse" />
          <span className="font-bold text-gray-200">Applify REST API v1.0</span>
        </div>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
        </div>
      </div>

      {/* Docs Body */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1 overflow-auto">
        {/* Sidebar */}
        <div className="md:col-span-4 border-r border-slate-800/40 pr-2 flex flex-col gap-1.5">
          <span className="text-[10px] text-gray-500 uppercase tracking-widest font-sans font-bold block mb-1">Endpoints</span>
          
          <button 
            onClick={() => setActiveTab2('GET')}
            className={`w-full text-left p-1.5 rounded flex items-center justify-between gap-1 transition-all ${activeTab === 'GET' ? 'bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400' : 'hover:bg-slate-800/40 text-gray-400'}`}
          >
            <span className="font-bold text-[10px] bg-cyan-500/20 text-cyan-400 px-1 rounded">GET</span>
            <span className="truncate flex-1 pl-1 text-[11px]">/v1/status</span>
          </button>

          <button 
            onClick={() => setActiveTab2('POST')}
            className={`w-full text-left p-1.5 rounded flex items-center justify-between gap-1 transition-all ${activeTab === 'POST' ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400' : 'hover:bg-slate-800/40 text-gray-400'}`}
          >
            <span className="font-bold text-[10px] bg-emerald-500/20 text-emerald-400 px-1 rounded">POST</span>
            <span className="truncate flex-1 pl-1 text-[11px]">/v1/deploy</span>
          </button>

          <button 
            onClick={() => setActiveTab2('DELETE')}
            className={`w-full text-left p-1.5 rounded flex items-center justify-between gap-1 transition-all ${activeTab === 'DELETE' ? 'bg-rose-500/10 text-rose-400 border-l-2 border-rose-400' : 'hover:bg-slate-800/40 text-gray-400'}`}
          >
            <span className="font-bold text-[10px] bg-rose-500/20 text-rose-400 px-1 rounded">DEL</span>
            <span className="truncate flex-1 pl-1 text-[11px]">/session</span>
          </button>
        </div>

        {/* Console / Request / Response */}
        <div className="md:col-span-8 flex flex-col gap-2 overflow-auto">
          <div>
            <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1 font-sans">Request curl</div>
            <pre className="bg-[#05070c] p-2.5 rounded border border-slate-900 overflow-x-auto text-[11px] leading-relaxed text-slate-300">
              {codeExamples[activeTab]}
            </pre>
          </div>
          <div>
            <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1 font-sans">Response (200 OK)</div>
            <pre className="bg-[#05070c] p-2.5 rounded border border-slate-900 overflow-x-auto text-[11px] leading-relaxed text-cyan-300/95">
              {responseExamples[activeTab]}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PricingPlansPreview() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      price: billingCycle === 'monthly' ? '$19' : '$14',
      period: 'mo',
      desc: 'Ideal for early indie prototypes.',
      features: ['1 Active Website', 'Basic Cloud Server Hosting', 'Standard CDN Network', 'Shared SSL Certificate'],
      popular: false,
      glow: 'border-slate-800'
    },
    {
      name: 'Applify Pro',
      price: billingCycle === 'monthly' ? '$49' : '$39',
      period: 'mo',
      desc: 'Best fit for scaling dynamic apps.',
      features: ['Unlimited Domain Aliases', 'Ultra high-speed edge CDN', 'API Endpoint generation', '24/7 dedicated workspace VIP support'],
      popular: true,
      glow: 'border-emerald-500/50 scale-102 ring-1 ring-emerald-500/20 shadow-lg shadow-emerald-500/5'
    }
  ];

  return (
    <div id="pricing-plans-preview-container" className="bg-[#0f1122]/95 border border-slate-800/80 rounded-2xl p-4 h-full flex flex-col text-slate-100 font-sans shadow-2xl relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col items-center mb-4 mt-2">
        <h3 className="text-sm font-bold text-gray-200 uppercase tracking-widest font-display text-emerald-400">Flexible Pricing</h3>
        <p className="text-[11px] text-gray-400 mb-2">Configure scale without hidden workspace premiums</p>
        
        {/* Toggle */}
        <div className="bg-slate-900/90 p-0.5 rounded-full border border-slate-800/50 flex items-center gap-0.5">
          <button 
            type="button"
            onClick={() => setBillingCycle('monthly')}
            className={`px-3 py-1 rounded-full text-[10px] font-medium transition-all ${billingCycle === 'monthly' ? 'bg-[#1e2238] text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
          >
            Monthly
          </button>
          <button 
            type="button"
            onClick={() => setBillingCycle('yearly')}
            className={`px-3 py-1 rounded-full text-[10px] font-medium transition-all ${billingCycle === 'yearly' ? 'bg-[#1e2238] text-emerald-400 shadow-sm' : 'text-gray-400 hover:text-white'}`}
          >
            Yearly <span className="text-[9px] text-emerald-400 font-bold ml-1">Save 20%</span>
          </button>
        </div>
      </div>

      {/* Plans list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 items-stretch overflow-auto">
        {plans.map((plan) => (
          <div key={plan.name} className={`bg-[#15182e] rounded-xl p-3 border flex flex-col justify-between ${plan.glow} relative`}>
            {plan.popular && (
              <span className="absolute -top-2 right-4 bg-emerald-500 text-slate-950 font-bold text-[9px] px-2 py-0.5 rounded-full font-display flex items-center gap-0.5">
                <Zap className="w-2.5 h-2.5 fill-slate-950" /> Most Popular
              </span>
            )}
            <div>
              <div className="flex items-baseline justify-between mb-0.5">
                <h4 className="font-bold text-sm text-white font-display">{plan.name}</h4>
              </div>
              <p className="text-[10px] text-gray-400 mb-2 leading-relaxed">{plan.desc}</p>
              
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-lg font-bold text-white font-display">{plan.price}</span>
                <span className="text-[10px] text-gray-500">/{plan.period}</span>
              </div>

              <div className="border-t border-slate-800-40 my-2"></div>

              <ul className="space-y-1.5">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-1 text-[10px] text-slate-300">
                    <Check className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              type="button"
              className={`w-full mt-4 py-1.5 rounded-lg text-[10px] font-bold font-display transition-all ${plan.popular ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-95 text-slate-950 shadow-sm shadow-emerald-500/10' : 'bg-slate-800 hover:bg-slate-700 text-gray-200'}`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactPagePreview() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: 'Inquiry', message: '' });
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 4000);
    }, 1200);
  };

  return (
    <div id="contact-page-preview-container" className="bg-[#0b0c16] border border-slate-800/80 rounded-2xl p-4 h-full flex flex-col text-slate-100 font-sans shadow-2xl overflow-auto justify-between">
      {/* Title */}
      <div className="flex items-center justify-between mb-3 border-b border-slate-800/50 pb-2">
        <div>
          <h3 className="text-xs font-bold font-display text-pink-400 flex items-center gap-1">
            <Mail className="w-3 h-3" /> Get In Touch
          </h3>
          <p className="text-[10px] text-gray-400">Instant connection to the Applify engineer network.</p>
        </div>
        <span className="text-[9px] bg-rose-500/15 text-rose-400 border border-rose-500/20 px-2 py-0.5 rounded-full font-mono">
          Online 24/7
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1 items-stretch">
        {/* Contact Info Panel */}
        <div className="md:col-span-4 bg-[#111326] rounded-xl p-3 border border-slate-800/40 flex flex-col justify-between text-[11px] space-y-2">
          <div>
            <h4 className="font-semibold text-white mb-2 font-display">Hub Office</h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                <span>+1 (555) 309-8800</span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800/60 pt-2 text-[10px] text-gray-400">
            <p className="font-semibold text-white mb-1">Direct Support</p>
            <p>support@applify.tech</p>
          </div>
        </div>

        {/* Dynamic Form */}
        <form onSubmit={handleSubmit} className="md:col-span-8 flex flex-col justify-between space-y-2.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label htmlFor="form-name-input" className="block text-[9px] text-gray-400 mb-1 uppercase tracking-wider">Your Name</label>
              <input 
                id="form-name-input"
                type="text" 
                required
                className="w-full bg-[#111326] border border-slate-800/60 rounded p-1.5 text-[11px] text-white focus:outline-none focus:border-pink-500"
                placeholder="Ada Lovelace"
                value={formState.name}
                onChange={e => setFormState({ ...formState, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="form-email-input" className="block text-[9px] text-gray-400 mb-1 uppercase tracking-wider">Business Email</label>
              <input 
                id="form-email-input"
                type="email" 
                required
                className="w-full bg-[#111326] border border-slate-800/60 rounded p-1.5 text-[11px] text-white focus:outline-none focus:border-pink-500"
                placeholder="ada@computing.org"
                value={formState.email}
                onChange={e => setFormState({ ...formState, email: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label htmlFor="form-message-text" className="block text-[9px] text-gray-400 mb-1 uppercase tracking-wider">Message</label>
            <textarea 
              id="form-message-text"
              required
              rows={2}
              className="w-full bg-[#111326] border border-slate-800/60 rounded p-1.5 text-[11px] text-white focus:outline-none focus:border-pink-500 resize-none"
              placeholder="Tell us what you want to construct with Applify..."
              value={formState.message}
              onChange={e => setFormState({ ...formState, message: e.target.value })}
            />
          </div>

          <button 
            type="submit"
            disabled={loading || isSent}
            className={`w-full py-1.5 rounded text-[11px] font-bold font-display transition-all flex items-center justify-center gap-1.5 ${isSent ? 'bg-emerald-500 text-slate-950' : 'bg-gradient-to-r from-pink-500 to-rose-500 hover:opacity-95 text-white shadow-md shadow-pink-500/10'}`}
          >
            {loading ? (
              <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
            ) : isSent ? (
              <>
                <Check className="w-3.5 h-3.5" /> Message Dispatched Securely!
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" /> Ship Inquiry
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export function WithoutSidebarPreview() {
  const [selectedStat, setSelectedStat] = useState<'users' | 'requests' | 'latency'>('users');

  const metricDetails = {
    users: { current: '4,831K', change: '+24.8%', icon: '👥' },
    requests: { current: '89.2M', change: '+18.2%', icon: '🚀' },
    latency: { current: '11.4ms', change: '-4.1%', icon: '⚡' }
  };

  return (
    <div id="without-sidebar-preview-container" className="bg-[#0c0d1b] border border-slate-800/80 rounded-2xl p-4 h-full flex flex-col text-slate-100 font-sans shadow-2xl relative overflow-hidden">
      {/* Dynamic Background Light Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Grid Header */}
      <div className="flex items-center justify-between mb-3 border-b border-slate-800/50 pb-2">
        <div className="flex items-center gap-2">
          <span className="p-1 bg-indigo-500/10 rounded border border-indigo-500/25">
            <Layout className="w-3 h-3 text-indigo-400" />
          </span>
          <div>
            <h4 className="text-xs font-bold font-display text-white">Full Width Sandbox Dashboard</h4>
            <p className="text-[9px] text-gray-400">Without sidebars, optimized layout space</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[9px] text-emerald-400 font-mono">Live Session</span>
        </div>
      </div>

      {/* Main Stats Row */}
      <div className="grid grid-cols-3 gap-2.5 mb-3">
        {(Object.keys(metricDetails) as Array<keyof typeof metricDetails>).map((key) => {
          const detail = metricDetails[key];
          const isSelected = selectedStat === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedStat(key)}
              className={`text-left p-2 rounded-xl transition-all border ${isSelected ? 'bg-gradient-to-br from-indigo-500/15 to-purple-500/5 border-indigo-500/50 shadow-md shadow-indigo-500/5' : 'bg-[#121429] border-slate-800/40 hover:bg-[#161a38]'}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[14px]">{detail.icon}</span>
                <span className={`text-[8px] font-bold py-0.5 px-1 rounded ${detail.change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                  {detail.change}
                </span>
              </div>
              <p className="text-[9px] text-gray-400 capitalize block truncate">{key}</p>
              <p className="text-[13px] font-bold text-white font-mono tracking-tight">{detail.current}</p>
            </button>
          );
        })}
      </div>

      {/* Simulated Chart Area */}
      <div className="flex-1 bg-[#101228] border border-slate-800/40 rounded-xl p-3 flex flex-col justify-between overflow-auto relative">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] font-bold text-gray-300 font-mono uppercase tracking-wider">
            Telemetry Feed — {selectedStat}
          </span>
          <span className="text-[8px] text-indigo-400">Auto-refresh intervals (1s)</span>
        </div>

        {/* Visual Simulated Graph Waves */}
        <div className="h-20 flex items-end gap-1.5 w-full pt-2">
          {Array.from({ length: 15 }).map((_, i) => {
            let heightClass = 'h-3';
            if (selectedStat === 'users') {
              heightClass = [
                'h-5', 'h-8', 'h-10', 'h-7', 'h-11', 'h-14', 'h-16', 'h-12', 'h-15', 'h-18', 'h-20', 'h-16', 'h-17', 'h-22', 'h-24'
              ][i] || 'h-8';
            } else if (selectedStat === 'requests') {
              heightClass = [
                'h-12', 'h-15', 'h-11', 'h-14', 'h-19', 'h-22', 'h-18', 'h-20', 'h-16', 'h-14', 'h-11', 'h-13', 'h-18', 'h-23', 'h-21'
              ][i] || 'h-12';
            } else {
              heightClass = [
                'h-24', 'h-20', 'h-18', 'h-16', 'h-15', 'h-12', 'h-10', 'h-9', 'h-11', 'h-7', 'h-8', 'h-6', 'h-5', 'h-4', 'h-3'
              ][i] || 'h-10';
            }
            return (
              <div 
                key={i} 
                className={`flex-1 rounded-sm bg-gradient-to-t from-indigo-600/20 to-indigo-400 transition-all duration-500`}
                style={{ height: `${parseInt(heightClass.replace('h-', '')) * 4}%` }}
              ></div>
            );
          })}
        </div>

        {/* Chart Legend */}
        <div className="flex justify-between text-[8px] text-gray-500 font-mono mt-2 border-t border-slate-800/30 pt-1.5">
          <span>20:20:00</span>
          <span>20:25:00</span>
          <span>Current (20:28:38)</span>
        </div>
      </div>
    </div>
  );
}

/**
 * A beautiful, lengthy simulated web page content used inside the scroll container configuration!
 */
export function LargeMobileMockpage() {
  return (
    <div className="bg-[#090b16] text-white p-4 space-y-6 font-sans text-[11px] leading-relaxed select-none">
      {/* Navigation Header */}
      <div className="flex items-center justify-between border-b border-slate-800/40 pb-2">
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 flex items-center justify-center text-[6px] font-extrabold text-slate-900">a</span>
          <span className="font-extrabold font-display text-[10px] tracking-tight">applify</span>
        </div>
        <div className="flex gap-2 text-gray-400 text-[8px]">
          <span>Features</span>
          <span>Pricing</span>
          <span>Docs</span>
        </div>
      </div>

      {/* Hero */}
      <div className="text-center space-y-2 py-2">
        <span className="bg-cyan-500/10 text-cyan-400 text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border border-cyan-400/20">
          ✨ Artificial Intelligence Engine
        </span>
        <h1 className="text-sm font-black font-display tracking-tight text-white leading-tight">
          Supercharge Digital Deployment
        </h1>
        <p className="text-gray-400 text-[9px] max-w-xs mx-auto leading-normal">
          Instant responsive SaaS frames, static pages, and headless microservices running globally.
        </p>
        <div className="flex justify-center gap-1.5 pt-1.5">
          <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold px-3 py-1 rounded text-[8px] shadow">
            Launch Console
          </span>
          <span className="bg-slate-800 text-gray-300 font-medium px-3 py-1 rounded text-[8px]">
            Read Docs
          </span>
        </div>
      </div>

      {/* Mini Mock Dashboard Visualization */}
      <div className="bg-[#12142d] border border-slate-800/50 rounded-lg p-2.5 space-y-2 shadow-lg">
        <div className="flex justify-between items-center">
          <span className="font-mono text-[8px] text-gray-400">WORKSPACE: default</span>
          <span className="bg-emerald-500/15 text-emerald-400 text-[7px] font-bold px-1.5 py-0.2 rounded">UP</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <div className="bg-[#191c3c] rounded p-1.5 flex flex-col justify-center">
            <span className="text-[7px] text-gray-400 uppercase">Requests</span>
            <span className="font-mono text-xs font-bold text-cyan-400">149.2K / min</span>
          </div>
          <div className="bg-[#191c3c] rounded p-1.5 flex flex-col justify-center animate-pulse">
            <span className="text-[7px] text-gray-400 uppercase">CDN Latency</span>
            <span className="font-mono text-xs font-bold text-purple-400">8.4ms avg</span>
          </div>
        </div>
        <div className="h-8 bg-[#090b16] rounded border border-slate-800/30 overflow-hidden flex items-end p-1 gap-1">
          <div className="h-6 w-full bg-indigo-500/40 rounded-sm"></div>
          <div className="h-3 w-full bg-indigo-500/35 rounded-sm"></div>
          <div className="h-5 w-full bg-indigo-500/50 rounded-sm"></div>
          <div className="h-7 w-full bg-indigo-500/45 rounded-sm"></div>
          <div className="h-4 w-full bg-cyan-500/40 rounded-sm"></div>
          <div className="h-8 w-full bg-cyan-500/60 rounded-sm"></div>
          <div className="h-5 w-full bg-indigo-500/50 rounded-sm"></div>
        </div>
      </div>

      {/* Feature grid */}
      <div className="space-y-3">
        <div className="text-center">
          <h2 className="text-[10px] uppercase tracking-widest font-bold text-cyan-400 font-display">Core Pillars</h2>
          <p className="text-[8px] text-gray-400">Everything needed for production SaaS scaling</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 bg-[#12142d] rounded-lg border border-slate-800/40">
            <span className="text-xs">⚡</span>
            <h3 className="font-bold text-white text-[9px] mt-1 mb-0.5">Static Optimization</h3>
            <p className="text-[8px] text-gray-400">Lightning-fast HTML render times globally.</p>
          </div>
          <div className="p-2 bg-[#12142d] rounded-lg border border-slate-800/40">
            <span className="text-xs">🛡️</span>
            <h3 className="font-bold text-white text-[9px] mt-1 mb-0.5">TLS / SSL Protection</h3>
            <p className="text-[8px] text-gray-400">Automated letsencrypt security mapping.</p>
          </div>
          <div className="p-2 bg-[#12142d] rounded-lg border border-slate-800/40">
            <span className="text-xs">📊</span>
            <h3 className="font-bold text-white text-[9px] mt-1 mb-0.5 font-display">Visual Streams</h3>
            <p className="text-[8px] text-gray-400">Realtime telemetry and logging pipelines.</p>
          </div>
          <div className="p-2 bg-[#12142d] rounded-lg border border-slate-800/40">
            <span className="text-xs">☁️</span>
            <h3 className="font-bold text-white text-[9px] mt-1 mb-0.5 font-display">Hybrid Compute</h3>
            <p className="text-[8px] text-gray-400">Serverless integration triggers globally.</p>
          </div>
        </div>
      </div>

      {/* User Testimonial */}
      <div className="bg-indigo-950/20 border border-slate-800/45 rounded-lg p-2.5 text-center relative overflow-hidden">
        <div className="text-xs text-amber-400 mb-1">★★★★★</div>
        <p className="italic text-gray-300 text-[8.5px] leading-relaxed">
          "Applify transformed how we deliver developer software previews. The scrolling nav widgets are intuitive!"
        </p>
        <span className="block mt-1 font-bold text-white text-[8px] font-display">— Lead Architect, DevGlobal</span>
      </div>

      {/* Direct Pricing Option info block */}
      <div className="text-center py-2 border-t border-slate-800/30 mt-4">
        <p className="text-gray-400 text-[8px]">Starts from $19 per user/mo</p>
        <p className="text-xs text-white font-black">Join 12,000+ top software developers</p>
        <p className="text-[8px] text-indigo-400 mt-1">Free 14-day prototype sandbox</p>
      </div>
    </div>
  );
}
