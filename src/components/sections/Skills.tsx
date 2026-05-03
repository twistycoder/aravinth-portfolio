"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaReact, FaNodeJs, FaJs, FaTools } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiRedux, SiMongodb, SiTailwindcss, SiExpress, SiFigma } from "react-icons/si";

const CORE_STACK = [
  { name: "React.js", icon: <FaReact />, level: 5, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: <SiNextdotjs />, level: 5, color: "text-foreground" },
  { name: "JavaScript", icon: <FaJs />, level: 4.5, color: "text-[#F7DF1E]" },
  { name: "TypeScript", icon: <SiTypescript />, level: 4, color: "text-[#3178C6]" },
];

const SKILL_GROUPS = [
  { 
    category: "Frontend Engineering", 
    items: ["HTML5", "CSS3", "Tailwind CSS", "Material-UI", "Ant Design", "Framer Motion"],
    icon: <SiTailwindcss className="w-4 h-4" />
  },
  { 
    category: "State & Data Flow", 
    items: ["Redux", "REST APIs", "Axios", "GraphQL", "AJAX", "JSON"],
    icon: <SiRedux className="w-4 h-4" />
  },
  { 
    category: "Backend & APIs", 
    items: ["Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL"],
    icon: <SiExpress className="w-4 h-4" />
  },
  { 
    category: "Tools & Ecosystem", 
    items: ["Figma", "GitHub", "Vercel", "High-charts", "Ag-Grid", "Testing Library"],
    icon: <FaTools className="w-4 h-4" />
  },
];

function SkillBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/5 bg-primary/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-primary/80 transition-all hover:bg-primary hover:text-primary-foreground">
      {name}
    </span>
  );
}

function StarLevel({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <div 
          key={i} 
          className={cn(
            "h-1 w-4 rounded-full transition-colors",
            i < level ? "bg-primary" : "bg-primary/10"
          )} 
        />
      ))}
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.1]" />
      
      <div className="mb-20 space-y-4">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[10px] tracking-[0.4em] text-muted-foreground uppercase"
        >
          Proficiency
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-medium tracking-tighter sm:text-6xl md:text-7xl"
        >
          Technical <span className="text-muted-foreground/60 italic">Stack</span>
        </motion.h2>
      </div>

      {/* Core Stack Highlight */}
      <div className="mb-16">
        <h3 className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-8 ml-1">
          Core Technologies
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_STACK.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex items-center justify-between rounded-[2rem] border border-border bg-background/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-4 z-10">
                <div className={cn("text-3xl transition-transform group-hover:scale-110 duration-500", skill.color)}>
                  {skill.icon}
                </div>
                <div>
                  <p className="font-medium tracking-tight text-lg">{skill.name}</p>
                  <StarLevel level={skill.level} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Skill Groups */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative rounded-[2rem] border border-border bg-background/40 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:bg-background/60"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/5 text-primary border border-primary/10">
                {group.icon}
              </div>
              <h4 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
                {group.category}
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <SkillBadge key={item} name={item} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
