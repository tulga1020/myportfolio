import { Children } from "react";
import { FiSun } from "react-icons/fi";
import { RxDividerVertical } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";

export const HeaderLayout = ({ children }) => {
  const TopMenu = ["About", "Work", "Testimonials", "Contact"];
  return (
    <div className="mx-auto max-w-screen-xl flex flex-col">
      <div className="border-2 justify-between flex items-center h-16 px-20 py-4">
        <div>
          <h2 className="">{"Battulga Portfolio"}</h2>
        </div>
        <div className="hidden md:flex items-center">
          <div className="flex gap-6 items-center text-[#4B5563]">
            {TopMenu.map((el, index) => (
              <p key={index}>{el}</p>
            ))}
            <RxDividerVertical className="text-gray-500 mr-6" />
          </div>
          <div className="flex items-center gap-4 margin">
            <FiSun />
            <button className="text-white border-2 bg-black px-4 py-1.5 rounded-lg">
              Download CV
            </button>
          </div>
        </div>
        <IoIosMenu size={24} className="block md:hidden" />
      </div>
      {children}
    </div>
  );
};
