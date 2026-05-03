"use client";

import * as React from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Download, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const ROLES = ["Senior React Developer", "UI/UX Engineer", "Frontend Architect"];

const BADGES = [
  { text: "5+ Years Experience", icon: <CheckCircle2 className="w-3 h-3" /> },
  { text: "Full Stack Developer", icon: <CheckCircle2 className="w-3 h-3" /> },
  { text: "Startup Specialist", icon: <CheckCircle2 className="w-3 h-3" /> },
];

export function Hero() {
  const [roleIndex, setRoleIndex] = React.useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  const nameWords = "Aravinthkumar".split("");

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden pt-40 pb-24 lg:pt-32 lg:pb-0 bg-background"
    >
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.2]" />
        <motion.div 
          style={{ x: smoothX, y: smoothY }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-primary/5 rounded-full blur-[160px] pointer-events-none" 
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left">
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-medium text-muted-foreground/60 tracking-tight"
              >
                Hi, I&apos;m
              </motion.span>
              <h1 className="text-[clamp(3.5rem,8vw,6.5rem)] font-medium tracking-tighter leading-[0.85] flex flex-col">
                <span className="flex overflow-hidden">
                  {nameWords.map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.3 + i * 0.03, 
                        ease: [0.33, 1, 0.68, 1] 
                      }}
                      className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="text-muted-foreground/60 italic relative inline-block group"
                >
                  Devaraj
                  <div className="absolute -bottom-2 left-0 w-0 h-1 bg-primary/20 transition-all duration-700 group-hover:w-full" />
                </motion.span>
              </h1>
            </div>

            <div className="h-12 mt-10 overflow-hidden relative w-full">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "anticipate" }}
                  className="text-2xl md:text-4xl font-medium text-primary tracking-tight"
                >
                  {ROLES[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 max-w-xl text-lg text-muted-foreground/80 md:text-xl leading-relaxed font-light"
            >
              I craft <span className="text-foreground font-medium italic">scalable React applications</span> with exceptional performance and seamless user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {BADGES.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/30 border border-border/50 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/80 hover:bg-secondary/50 transition-colors">
                  {badge.icon}
                  {badge.text}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-12 flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            >
              <Button asChild size="lg" className="h-14 px-10 rounded-full group bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-all">
                <Link href="#projects">
                  Explore Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-10 rounded-full border-border/60 hover:bg-secondary/50 backdrop-blur-sm">
                <Link href="/Aravinth Resume.pdf" target="_blank">
                  Resume
                  <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Elite Logo Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex justify-center relative group"
          >
            {/* Multi-layered Glowing Background */}
            <div className="absolute -inset-24 bg-primary/10 rounded-full blur-[100px] animate-pulse group-hover:bg-primary/20 transition-colors duration-700" />
            <div className="absolute inset-0 bg-radial-gradient(circle, rgba(var(--primary),0.15) 0%, transparent 70%) pointer-events-none" />
            
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 1.5, -1.5, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative z-10 w-full max-w-[420px] aspect-square flex items-center justify-center p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/5 rounded-[4rem] blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="absolute inset-0 border border-primary/10 rounded-[4rem] backdrop-blur-[2px] transition-all duration-700 group-hover:border-primary/20 group-hover:bg-primary/5" />
              <img 
                src="/logo.png" 
                alt="AD Logo" 
                className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(var(--primary),0.3)] group-hover:scale-105 transition-transform duration-700 ease-out dark:invert"
              />
            </motion.div>

            {/* Micro-floating elements */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-background border border-border shadow-xl flex items-center justify-center text-primary"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Refined Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-[9px] font-black tracking-[0.4em] text-muted-foreground/60 uppercase">Discover</span>
        <div className="h-16 w-[1px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
      </motion.div>
    </section>
  );
}
