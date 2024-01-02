import { useState } from "react";
import { RxDividerVertical } from "react-icons/rx";
import { FiMenu, FiSun, FiMoon } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { TopMenu } from "./TopMenu";
import { useTheme } from "next-themes";
import { ModeIcon } from "./Icons";
import { Buttons } from "./Buttons";
import { motion } from "framer-motion";
export const HeaderLayout = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [isClickedMenu, setClickedMenu] = useState(false);

  const changeIconMenu = () => {
    setClickedMenu(!isClickedMenu);
  };
  const topMenuls = ["About", "Work", "Testimonials", "Contact"];
  return (
    <div className="mx-auto max-w-screen-xl flex flex-col relative">
      {!isClickedMenu ? (
        <div className="center justify-between h-16 px-20 py-4 max-md:px-4">
          <div>
            <h2 className="">{"Battulga Portfolio"}</h2>
          </div>
          <div className="hidden md:flex items-center">
            <div className="flex gap-6 items-center text-[#4B5563]">
              {topMenuls.map((el, index) => (
                <p key={index}>{el}</p>
              ))}
              <RxDividerVertical className="text-gray-500 mr-6" />
            </div>
            <div className="flex items-center gap-4 margin text-lg">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <ModeIcon />
              </button>
              <Buttons
                btnClass="text-white border-2  bg-black px-4 py-1.5 dark:bg-white dark:text-black rounded-lg"
                buttonText="Download CV"
              />
            </div>
          </div>
        </div>
      ) : (
        <TopMenu />
      )}
      <button
        className="absolute right-4 top-4 block md:hidden"
        onClick={changeIconMenu}
      >
        {isClickedMenu ? <MdOutlineCancel size={24} /> : <FiMenu size={24} />}
      </button>
      {children}
    </div>
  );
};
