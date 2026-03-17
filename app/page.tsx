import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import Jumbotron from "@/components/Jumbotron/Jumbotron";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <>
      <Jumbotron />
      <About />
      <Experience />
      <Products />
      <Contact />
    </>
  );
}
