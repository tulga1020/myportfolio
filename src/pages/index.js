import { useState } from "react";
import { Inter } from "next/font/google";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
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
    </div>
  );
}
