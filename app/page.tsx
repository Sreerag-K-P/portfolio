"use client";
import Contact from "./_home/Contact";
import Experience from "./_home/Experience";
import Footer from "./_home/Footer";
import Hero from "./_home/Hero";
import Projects from "./_home/Projects";
import Skills from "./_home/Skills";
import { delay, motion, useScroll, useSpring } from "framer-motion";
import { ParticlesBg } from "./components/ParticleBg";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="w-full">
      <>
        <motion.div
          className="fixed top-30 z-20 left-0 right-0 h-2 bg-blue-500 origin-[0%] transform"
          style={{ scaleX: scrollYProgress }}
        ></motion.div>
        <ParticlesBg />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>
    </main>
  );
}
