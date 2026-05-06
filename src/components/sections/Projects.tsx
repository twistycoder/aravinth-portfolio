"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { ExternalLink, CheckCircle2, Zap, Globe, BarChart3, Gauge } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    title: "BMTrust – NGO Platform",
    description: "Developed a comprehensive digital presence for Bharath Mithran Trust, focused on empowering communities through high-impact modules.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    tech: ["React", "UI/UX", "SEO"],
    liveUrl: "https://www.bmtrust.in/",
    githubUrl: "https://github.com/twistycoder",
    metrics: { lighthouse: 98, load: "0.8s" },
    highlights: [
      "Improved mobile conversion by 25%",
      "Integrated secure transparency modules",
    ],
    id: "PRJ-01"
  },
  {
    title: "Lyse Liquids – E-commerce",
    description: "Architected a premium product showcase for enzymatic cleaning products, prioritizing brand identity through interaction design.",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2100&auto=format&fit=crop",
    tech: ["Next.js", "Tailwind", "Framer"],
    liveUrl: "https://www.lyseliquids.in/",
    githubUrl: "https://github.com/twistycoder",
    metrics: { lighthouse: 100, load: "0.5s" },
    highlights: [
      "Advanced motion patterns with Framer",
      "Custom unified design system",
    ],
    id: "PRJ-02"
  },
  {
    title: "Webdipo – Agency Platform",
    description: "Designed and engineered an elite, SEO-first platform for a leading development agency, focusing on technical authority.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tech: ["Next.js", "SEO", "Analytics"],
    liveUrl: "https://webdipo.in/",
    githubUrl: "https://github.com/twistycoder",
    metrics: { lighthouse: 95, load: "1.2s" },
    highlights: [
      "95+ Lighthouse performance scores",
      "Automated SEO pipelines",
    ],
    id: "PRJ-03"
  },
];

function ProjectCard({ project, idx }: { project: typeof PROJECTS[0], idx: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative flex flex-col rounded-[2.5rem] border border-border bg-background/40 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]"
    >
      <div className="relative h-72 md:h-80 overflow-hidden bg-muted">
        <div style={{ transform: "translateZ(50px)" }} className="absolute inset-0 pointer-events-none z-10 p-8 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              {project.id}
            </span>
            <div className="flex gap-2">
              <div className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Zap className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          <div className="p-4 rounded-2xl bg-background/80 backdrop-blur-md border border-white/10 shadow-2xl space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
             <div className="flex items-center justify-between text-[10px] font-black tracking-widest uppercase text-muted-foreground/60">
              <span>Performance</span>
              <span className="text-primary">{project.metrics.lighthouse}%</span>
            </div>
            <div className="h-1 w-full bg-primary/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${project.metrics.lighthouse}%` }}
                className="h-full bg-primary"
              />
            </div>
          </div>
        </div>

        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-8 md:p-10 flex flex-col flex-1 z-10 relative">
        <div className="flex items-start justify-between mb-6">
          <div className="space-y-1">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tighter transition-colors group-hover:text-primary">
              {project.title}
            </h3>
            <div className="flex items-center gap-4 text-[10px] font-black tracking-[0.2em] text-muted-foreground/60 uppercase">
              <div className="flex items-center gap-1.5">
                <BarChart3 className="w-3 h-3" />
                Lighthouse: {project.metrics.lighthouse}
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-1.5">
                <Gauge className="w-3 h-3" />
                Load: {project.metrics.load}
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground/80 leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="space-y-4 mb-8">
          {project.highlights.map((highlight, i) => (
            <div key={i} className="flex items-center gap-3 text-xs font-bold text-foreground/70">
              <CheckCircle2 className="w-4 h-4 text-primary/40 shrink-0" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((tech) => (
            <span key={tech} className="text-[9px] font-black tracking-widest px-3 py-1.5 bg-secondary/50 text-foreground/60 border border-border rounded-lg uppercase group-hover:border-primary/20 group-hover:text-primary transition-all">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto">
          <Button size="lg" className="flex-1 rounded-2xl gap-2 shadow-xl bg-primary text-background group-hover:shadow-primary/20 transition-all" asChild>
            <Link href={project.liveUrl} target="_blank">
              <Globe className="w-4 h-4" />
              Live System
            </Link>
          </Button>
          <Button size="lg" variant="secondary" className="px-6 rounded-2xl gap-2 shadow-sm border border-border bg-background/50 hover:bg-background transition-all" asChild>
            <Link href={project.githubUrl} target="_blank">
              <Github className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <Section id="projects" className="relative py-24 md:py-40" containerClassName="max-w-7xl">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.05]" />

      <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20 md:mb-32">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-[1px] w-8 bg-primary/30" />
            <span className="text-xs font-bold tracking-[0.4em] text-primary/40 uppercase">
              Selected Works
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-medium tracking-tight"
          >
            Featured <span className="text-muted-foreground/30 italic font-light">Projects</span>
          </motion.h2>
        </div>

        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-lg text-muted-foreground leading-relaxed max-w-sm lg:text-right"
        >
          A selection of high-performance web applications and digital ecosystems built with 
          engineering precision.
        </motion.p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project} idx={idx} />
        ))}
      </div>
    </Section>
  );
}
