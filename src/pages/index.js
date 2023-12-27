import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Hero } from "@/components/Hero";
import { TopMenu } from "@/components/TopMenu";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [color, setColor] = useState("red");
  return (
    <div className="w-full md:px-20 md:py-4 max-md:px-4 max-md:py-1">
      <Hero />
      <h1>My favorite color is {color}!</h1>
      <button
        className="bg-blue-300"
        type="button"
        onClick={() => setColor("blue")}
      >
        Blue
      </button>
      <button
        className="bg-red-300"
        type="button"
        onClick={() => setColor("red")}
      >
        Red
      </button>
      <button
        className="bg-pink-300"
        type="button"
        onClick={() => setColor("pink")}
      >
        Pink
      </button>
      <button
        className="bg-green-300"
        type="button"
        onClick={() => setColor("green")}
      >
        Green
      </button>
    </div>
  );
}
