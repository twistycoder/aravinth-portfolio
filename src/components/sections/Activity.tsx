"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Activity as ActivityIcon, Code2, GitPullRequest, Star } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

const STATS = [
  { label: "Repositories", value: "48+", icon: <Github className="w-4 h-4" /> },
  { label: "Contributions", value: "1.2k+", icon: <ActivityIcon className="w-4 h-4" /> },
  { label: "Pull Requests", value: "150+", icon: <GitPullRequest className="w-4 h-4" /> },
  { label: "Stars Earned", value: "85+", icon: <Star className="w-4 h-4" /> }
];

export function Activity() {
  return (
    <Section id="activity" className="relative overflow-hidden bg-secondary/5">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.05]" />
      
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16">
        <div className="space-y-4">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[10px] tracking-[0.4em] text-muted-foreground uppercase"
          >
            Live Feed
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-medium tracking-tighter sm:text-6xl md:text-7xl"
          >
            Technical <span className="text-muted-foreground/60 italic">Activity</span>
          </motion.h2>
        </div>

        <div className="flex items-center gap-4 px-6 py-4 rounded-3xl bg-background border border-border shadow-xl">
          <div className="relative h-3 w-3">
            <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
            <div className="relative h-3 w-3 bg-primary rounded-full" />
          </div>
          <div className="space-y-0.5">
            <p className="text-[10px] font-black tracking-widest text-muted-foreground uppercase">Live Status</p>
            <p className="text-sm font-bold">Currently Architecting Portfolios</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group p-8 rounded-3xl border border-border bg-background/50 backdrop-blur-md hover:border-primary/20 hover:shadow-xl transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-primary/5 text-primary border border-primary/10">
                {stat.icon}
              </div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-[10px] font-bold text-primary/40 uppercase tracking-tighter"
              >
                Live
              </motion.div>
            </div>
            <p className="text-4xl font-bold tracking-tighter mb-2 group-hover:text-primary transition-colors">
              {stat.value}
            </p>
            <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Decorative Grid Hint */}
      <div className="mt-12 p-8 rounded-[2.5rem] border border-border/50 bg-background/30 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.05] scale-150" />
        <div className="flex items-center gap-6">
          <div className="h-12 w-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
          <div>
            <h4 className="text-lg font-medium tracking-tight">Real-time Contribution Engine</h4>
            <p className="text-sm text-muted-foreground/80">Synchronizing with GitHub API and project deployment pipelines.</p>
          </div>
        </div>
        <div className="flex -space-x-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-secondary/50 backdrop-blur-md flex items-center justify-center text-[10px] font-bold">
              #{i}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
