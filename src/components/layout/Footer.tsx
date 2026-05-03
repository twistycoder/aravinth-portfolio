import * as React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background py-20 text-sm text-muted-foreground overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.05]" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-medium tracking-tighter text-foreground">
                Aravinthkumar <span className="text-muted-foreground/40 italic">Devaraj</span>
              </h2>
              <p className="text-base text-muted-foreground/80 max-w-xs leading-relaxed">
                Building scalable, high-performance web applications with React & Next.js.
              </p>
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-semibold tracking-widest text-primary uppercase">
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Open to new opportunities
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-16">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-foreground uppercase">Social</h4>
              <div className="flex flex-col gap-3">
                <Link href="https://www.linkedin.com/in/aravinth-dk" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors group">
                  <FaLinkedin className="h-4 w-4" />
                  LinkedIn
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                </Link>
                <Link href="https://github.com/twitycoder" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors group">
                  <FaGithub className="h-4 w-4" />
                  GitHub
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold tracking-[0.2em] text-foreground uppercase">Contact</h4>
              <div className="flex flex-col gap-3">
                <Link href="mailto:aravintharies@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors group">
                  <Mail className="h-4 w-4" />
                  Email
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border/50 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-[11px] tracking-wider uppercase font-medium">
            © {currentYear} Aravinthkumar Devaraj. Built with passion & precision.
          </p>
          <div className="flex items-center gap-6 text-[11px] tracking-wider uppercase font-medium">
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
            <Link href="#projects" className="hover:text-primary transition-colors">Works</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
