import { useState } from "react";
import { FiSun } from "react-icons/fi";
import { Buttons } from "./Buttons";
import { ModeIcon } from "./Icons";
import { useTheme } from "next-themes";

export const TopMenu = () => {
  const menulist = ["Download CV", "About", "Work", "Testimonials", "Contact"];
  const [isMenu, setCMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const IconMenu = () => {
    setClickedMenu(!isClickedMenu);
  };
  return (
    <div className="bg-gray-200 flex justify-end">
      <div className="min-h-screen max-md:w-11/12 md:flex flex-col max-h-max bg-white dark:bg-black ">
        <div className="flex justify-between p-4">
          <h2 className="">{"<SS/>"}</h2>
        </div>
        <div className="flex items-center p-4">
          <div className="flex flex-col gap-4 items-left text-lg text-[#4B5563]">
            {menulist.map((el, index) => (
              <p key={index}>{el}</p>
            ))}
          </div>
        </div>
        <div className="flex items-center flex-col p-4 gap-4">
          <div className="flex justify-between items-center w-full">
            <p>Switch Theme</p>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <ModeIcon />
            </button>
          </div>
          <Buttons
            buttonText="Download CV"
            btnClass="text-white w-full border-2 bg-black px-4 py-1.5 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
