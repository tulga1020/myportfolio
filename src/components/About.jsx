import Image from "next/image";
import { Buttons } from "@/components/Buttons";
import { Pictures } from "./Pictures";

export const About = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-center h-fit">
        <Buttons
          buttonText="About Me"
          btnClass="bg-gray-200 text-gray-600 py-1 px-4 rounded-xl w-fit"
        />
      </div>
      <div className="flex gap-12 max-md:flex-col max-md:w-full">
        <div className="w-6/12 relative">
          <Pictures
            picPath="/Developer.webp"
            classes="w-[280px] h-[280px] absolute left-8 top-4 bg-gray-300 max-sm:left-1 max-sm:w-full cover"
          />
        </div>
        <div className="w-6/12 flex flex-col gap-4">
          <h3 className="text-50">Curious about me? Here you have it:</h3>
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p>
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p>Finally, some quick bits about me.</p>
          <div className="w-full flex justify-between">
            <ul className="list-disc">
              <li>B.E. in Computer Engineering</li>
              <li>Full time freelancer</li>
            </ul>
            <ul className="list-disc">
              <li>Avid learner</li>
              <li>Aspiring indie hacker</li>
            </ul>
          </div>
          <p>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};
