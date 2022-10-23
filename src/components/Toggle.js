import { useState } from "react";
import classes from "./Toggle.module.css";

const Toggle = () => {
  const [lightTheme, toggleLightTheme] = useState(true);
  const handleToggle = () => {
    toggleLightTheme((prevState) => !prevState);
  };

  lightTheme
    ? document.firstElementChild.setAttribute("color-scheme", "light")
    : document.firstElementChild.setAttribute("color-scheme", "dark");

  return (
    <div className={classes.toggleBox}>
      <p className={classes.mode}> {lightTheme ? "Dark Mode" : "Light Mode"}</p>
      <div className={classes.toggle}>
        <div
          className={`${classes.circle} ${!lightTheme && classes.darkTheme}`}
          onClick={handleToggle}
        />
      </div>
    </div>
  );
};

export default Toggle;
