import { Pictures } from "@/components/Pictures";
import { IoLocationOutline } from "react-icons/io5";
import Image from "next/image";
import { Icons } from "./Icons";
export const Hero = (heroprops) => {
  return (
    <div className="w-full">
      <div className="flex w-full gap-10 max-md:flex-col-reverse  max-sm:mx-1">
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
        <div className="w-3/12 h-fit max-md:w-11/12 max-md:h-[300]">
          <Pictures
            imageContainDiv="relative max-sm:w-11/12"
            shadowClasses="absolute w-[280px] h-[280px] left-4 top-4 dark:bg-gray-200"
            imageDivClass="absolute w-[280px] h-[280px] left-0 top-0 bg-gray-300 max-sm:left-1"
            picPath="/profile.jpeg"
            imageClass="cover absolute border-8 border-solid border-gray"
          />
        </div>
      </div>
    </div>
  );
};
