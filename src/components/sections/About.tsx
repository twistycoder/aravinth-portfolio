"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { Code2, Layout, Database } from "lucide-react";

export function About() {
  return (
    <Section id="about">
      <div className="mb-12">
        <h2 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">About Me</h2>
        <div className="mt-2 h-1 w-20 bg-primary rounded"></div>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I am an experienced React Developer with hands-on expertise in building dynamic websites. As a rational developer, I am passionate about creating and designing user-friendly sites that deliver exceptional interactivity and seamless experiences.
          </p>
          <p>
            Over the past 5+ years, I have honed my skills in User Interface Design and Front-End Development, consistently delivering intuitive and user-centric web applications. I also bring additional expertise in Backend Development, enabling me to build comprehensive full-stack solutions.
          </p>
          <p>
            My diverse skill set is complemented by extensive exposure to startup environments, which has fostered my adaptability, innovative thinking, and ability to thrive in fast-paced settings.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Layout className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-semibold">Front-End Dev</h3>
            <p className="text-sm text-muted-foreground">
              Expert in React, Next.js, and modern CSS frameworks like Tailwind CSS, building responsive and accessible interfaces.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Code2 className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-semibold">Architecture</h3>
            <p className="text-sm text-muted-foreground">
              Strong grasp of state management (Redux, Flux) and API integrations (Axios, REST, GraphQL).
            </p>
          </div>

          <div className="rounded-xl border border-border bg-background p-6 shadow-sm sm:col-span-2 lg:col-span-1 xl:col-span-2 flex flex-col sm:flex-row items-start gap-4">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
              <Database className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Full-Stack Capabilities</h3>
              <p className="text-sm text-muted-foreground">
                Proficient in Node.js and MySQL, developing API contracts and ensuring efficient communication between frontend and backend systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
