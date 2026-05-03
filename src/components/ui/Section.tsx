"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  containerClassName?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, containerClassName, id, children, ...props }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn("py-16 md:py-24 w-full", className)}
        {...props}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className={cn(
            "mx-auto max-w-5xl px-6 md:px-12",
            containerClassName
          )}
        >
          {children}
        </motion.div>
      </section>
    );
  }
);
Section.displayName = "Section";
