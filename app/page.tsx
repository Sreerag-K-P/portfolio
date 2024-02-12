import Contact from "./_home/Contact";
import Experience from "./_home/Experience";
import Footer from "./_home/Footer";
import Hero from "./_home/Hero";
import Projects from "./_home/Projects";
import Skills from "./_home/Skills";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
