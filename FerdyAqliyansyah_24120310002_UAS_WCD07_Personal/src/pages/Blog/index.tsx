import classNames from "classnames";
import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { Link } from "react-router";

type BlogPost = {
  title: string;
  desc: string;
  date: string;
  author: string;
  img: string;
  tags: string[];
  link: string;
};

function Blog() {
  const [blogPost] = React.useState<BlogPost[]>([
    {
      title: "React Context Explained Like You’re Noob",
      desc: "If you’ve ever passed props through five components like a game of telephone only to forget who started the call — congrats, you’re now eligible...",
      date: "19 Apr 2025",
      author: "Ferdy",
      img: "/laptop.png",
      tags: ["React", "Web Development"],
      link: "https://medium.com/@ferdyaqli27/react-context-explained-like-youre-noob-55934c02870e",
    },
    {
      title:
        "React: The Way of the Hooks” — Mastering the Elements of useState, useEffect, useRef, useMemo & useCallback",
      desc: "React Hooks have revolutionized the way we write components, making our code more concise and readable. Among these Hooks, useMemo and useCallback...",
      date: "12 Apr 2025",
      author: "Ferdy",
      img: "/laptop.png",
      tags: ["React", "Web Development"],
      link: "https://medium.com/@ferdyaqli27/react-the-way-of-the-hooks-mastering-the-elements-of-usestate-useeffect-useref-usememo-3152ec2c2276",
    },
    {
      title: "React + Tailwind: Building UI Faster Than Your Code Can Compile",
      desc: "Let’s take a trip back to 2013, the year when React.js was open-sourced by Facebook. Developers were skeptical. A JavaScript library that mixes HTML...",
      date: "8 Apr 2025",
      author: "Ferdy",
      img: "/laptop.png",
      tags: ["Tailwind", "Web Development"],
      link: "https://medium.com/@ferdyaqli27/react-tailwind-building-ui-faster-than-your-code-can-compile-ebe85f52df08",
    },
    {
      title: "CSS Animations That Will Make Your Website Feel Alive",
      desc: "In the ever-evolving landscape of web development, creating a website that captivates and engages users is paramount. One of the most effective ways...",
      date: "4 Apr 2025",
      author: "Ferdy",
      img: "/laptop.png",
      tags: ["CSS", "Animation", "Web Development"],
      link: "https://medium.com/@ferdyaqli27/css-animations-that-will-make-your-website-feel-alive-416e769da7ef",
    },
    {
      title:
        "Safeguarding Your Code: Essential Security Practices in Version Control Systems",
      desc: "In today’s digital world, keeping your code safe is very important. Version Control Systems (VCS), like Git, help manage and track code changes. They...",
      date: "16 Mar 2025",
      author: "Ferdy",
      img: "/laptop.png",
      tags: ["Git", "Security", "Version Control"],
      link: "https://medium.com/@ferdyaqli27/safeguarding-your-code-essential-security-practices-in-version-control-systems-632a4d64f5a8",
    },
    {
      title: "I am Trying to Replicate how Javascript Built in Method Work",
      desc: "JavaScript is one of the most well-known programming languages and is widely used by developers, especially for web and mobile application development...",
      date: "8 Mar 2025",
      author: "Ferdy",
      img: "/laptop.png",
      tags: ["Javascript", "Web Development"],
      link: "https://medium.com/@ferdyaqli27/i-am-trying-to-replicate-how-javascript-built-in-method-work-b9885fbdc563",
    },
  ]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classNames("min-h-[90vh] p-8 xl:px-24")}>
      <div className="flex flex-col items-center justify-center">
        <span className="text-brand-primary text-4xl font-semibold flex items-center gap-4">
          <span className="text-5xl">
            <IoNewspaperOutline />
          </span>{" "}
          Blogs
        </span>
        <div className="flex items-center mt-4">
          <div className="rounded-full w-2 h-2 bg-brand-primary"></div>
          <hr className="w-58 border border-brand-primary" />
          <div className="rounded-full w-2 h-2 bg-brand-primary"></div>
        </div>
        <p className="text-gray-200 text-xs mt-8">
          I rant (smartly) about tech & biz. Subscribe if you're into that.
        </p>
        <Link to={"https://medium.com/@ferdyaqli27"} target="_blank">
          <button className="rounded-full border cursor-pointer border-brand-primary p-4 py-2 mt-10 hover:bg-brand-primary">
            Subscribe My Blogs
          </button>
        </Link>
      </div>
      <div className="mt-20 flex flex-col items-center justify-center gap-20">
        {blogPost.map((item, index) => (
          <div className="w-full lg:w-3/5" key={index}>
            <hr className="border border-gray-300" />
            <br />
            <div className="flex gap-10">
              <div className="hidden md:block">
                <img src={item.img} alt="gambar" />
              </div>
              <div>
                <Link to={item.link} target="_blank">
                  <p className="text-brand-primary text-2xl hover:underline">
                    {item.title}
                  </p>
                </Link>
                <br />
                <div className="flex justify-center md:hidden">
                  <img src={item.img} alt="gambar" />
                </div>
                <br />
                <p className="text-sm">{item.desc}</p>
                <br />
                <div className="flex flex-wrap md:flex-row gap-10 items-center">
                  <div className="flex w-full md:w-auto gap-2">
                    {item.tags.map((el, index) => (
                      <div
                        key={index}
                        className="rounded-full bg-gray-600 py-1 px-2 text-xs"
                      >
                        {el}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs">Author: {item.author}</p>
                  <p className="text-xs">Date: {item.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
