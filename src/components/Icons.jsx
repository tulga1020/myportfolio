import {
  FiGithub,
  FiFacebook,
  FiInstagram,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { useState } from "react";
export const Icons = () => {
  return (
    <div className="flex gap-2">
      <FiGithub />
      <FiFacebook />
      <FiInstagram />
    </div>
  );
};

export const ModeIcon = () => {
  const [modeIcon, setModeIcon] = useState(false);
  const changeModeIcon = () => {
    setModeIcon(!modeIcon);
  };
  return (
    <div className="active:scale-3" onClick={changeModeIcon}>
      {modeIcon ? <FiSun /> : <FiMoon />}
    </div>
  );
};
