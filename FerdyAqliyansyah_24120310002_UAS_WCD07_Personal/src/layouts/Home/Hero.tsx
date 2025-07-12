// Icon Imports
import {
  IoMailOutline,
  IoLocation,
  IoLink,
  IoBriefcase,
} from "react-icons/io5";
import { Link } from "react-router";

function Bio() {
  return (
    <div className="w-[250px] shadow-[-3px_-3px] shadow-brand-secondary h-[420px] border-2 border-white p-6 rounded-br-[70px] rounded-tl-[70px]">
      <div className="flex justify-center items-center flex-col">
        <div className="w-[100px] h-[100px] rounded-full border border-brand-primary overflow-hidden">
          <img src="/profile-photo.jpeg" alt="Profile Photo" />
        </div>
        <p className="text-lg" id="name">
          Ferdy Aqliyansyah
        </p>
        <p className="text-sm">Software Engineer</p>
      </div>
      <ul className="mt-8 flex flex-col gap-3">
        <li>
          <Link
            to={"mailto:ferdyaqli27@gmail.com"}
            className="flex text-xs items-center gap-2"
          >
            <IoMailOutline className="text-brand-primary text-base" />
            <p id="email">ferdyaqli27@gmail.com</p>
          </Link>
        </li>
        <li className="flex text-xs items-center gap-2">
          <IoLocation className="text-brand-primary text-base" />
          <p id="location">Jakarta, Indonesia</p>
        </li>
        <li className="flex text-xs items-center gap-2">
          <IoBriefcase className="text-brand-primary text-base" />
          <p id="jobs">Fulltime / Freelancer</p>
        </li>
        <li>
          <Link to={"/"} className="flex text-xs items-center gap-2">
            <IoLink className="text-brand-primary text-base" />
            <p id="website">www.ferdyaqli.com</p>
          </Link>
        </li>
      </ul>
      <ul className="flex gap-2 mt-4 text-background-primary text-xs">
        <li className="bg-brand-primary p-1 rounded-full">NEXT</li>
        <li className="bg-brand-primary p-1 rounded-full">FLUTTER</li>
        <li className="bg-brand-primary p-1 rounded-full">EXPRESS</li>
        <li className="bg-brand-primary p-1 rounded-full">VUE</li>
      </ul>
      <Link
        to={"/ferdy_cv_new.pdf"}
        download={"ferdy_cv_new.pdf"}
        target="_blank"
        id="download-cv"
      >
        <button className="rounded-full w-full mt-4 h-8 bg-white text-background-primary">
          Download CV
        </button>
      </Link>
    </div>
  );
}

function Skills() {
  return (
    <div className="rounded-[60px] bg-background-secondary flex flex-col justify-evenly gap-8 px-8 py-10 w-[200px] h-[320px]">
      <div className="flex gap-4">
        <p className="text-5xl gap-4 text-brand-primary">3</p>
        <p>Programming Language</p>
      </div>
      <div className="flex gap-4">
        <p className="text-5xl gap-4 text-brand-primary">6</p>
        <p>Development Tools</p>
      </div>
      <div className="flex gap-4">
        <p className="text-5xl gap-4 text-brand-primary">4</p>
        <p>Years of Experience</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="p-8 xl:px-24 h-full lg:h-[90vh]">
      <h1 className="text-brand-secondary text-6xl mt-10 text-center hidden xl:block">
        Software Engineer
      </h1>
      <div className="flex flex-col sm:flex-row justify-around lg:justify-between items-center gap-8 mt-8 sm:flex-wrap lg:flex-nowrap">
        <div className="flex justify-center w-full lg:w-auto">
          <Bio />
        </div>
        <div className="w-full sm:w-[30%] lg:w-auto">
          <p className="text-4xl md:text-6xl">
            Hey, <br />
            I'm Ferdy,
            <br />
          </p>
          <br />
          <p className="text-xl lg:text-3xl">
            Powered by caffeine and questionable sleep schedules.
          </p>
        </div>
        <div className="w-full sm:w-[30%] lg:w-auto flex justify-center">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default Hero;
