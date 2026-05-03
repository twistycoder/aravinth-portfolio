"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Send, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const QUICK_CONTACT = [
  { name: "WhatsApp", icon: <FaWhatsapp />, href: "https://wa.me/919788660220", color: "hover:text-[#25D366]" },
  { name: "Email", icon: <FaEnvelope />, href: "mailto:aravintharies@gmail.com", color: "hover:text-primary" },
  { name: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/aravinth-dk", color: "hover:text-[#0A66C2]" },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully! (Simulated)");
    }, 1500);
  };

  return (
    <Section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.1]" />
      
      <div className="mb-20 space-y-4">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[10px] tracking-[0.4em] text-muted-foreground uppercase"
        >
          Collaboration
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-medium tracking-tighter sm:text-6xl md:text-7xl"
        >
          Get In <span className="text-muted-foreground/30 italic">Touch</span>
        </motion.h2>
      </div>

      <div className="grid gap-16 lg:grid-cols-2 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6 mb-12">
            <h3 className="text-3xl font-medium tracking-tight text-foreground leading-tight">
              Let&apos;s build something <span className="text-primary italic">impactful together.</span>
            </h3>
            <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-xl">
              I&apos;m currently available for freelance projects and full-time opportunities. If you have an idea or need a reliable React developer, let&apos;s talk.
            </p>
          </div>

          <div className="space-y-10">
            {/* Quick Contact Buttons */}
            <div className="flex flex-wrap gap-4">
              {QUICK_CONTACT.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className={cn(
                    "flex items-center gap-3 px-6 py-3 rounded-2xl border border-border bg-background/50 backdrop-blur-sm transition-all hover:border-primary/20 hover:shadow-lg",
                    item.color
                  )}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium tracking-wide uppercase">{item.name}</span>
                </Link>
              ))}
            </div>

            <div className="grid gap-8 pt-6">
              <div className="flex items-center gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary border border-primary/10">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase mb-0.5">Location</h4>
                  <p className="text-base font-medium">Coimbatore, Tamil Nadu</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary border border-primary/10">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase mb-0.5">Email</h4>
                  <p className="text-base font-medium">aravintharies@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[2.5rem] border border-border bg-background/50 p-10 backdrop-blur-md shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
          <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-3">
                <label htmlFor="name" className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">Name</label>
                <input
                  id="name"
                  required
                  className="w-full bg-transparent border-b border-border py-2 focus:border-primary outline-none transition-colors text-foreground"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-border py-2 focus:border-primary outline-none transition-colors text-foreground"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label htmlFor="message" className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">Message</label>
              <textarea
                id="message"
                required
                className="w-full bg-transparent border-b border-border py-2 focus:border-primary outline-none transition-colors min-h-[100px] resize-none text-foreground"
                placeholder="Let's build something great..."
              />
            </div>
            <div className="space-y-4">
              <Button type="submit" className="w-full h-14 rounded-full text-lg shadow-xl shadow-primary/10" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Let's Work Together"}
                <Send className="ml-3 h-5 w-5" />
              </Button>
              <p className="text-center text-[10px] tracking-widest text-muted-foreground/60 uppercase">
                Usually responds within 24 hours
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
