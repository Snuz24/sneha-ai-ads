import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import WhatWeCreate from "@/components/WhatWeCreate";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedWork />
      <WhatWeCreate />
      <About />
      <Contact />
      <Footer />
      <FloatingContact />
    </main>
  );
}
