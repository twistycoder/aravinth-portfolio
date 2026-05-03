"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Download, CheckCircle2 } from "lucide-react";

const ROLES = ["Senior React Developer", "UI/UX Engineer", "Frontend Architect"];

const BADGES = [
  { text: "5+ Years Experience", icon: <CheckCircle2 className="w-3 h-3" /> },
  { text: "Full Stack Developer", icon: <CheckCircle2 className="w-3 h-3" /> },
  { text: "Startup Specialist", icon: <CheckCircle2 className="w-3 h-3" /> },
];

export function Hero() {
  const [roleIndex, setRoleIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden py-24 lg:py-0"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.2]" />
        <motion.div 
          animate={{ x: [0, 100, -50, 0], y: [0, -50, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-[120px]" 
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wide backdrop-blur-sm mb-6"
            >
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              AVAILABLE FOR NEW OPPORTUNITIES
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-2"
            >
              <span className="text-xl font-medium text-muted-foreground tracking-tight">Hi, I&apos;m</span>
              <h1 className="text-6xl font-medium tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] text-primary">
                Aravinthkumar <br />
                <span className="text-muted-foreground/40 italic">Devaraj</span>
              </h1>
            </motion.div>

            <div className="h-12 mt-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-medium text-primary tracking-tight"
                >
                  {ROLES[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 max-w-xl text-lg text-muted-foreground/80 md:text-xl leading-relaxed"
            >
              I build high-performance, scalable, and user-focused web applications that deliver real business impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {BADGES.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  {badge.icon}
                  {badge.text}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            >
              <Button asChild size="lg" className="h-14 px-10 rounded-full group">
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-10 rounded-full">
                <Link href="/Aravinth Resume.pdf" target="_blank">
                  Download Resume
                  <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Logo/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="absolute -inset-20 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative z-10 w-full max-w-[400px] aspect-square flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-[3rem] blur-2xl opacity-50" />
              <img 
                src="/logo.png" 
                alt="AD Logo" 
                className="w-full h-full object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] text-muted-foreground/50 uppercase">Scroll</span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}
