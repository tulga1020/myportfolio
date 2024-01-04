import { Buttons } from "./Buttons";
import { ExperienceCard } from "./ExperienceCard";
export const Experience = () => {
  return (
    <div className="center gap-8 flex-col">
      <div className="center flex-col">
        <Buttons
          buttonText="Experience"
          btnClass="flex justify-center h-fit bg-gray-300 rounded w-fit px-4 gap-4"
        />
        <p>Here is a quick summary of my most recent experiences:</p>
      </div>
      <div className="center flex-col gap-8">
        <ExperienceCard
          header="Sr. Front-End Developer"
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          text2="asdlfkasdlkf asldkjf dsj fsdlkjsdf"
          text3="dsfsdfl sdfjkl sdfkjlsdflkj s dfdlk jsdf"
          date="1 years ago"
        />

        <ExperienceCard
          header="Team Leader"
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          text2="asdlfkasdlkf asldkjf dsj fsdlkjsdf"
          text3="dsfsdfl sdfjkl sdfkjlsdflkj s dfdlk jsdf"
          date="3 years ago"
        />

        <ExperienceCard
          header="Full-Stack Developer"
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          text2="asdlfkasdlkf asldkjf dsj fsdlkjsdf"
          text3="dsfsdfl sdfjkl sdfkjlsdflkj s dfdlk jsdf"
          date="5 years ago"
        />
      </div>
    </div>
  );
};
