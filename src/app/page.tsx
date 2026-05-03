import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Activity } from "@/components/sections/Activity";
import { CaseStudy } from "@/components/sections/CaseStudy";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center">
        <Hero />
        <About />
        <Process />
        <Skills />
        <Activity />
        <Services />
        <Experience />
        <CaseStudy />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
