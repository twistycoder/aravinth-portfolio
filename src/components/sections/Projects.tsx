"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    title: "Webdipo Technologies",
    description: "An elite web and mobile app development agency in Coimbatore. Built an SEO-first, high-performance platform for the business.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tech: ["Next.js", "React", "Tailwind CSS", "SEO"],
    liveUrl: "https://webdipo.in/",
    githubUrl: "#",
  },
  {
    title: "Lyse Liquids",
    description: "An elegant product showcase for premium enzymatic washing liquids and fabric conditioners. Focused on high conversion and brand identity.",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2100&auto=format&fit=crop",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://www.lyseliquids.in/",
    githubUrl: "#",
  },
  {
    title: "BMTrust",
    description: "A platform for Bharath Mithran Socio Economic Development Trust, dedicated to empowering communities through education and healthcare.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    tech: ["React", "UI/UX", "Responsive Design"],
    liveUrl: "https://www.bmtrust.in/",
    githubUrl: "#",
  },
  {
    title: "Legalperfect UI",
    description: "A centralized platform where users can download all legal documents related to their property in one place.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop",
    tech: ["React.js", "Next.js", "Tailwind CSS"],
    liveUrl: "https://legalperfect-ui.vercel.app/",
    githubUrl: "#",
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative flex flex-col rounded-3xl border border-border bg-background/50 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5",
        idx === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1"
      )}
    >
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
           style={{ 
             background: `radial-gradient(600px circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(var(--primary), 0.1), transparent 40%)` 
           }} 
      />
      
      <div className={cn(
        "relative overflow-hidden bg-muted",
        idx === 0 ? "h-64 md:h-[400px]" : "h-48"
      )}>
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 backdrop-blur-md">
          <Button size="icon" variant="secondary" className="rounded-full h-12 w-12" asChild>
            <Link href={project.liveUrl} target="_blank">
              <ExternalLink className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1 z-10">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-medium text-2xl tracking-tight md:text-3xl">{project.title}</h3>
          <span className="text-[10px] tracking-widest text-muted-foreground uppercase mt-2">0{idx + 1}</span>
        </div>
        <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6 max-w-md">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech) => (
            <span key={tech} className="text-[10px] font-medium tracking-wider px-2.5 py-1 bg-primary/5 text-primary/60 border border-primary/10 rounded-full uppercase">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <Section id="projects" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.2]" />
      
      <div className="mb-20 space-y-4">
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
          className="text-4xl font-medium tracking-tighter sm:text-6xl md:text-7xl"
        >
          Featured <span className="text-muted-foreground/30 italic">Projects</span>
        </motion.h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project} idx={idx} />
        ))}
      </div>
    </Section>
  );
}
