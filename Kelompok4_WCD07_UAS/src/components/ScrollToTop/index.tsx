"use client";
import React, { useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const scrollPosition = scrollTop + windowHeight;
      const scrollPercent = scrollPosition / docHeight;

      if (scrollPercent > 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bottom-20 right-10">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-main-green flex justify-center items-center cursor-pointer"
        >
          <FaChevronUp className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
