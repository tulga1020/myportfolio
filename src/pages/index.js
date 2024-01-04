import { useState } from "react";
import { Inter } from "next/font/google";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [color, setColor] = useState("red");
  return (
    <div>
      <div className="sectiondiv">
        <Hero />
      </div>
      <div className="sectiondiv">
        <About />
      </div>
      <div className="sectiondiv">
        <Skills />
      </div>
      <div className="mx-auto bg-gray-100 sectiondiv">
        <Experience />
      </div>
      <div className="sectiondiv">
        <Footer />
      </div>
    </div>
  );
}
