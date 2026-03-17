import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import Jumbotron from "@/components/Jumbotron/Jumbotron";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Jumbotron />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
