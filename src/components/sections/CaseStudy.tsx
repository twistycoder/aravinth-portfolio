"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, Server, Layout, Cpu, Database, ChevronRight, Zap, Target, Gauge } from "lucide-react";

function TechCard({ item, index }: { item: any; index: number }) {
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 rounded-[2rem] border border-border bg-background/40 backdrop-blur-xl hover:border-primary/30 transition-all duration-500 overflow-hidden"
    >
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(var(--primary), 0.05), transparent 40%)`,
        }}
      />
      <div className="relative z-10 space-y-4">
        <div className="flex items-center gap-3 text-primary">
          <div className="p-2 rounded-lg bg-primary/5 border border-primary/10 transition-transform group-hover:scale-110">
            {item.icon}
          </div>
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-primary/60 group-hover:text-primary transition-colors">
            {item.label}
          </span>
        </div>
        <p className="text-sm leading-relaxed font-medium text-foreground/80 group-hover:text-foreground transition-colors">
          {item.text}
        </p>
      </div>
    </motion.div>
  );
}

export function CaseStudy() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Section id="case-study" className="relative py-24 md:py-40" containerClassName="max-w-7xl">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.03]" />
      
      <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20 md:mb-32">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-[1px] w-8 bg-primary/30" />
            <span className="text-xs font-bold tracking-[0.4em] text-primary/40 uppercase">
              Project Spotlight
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-medium tracking-tight"
          >
            Case <span className="text-muted-foreground/30 italic font-light">Study</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-6 px-8 py-5 rounded-[2.5rem] bg-secondary/10 border border-border backdrop-blur-xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">
            <Target className="w-16 h-16" />
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-black tracking-[0.3em] text-primary/40 uppercase">System Status</p>
            <p className="text-lg md:text-xl font-bold tracking-tight">Deployment: Stable 1.0.0</p>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-20 lg:grid-cols-2 items-start">
        {/* Immersive Media Container */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative group rounded-[3rem] overflow-hidden border border-border shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] bg-secondary/20"
        >
          <div className="absolute inset-0 grid-pattern opacity-[0.1] scale-150 pointer-events-none" />
          
          <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
              alt="BMTrust Platform" 
              className="w-full aspect-[4/5] md:aspect-[4/3] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-10 left-10 right-10 p-10 rounded-[2.5rem] bg-background/40 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-1">Impact Delivered</p>
                  <p className="text-3xl font-bold tracking-tighter">+25% Conversion</p>
                </div>
                <div className="h-12 w-12 rounded-full border border-primary/20 flex items-center justify-center">
                  <Gauge className="w-6 h-6 text-primary animate-pulse" />
                </div>
              </div>
              <div className="h-1.5 w-full bg-primary/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  className="h-full bg-primary"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Specification */}
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                FinTech / NGO
              </span>
              <div className="h-px w-12 bg-border" />
              <span className="text-xs font-mono text-muted-foreground">Architected 2024</span>
            </div>
            
            <h3 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              BMTrust Digital <br />
              <span className="text-muted-foreground/30 italic font-light">Ecosystem</span>
            </h3>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Architected a comprehensive platform for Bharath Mithran Trust, transforming 
              their manual operations into a high-performance digital engine. Replaced legacy 
              workflows with an automated, scalable infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: "Challenge", text: "Complex legacy data migration & high-traffic performance optimizations.", icon: <Server className="w-4 h-4" /> },
              { label: "Architecture", text: "Scalable Next.js frontend with robust Redux Toolkit state management.", icon: <Cpu className="w-4 h-4" /> },
              { label: "UX Strategy", text: "Accessibility-first design for diverse user groups and stakeholders.", icon: <Layout className="w-4 h-4" /> },
              { label: "Storage", text: "Secure, optimized PostgreSQL data modules for donation tracking.", icon: <Database className="w-4 h-4" /> }
            ].map((item, i) => (
              <TechCard key={i} item={item} index={i} />
            ))}
          </div>

          <div className="pt-8 flex flex-col gap-8 border-t border-border/50">
            <div className="flex flex-wrap gap-3">
              {["Next.js 14", "Tailwind CSS", "TypeScript", "PostgreSQL", "Framer Motion"].map((tech) => (
                <span 
                  key={tech} 
                  className="px-4 py-2 rounded-xl bg-secondary/40 border border-border text-[10px] font-black uppercase tracking-widest text-foreground/60 hover:text-primary hover:border-primary/30 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl bg-primary text-background font-bold text-sm tracking-tight flex items-center gap-3 shadow-[0_20px_40px_-10px_rgba(var(--primary),0.3)] hover:shadow-[0_20px_40px_-10px_rgba(var(--primary),0.5)] transition-all"
              >
                View Full Architecture <ChevronRight className="w-4 h-4" />
              </motion.button>
              
              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-border bg-background hover:border-primary/20 transition-all cursor-pointer group">
                <Zap className="w-4 h-4 text-primary group-hover:animate-bounce" />
                <span className="text-xs font-bold tracking-tight">Live Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
