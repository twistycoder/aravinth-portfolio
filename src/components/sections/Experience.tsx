"use client";

import * as React from "react";
import { Section } from "@/components/ui/Section";
import { Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    role: "React Developer",
    company: "P2P IT Solutions",
    period: "Jan 2022 - April 2025",
    description: [
      "Designed and implemented efficient user interfaces for file uploads using React and Ant Design Uploader, optimizing the user experience for seamless file management.",
      "Implemented React E-Charts to visually summarize data for IP (Inpatient) and OP (Outpatient) providing insightful and interactive data visualization.",
      "Utilized Material-UI Table to calculate and display the status of insurance claims, enhancing data clarity and interaction.",
      "Refactored legacy code to align with modern development standards, enhancing functionality, maintainability, and performance.",
    ],
  },
  {
    role: "React Developer",
    company: "Integraate Innovations Private Limited",
    period: "Jan 2021 - Dec 2021",
    description: [
      "Developed a complete front-end framework for a Document Intelligence platform.",
      "Implemented end-to-end API integration to efficiently extract and analyze data, and provided real-time insights through an interactive React dashboard.",
      "Developed Redux modules and aggregate tables/grids to create a comparison table.",
      "Implemented High-charts for interactive dashboard and analysis modules.",
    ],
  },
  {
    role: "React Developer",
    company: "Prizm IT Technology",
    period: "April 2018 - Nov 2020",
    description: [
      "End-to-end React development experience, specializing in full-fledged UI application development with advanced modules tailored for the insurance industry.",
      "Integrated High-charts with combination bar, spline, pie, and donut charts to create dynamic and interactive data visualizations.",
      "Implemented Flux architecture in React components to manage state.",
      "Implemented Ag-Grid tables in React for dynamic data management and integrated React forms.",
    ],
  },
  {
    role: "UI Website Developer",
    company: "CODOTVU",
    period: "April 2017 - Nov 2018",
    description: [
      "Developed authentication and authorization functionalities including Sign Up, Login, and Change Password features using React.js.",
      "Designed and integrated various client-side validation controls to ensure data accuracy.",
      "Contributed to writing application-level code to interact with APIs and RESTful web services using AJAX and JSON.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience">
      <div className="mb-12">
        <h2 className="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">Experience</h2>
        <div className="mt-2 h-1 w-20 bg-primary rounded"></div>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-primary">
              <Briefcase className="w-5 h-5" />
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-border bg-background shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <h3 className="font-medium text-xl">{exp.role}</h3>
                <span className="text-xs font-medium px-2.5 py-1 bg-primary/10 text-primary rounded-full w-fit">
                  {exp.period}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-muted-foreground mb-4">
                {exp.company}
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-outside ml-4 marker:text-border">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
