"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Briefcase, Calendar, Award, Code2 } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Senior React Developer",
    company: "P2P IT Solutions",
    period: "Jan 2022 - April 2025",
    tech: ["React", "Ant Design", "E-Charts", "Material-UI"],
    achievement: "Optimized dashboard data visualization for healthcare metrics",
    description: [
      "Architected interactive dashboards using React E-Charts, significantly improving data visibility for IP and OP healthcare metrics.",
      "Engineered high-performance file management systems with Ant Design, streamlining user workflows for seamless document handling.",
      "Modernized legacy insurance claim systems with Material-UI, enhancing data clarity and interaction efficiency.",
      "Refactored mission-critical codebase to modern standards, improving overall system performance and long-term maintainability.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Integraate Innovations Private Limited",
    period: "Jan 2021 - Dec 2021",
    tech: ["Next.js", "Redux", "High-charts", "REST APIs"],
    achievement: "Delivered end-to-end UI for a Document Intelligence platform",
    description: [
      "Led the frontend development of a Document Intelligence platform, transforming complex data into actionable real-time insights.",
      "Integrated sophisticated API architectures for high-speed data extraction and visualization on interactive dashboards.",
      "Developed robust Redux state management patterns for complex data comparison modules and aggregate grids.",
      "Implemented dynamic analytics modules using High-charts to drive data-led business decisions.",
    ],
  },
  {
    role: "React Developer",
    company: "Prizm IT Technology",
    period: "April 2018 - Nov 2020",
    tech: ["React", "Flux", "Ag-Grid", "High-charts"],
    achievement: "Specialized in advanced UI modules for the Insurance industry",
    description: [
      "Engineered specialized UI modules for the insurance sector, focusing on complex data entry and validation workflows.",
      "Integrated multi-dimensional data visualizations using combination charts to simplify financial reporting.",
      "Managed application state using Flux architecture, ensuring predictable data flow across large-scale components.",
      "Optimized dynamic data management using Ag-Grid, improving record-handling efficiency for insurance data.",
    ],
  },
  {
    role: "UI Website Developer",
    company: "CODOTVU",
    period: "April 2017 - Nov 2018",
    tech: ["JavaScript", "React.js", "AJAX", "RESTful APIs"],
    achievement: "Built secure authentication and client-side validation frameworks",
    description: [
      "Developed secure authentication systems (OAuth/SSO) and client-side validation frameworks using React.js.",
      "Crafted high-performance application-level code to interact with complex RESTful web services.",
      "Optimized client-side data handling using AJAX and JSON, reducing latency for dynamic content loading.",
    ],
  },
];

function ExperienceCard({ exp, index }: { exp: typeof EXPERIENCES[0]; index: number }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  // Mouse hover effect
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative"
    >
      {/* Timeline Node */}
      <div className="absolute -left-[41px] top-10 z-20 md:-left-[41px]">
        <div className="relative flex items-center justify-center">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_15px_rgba(var(--primary),0.5)] z-10"
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute w-8 h-8 rounded-full bg-primary/20"
          />
        </div>
      </div>

      {/* Card Content */}
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-background/40 backdrop-blur-xl p-8 md:p-10 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] group-hover:-translate-y-1">
        {/* Hover Glow */}
        <div 
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(var(--primary), 0.05), transparent 40%)`,
          }}
        />

        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-primary/50 text-[10px] uppercase tracking-[0.2em] font-semibold">
                <Calendar className="w-3 h-3" />
                {exp.period}
              </div>
              <h3 className="text-2xl md:text-4xl font-medium tracking-tight group-hover:text-primary transition-colors">
                {exp.role}
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground font-medium">
                <Briefcase className="w-4 h-4 opacity-50" />
                {exp.company}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 md:justify-end max-w-[200px]">
              {exp.tech.slice(0, 3).map((t) => (
                <span key={t} className="text-[9px] px-2.5 py-1 rounded-full border border-primary/10 bg-primary/5 text-primary/70 uppercase tracking-widest font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Achievement Badge */}
          <div className="relative overflow-hidden rounded-2xl bg-primary/[0.03] border border-primary/5 p-4 md:p-5 group/achievement">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 p-1.5 rounded-lg bg-primary/10 text-primary">
                <Award className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary/40 font-bold">Key Achievement</span>
                <p className="text-sm md:text-base text-foreground/80 font-medium leading-relaxed">
                  {exp.achievement}
                </p>
              </div>
            </div>
          </div>

          <ul className="grid gap-4">
            {exp.description.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-sm md:text-base text-muted-foreground leading-relaxed group/item">
                <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/20 shrink-0 group-hover/item:bg-primary/60 transition-colors" />
                <span className="group-hover/item:text-foreground transition-colors">{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6 border-t border-border/50 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground w-full mb-1">
              <Code2 className="w-3 h-3" />
              Technology Stack
            </div>
            {exp.tech.map((t) => (
              <span key={t} className="text-[11px] font-medium text-foreground/60 px-3 py-1.5 bg-secondary/50 rounded-lg hover:bg-primary/5 hover:text-primary transition-all cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Section id="experience" className="relative py-24 md:py-40" containerClassName="max-w-7xl px-6 md:px-12 lg:px-20">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.05]" />
      
      <div ref={containerRef} className="container relative">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column - Sticky Info */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3"
                >
                  <div className="h-[1px] w-8 bg-primary/30" />
                  <span className="text-xs font-bold tracking-[0.4em] text-primary/40 uppercase">
                    Career Path
                  </span>
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-7xl font-medium tracking-tight"
                >
                  Work <br />
                  <span className="text-muted-foreground/40 italic font-light">History</span>
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-sm"
              >
                A chronicle of my professional journey, focusing on building high-performance 
                web architectures and intuitive user experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="hidden lg:block pt-8"
              >
                <div className="p-8 rounded-3xl border border-border bg-secondary/30 backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Briefcase className="w-16 h-16" />
                  </div>
                  <div className="relative z-10 space-y-4">
                    <h4 className="font-medium text-lg uppercase tracking-wider text-primary/60">Experience Stats</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-3xl font-bold text-primary">8+</div>
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Years Exp</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">15+</div>
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Projects</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="lg:w-2/3 relative pl-8 md:pl-10">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-0 top-0 bottom-0 w-[2px] bg-border/40 overflow-hidden">
              <motion.div 
                style={{ scaleY: pathLength }}
                className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top"
              />
            </div>

            <div className="space-y-20 md:space-y-32">
              {EXPERIENCES.map((exp, idx) => (
                <ExperienceCard key={idx} exp={exp} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
