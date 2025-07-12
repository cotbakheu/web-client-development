import classNames from "classnames";

// Icon Imports
import { IoBriefcase } from "react-icons/io5";

// Style Imports
import style from "./styles/experiencesStyle.module.css";

function Experiences() {
  return (
    <div
      id="experiences"
      className={classNames(
        "h-full lg:min-h-[90vh] p-8 xl:px-24",
        style["skill-background"]
      )}
    >
      <div className="flex flex-col items-center justify-center">
        <span className="text-brand-primary text-2xl md:text-4xl font-semibold flex items-center gap-4">
          <div className="text-3xl md:text-5xl inline">
            <IoBriefcase />
          </div>
          <span>Experiences</span>
        </span>
        <div className="flex items-center mt-4">
          <div className="rounded-full w-2 h-2 bg-brand-primary"></div>
          <hr className="w-58 md:w-72 border border-brand-primary" />
          <div className="rounded-full w-2 h-2 bg-brand-primary"></div>
        </div>
        <p className="text-gray-200 text-xs mt-8">
          I am eager to achive beyond my expectation
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly gap-10 items-center mt-10">
        <div>
          <div className="bg-background-secondary p-8 rounded-2xl w-[270px] sm:w-[400px] md:mt-10">
            <span className="text-brand-primary text-2xl">PGE Aceh</span>
            <ul className="list-disc mt-4">
              <li>
                Developed full-stack web applications including client, admin,
                and backend systems.
              </li>
              <li>
                Configured Jenkins CI/CD pipelines and managed Docker for
                streamlined deployment.
              </li>
              <li>
                Collaborated across teams to gather requirements, conduct
                testing, and ensure overall product quality.
              </li>
            </ul>
          </div>
          <div className="bg-background-secondary mt-10 md:mt-20 p-8 rounded-2xl w-[270px] sm:w-[400px]">
            <span className="text-brand-primary text-2xl">Embreo Pte Ltd</span>
            <ul className="list-disc mt-4">
              <li>Developed up to five web app as full stack developer</li>
              <li>Help writing test script for frontend with jest JS</li>
              <li>Involved in develop mobile app with react native</li>
            </ul>
          </div>
        </div>
        <div
          className={classNames(
            "absolute xl:static z-[-1] hidden lg:flex rounded-full border-2 border-brand-primary w-[300px] h-[300px] overflow-hidden justify-center items-center",
            style["experience-ilustration"]
          )}
        ></div>
        <div>
          <div className="bg-background-secondary p-8 rounded-2xl w-[270px] sm:w-[400px]">
            <span className="text-brand-primary text-2xl">Asani</span>
            <ul className="mt-4 list-disc">
              <li>
                Develop admin dashboard system for managing user, product, and
                warehouse
              </li>
              <li>
                Develop and maintenance mobile app for courier, renting and
                warehouse
              </li>
              <li>Using Nextjs, VueJs, and Flutter for framework</li>
            </ul>
          </div>
          <div className="bg-background-secondary p-8 rounded-2xl w-[270px] sm:w-[400px] mt-10">
            <span className="text-brand-primary text-2xl ">
              PT. Chitra Paratama
            </span>
            <ul className="list-disc mt-4">
              <li>
                Developed UI for credential, payment and finance management
              </li>
              <li>
                Integrate with existing API for payment credential, payment, and
                finance management
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
