// Style Imports
import classNames from "classnames";
import background from "./styles/aboutStyle.module.css";

function About() {
  return (
    <div
      id="about"
      className={classNames(
        "h-full lg:h-[90vh] p-8 xl:px-24",
        background["about-background"]
      )}
    >
      <div className="h-[20px] lg:h-[140px]"></div>
      <div className="flex gap-40 items-end">
        <div>
          <div className="border-brand-primary w-fit bg-background-secondary border-2 rounded-br-3xl rounded-tl-3xl p-4">
            <p className="text-2xl">About Me</p>
          </div>
          <div className="rounded-2xl bg-background-secondary mt-4 p-8">
            <span className="text-brand-primary text-2xl">Hello!</span>
            <br />
            <br />
            <span>
              As a seasoned software engineer with four years of experience, I
              excel in a diverse array of technologies including{" "}
              <span className="text-brand-primary">Vue.js</span>,{" "}
              <span className="text-brand-primary">Next.js</span>,{" "}
              <span className="text-brand-primary">Express.js</span>,{" "}
              <span className="text-brand-primary">Nest.js</span>, and{" "}
              <span className="text-brand-primary">Flutter</span>.
            </span>
            <span className="block mt-4">
              My expertise extends to crafting various applications ranging from
              real-time systems to point of sales, warehouse management like ERP
              dashboards, and company profile.
            </span>
            <span className="block mt-4">
              My proficiency in building dynamic solutions underscores My
              adaptability and skill in delivering impactful software products.
            </span>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="/person-with-computer.png" alt="About Image" />
        </div>
      </div>
    </div>
  );
}

export default About;
