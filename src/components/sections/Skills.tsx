"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";

const SKILLS = [
  { category: "Frontend", items: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { category: "State Management", items: ["Redux", "Flux"] },
  { category: "Backend & Data", items: ["Node.js", "MySQL", "Axios", "REST APIs", "AJAX", "JSON"] },
  { category: "Tools & Libraries", items: ["Figma", "GitHub", "High-charts", "E-Charts", "Material-UI", "Ag-Grid", "Ant Design", "Bootstrap"] },
];

export function Skills() {
  return (
    <Section id="skills" className="bg-secondary/30">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Skills</h2>
        <div className="mt-2 h-1 w-20 bg-primary rounded mx-auto md:mx-0"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {SKILLS.map((skillGroup, idx) => (
          <div key={idx} className="rounded-xl border border-border bg-background p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md border border-border bg-secondary px-2.5 py-0.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
