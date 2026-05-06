"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowUpRight, Zap, Terminal, Code2, Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();
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
    <footer className="relative py-24 px-6 overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.05]" />

      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn(
          "relative w-full max-w-5xl rounded-[2.5rem] md:rounded-[3.5rem] border border-border bg-background/50 backdrop-blur-3xl shadow-2xl p-8 md:p-16 overflow-hidden group/footer transition-all duration-500 hover:border-primary/20",
          "before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-primary/5 before:via-transparent before:to-transparent before:opacity-50"
        )}
      >
        {/* Hover Glow */}
        <div 
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover/footer:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(var(--primary), 0.08), transparent 40%)`,
          }}
        />

        <div className="flex flex-col items-start justify-between gap-16 md:flex-row relative z-10">
          <div className="space-y-10">
            <div className="space-y-6">
              <Link href="#" className="inline-block hover:opacity-80 transition-all hover:scale-105 active:scale-95">
                <Image src="/logo.png" alt="Logo" width={140} height={36} className="h-8 w-auto object-contain dark:invert" />
              </Link>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-foreground leading-tight">
                  Aravinthkumar <span className="text-muted-foreground/60 italic">Devaraj</span>
                </h2>
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                    Senior Product Engineer
                  </div>
                  <div className="h-px w-8 bg-border" />
                  <span className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-widest">Coimbatore, IN</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <p className="text-base md:text-lg text-muted-foreground/80 max-w-sm leading-relaxed">
                Architecting scalable, high-performance web applications <span className="text-foreground/90 font-medium">that deliver real business value.</span>
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    <div className="absolute inset-0 h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-emerald-500 uppercase">Available for projects</span>
                </div>
                
                <Link
                  href="mailto:aravintharies@gmail.com"
                  className="text-[10px] font-bold tracking-widest uppercase text-primary hover:text-primary transition-all flex items-center gap-2 group/cta"
                >
                  Let&apos;s Connect <Zap className="h-3 w-3 fill-primary group-hover/cta:animate-pulse" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-20">
            <div className="space-y-8">
              <h4 className="text-[10px] font-black tracking-[0.4em] text-foreground/40 uppercase">Digital Ecosystem</h4>
              <div className="flex flex-col gap-5">
                {[
                  { name: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/arvnth" },
                  { name: "GitHub", icon: <FaGithub />, href: "https://github.com/twistycoder" }
                ].map((link) => (
                  <Link key={link.name} href={link.href} target="_blank" className="group/link flex items-center gap-3 text-sm font-medium hover:text-primary transition-all">
                    <div className="p-2 rounded-lg bg-secondary/50 group-hover/link:bg-primary/10 transition-colors">
                      {link.icon}
                    </div>
                    <span>{link.name}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] font-black tracking-[0.4em] text-foreground/40 uppercase">Communication</h4>
              <div className="flex flex-col gap-5">
                {[
                  { name: "Direct Email", icon: <Mail />, href: "mailto:aravintharies@gmail.com" }
                ].map((link) => (
                  <Link key={link.name} href={link.href} className="group/link flex items-center gap-3 text-sm font-medium hover:text-primary transition-all">
                    <div className="p-2 rounded-lg bg-secondary/50 group-hover/link:bg-primary/10 transition-colors">
                      {link.icon}
                    </div>
                    <span>{link.name}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-border/50 flex flex-col items-center justify-between gap-10 md:flex-row relative z-10">
          <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-muted-foreground/60">
            © {currentYear} Aravinthkumar Devaraj. Built with passion & precision.
          </p>

          <div className="flex items-center gap-10 text-[10px] tracking-[0.2em] uppercase font-black">
            {["About", "Works", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative py-1 group/nav transition-colors hover:text-foreground"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover/nav:w-full" />
              </Link>
            ))}
          </div>

          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-secondary border border-border text-[10px] font-black tracking-[0.3em] uppercase hover:bg-primary hover:text-background transition-all group/up shadow-sm"
          >
            Back to Top
            <ArrowUpRight className="h-3 w-3 -rotate-45 group-hover/up:animate-pulse" />
          </motion.button>
        </div>
      </motion.div>
    </footer>
  );
}
