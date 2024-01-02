import { Pictures } from "@/components/Pictures";
import { IoLocationOutline } from "react-icons/io5";
import Image from "next/image";
import { Icons } from "./Icons";
export const Hero = (heroprops) => {
  return (
    <div className="w-full ">
      <div className="flex max-md:flex-col-reverse items-center max-sm:mx-1 justify-between">
        <div className="w-9/12 max-md:w-11/12 flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-6xl max-md:text-4xl">Hi I'm Battulga 👋</h1>
            <div>
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 4 years, I still love it as if it was something new.{" "}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <IoLocationOutline /> Ulaanbaatar, Mongolia
            </div>
            <div className="flex items-center gap-2">
              {" "}
              <div>
                <div className="p-2 rounded-full bg-green-300 w-2 h-2"></div>{" "}
              </div>
              Available for new projects
            </div>
          </div>
          <Icons />
        </div>

        <Pictures
          imageContainDiv="relative max-h-max md:w-max max-sm:w-11/12 flex items-center"
          shadowClasses="absolute w-[280px] h-[280px] left-4 top-4 dark:bg-gray-200"
          imageDivClass="w-[280px] h-[280px] absolute left-2 top-2 bg-gray-300 max-sm:left-1 max-sm:w-full cover"
          picPath="/profile.jpeg"
          imageClass="cover absolute border-8 border-solid border-white max-md:w-[50%] max-md:h-[50%]"
        />
      </div>
    </div>
  );
};
