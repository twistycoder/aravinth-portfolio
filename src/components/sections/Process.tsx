"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import { 
  CheckCircle2, 
  Compass,
  Code2, 
  Zap, 
  LayoutTemplate,
  ShieldCheck,
  ChevronRight,
  BookOpen
} from "lucide-react";

const STEPS = [
  {
    title: "Discovery",
    description: "Deep-diving into business goals, user needs, and technical requirements to build a solid foundation.",
    icon: Compass,
    deliverables: ["Product Roadmap", "Technical Audit", "User Personas"],
  },
  {
    title: "Architecture",
    description: "Architecting the UI/UX with a focus on design systems, accessibility, and high-conversion flows.",
    icon: LayoutTemplate,
    deliverables: ["System Design", "UI Kit", "Wireframes"],
  },
  {
    title: "Engineering",
    description: "Building scalable, high-performance applications using modern React/Next.js best practices.",
    icon: Code2,
    deliverables: ["Clean Code", "API Integration", "Unit Tests"],
  },
  {
    title: "Optimization",
    description: "Performance tuning, SEO engineering, and ensuring 99+ Lighthouse scores across all metrics.",
    icon: Zap,
    deliverables: ["Lighthouse 100", "SEO Setup", "Speed Audit"],
  }
];

function Page({ 
  step, 
  index, 
  progress 
}: { 
  step: typeof STEPS[0]; 
  index: number; 
  progress: MotionValue<number>;
}) {
  // Map scroll progress to a specific range for this page
  // Each page flips in a 0.2 segment of the 0-1 range
  const start = index * 0.2;
  const end = (index + 1) * 0.2;
  
  // Rotation from 0 to -180 degrees
  const rotateY = useTransform(progress, [start, end], [0, -180], { clamp: true });
  
  // Opacity fade as it turns (simulating shadow and turning away)
  const opacity = useTransform(progress, [start, end - 0.05, end], [1, 1, 0], { clamp: true });
  
  // Z-index management: pages that haven't turned yet stay on top in reverse order
  const zIndex = useTransform(progress, (p) => {
    if (p < start) return STEPS.length - index;
    if (p > end) return index;
    return STEPS.length + 1; // Turning page is on top
  });

  return (
    <motion.div
      style={{ 
        rotateY,
        zIndex,
        opacity,
        transformOrigin: "left center",
        perspective: "2000px",
        backfaceVisibility: "hidden", // Hide back of page
      }}
      className="absolute inset-0 w-full h-full"
    >
      <div className="relative w-full h-full rounded-r-3xl border border-border bg-background p-8 md:p-12 shadow-[10px_0_30px_-10px_rgba(0,0,0,0.1)] flex flex-col justify-between overflow-hidden group">
        {/* Page Texture/Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
        
        {/* Page Number */}
        <div className="absolute top-8 right-8 text-6xl font-black text-foreground/[0.03]">
          0{index + 1}
        </div>

        <div className="space-y-8 relative z-10">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary border border-primary/10 transition-transform group-hover:scale-110">
            <step.icon className="h-8 w-8" />
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight">
              {step.title}
            </h3>
            <p className="text-muted-foreground/80 leading-relaxed text-base md:text-lg max-w-md">
              {step.description}
            </p>
          </div>
        </div>

        <div className="space-y-6 relative z-10">
          <div className="pt-8 border-t border-border/50">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-4">
              <ShieldCheck className="w-3 h-3" />
              Technical Deliverables
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {step.deliverables.map((d) => (
                <div key={d} className="flex items-center gap-2 text-sm text-foreground/70 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary/40" />
                  {d}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-bold text-primary/60 uppercase tracking-widest">
            Turn to next step <ChevronRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Process() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <Section id="process" className="relative p-0" containerClassName="max-w-none px-0">
      {/* Scroll Container for sticky effect */}
      <div ref={containerRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-secondary/5 py-20 px-6 md:px-20">
          <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.05]" />
          
          <div className="w-full max-w-7xl h-full flex flex-col lg:flex-row gap-16 items-center">
            {/* Left side: Static Intro */}
            <div className="lg:w-1/3 space-y-8">
              <div className="space-y-4">
                <motion.div className="flex items-center gap-3">
                  <div className="h-[1px] w-8 bg-primary/30" />
                  <span className="text-xs font-bold tracking-[0.4em] text-primary/40 uppercase">
                    Workflow
                  </span>
                </motion.div>
                
                <h2 className="text-5xl md:text-8xl font-medium tracking-tight">
                  The <br />
                  <span className="text-muted-foreground/30 italic font-light">Playbook</span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-sm">
                Scroll to flip through my engineering-first methodology. A transparent look into 
                how I build high-performance digital products.
              </p>

              <div className="flex items-center gap-4 pt-8">
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-primary">Interactive</div>
                  <div className="text-xs text-muted-foreground">Flippable Process Map</div>
                </div>
              </div>
            </div>

            {/* Right side: The Book */}
            <div className="lg:w-2/3 relative h-[60vh] md:h-[70vh] w-full max-w-2xl lg:max-w-none lg:aspect-[4/3]">
              {/* Book Spine/Base */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary/20 rounded-l-full z-0 shadow-[2px_0_10px_rgba(0,0,0,0.1)]" />
              
              {/* Pages Container */}
              <div className="relative w-full h-full pl-2">
                {STEPS.map((step, idx) => (
                  <Page 
                    key={idx} 
                    step={step} 
                    index={idx} 
                    progress={scrollYProgress} 
                  />
                ))}
                
                {/* Last "Back Page" or Completion State */}
                <div className="absolute inset-0 w-full h-full rounded-r-3xl bg-secondary/30 border border-border flex items-center justify-center -z-10 p-12 text-center">
                  <div className="space-y-6">
                    <div className="w-20 h-20 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto">
                      <ShieldCheck className="w-10 h-10 text-primary/40" />
                    </div>
                    <h4 className="text-2xl font-medium">End of Playbook</h4>
                    <p className="text-sm text-muted-foreground max-w-xs">
                      Ready to start your project with this proven engineering-first methodology?
                    </p>
                    <button className="px-6 py-3 rounded-xl bg-primary text-background text-sm font-bold tracking-tight">
                      Initiate Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
