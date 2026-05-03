"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { CheckCircle2, Server, Layout, Cpu, Database } from "lucide-react";

export function CaseStudy() {
  return (
    <Section id="case-study" className="relative overflow-hidden bg-primary/5">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.05]" />
      
      <div className="mb-12 md:mb-20 space-y-2 md:space-y-4">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[10px] tracking-[0.4em] text-muted-foreground uppercase"
        >
          Project Spotlight
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-medium tracking-tighter sm:text-6xl md:text-7xl"
        >
          Case <span className="text-muted-foreground/60 italic">Study</span>
        </motion.h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group rounded-[2.5rem] overflow-hidden border border-border shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
            alt="BMTrust Platform" 
            className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-8 left-8 p-6 rounded-2xl bg-background/80 backdrop-blur-md border border-border shadow-xl">
            <p className="text-sm font-black tracking-[0.2em] uppercase text-primary mb-1">Impact Delivered</p>
            <p className="text-2xl font-bold tracking-tight">+25% Conversion Rate</p>
          </div>
        </motion.div>

        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-4xl font-medium tracking-tight">BMTrust Digital Ecosystem</h3>
            <p className="text-lg text-muted-foreground/80 leading-relaxed">
              Architected a comprehensive platform for Bharath Mithran Trust, transforming their manual operations into a high-performance digital engine for social impact.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Challenge", text: "Complex legacy data migration & high-traffic performance.", icon: <Server className="w-4 h-4" /> },
              { label: "Architecture", text: "Scalable Next.js frontend with robust state management.", icon: <Cpu className="w-4 h-4" /> },
              { label: "UX Strategy", text: "Accessibility-first design for diverse user groups.", icon: <Layout className="w-4 h-4" /> },
              { label: "Database", text: "Secure, optimized data modules for donation tracking.", icon: <Database className="w-4 h-4" /> }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-2xl border border-border bg-background/50 space-y-3">
                <div className="flex items-center gap-3 text-primary">
                  {item.icon}
                  <span className="text-[10px] font-black tracking-widest uppercase">{item.label}</span>
                </div>
                <p className="text-sm leading-snug font-medium text-foreground/80">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/5 text-primary border border-primary/10 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              SEO Optimized
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/5 text-primary border border-primary/10 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              Real-time Analytics
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
