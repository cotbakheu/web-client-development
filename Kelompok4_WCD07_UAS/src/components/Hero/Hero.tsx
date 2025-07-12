import React from "react";
import style from "./HeroStyle.module.css";
import classNames from "classnames";

type Props = {
  imageUrl: string;
  title: string;
  description?: string;
};

function Hero({ imageUrl, title, description }: Props) {
  return (
    <div className="relative">
      <div
        className={classNames(style["hero-container"], "h-[50vh]")}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="h-full text-white flex items-start flex-col justify-end px-20 pb-20 z-2 relative max-w-2/3">
          <p className="text-3xl font-bold">{title}</p>
          <p className="mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
