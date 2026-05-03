"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    title: "BMTrust – NGO Platform",
    description: "Developed a comprehensive digital presence for Bharath Mithran Trust, focused on empowering communities through high-impact education and healthcare modules.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    tech: ["React", "UI/UX", "Responsive Design"],
    liveUrl: "https://www.bmtrust.in/",
    githubUrl: "https://github.com/twitycoder",
    highlights: [
      "Improved mobile conversion rates by 25% through responsive design",
      "Integrated secure donation and transparency modules",
    ],
    size: "large",
  },
  {
    title: "Lyse Liquids – E-commerce Showcase",
    description: "Architected a premium product showcase for enzymatic cleaning products, prioritizing high conversion flows and sophisticated brand identity through interaction design.",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2100&auto=format&fit=crop",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://www.lyseliquids.in/",
    githubUrl: "https://github.com/twitycoder",
    highlights: [
      "Designed advanced interaction patterns with Framer Motion",
      "Developed a custom design system for consistent branding",
    ],
    size: "small",
  },
  {
    title: "Webdipo Technologies – Agency Platform",
    description: "Designed and engineered an elite, SEO-first platform for a leading development agency, focusing on technical authority and lead generation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tech: ["Next.js", "React", "Tailwind CSS", "SEO"],
    liveUrl: "https://webdipo.in/",
    githubUrl: "https://github.com/twitycoder",
    highlights: [
      "Achieved 95+ Lighthouse scores across all performance metrics",
      "Engineered automated SEO pipelines for dynamic content",
    ],
    size: "small",
  },
];

function ProjectCard({ project, idx }: { project: typeof PROJECTS[0], idx: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative flex flex-col rounded-3xl md:rounded-[2.5rem] border border-border bg-background/50 overflow-hidden backdrop-blur-md transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5",
        project.size === "large" ? "lg:col-span-2 lg:flex-row" : "lg:col-span-1"
      )}
    >
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
           style={{ 
             background: `radial-gradient(800px circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(var(--primary), 0.15), transparent 40%)` 
           }} 
      />
      
      <div className={cn(
        "relative overflow-hidden bg-muted",
        project.size === "large" ? "h-64 lg:h-auto lg:w-1/2" : "h-60 w-full"
      )}>
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-6 backdrop-blur-[2px]">
          <div className="flex gap-4">
            <Button size="lg" className="rounded-full gap-2 shadow-xl" asChild>
              <Link href={project.liveUrl} target="_blank">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Link>
            </Button>
            <Button size="lg" variant="secondary" className="rounded-full gap-2 shadow-xl" asChild>
              <Link href={project.githubUrl} target="_blank">
                <Github className="w-4 h-4" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className={cn(
        "p-6 md:p-10 flex flex-col flex-1 z-10",
        project.size === "large" ? "lg:w-1/2" : "w-full"
      )}>
        <div className="flex items-start justify-between mb-4">
          <h3 className={cn(
            "font-medium tracking-tighter leading-[1.1]",
            project.size === "large" ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
          )}>
            {project.title}
          </h3>
          <span className="text-[10px] tracking-widest text-muted-foreground uppercase mt-2 font-mono">0{idx + 1}</span>
        </div>
        
        <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6">
          {project.description}
        </p>

        {project.highlights && (
          <ul className="mb-6 space-y-2">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 opacity-60" />
                <span className="leading-tight">{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech) => (
            <span key={tech} className="text-[10px] font-semibold tracking-wider px-3 py-1 bg-primary/5 text-primary border border-primary/10 rounded-full uppercase">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-8 lg:hidden">
          <Button size="sm" className="flex-1 rounded-xl gap-2 h-11 shadow-sm" asChild>
            <Link href={project.liveUrl} target="_blank">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Link>
          </Button>
          <Button size="sm" variant="secondary" className="flex-1 rounded-xl gap-2 h-11 shadow-sm" asChild>
            <Link href={project.githubUrl} target="_blank">
              <Github className="w-4 h-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <Section id="projects" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.2]" />
      
      <div className="mb-12 md:mb-20 space-y-2 md:space-y-4">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[10px] tracking-[0.4em] text-muted-foreground uppercase"
        >
          Selected Works
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-medium tracking-tighter sm:text-6xl md:text-7xl"
        >
          Featured <span className="text-muted-foreground/60 italic">Projects</span>
        </motion.h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project} idx={idx} />
        ))}
      </div>
    </Section>
  );
}
