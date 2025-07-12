"use client";
import React, { useRef, useState } from "react";
import style from "./HeroStyle.module.css";
import classNames from "classnames";

function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);
  const videoRef = useRef(null);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    setIsVideoError(false);
  };

  const handleVideoError = () => {
    setIsVideoError(true);
    setIsVideoLoaded(false);
  };

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Image Placeholder */}
      {(!isVideoLoaded || isVideoError) && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
          style={{
            backgroundImage: 'url("/hero-image.png")', // Replace with your image path
            opacity: isVideoLoaded ? 0 : 1,
          }}
        />
      )}

      {/* Video */}
      <video
        ref={videoRef}
        className={classNames(
          style["video-background"],
          "transition-opacity duration-500",
          isVideoLoaded ? "opacity-100" : "opacity-0"
        )}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
        preload="metadata" // Only load metadata initially
      >
        <source
          type="video/mp4"
          src="https://ptpn1.co.id/wp-content/themes/logistic_new/asset_apn/video/apn.mp4"
        />
      </video>

      {/* Overlay */}
      <div
        className={classNames(
          "absolute top-0 left-0 w-full h-full bg-black opacity-50"
        )}
      />

      {/* Content */}
      <div
        className={classNames(
          "relative z-2 text-white text-2xl px-20 flex flex-col justify-end h-full py-20 gap-6"
        )}
      >
        <h1 className="text-7xl">Perkebunan Nusantara</h1>
        <h2 className="text-xl">
          Kekuatan utama dalam agribisnis yang beragam dan berstandar
          internasional
        </h2>
      </div>
    </section>
  );
}

export default Hero;
