import * as React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-12">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <p className="font-semibold text-foreground">
            Aravinthkumar Devaraj
          </p>
          <p>Senior React Developer</p>
        </div>
        
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/aravinth-dk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:aravintharies@gmail.com"
            className="hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>

        <p className="text-center md:text-right">
          © {currentYear} Aravinthkumar Devaraj. <br className="hidden md:block" />
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
