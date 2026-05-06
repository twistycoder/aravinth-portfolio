"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity as ActivityIcon, 
  Code2, 
  GitPullRequest, 
  Star, 
  Terminal,
  Cpu,
  Monitor,
  Zap,
  Globe,
  Radio
} from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

const STATS = [
  { label: "Repositories", value: "48+", icon: Github, delay: 0.1 },
  { label: "Contributions", value: "1.2k+", icon: ActivityIcon, delay: 0.2 },
  { label: "Pull Requests", value: "150+", icon: GitPullRequest, delay: 0.3 },
  { label: "Stars Earned", value: "85+", icon: Star, delay: 0.4 }
];

const LOGS = [
  "Synchronizing with GitHub API...",
  "Fetching repository metadata...",
  "Analyzing commit frequency...",
  "Updating contribution heatmaps...",
  "Caching real-time metrics...",
  "System healthy. 99.9% uptime."
];

function StatCard({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: stat.delay }}
      className="group relative p-8 rounded-[2rem] border border-border bg-background/40 backdrop-blur-xl hover:border-primary/30 transition-all duration-500 overflow-hidden"
    >
      {/* Hover Glow */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(var(--primary), 0.05), transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="p-3.5 rounded-xl bg-primary/5 text-primary border border-primary/10 transition-all duration-500 group-hover:bg-primary group-hover:text-background">
            <stat.icon className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-2">
            <motion.div 
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.5)]"
            />
            <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Live</span>
          </div>
        </div>
        
        <p className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 group-hover:text-primary transition-colors">
          {stat.value}
        </p>
        <p className="text-[11px] font-black tracking-[0.2em] text-muted-foreground uppercase">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}

export function Activity() {
  const [currentLog, setCurrentLog] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLog((prev) => (prev + 1) % LOGS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="activity" className="relative py-24 md:py-40" containerClassName="max-w-7xl">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.05]" />
      
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-20 md:mb-32">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-[1px] w-8 bg-primary/30" />
            <span className="text-xs font-bold tracking-[0.4em] text-primary/40 uppercase">
              Live Feed
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-medium tracking-tight"
          >
            Technical <br />
            <span className="text-muted-foreground/30 italic font-light">Activity</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-6 px-8 py-5 rounded-[2.5rem] bg-background border border-border shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
            <Radio className="w-16 h-16" />
          </div>
          <div className="relative h-4 w-4">
            <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-25" />
            <div className="relative h-4 w-4 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-black tracking-[0.3em] text-primary/40 uppercase">Live System Status</p>
            <p className="text-lg md:text-xl font-bold tracking-tight">Currently Architecting Portfolios</p>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, idx) => (
          <StatCard key={idx} stat={stat} index={idx} />
        ))}
      </div>

      {/* Engineering Monitor Footer */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-16 md:mt-24 p-10 md:p-14 rounded-[3.5rem] border border-border/50 bg-secondary/20 backdrop-blur-xl overflow-hidden relative group"
      >
        <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.03] scale-125" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="flex items-center gap-8 w-full lg:w-auto">
            <div className="relative flex items-center justify-center">
              <div className="h-16 w-16 rounded-full border-4 border-primary/10 border-t-primary animate-spin" />
              <Terminal className="absolute w-6 h-6 text-primary/40" />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl md:text-2xl font-medium tracking-tight">Real-time Contribution Engine</h4>
              <div className="flex items-center gap-3 h-6 overflow-hidden">
                <div className="w-2 h-2 rounded-full bg-primary/20 animate-pulse" />
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={currentLog}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="text-sm font-mono text-muted-foreground/80 tracking-tight"
                  >
                    {LOGS[currentLog]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 justify-center">
            <div className="flex -space-x-3">
              {[Zap, Globe, Cpu, Monitor].map((Icon, i) => (
                <div key={i} className="h-12 w-12 rounded-full border-2 border-background bg-secondary/80 backdrop-blur-md flex items-center justify-center text-primary/40 hover:text-primary hover:scale-110 transition-all duration-500 cursor-help group/icon relative">
                  <Icon className="w-5 h-5" />
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary text-background text-[10px] rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-widest font-bold">
                    Metric #{i+1}
                  </div>
                </div>
              ))}
            </div>
            <div className="h-8 w-px bg-border/50 hidden lg:block mx-4" />
            <div className="text-right hidden sm:block">
              <div className="text-[10px] font-black tracking-widest text-primary/30 uppercase mb-1">System Health</div>
              <div className="text-sm font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                Optimal Operations
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
