"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Layout, 
  Layers, 
  ChevronRight, 
  Terminal,
  Monitor,
  Code2,
  Cpu,
  LayoutTemplate
} from "lucide-react";
import { SiFramer as Framer } from "react-icons/si";

const SERVICES = [
  {
    title: "UX & UI Engineering",
    description: "Designing interfaces that are intuitive, efficient, and enjoyable to use with a focus on systems.",
    icon: LayoutTemplate,
    capabilities: ["Design Systems", "Prototyping", "Accessibility"],
    id: "SVR-01"
  },
  {
    title: "Web & Mobile App",
    description: "Transforming ideas into exceptional cross-platform experiences using modern stacks.",
    icon: Smartphone,
    capabilities: ["React Native", "Next.js", "PWA Architecture"],
    id: "SVR-02"
  },
  {
    title: "System Design",
    description: "Architecting scalable, maintainable application structures for long-term growth.",
    icon: Cpu,
    capabilities: ["API Design", "Database Modeling", "CI/CD"],
    id: "SVR-03"
  },
  {
    title: "Product Engineering",
    description: "Full-lifecycle development from ideation to deployment and optimization.",
    icon: Code2,
    capabilities: ["Full-stack Dev", "Cloud Hosting", "Performance"],
    id: "SVR-04"
  }
];

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
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

      {/* Blueprint Pattern Overlay */}
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.02] group-hover:opacity-[0.08] transition-opacity duration-700" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-10">
          <div className="p-4 rounded-2xl bg-primary/5 text-primary border border-primary/10 transition-all duration-500 group-hover:bg-primary group-hover:text-background group-hover:scale-110">
            <service.icon className="w-8 h-8" />
          </div>
          <span className="text-[10px] font-black tracking-[0.4em] text-foreground/[0.03] group-hover:text-primary transition-colors">
            {service.id}
          </span>
        </div>
        
        <div className="space-y-4 mb-8">
          <h3 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-primary">
            {service.title}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="space-y-4 pt-8 border-t border-border/50">
          <div className="flex flex-wrap gap-2">
            {service.capabilities.map((cap) => (
              <span 
                key={cap} 
                className="inline-flex items-center rounded-lg border border-border bg-secondary/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-foreground/60 transition-all group-hover:border-primary/20 group-hover:text-primary"
              >
                {cap}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-2 text-xs font-bold text-primary/40 group-hover:text-primary transition-all group-hover:translate-x-1">
            Explore Solution <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <Section id="services" className="relative py-24 md:py-40" containerClassName="max-w-7xl">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.05]" />
      
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-20 md:mb-32">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-[1px] w-8 bg-primary/30" />
            <span className="text-xs font-bold tracking-[0.4em] text-primary/40 uppercase">
              Expertise
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-medium tracking-tight"
          >
            My <span className="text-muted-foreground/30 italic font-light">Services</span>
          </motion.h2>
        </div>

        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-lg text-muted-foreground leading-relaxed max-w-sm lg:text-right"
        >
          Specialized engineering solutions tailored for high-performance applications 
          and scalable digital architectures.
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {SERVICES.map((service, idx) => (
          <ServiceCard key={idx} service={service} index={idx} />
        ))}
      </div>

      {/* Decorative Blueprint Accent */}
      <div className="mt-20 flex items-center justify-center gap-12 opacity-[0.05] grayscale hover:grayscale-0 transition-all duration-700">
        <Terminal className="w-12 h-12" />
        <div className="h-px w-32 bg-foreground" />
        <Monitor className="w-12 h-12" />
        <div className="h-px w-32 bg-foreground" />
        <Framer className="w-12 h-12" />
      </div>
    </Section>
  );
}
