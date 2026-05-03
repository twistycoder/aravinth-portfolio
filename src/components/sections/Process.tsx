"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { motion, useScroll, useSpring } from "framer-motion";
import { Search, PenTool, Code2, Zap, ArrowRight } from "lucide-react";

const STEPS = [
  {
    title: "Discovery",
    description: "Deep-diving into business goals, user needs, and technical requirements to build a solid foundation.",
    icon: <Search className="w-6 h-6" />,
    color: "bg-blue-500",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.5)]"
  },
  {
    title: "Design",
    description: "Architecting the UI/UX with a focus on design systems, accessibility, and high-conversion flows.",
    icon: <PenTool className="w-6 h-6" />,
    color: "bg-purple-500",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.5)]"
  },
  {
    title: "Engineering",
    description: "Building scalable, high-performance applications using modern React/Next.js best practices.",
    icon: <Code2 className="w-6 h-6" />,
    color: "bg-primary",
    glow: "shadow-[0_0_20px_rgba(var(--primary),0.5)]"
  },
  {
    title: "Optimization",
    description: "Performance tuning, SEO engineering, and ensuring 99+ Lighthouse scores across all metrics.",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-amber-500",
    glow: "shadow-[0_0_20px_rgba(245,158,11,0.5)]"
  }
];

export function Process() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Section id="process" className="relative overflow-hidden bg-secondary/5">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.05]" />
      
      <div className="mb-16 md:mb-24 space-y-4 text-center md:text-left">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[10px] tracking-[0.4em] text-muted-foreground uppercase block"
        >
          Workflow
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-medium tracking-tighter sm:text-6xl md:text-7xl"
        >
          My <span className="text-muted-foreground/60 italic">Process</span>
        </motion.h2>
      </div>

      <div ref={containerRef} className="relative max-w-5xl mx-auto px-4 md:px-0">
        {/* The Path Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-px md:-translate-x-1/2">
          <motion.div 
            style={{ scaleY }}
            className="absolute inset-0 bg-gradient-to-b from-primary via-purple-500 to-blue-500 origin-top"
          />
        </div>

        <div className="space-y-12 md:space-y-0">
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative">
              <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                
                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className={`w-full md:w-[45%] pl-12 md:pl-0 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                >
                  <div className="group relative p-8 rounded-3xl border border-border bg-background/50 backdrop-blur-md transition-all duration-500 hover:border-primary/20 hover:shadow-2xl overflow-hidden">
                    <div className="absolute top-4 right-4 text-6xl font-black text-foreground/[0.03] transition-colors group-hover:text-primary/[0.05]">
                      0{idx + 1}
                    </div>
                    
                    <h3 className="text-2xl font-semibold tracking-tight mb-3 flex items-center gap-3 md:justify-end">
                      {idx % 2 !== 0 && <step.icon.type {...step.icon.props} className="w-5 h-5 text-primary md:hidden" />}
                      {step.title}
                      {idx % 2 === 0 && <step.icon.type {...step.icon.props} className="w-5 h-5 text-primary md:hidden" />}
                    </h3>
                    <p className="text-muted-foreground/80 leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                    
                    <div className={`mt-6 flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-primary/60 ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      View Details <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.div>

                {/* Center Marker */}
                <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className={`relative z-10 w-8 h-8 rounded-full bg-background border-2 border-border flex items-center justify-center ${step.glow} transition-colors duration-500`}
                  >
                    <div className={`w-3 h-3 rounded-full ${step.color}`} />
                  </motion.div>
                </div>

                {/* Empty Side for Desktop */}
                <div className="hidden md:block md:w-[45%]" />
              </div>

              {/* Spacing for Desktop Timeline */}
              <div className="hidden md:block h-32" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
