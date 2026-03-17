import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Features from "@/components/Features/Features";
import Jumbotron from "@/components/Jumbotron/Jumbotron";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <>
      <Jumbotron />
      <About />
      <Features />
      <Products />
      <Contact />
    </>
  );
}
