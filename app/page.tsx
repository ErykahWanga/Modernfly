import * as React from "react";
import Layout from "./layout";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Navigation } from "../components/layout/Navigation";
import { Hero } from "../components/sections/Hero";
import { NicheWebsites } from "../components/sections/NicheWebsites";
import { ClassicDemos } from "../components/sections/ClassicDemos";
import { InnerPages } from "../components/sections/InnerPages";
import { BlogPages } from "../components/sections/BlogPages";
import { Features } from "../components/sections/Features";
import { Testimonials } from "../components/sections/Testimonials";
import { PreviewCard } from "../components/preview/PreviewCard";
import { PreviewModal } from "../components/preview/PreviewModal";

export default function Page() {
  const [currentFilter, setCurrentFilter] = React.useState("all");
  const [accentColor, setAccentColor] = React.useState("emerald");
  const [borderRadius, setBorderRadius] = React.useState(16);
  const [isCompact, setIsCompact] = React.useState(false);
  const [isConsoleOpen, setIsConsoleOpen] = React.useState(false);
  
  // Terminal activity streams
  const [logs, setLogs] = React.useState<string[]>([
    "System booted recursively in bright light config.",
    "Dynamic rendering indexes mounted successfully."
  ]);

  const triggerLog = (msg: string) => {
    const time = new Date().toLocaleTimeString();
    setLogs((prev) => [`[${time}] ${msg}`, ...prev].slice(0, 15));
  };

  // Keep track of shown product preview
  const [activePreviewId, setActivePreviewId] = React.useState("mobile-app-1");
  const [activePreviewTitle, setActivePreviewTitle] = React.useState("EcoPulse Runner");

  const handleSelectProduct = (id: string, title: string) => {
    setActivePreviewId(id);
    setActivePreviewTitle(title);
    triggerLog(`Switched active workspace node reference to: "${title}"`);
  };

  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        
        {/* Persistent bright header bar */}
        <Header 
          onOpenTerminal={() => {
            setIsConsoleOpen(true);
            triggerLog("Interactive terminal sandbox overlay launched.");
          }} 
          accentColor={accentColor} 
        />

        {/* Core page containers */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-10 flex flex-col gap-10">
          
          {/* I. Hero visual introduction */}
          <Hero 
            onNotify={(msg) => triggerLog(msg)} 
            accentColor={accentColor} 
          />

          {/* II. The Grid System containing Customizer LHS and central bento panels */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Hand Sidebar (Control Panel) */}
            <div className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-24">
              <Navigation
                currentFilter={currentFilter}
                onSetFilter={(cat) => {
                  setCurrentFilter(cat);
                  triggerLog(`Applied category search filter: ${cat.toUpperCase()}`);
                }}
                accentColor={accentColor}
                onSetAccentColor={(col) => {
                  setAccentColor(col);
                  triggerLog(`Updated global brand accent to: ${col.toUpperCase()}`);
                }}
                borderRadius={borderRadius}
                onSetBorderRadius={setBorderRadius}
                isCompact={isCompact}
                onSetCompact={setIsCompact}
                logs={logs}
                onClearLogs={() => setLogs([])}
              />
            </div>

            {/* Main Central Board & Active Preview Pane */}
            <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-10">
              
              {/* Product list with bento panels */}
              <div id="showcase" className="scroll-mt-24 space-y-6">
                <NicheWebsites
                  filter={currentFilter}
                  onSelect={handleSelectProduct}
                  activeId={activePreviewId}
                  borderRadius={borderRadius}
                  isCompact={isCompact}
                />
              </div>

              {/* Active preview panel carrying sandbox settings */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block border-b border-slate-100 pb-2">
                  Integrated Controller
                </span>
                <PreviewCard
                  id={activePreviewId}
                  title={activePreviewTitle}
                  borderRadius={borderRadius}
                  onOpenConsole={() => setIsConsoleOpen(true)}
                  onTriggerLog={triggerLog}
                />
              </div>

              {/* Auxiliary inner pages catalog list */}
              <InnerPages
                activePageId={activePreviewId}
                onSelectPage={handleSelectProduct}
                borderRadius={borderRadius}
              />

              {/* Performance dashboards / stat modules */}
              <ClassicDemos />

              {/* Visual Features list */}
              <Features />

              {/* Developer blog articles */}
              <BlogPages />

              {/* Quotes / Testimonials reviews */}
              <Testimonials />

            </div>

          </div>

        </main>

        {/* Global legal footer element */}
        <Footer />

        {/* Simulated Sandbox Terminal Panel */}
        <PreviewModal
          isOpen={isConsoleOpen}
          onClose={() => setIsConsoleOpen(false)}
          title={activePreviewTitle}
          onTriggerLog={triggerLog}
        />

      </div>
    </Layout>
  );
}
