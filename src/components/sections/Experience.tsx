"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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

export function Experience() {
  return (
    <Section id="experience" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.1]" />
      
      <div className="mb-20 space-y-4">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[10px] tracking-[0.4em] text-muted-foreground uppercase"
        >
          Career Path
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-medium tracking-tighter sm:text-6xl md:text-7xl"
        >
          Work <span className="text-muted-foreground/30 italic">History</span>
        </motion.h2>
      </div>

      <div className="relative space-y-16 before:absolute before:inset-0 before:left-0 md:before:left-1/2 before:-translate-x-px before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            className="relative flex items-start md:odd:flex-row-reverse group"
          >
            {/* Dot */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 flex items-center justify-center w-3 h-3 rounded-full border border-primary/20 bg-background z-10 transition-colors group-hover:bg-primary shadow-[0_0_10px_rgba(var(--primary),0.3)]" 
            />

            {/* Content Card */}
            <div className="ml-10 md:ml-0 md:w-[calc(50%-3rem)] p-10 rounded-[2.5rem] border border-border bg-background/50 backdrop-blur-md transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 group-hover:-translate-y-1">
              <div className="flex flex-col mb-8 gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase font-semibold">
                    {exp.period}
                  </span>
                  <div className="flex gap-2">
                    {exp.tech.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] tracking-widest text-primary/60 uppercase bg-primary/5 px-2 py-0.5 rounded-full border border-primary/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-3xl tracking-tighter mb-1">{exp.role}</h3>
                  <h4 className="text-sm font-medium text-muted-foreground/60 tracking-wide uppercase">
                    {exp.company}
                  </h4>
                </div>
              </div>

              {/* Achievement Highlight */}
              <div className="mb-8 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                <p className="text-xs font-medium text-primary leading-tight">
                  <span className="opacity-50 uppercase tracking-widest mr-2">Key Highlight:</span>
                  {exp.achievement}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-foreground/70 leading-relaxed group/item">
                    <span className="mr-3 mt-2 h-1 w-1 rounded-full bg-primary/30 shrink-0 group-hover/item:bg-primary transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tech Stack Footer */}
              <div className="pt-6 border-t border-border/50 flex flex-wrap gap-2">
                <span className="text-[10px] text-muted-foreground/40 uppercase tracking-widest w-full mb-1">Stack:</span>
                {exp.tech.map((t) => (
                  <span key={t} className="text-[10px] font-medium text-muted-foreground/70 px-2 py-1 bg-secondary/30 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
