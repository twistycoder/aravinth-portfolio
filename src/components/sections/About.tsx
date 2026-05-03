"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { Code2, Layout, Database } from "lucide-react";

import { motion } from "framer-motion";

export function About() {
  return (
    <Section id="about" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.1]" />
      
      <div className="mb-12 md:mb-20 space-y-2 md:space-y-4">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[10px] tracking-[0.4em] text-muted-foreground uppercase"
        >
          Perspective
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-medium tracking-tighter sm:text-6xl md:text-7xl"
        >
          About <span className="text-muted-foreground/60 italic">Me</span>
        </motion.h2>
      </div>

      <div className="grid gap-10 md:gap-16 lg:grid-cols-5 items-start">
        {/* Left Side: Content */}
        <div className="lg:col-span-3 space-y-8 md:space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-foreground leading-[1.2] md:leading-[1.1]">
              I design and build high-performance web applications that don&apos;t just look good — <span className="text-primary italic">they solve real business problems.</span>
            </h3>
            
            <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed max-w-2xl">
              With 5+ years of experience, I specialize in React and Next.js, delivering scalable, user-focused products for startups and growing teams.
            </p>

            <div className="pt-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-primary/5 border border-primary/10">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <p className="text-sm font-medium tracking-tight text-primary">
                  &ldquo;I don&apos;t just build UI — I build systems that scale.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
          
          <div className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-5xl md:text-6xl font-medium tracking-tighter text-primary">5+</p>
              <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-3 font-semibold">Years Exp</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-5xl md:text-6xl font-medium tracking-tighter text-primary">50+</p>
              <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-3 font-semibold">Projects</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-5xl md:text-6xl font-medium tracking-tighter text-primary">10+</p>
              <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-3 font-semibold">Clients</p>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Cards */}
        <div className="lg:col-span-2 grid gap-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-[2.5rem] border border-border bg-background/50 p-10 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary border border-primary/10 transition-transform group-hover:scale-110">
              <Layout className="h-7 w-7" />
            </div>
            <h3 className="mb-4 text-2xl font-medium tracking-tight">Front-End Engineering</h3>
            <p className="text-base text-muted-foreground/80 leading-relaxed">
              Crafting pixel-perfect, responsive interfaces using React and Next.js with a focus on performance and accessibility.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative rounded-[2.5rem] border border-border bg-background/50 p-10 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary border border-primary/10 transition-transform group-hover:scale-110">
              <Code2 className="h-7 w-7" />
            </div>
            <h3 className="mb-4 text-2xl font-medium tracking-tight">Technical Architecture</h3>
            <p className="text-base text-muted-foreground/80 leading-relaxed">
              Designing scalable systems and state management patterns that ensure long-term maintainability and speed.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
