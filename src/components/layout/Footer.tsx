"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-24 px-6 overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.05]" />

      {/* Floating Card Footer */}
      <motion.div
        whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(var(--primary), 0.15)" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "relative w-full max-w-5xl rounded-[2.5rem] md:rounded-[3.5rem] border border-border bg-background/50 backdrop-blur-2xl shadow-2xl p-8 md:p-20 overflow-hidden group/footer",
          "before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-primary/5 before:via-transparent before:to-transparent before:opacity-50"
        )}
      >
        <div className="flex flex-col items-start justify-between gap-16 md:flex-row relative z-10">
          <div className="space-y-8">
            <Link href="#" className="inline-block hover:opacity-80 transition-all hover:scale-105 active:scale-95">
              <Image src="/logo.png" alt="Logo" width={140} height={36} className="h-8 w-auto object-contain dark:invert" />
            </Link>

            <div className="space-y-3">
              <h2 className="text-2xl font-medium tracking-tighter text-foreground">
                Aravinthkumar <span className="text-muted-foreground/60 italic">Devaraj</span>
              </h2>
              <p className="text-base text-muted-foreground/80 max-w-sm leading-relaxed">
                Building scalable, high-performance web applications <span className="text-foreground/90 font-medium">that deliver real business value.</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold tracking-[0.2em] text-primary uppercase shadow-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
                Open to new opportunities
              </div>
              <Link
                href="mailto:aravintharies@gmail.com"
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group/cta"
              >
                Let&apos;s Connect <ArrowUpRight className="h-3 w-3 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black tracking-[0.3em] text-foreground/40 uppercase">Digital Ecosystem</h4>
              <div className="flex flex-col gap-4">
                <Link href="https://www.linkedin.com/in/arvnth" target="_blank" className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-all group/link">
                  <div className="p-2 rounded-lg bg-secondary/50 group-hover/link:bg-primary/10 transition-colors">
                    <FaLinkedin className="h-4 w-4" />
                  </div>
                  <span className="relative overflow-hidden">
                    LinkedIn
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover/link:w-full" />
                  </span>
                  <ArrowUpRight className="h-3 w-3 opacity-40 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                </Link>
                <Link href="https://github.com/twistycoder" target="_blank" className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-all group/link">
                  <div className="p-2 rounded-lg bg-secondary/50 group-hover/link:bg-primary/10 transition-colors">
                    <FaGithub className="h-4 w-4" />
                  </div>
                  <span className="relative overflow-hidden">
                    GitHub
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover/link:w-full" />
                  </span>
                  <ArrowUpRight className="h-3 w-3 opacity-40 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-black tracking-[0.3em] text-foreground/40 uppercase">Communication</h4>
              <div className="flex flex-col gap-4">
                <Link href="mailto:aravintharies@gmail.com" className="flex items-center gap-3 text-sm font-medium hover:text-primary transition-all group/link">
                  <div className="p-2 rounded-lg bg-secondary/50 group-hover/link:bg-primary/10 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="relative overflow-hidden">
                    Direct Email
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover/link:w-full" />
                  </span>
                  <ArrowUpRight className="h-3 w-3 opacity-40 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-border/50 flex flex-col items-center justify-between gap-6 md:flex-row relative z-10">
          <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-muted-foreground/60">
            © {currentYear} Aravinthkumar Devaraj. Built with passion & precision.
          </p>
          <div className="flex items-center gap-10 text-[10px] tracking-[0.2em] uppercase font-bold">
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
            onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/50 border border-border/50 text-[10px] font-black tracking-[0.3em] uppercase hover:bg-primary/10 hover:text-primary transition-all group/up"
          >
            Back to Top
            <ArrowUpRight className="h-3 w-3 -rotate-45 group-hover/up:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>
      </motion.div>
    </footer>
  );
}
