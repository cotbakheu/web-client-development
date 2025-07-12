import { BsMouse } from "react-icons/bs";
import style from "./mouseStyle.module.css";
import classNames from "classnames";
import React from "react";

function Mouse() {
  const [hideFloat, setHideFloat] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      // Check if we're within 100px of the bottom
      if (scrollY + windowHeight >= fullHeight - 100) {
        setHideFloat(true);
      } else {
        setHideFloat(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={classNames(hideFloat ? "hidden" : "block")}>
      <BsMouse
        className={classNames("text-brand-primary text-2xl", style["mouse"])}
      />
      <div
        className={classNames(
          "border-l border-dashed w-4 border-white h-20 ",
          style["line"]
        )}
      ></div>
    </div>
  );
}

export default Mouse;
