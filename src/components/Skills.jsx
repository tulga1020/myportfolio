import { Buttons } from "./Buttons";
import { Icons } from "./Icons";
import { Pictures } from "./Pictures";
import Image from "next/image";
export const Skills = () => {
  const logosarr = [
    { techIcon: "/logos/icon-javscript.svg", label: "JavaScript" },
    { techIcon: "/logos/icon-typescript.svg", label: "TypeScript" },
    { techIcon: "/logos/icon-react.svg", label: "React" },
    { techIcon: "/logos/icon-nextjs.svg", label: "Next.js" },
    { techIcon: "/logos/icon-nodejs.svg", label: "Node.js" },
    { techIcon: "/logos/icon-express.svg", label: "Express.js" },
    { techIcon: "/logos/icon-nest.svg", label: "Nest.js" },
    { techIcon: "/logos/icon-socket.svg", label: "Socket.io" },
    { techIcon: "/logos/icon-postgresql.svg", label: "PostgreSQL" },
    { techIcon: "/logos/icon-mongodb.svg", label: "MongoDB" },
    { techIcon: "/logos/icon-sass.svg", label: "Sass/Scss" },
    { techIcon: "/logos/icon-tailwindcss.svg", label: "Tailwindcss" },
    { techIcon: "/logos/icon-figma.svg", label: "Figma" },
    { techIcon: "/logos/icon-cypress.svg", label: "Cypress" },
    { techIcon: "/logos/icon-storybook.svg", label: "Storybook" },
    { techIcon: "/logos/icon-git.svg", label: "Git" },
  ];
  return (
    <div className="flex flex-col justify-center gap-16">
      <div className="center flex-col gap-4">
        <Buttons
          buttonText="Skills"
          btnClass="flex justify-center h-fit bg-gray-300 rounded w-fit px-4"
        />
        <p>The skills, tools and technologies I am really good at:</p>
      </div>
      <div className="flex flex-wrap justify-around gap-20 max-md:gap-10">
        {logosarr.map(({ label, techIcon }, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-16 h-16 gap-2 "
          >
            <Image src={techIcon} width={64} height={64} />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
