"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { Code2, Layout, Database } from "lucide-react";

import { motion } from "framer-motion";

export function About() {
  return (
    <Section id="about" className="relative">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.1]" />
      
      <div className="mb-20 space-y-4">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[10px] tracking-[0.4em] text-muted-foreground uppercase"
        >
          Overview
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-medium tracking-tighter sm:text-6xl md:text-7xl"
        >
          About <span className="text-muted-foreground/30 italic">Me</span>
        </motion.h2>
      </div>

      <div className="grid gap-16 lg:grid-cols-5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 space-y-8 text-lg text-muted-foreground/80 leading-relaxed"
        >
          <p className="text-xl text-foreground font-medium tracking-tight">
            I am a Senior React Developer passionate about crafting digital experiences that are as functional as they are beautiful.
          </p>
          <p>
            With over 5 years of experience in the industry, I specialized in building high-performance web applications using modern technologies like React, Next.js, and Node.js. My approach combines technical excellence with a deep understanding of user behavior.
          </p>
          <p>
            My journey through various startups has taught me the importance of agility and innovative thinking. I don&apos;t just write code; I build solutions that drive business growth and user satisfaction.
          </p>
          
          <div className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-medium tracking-tighter text-foreground">5+</p>
              <p className="text-[10px] tracking-widest text-muted-foreground uppercase mt-2">Years Exp</p>
            </div>
            <div>
              <p className="text-3xl font-medium tracking-tighter text-foreground">50+</p>
              <p className="text-[10px] tracking-widest text-muted-foreground uppercase mt-2">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-medium tracking-tighter text-foreground">10+</p>
              <p className="text-[10px] tracking-widest text-muted-foreground uppercase mt-2">Happy Clients</p>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-2 grid gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl border border-border bg-background/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl"
          >
            <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary border border-primary/10">
              <Layout className="h-5 w-5" />
            </div>
            <h3 className="mb-3 text-lg font-medium tracking-tight">Front-End Engineering</h3>
            <p className="text-sm text-muted-foreground/80 leading-relaxed">
              Crafting pixel-perfect, responsive interfaces using React and Next.js with a focus on performance.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative rounded-3xl border border-border bg-background/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl"
          >
            <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary border border-primary/10">
              <Code2 className="h-5 w-5" />
            </div>
            <h3 className="mb-3 text-lg font-medium tracking-tight">Technical Architecture</h3>
            <p className="text-sm text-muted-foreground/80 leading-relaxed">
              Designing scalable systems and state management patterns that stand the test of time.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
