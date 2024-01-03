import { Buttons } from "./Buttons";
import { useState } from "react";
import { Icons } from "./Icons";
import { AnimatePresence, motion } from "framer-motion";
import { FiMail, FiCopy, FiPhone } from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";
export const Footer = () => {
  const [tooltip, setTooltip] = useState(false);

  const showtooltip = () => {
    setTooltip(true);
    setTimeout(() => {
      setTooltip(false);
    }, 1500);
  };
  return (
    <div className="flex flex-col gap-12 items-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <Buttons
          buttonText="Get in Touch"
          btnClass="flex justify-center h-fit bg-color"
        />
        <p>
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div>
        <CopyToClipboard text={"battulga@rocketbytek.com"} onCopy={showtooltip}>
          <div className="justify-center items-center flex gap-5">
            <FiMail />
            <p>battulga@rocketbytek.com</p>
            <FiCopy />
          </div>
        </CopyToClipboard>
        <CopyToClipboard text={"+976 99876880"} onCopy={showtooltip}>
          <div className="justify-center items-center flex gap-5">
            <FiPhone />
            <p>+976 99876880</p>
            <FiCopy />
          </div>
        </CopyToClipboard>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center gap">
          <p> You may also find me on these platforms</p>
          <Icons />
        </div>
      </div>
      {tooltip ? (
        <AnimatePresence>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="bg-black text-white rounded dark:text-black dark:bg-white text-center p-4 w-fit flex justify-center z-10"
          >
            Copied to clipboard!
          </motion.div>
        </AnimatePresence>
      ) : (
        <div></div>
      )}
    </div>
  );
};
