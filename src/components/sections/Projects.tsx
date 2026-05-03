"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const PROJECTS = [
  {
    title: "Webdipo Technologies",
    description: "An elite web and mobile app development agency in Coimbatore. Built an SEO-first, high-performance platform for the business.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tech: ["Next.js", "React", "Tailwind CSS", "SEO"],
    liveUrl: "https://webdipo.in/",
    githubUrl: "#",
  },
  {
    title: "Lyse Liquids",
    description: "An elegant product showcase for premium enzymatic washing liquids and fabric conditioners. Focused on high conversion and brand identity.",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2100&auto=format&fit=crop",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://www.lyseliquids.in/",
    githubUrl: "#",
  },
  {
    title: "BMTrust",
    description: "A platform for Bharath Mithran Socio Economic Development Trust, dedicated to empowering communities through education and healthcare.",
    image: "https://images.unsplash.com/photo-1593113580436-d70313361421?q=80&w=2100&auto=format&fit=crop",
    tech: ["React", "UI/UX", "Responsive Design"],
    liveUrl: "https://www.bmtrust.in/",
    githubUrl: "#",
  },
  {
    title: "Legalperfect UI",
    description: "A centralized platform where users can download all legal documents related to their property in one place.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop",
    tech: ["React.js", "Next.js", "Tailwind CSS"],
    liveUrl: "https://legalperfect-ui.vercel.app/",
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <Section id="projects" className="bg-secondary/30">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
        <div className="mt-2 h-1 w-20 bg-primary rounded"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="group flex flex-col rounded-xl border border-border bg-background overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300">
            <div className="relative aspect-video overflow-hidden bg-muted">
              {/* Using standard img for simplicity without configuring remotePatterns in next.config.ts */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                <Button size="icon" variant="secondary" className="rounded-full" asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </Button>
                {project.githubUrl !== "#" && (
                  <Button size="icon" variant="secondary" className="rounded-full" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="w-4 h-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
