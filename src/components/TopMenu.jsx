import { useState } from "react";
import { FiSun } from "react-icons/fi";

export const TopMenu = () => {
  const menulist = ["About", "Work", "Testimonials", "Contact"];
  const [isMenu, setCMenu] = useState(false);
  const IconMenu = () => {
    setClickedMenu(!isClickedMenu);
  };
  return (
    <div>
      <div className="max-md:w-9/12 md:flex flex-col max-h-max">
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
            <FiSun />
          </div>
          <button className="text-white w-full border-2 bg-black px-4 py-1.5 rounded-lg">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
