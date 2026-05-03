"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";

const SKILLS = [
  { category: "Frontend", items: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { category: "State Management", items: ["Redux", "Flux"] },
  { category: "Backend & Data", items: ["Node.js", "MySQL", "Axios", "REST APIs", "AJAX", "JSON"] },
  { category: "Tools & Libraries", items: ["Figma", "GitHub", "High-charts", "E-Charts", "Material-UI", "Ag-Grid", "Ant Design", "Bootstrap"] },
];

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <Section id="skills" className="relative">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.1]" />
      
      <div className="mb-20 space-y-4 text-center md:text-left">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[10px] tracking-[0.4em] text-muted-foreground uppercase"
        >
          Expertise
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-medium tracking-tighter sm:text-6xl md:text-7xl"
        >
          Technical <span className="text-muted-foreground/30 italic">Stack</span>
        </motion.h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative rounded-3xl border border-border bg-background/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
          >
            <h3 className="mb-6 text-sm font-medium tracking-widest text-muted-foreground uppercase">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full border border-primary/5 bg-primary/5 px-3 py-1 text-xs font-medium text-primary/80 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
