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

import { motion } from "framer-motion";

export function Experience() {
  return (
    <Section id="experience" className="relative">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-[0.1]" />
      
      <div className="mb-20 space-y-4">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[10px] tracking-[0.4em] text-muted-foreground uppercase"
        >
          Career Path
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-medium tracking-tighter sm:text-6xl md:text-7xl"
        >
          Work <span className="text-muted-foreground/30 italic">History</span>
        </motion.h2>
      </div>

      <div className="relative space-y-12 before:absolute before:inset-0 before:left-0 md:before:left-1/2 before:-translate-x-px before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative flex items-start md:odd:flex-row-reverse group"
          >
            {/* Dot */}
            <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 flex items-center justify-center w-3 h-3 rounded-full border border-border bg-background z-10 transition-colors group-hover:bg-primary" />

            {/* Content Card */}
            <div className="ml-8 md:ml-0 md:w-[calc(50%-2.5rem)] p-8 rounded-3xl border border-border bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">
              <div className="flex flex-col mb-6 gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
                    {exp.period}
                  </span>
                  <span className="text-[10px] tracking-widest text-primary/60 uppercase bg-primary/5 px-2 py-0.5 rounded-full border border-primary/10">
                    Full Time
                  </span>
                </div>
                <h3 className="font-medium text-2xl tracking-tight">{exp.role}</h3>
                <h4 className="text-sm font-medium text-muted-foreground">
                  {exp.company}
                </h4>
              </div>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-muted-foreground/80 leading-relaxed">
                    <span className="mr-3 mt-1.5 h-1 w-1 rounded-full bg-border shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
