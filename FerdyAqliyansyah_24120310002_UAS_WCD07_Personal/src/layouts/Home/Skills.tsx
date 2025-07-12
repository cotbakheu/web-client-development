import classNames from "classnames";

// Icon Imports
import { IoIosDesktop, IoIosPhonePortrait } from "react-icons/io";
import { IoServerOutline } from "react-icons/io5";
import { FiServer } from "react-icons/fi";

// Style Imports
import style from "./styles/skillsStyle.module.css";

function FrontendSkills() {
  return (
    <div
      id="frontend"
      className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center"
    >
      <div className="bg-brand-secondary text-background-primary w-56 p-8 px-6 rounded-2xl flex flex-col items-center justify-center gap-4">
        <IoIosDesktop className="text-4xl" />
        <p className="text-sm">Frontend Development</p>
      </div>
      <div className="flex flex-wrap gap-4 justify-evenly mt-8">
        <div className="w-28 h-28 rounded-full bg-white flex justify-center items-center">
          <img src="/nextjs.svg" alt="nextjs" className="w-20" />
        </div>
        <div className="w-28 h-28 rounded-full bg-white flex justify-center items-center">
          <img src="/vue.svg" alt="vuejs" className="w-20" />
        </div>
        <div className="w-28 h-28 rounded-full bg-white flex justify-center">
          <img src="/react.svg" alt="reactjs" className="w-20" />
        </div>
      </div>
    </div>
  );
}

function BackendSkills() {
  return (
    <div
      id="backend"
      className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center mt-10 md:mt-0"
    >
      <div className="bg-brand-secondary text-background-primary w-56 p-8 px-6 rounded-2xl flex flex-col items-center justify-center gap-4">
        <FiServer className="text-4xl" />
        <p className="text-sm">Backend Development</p>
      </div>
      <div className="flex flex-wrap gap-4 justify-evenly mt-8">
        <div className="w-28 h-28 rounded-full bg-white flex justify-center items-center">
          <img src="/nestjs.svg" alt="nestjs" className="w-20" />
        </div>
        <div className="w-28 h-28 rounded-full bg-white flex justify-center items-center">
          <img src="/express.svg" alt="expressjs" className="w-20" />
        </div>
      </div>
    </div>
  );
}

function MobileSkills() {
  return (
    <div
      id="mobile"
      className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center mt-10 lg:mt-0"
    >
      <div className="bg-brand-secondary text-background-primary w-56 p-8 px-6 rounded-2xl flex flex-col items-center justify-center gap-4">
        <IoIosPhonePortrait className="text-4xl" />
        <p className="text-sm">Mobile Development</p>
      </div>
      <div className="flex flex-wrap gap-4 justify-evenly mt-8">
        <div className="w-28 h-28 rounded-full bg-white flex justify-center items-center">
          <img src="/flutter.svg" alt="flutter" className="w-20" />
        </div>
        <div className="w-28 h-28 rounded-full bg-white flex justify-center items-center">
          <img src="/react-native.svg" alt="react-native" className="w-20" />
        </div>
      </div>
    </div>
  );
}

function DatabaseSkills() {
  return (
    <div
      id="database"
      className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center mt-10 lg:mt-0"
    >
      <div className="bg-brand-secondary text-background-primary w-56 p-8 px-6 rounded-2xl flex flex-col items-center justify-center gap-4">
        <IoServerOutline className="text-4xl" />
        <p className="text-sm">Database Development</p>
      </div>
      <div className="flex flex-wrap gap-4 justify-evenly mt-8">
        <div className="w-28 h-28 rounded-full bg-white flex justify-center items-center">
          <img src="/mysql.svg" alt="mysql" className="w-20" />
        </div>
        <div className="w-28 h-28 rounded-full bg-white flex justify-center items-center">
          <img src="/mongodb.svg" alt="mongo db" className="w-20" />
        </div>
        <div className="w-28 h-28 rounded-full bg-white flex justify-center items-center">
          <img src="/postgresql.svg" alt="postgres" className="w-20" />
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div
      id="skills"
      className={classNames(
        "h-full lg:h-[90vh] p-8 xl:px-24",
        style["skill-background"]
      )}
    >
      <div className="flex flex-col items-center justify-center">
        <span className="text-brand-primary text-2xl md:text-4xl font-semibold">
          <span className="text-3xl md:text-5xl">{"</>"}</span> Skills
        </span>
        <div className="flex items-center mt-4">
          <div className="rounded-full w-2 h-2 bg-brand-primary"></div>
          <hr className="w-48 md:w-58 border border-brand-primary" />
          <div className="rounded-full w-2 h-2 bg-brand-primary"></div>
        </div>
        <p className="text-gray-200 text-xs mt-8">
          I am striving to never stop learning and improving
        </p>
      </div>
      <div
        id="skill-list"
        className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-4 md:justify-around lg:justify-between items-start mt-10"
      >
        <FrontendSkills />
        <BackendSkills />
        <MobileSkills />
        <DatabaseSkills />
      </div>
    </div>
  );
}

export default Skills;
