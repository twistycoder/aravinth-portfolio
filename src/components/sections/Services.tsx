"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Globe, Smartphone, Search, LineChart, Layout, Layers } from "lucide-react";

const SERVICES = [
  {
    title: "UX & UI",
    description: "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    icon: <Layout className="w-8 h-8" />
  },
  {
    title: "Web & Mobile App",
    description: "Transforming ideas into exceptional web and mobile app experiences.",
    icon: <Smartphone className="w-8 h-8" />
  },
  {
    title: "Design & Creative",
    description: "Crafting visually stunning designs that connect with your audience.",
    icon: <Layers className="w-8 h-8" />
  },
  {
    title: "Development",
    description: "Bringing your vision to life with the latest technology and design trends.",
    icon: <Globe className="w-8 h-8" />
  }
];

export function Services() {
  return (
    <Section id="services" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.05]" />
      
      <div className="mb-16 md:mb-24">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[10px] tracking-[0.4em] text-muted-foreground uppercase block mb-2"
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

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 relative">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            className="group relative flex flex-col gap-6"
          >
            {/* Icon Container */}
            <div className="text-foreground/80 group-hover:text-primary transition-colors duration-500">
              {service.icon}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed max-w-[280px]">
                {service.description}
              </p>
            </div>

            {/* Subtle Hover Indicator Line */}
            <div className="h-[2px] w-0 bg-primary/20 transition-all duration-700 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
