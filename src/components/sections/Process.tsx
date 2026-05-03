"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, Zap } from "lucide-react";

const STEPS = [
  {
    title: "Discovery",
    description: "Deep-diving into business goals, user needs, and technical requirements to build a solid foundation.",
    icon: <Search className="w-6 h-6" />,
    color: "from-blue-500/20 to-transparent"
  },
  {
    title: "Design",
    description: "Architecting the UI/UX with a focus on design systems, accessibility, and high-conversion flows.",
    icon: <PenTool className="w-6 h-6" />,
    color: "from-purple-500/20 to-transparent"
  },
  {
    title: "Engineering",
    description: "Building scalable, high-performance applications using modern React/Next.js best practices.",
    icon: <Code2 className="w-6 h-6" />,
    color: "from-primary/20 to-transparent"
  },
  {
    title: "Optimization",
    description: "Performance tuning, SEO engineering, and ensuring 99+ Lighthouse scores across all metrics.",
    icon: <Zap className="w-6 h-6" />,
    color: "from-amber-500/20 to-transparent"
  }
];

export function Process() {
  return (
    <Section id="process" className="relative overflow-hidden bg-secondary/10">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.05]" />
      
      <div className="mb-12 md:mb-20 space-y-2 md:space-y-4">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[10px] tracking-[0.4em] text-muted-foreground uppercase"
        >
          Workflow
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-medium tracking-tighter sm:text-6xl md:text-7xl"
        >
          My <span className="text-muted-foreground/60 italic">Process</span>
        </motion.h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
        {STEPS.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative rounded-3xl border border-border bg-background/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:shadow-2xl"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary border border-primary/10 transition-transform group-hover:scale-110 group-hover:rotate-3">
                {step.icon}
              </div>
              
              <div className="absolute top-0 right-0 text-5xl font-black text-foreground/5 transition-colors group-hover:text-primary/10">
                0{idx + 1}
              </div>

              <h3 className="mb-4 text-2xl font-medium tracking-tight">{step.title}</h3>
              <p className="text-base text-muted-foreground/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
