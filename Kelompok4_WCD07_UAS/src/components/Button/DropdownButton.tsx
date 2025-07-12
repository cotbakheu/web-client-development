import classNames from "classnames";
import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import style from "./styles/DropdownButtonStyle.module.css";

type Props = {
  variant?: "ghost";
  children: React.ReactNode;
  list: React.ReactNode[];
};

function DropdownButton({ variant, children, list }: Props) {
  const variantClasses = {
    ghost: "bg-transparent",
  };
  return (
    <div
      className={classNames(
        "relative",
        style["container"],
        variantClasses[variant || "ghost"]
      )}
    >
      <div className="flex gap-2 items-center cursor-pointer">
        {children}
        <FaChevronDown className="text-sm" />
      </div>
      <div
        className={classNames(
          "absolute top-[28px] left-0 bg-white rounded-lg py-4 w-fit cursor-pointer",
          style["menu-list"]
        )}
      >
        {list.map((item) => item)}
      </div>
    </div>
  );
}

export default DropdownButton;
