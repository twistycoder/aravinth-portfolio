"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaTools, 
  FaGithub, 
  FaDatabase 
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiRedux, 
  SiMongodb, 
  SiTailwindcss, 
  SiExpress, 
  SiFigma, 
  SiFramer,
  SiPostgresql,
  SiGraphql,
  SiTestinglibrary,
  SiVercel
} from "react-icons/si";
import { Layers, Cpu, Zap, Code2, Layout, Database, Wrench, ShieldCheck } from "lucide-react";

const CORE_STACK = [
  { name: "React.js", icon: FaReact, level: 95, color: "#61DAFB", description: "UI Component Architecture" },
  { name: "Next.js", icon: SiNextdotjs, level: 90, color: "#111827", description: "Full-stack SSR Applications" },
  { name: "JavaScript", icon: FaJs, level: 98, color: "#F7DF1E", description: "Core Engine Proficiency" },
  { name: "TypeScript", icon: SiTypescript, level: 85, color: "#3178C6", description: "Static Type Architecture" },
];

const SKILL_GROUPS = [
  { 
    category: "Frontend Core", 
    description: "Building high-performance, accessible user interfaces.",
    items: ["HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Material-UI", "Ant Design"],
    icon: Layout,
    color: "primary"
  },
  { 
    category: "State & Data", 
    description: "Managing complex application states and data flows.",
    items: ["Redux", "GraphQL", "REST APIs", "Axios", "Zustand", "React Query"],
    icon: Database,
    color: "primary"
  },
  { 
    category: "Backend & Infra", 
    description: "Scalable server-side logic and cloud infrastructure.",
    items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase", "Vercel"],
    icon: Cpu,
    color: "primary"
  },
  { 
    category: "Developer Exp", 
    description: "Tools and practices for engineering excellence.",
    items: ["Figma", "GitHub", "Testing Library", "Jest", "Vite", "ESLint"],
    icon: Wrench,
    color: "primary"
  },
];

function PrecisionBar({ level, color }: { level: number; color: string }) {
  return (
    <div className="space-y-2 mt-4">
      <div className="flex justify-between items-center text-[10px] font-black tracking-widest uppercase text-muted-foreground/60">
        <span>Mastery</span>
        <span>{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-secondary/50 rounded-full overflow-hidden relative">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ backgroundColor: color }}
          className="absolute inset-y-0 left-0 rounded-full shadow-[0_0_10px_rgba(var(--primary),0.3)]"
        />
        {/* Metric Dividers */}
        <div className="absolute inset-0 flex justify-between px-1 pointer-events-none opacity-20">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="h-full w-[1px] bg-background" />
          ))}
        </div>
      </div>
    </div>
  );
}

function CoreCard({ skill, index }: { skill: typeof CORE_STACK[0]; index: number }) {
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
      className="group relative p-8 rounded-[2.5rem] border border-border bg-background/40 backdrop-blur-xl hover:border-primary/30 transition-all duration-500 overflow-hidden"
    >
      {/* Hover Glow */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(var(--primary), 0.05), transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8">
          <div 
            style={{ color: skill.color }}
            className="p-4 rounded-2xl bg-secondary/50 border border-border transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-background"
          >
            <skill.icon className="w-8 h-8" />
          </div>
          <Zap className="w-5 h-5 text-primary/20 group-hover:text-primary transition-colors" />
        </div>
        
        <div className="space-y-1 mb-6">
          <h4 className="text-2xl font-bold tracking-tight">{skill.name}</h4>
          <p className="text-xs text-muted-foreground/80 font-medium tracking-tight">
            {skill.description}
          </p>
        </div>

        <PrecisionBar level={skill.level} color={skill.color} />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <Section id="skills" className="relative py-24 md:py-40" containerClassName="max-w-7xl">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.05]" />
      
      <div className="mb-20 md:mb-32 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="h-[1px] w-8 bg-primary/30" />
          <span className="text-xs font-bold tracking-[0.4em] text-primary/40 uppercase">
            Proficiency
          </span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-medium tracking-tight"
        >
          Technical <span className="text-muted-foreground/30 italic font-light">Stack</span>
        </motion.h2>
      </div>

      {/* Core Mastery Section */}
      <div className="mb-20 md:mb-32">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-[10px] font-black tracking-[0.4em] text-muted-foreground uppercase">
            Core Engineering Mastery
          </h3>
          <div className="h-px flex-1 bg-border/40 mx-8 hidden sm:block" />
          <ShieldCheck className="w-5 h-5 text-primary/20" />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {CORE_STACK.map((skill, idx) => (
            <CoreCard key={skill.name} skill={skill} index={idx} />
          ))}
        </div>
      </div>

      {/* Specialized Expertise Modules */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative p-8 rounded-[2.5rem] border border-border bg-secondary/10 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:bg-secondary/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary border border-primary/10 transition-transform group-hover:scale-110">
                <group.icon className="w-5 h-5" />
              </div>
              <h4 className="text-[11px] font-black tracking-[0.2em] text-muted-foreground uppercase leading-none">
                {group.category}
              </h4>
            </div>

            <p className="text-xs text-muted-foreground/80 leading-relaxed mb-8 h-10 overflow-hidden">
              {group.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span 
                  key={item} 
                  className="inline-flex items-center rounded-lg border border-border bg-background/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-foreground/70 transition-all hover:bg-primary hover:text-background hover:border-primary cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
