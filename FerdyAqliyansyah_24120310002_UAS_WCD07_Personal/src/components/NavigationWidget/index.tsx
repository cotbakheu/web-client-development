import classNames from "classnames";
import { GrAppsRounded } from "react-icons/gr";
import {
  IoPersonOutline,
  IoCode,
  IoBriefcase,
  IoMailOutline,
} from "react-icons/io5";
import style from "./navigationWidgetStyle.module.css";

function NavigationWidget() {
  return (
    <div
      className={classNames(
        "fixed h-10 w-10 p-[3px] rounded-full border cursor-pointer border-white left-4 bg-background-primary",
        style["container"]
      )}
    >
      <div className={classNames("h-[300px] flex gap-2 flex-col items-center")}>
        <div className="bg-white border w-8 h-8 rounded-full border-background-primary flex items-center justify-center">
          <GrAppsRounded className="text-background-primary text-2xl" />
        </div>
        <a
          href={"#about"}
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:text-background-primary"
        >
          <IoPersonOutline className="text-xl" />
        </a>
        <a
          href={"#skills"}
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:text-background-primary"
        >
          <IoCode className="text-xl" />
        </a>
        <a
          href={"#experiences"}
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:text-background-primary"
        >
          <IoBriefcase className="text-xl" />
        </a>
        <a
          href={"#contact"}
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:text-background-primary"
        >
          <IoMailOutline className="text-xl" />
        </a>
      </div>
    </div>
  );
}

export default NavigationWidget;
