"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { 
  Code2, 
  Layout, 
  Database, 
  Terminal, 
  Cpu, 
  Globe, 
  ArrowUpRight,
  Sparkles,
  Layers,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

const STATS = [
  { label: "Years Experience", value: "5+", icon: Terminal, delay: 0.1 },
  { label: "Successful Projects", value: "50+", icon: Cpu, delay: 0.2 },
  { label: "Global Clients", value: "10+", icon: Globe, delay: 0.3 },
];

const SKILLS = [
  {
    title: "Front-End Engineering",
    description: "Crafting pixel-perfect, responsive interfaces using React and Next.js with a focus on performance and accessibility.",
    icon: Layout,
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    color: "primary"
  },
  {
    title: "Technical Architecture",
    description: "Designing scalable systems and state management patterns that ensure long-term maintainability and speed.",
    icon: Layers,
    tech: ["System Design", "State Mgmt", "Performance", "SEO"],
    color: "accent"
  }
];

function SkillCard({ skill, index }: { skill: typeof SKILLS[0]; index: number }) {
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
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative rounded-[2.5rem] border border-border bg-background/40 p-8 md:p-10 backdrop-blur-xl transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden"
    >
      {/* Hover Glow */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(var(--primary), 0.05), transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary border border-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-background">
          <skill.icon className="h-8 w-8" />
        </div>
        
        <h3 className="mb-4 text-2xl font-medium tracking-tight group-hover:text-primary transition-colors">
          {skill.title}
        </h3>
        
        <p className="mb-8 text-base text-muted-foreground/80 leading-relaxed">
          {skill.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {skill.tech.map((t) => (
            <span key={t} className="text-[10px] px-2.5 py-1 rounded-lg border border-primary/5 bg-primary/[0.03] text-muted-foreground uppercase tracking-widest font-medium group-hover:border-primary/20 transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function About() {
  return (
    <Section id="about" className="relative py-24 md:py-40" containerClassName="max-w-7xl">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.05]" />
      
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        {/* Left Side: Content */}
        <div className="lg:w-3/5 space-y-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="h-[1px] w-8 bg-primary/30" />
              <span className="text-xs font-bold tracking-[0.4em] text-primary/40 uppercase">
                Perspective
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-medium tracking-tight"
            >
              About <span className="text-muted-foreground/30 italic font-light">Me</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <h3 className="text-2xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.1] md:leading-[1.05]">
                I design and build high-performance web applications that don&apos;t just look good — <span className="text-primary italic relative">
                  they solve real business problems.
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-[2px] bg-primary/20"
                  />
                </span>
              </h3>
              
              <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-2xl font-light">
                With a deep focus on the intersection of <span className="text-foreground font-medium underline decoration-primary/20 decoration-2 underline-offset-4">design and engineering</span>, 
                I deliver scalable, user-focused products for startups and growing teams worldwide.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-secondary/50 border border-border backdrop-blur-sm group"
                >
                  <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-medium tracking-tight text-muted-foreground group-hover:text-primary transition-colors">
                    Focused on Performance & Scalability
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/5 border border-primary/10 group"
                >
                  <div className="p-1.5 rounded-lg bg-primary text-background">
                    <Zap className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-medium tracking-tight text-primary">
                    Systems-driven UI Architecture
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Stats Dashboard */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay }}
                className="p-8 rounded-3xl border border-border bg-background/50 backdrop-blur-sm group hover:border-primary/20 transition-all duration-500"
              >
                <stat.icon className="w-6 h-6 mb-4 text-primary/40 group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
                <div className="space-y-1">
                  <p className="text-4xl md:text-5xl font-bold tracking-tighter text-primary group-hover:translate-x-1 transition-transform duration-500">
                    {stat.value}
                  </p>
                  <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase font-bold">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Skill Cards */}
        <div className="lg:w-2/5 grid gap-8">
          {SKILLS.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} index={idx} />
          ))}
        </div>
      </div>
    </Section>
  );
}
