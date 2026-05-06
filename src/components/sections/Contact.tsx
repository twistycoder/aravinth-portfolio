"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Send, MapPin, Mail, MessageCircle, ArrowRight, Share2, Globe, Activity } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const COMMUNICATION_CHANNELS = [
  { 
    name: "WhatsApp", 
    icon: <FaWhatsapp />, 
    href: "https://wa.me/919788660220", 
    status: "Instant",
    label: "Direct Message",
    color: "group-hover:text-[#25D366]" 
  },
  { 
    name: "LinkedIn", 
    icon: <FaLinkedin />, 
    href: "https://www.linkedin.com/in/arvnth", 
    status: "Active",
    label: "Professional",
    color: "group-hover:text-[#0A66C2]" 
  },
  { 
    name: "Email", 
    icon: <FaEnvelope />, 
    href: "mailto:aravintharies@gmail.com", 
    status: "< 24h",
    label: "Official",
    color: "group-hover:text-primary" 
  },
];

function CommunicationCard({ channel, index }: { channel: typeof COMMUNICATION_CHANNELS[0]; index: number }) {
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
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={channel.href}
        target="_blank"
        className="group relative flex items-center justify-between p-6 rounded-3xl border border-border bg-background/40 backdrop-blur-xl hover:border-primary/30 transition-all duration-500 overflow-hidden"
      >
        <div 
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(var(--primary), 0.05), transparent 40%)`,
          }}
        />

        <div className="relative z-10 flex items-center gap-6">
          <div className={cn("text-2xl text-muted-foreground/40 transition-colors duration-500", channel.color)}>
            {channel.icon}
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold tracking-tight">{channel.name}</h4>
            <p className="text-[10px] font-black tracking-widest text-muted-foreground/40 uppercase">
              {channel.label}
            </p>
          </div>
        </div>

        <div className="relative z-10 text-right space-y-1">
          <p className="text-[9px] font-black tracking-[0.2em] text-primary/40 uppercase group-hover:text-primary transition-colors">
            {channel.status}
          </p>
          <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground/20 group-hover:text-primary transition-all group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Connection established successfully! (Simulated)");
    }, 1500);
  };

  return (
    <Section id="contact" className="relative py-24 md:py-40" containerClassName="max-w-7xl">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.05]" />
      
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-20 md:mb-32">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-[1px] w-8 bg-primary/30" />
            <span className="text-xs font-bold tracking-[0.4em] text-primary/40 uppercase">
              Collaboration
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-medium tracking-tight"
          >
            Get In <span className="text-muted-foreground/30 italic font-light">Touch</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-6 px-8 py-5 rounded-[2.5rem] bg-secondary/10 border border-border backdrop-blur-xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">
            <Activity className="w-16 h-16" />
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              <div className="absolute inset-0 h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black tracking-[0.3em] text-muted-foreground/60 uppercase">Network Status</p>
              <p className="text-lg md:text-xl font-bold tracking-tight">Active & Available</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-20 lg:grid-cols-2 items-start">
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
              Let&apos;s build something <br />
              <span className="text-muted-foreground/30 italic font-light text-3xl md:text-4xl">impactful together.</span>
            </h3>
            <p className="text-xl text-muted-foreground/80 leading-relaxed max-w-xl">
              I&apos;m currently available for high-authority engineering roles and 
              strategic freelance collaborations. If you have a complex problem 
              to solve, let&apos;s talk.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-[10px] font-black tracking-[0.4em] text-primary/40 uppercase mb-8">
              Communication Channels
            </p>
            <div className="grid gap-4">
              {COMMUNICATION_CHANNELS.map((channel, i) => (
                <CommunicationCard key={channel.name} channel={channel} index={i} />
              ))}
            </div>
          </div>

          <div className="pt-12 border-t border-border/50 flex flex-col sm:flex-row gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary/40">
                <MapPin className="w-4 h-4" />
                <span className="text-[10px] font-black tracking-widest uppercase">Base Location</span>
              </div>
              <p className="text-lg font-bold tracking-tight">Coimbatore, Tamil Nadu</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary/40">
                <Share2 className="w-4 h-4" />
                <span className="text-[10px] font-black tracking-widest uppercase">Timezone</span>
              </div>
              <p className="text-lg font-bold tracking-tight">IST (UTC +5:30)</p>
            </div>
          </div>
        </div>

        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative p-10 md:p-14 rounded-[3.5rem] border border-border bg-background/40 backdrop-blur-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden"
        >
          <div 
            className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(var(--primary), 0.05), transparent 40%)`,
            }}
          />
          
          <div className="absolute top-0 left-0 p-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
            <MessageCircle className="w-32 h-32" />
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
            <div className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-[10px] font-black tracking-widest text-primary/40 uppercase ml-1">Name</label>
                  <input
                    id="name"
                    required
                    className="w-full bg-secondary/20 border border-border/50 rounded-2xl px-6 py-4 focus:border-primary/50 focus:bg-secondary/40 outline-none transition-all text-foreground placeholder:text-muted-foreground/30 font-medium"
                    placeholder="Engineering Lead"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-[10px] font-black tracking-widest text-primary/40 uppercase ml-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-secondary/20 border border-border/50 rounded-2xl px-6 py-4 focus:border-primary/50 focus:bg-secondary/40 outline-none transition-all text-foreground placeholder:text-muted-foreground/30 font-medium"
                    placeholder="lead@company.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="text-[10px] font-black tracking-widest text-primary/40 uppercase ml-1">Message</label>
                <textarea
                  id="message"
                  required
                  className="w-full bg-secondary/20 border border-border/50 rounded-2xl px-6 py-4 focus:border-primary/50 focus:bg-secondary/40 outline-none transition-all min-h-[160px] resize-none text-foreground placeholder:text-muted-foreground/30 font-medium"
                  placeholder="Let's build the next generation of digital infrastructure..."
                />
              </div>
            </div>

            <div className="space-y-6">
              <Button 
                type="submit" 
                className="w-full h-16 rounded-[2rem] text-lg font-bold tracking-tight shadow-[0_20px_40px_-10px_rgba(var(--primary),0.3)] hover:shadow-[0_20px_40px_-10px_rgba(var(--primary),0.5)] transition-all group/btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Syncing..." : "Establish Connection"}
                <Send className="ml-3 h-5 w-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </Button>
              <div className="flex items-center justify-center gap-3">
                <Globe className="w-3 h-3 text-muted-foreground/30" />
                <p className="text-center text-[10px] font-black tracking-widest text-muted-foreground/40 uppercase">
                  Global response latency: ~24 hours
                </p>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
