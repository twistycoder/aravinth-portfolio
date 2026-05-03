"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Send, MapPin, Phone, Mail } from "lucide-react";

import { motion } from "framer-motion";

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
          <p className="text-xl text-muted-foreground/80 leading-relaxed mb-12">
            Have a project in mind or just want to say hello? I&apos;m always open to discussing new opportunities and creative ideas.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary border border-primary/10">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-1">Location</h4>
                <p className="text-lg font-medium">Coimbatore, Tamil Nadu</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary border border-primary/10">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-1">Email</h4>
                <p className="text-lg font-medium">aravintharies@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary border border-primary/10">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-1">Phone</h4>
                <p className="text-lg font-medium">+91 9788660220</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[2.5rem] border border-border bg-background/50 p-10 backdrop-blur-sm shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-3">
                <label htmlFor="name" className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Name</label>
                <input
                  id="name"
                  required
                  className="w-full bg-transparent border-b border-border py-2 focus:border-primary outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-border py-2 focus:border-primary outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label htmlFor="message" className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Message</label>
              <textarea
                id="message"
                required
                className="w-full bg-transparent border-b border-border py-2 focus:border-primary outline-none transition-colors min-h-[100px] resize-none"
                placeholder="Let's build something great..."
              />
            </div>
            <Button type="submit" className="w-full h-14 rounded-full text-lg" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Inquiry"}
              <Send className="ml-3 h-5 w-5" />
            </Button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
