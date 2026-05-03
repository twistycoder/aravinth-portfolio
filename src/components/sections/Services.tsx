"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Globe, Smartphone, Search, LineChart, Layout, Layers } from "lucide-react";

const SERVICES = [
  {
    title: "Custom Web Applications",
    description: "End-to-end development of scalable, high-performance web apps using Next.js and React.",
    icon: <Globe className="w-6 h-6" />,
    features: ["PWA Ready", "SEO Optimized", "Next.js 14"]
  },
  {
    title: "Performance Optimization",
    description: "In-depth audits and engineering to achieve perfect 100/100 Lighthouse scores and lightning speed.",
    icon: <LineChart className="w-6 h-6" />,
    features: ["Core Web Vitals", "Code Splitting", "Image Opt."]
  },
  {
    title: "Technical Architecture",
    description: "Designing robust frontend infrastructures and design systems that scale with your team.",
    icon: <Layers className="w-6 h-6" />,
    features: ["Design Systems", "State Mgmt", "Clean Code"]
  },
  {
    title: "Modern UI/UX Engineering",
    description: "Crafting pixel-perfect, interactive interfaces with advanced animations and focus on UX.",
    icon: <Layout className="w-6 h-6" />,
    features: ["Framer Motion", "Accessibility", "Responsive"]
  }
];

export function Services() {
  return (
    <Section id="services" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.1]" />
      
      <div className="mb-12 md:mb-20 space-y-2 md:space-y-4">
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
          className="text-3xl font-medium tracking-tighter sm:text-6xl md:text-7xl"
        >
          My <span className="text-muted-foreground/60 italic">Services</span>
        </motion.h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative rounded-[2.5rem] border border-border bg-background/50 p-10 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/5 text-primary border border-primary/10 transition-transform group-hover:scale-110">
                {service.icon}
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-medium tracking-tight">{service.title}</h3>
                <p className="text-base text-muted-foreground/80 leading-relaxed max-w-md">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.features.map((feature) => (
                    <span key={feature} className="text-[10px] font-bold tracking-widest uppercase text-primary/60 px-3 py-1 bg-primary/5 rounded-full border border-primary/10">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
