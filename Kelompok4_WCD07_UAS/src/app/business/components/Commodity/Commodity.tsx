"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import style from "./CommodityStyle.module.css";
import classNames from "classnames";
import { motion } from "motion/react";
import Button from "@/components/Button";

type SlideCardProps = {
  title: string;
  imageUrl: string;
};

function SlideCard({ title, imageUrl }: SlideCardProps) {
  const parentVariant = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  };
  const descriptionVariant = {
    rest: { scale: 0, height: 0 },
    hover: { scale: 1, height: "auto" },
  };
  return (
    <div className="relative rounded-lg overflow-hidden">
      <motion.div initial="rest" whileHover="hover" variants={parentVariant}>
        <div
          className={classNames(
            style["slide-card-container"],
            "w-[200px] h-[250px] p-4"
          )}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="flex flex-col items-center justify-end relative z-2 h-full">
            <p className="text-white font-semibold text-lg text-center">
              {title}
            </p>
            <motion.div
              transition={{ duration: 0.5 }}
              variants={descriptionVariant}
            >
              <p className="text-white text-center text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, enim.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Commodity() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
  });

  const slides = [
    {
      title: "Kelapa Sawit",
      imageUrl:
        "https://holding-perkebunan.com/wp-content/uploads/2022/12/pabrik-pengolahan-komoditi-unggulan-minyak-kelapa-sawit-biji-kopi-karet-tebu-kakao-teh-holding-ptpn-bumn-indonesia-pt-perkebunan-nusantara-iii-foto6.jpg",
    },
    {
      title: "Karet",
      imageUrl:
        "https://holding-perkebunan.com/wp-content/uploads/2022/12/pabrik-pengolahan-komoditi-unggulan-minyak-kelapa-sawit-biji-kopi-karet-tebu-kakao-teh-holding-ptpn-bumn-indonesia-pt-perkebunan-nusantara-iii-foto-5.jpg",
    },
    {
      title: "Teh",
      imageUrl:
        "https://holding-perkebunan.com/wp-content/uploads/2022/12/pabrik-pengolahan-komoditi-unggulan-minyak-kelapa-sawit-biji-kopi-karet-tebu-kakao-teh-holding-ptpn-bumn-indonesia-pt-perkebunan-nusantara-iii-foto-10.jpg",
    },
    {
      title: "Kopi",
      imageUrl:
        "https://holding-perkebunan.com/wp-content/uploads/2022/12/pabrik-pengolahan-komoditi-unggulan-minyak-kelapa-sawit-biji-kopi-karet-tebu-kakao-teh-holding-ptpn-bumn-indonesia-pt-perkebunan-nusantara-iii-foto8.jpg",
    },
    {
      title: "Tebu",
      imageUrl:
        "https://holding-perkebunan.com/wp-content/uploads/2022/12/pabrik-pengolahan-komoditi-unggulan-minyak-kelapa-sawit-biji-kopi-karet-tebu-kakao-teh-holding-ptpn-bumn-indonesia-pt-perkebunan-nusantara-iii-foto-9.jpg",
    },
    {
      title: "Tembakau",
      imageUrl:
        "https://holding-perkebunan.com/wp-content/uploads/2023/01/pabrik-pengolahan-komoditi-unggulan-minyak-kelapa-sawit-biji-kopi-karet-tebu-kakao-teh-holding-ptpn-bumn-indonesia-pt-perkebunan-nusantara-iii-tobacco-garden.jpg",
    },
    {
      title: "Kakao",
      imageUrl:
        "https://holding-perkebunan.com/wp-content/uploads/2022/12/pabrik-pengolahan-komoditi-unggulan-minyak-kelapa-sawit-biji-kopi-karet-tebu-kakao-teh-holding-ptpn-bumn-indonesia-pt-perkebunan-nusantara-iii-foto-7.jpg",
    },
  ];

  const handlePrevClick = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const handleNextClick = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <section id="commodity" className="px-20">
      <div className="flex items-end justify-between mb-4">
        <div>
          <p className="text-main-green">Lorem ipsum dolor sit.</p>
          <br />
          <p className="text-3xl font-semibold">Produk Komoditas</p>
          <p className="max-w-2/3 mt-2">
            Perseroan tetap fokus pada usaha sawit dan karet sebagai komoditas
            utama. Untuk meningkatkan kinerja, Perseroan memperluas komoditas
            menjadi tujuh produk: kelapa sawit, karet, teh, kopi, tebu,
            tembakau, dan kokoa.
          </p>
        </div>
        <div>
          <Button>Selengkapnya</Button>
        </div>
      </div>
      <div className={classNames(style["embla"])} ref={emblaRef}>
        <div className={classNames(style["embla__container"])}>
          {slides.map((slide, index) => (
            <div className={classNames(style["embla__slide"])} key={index}>
              <SlideCard title={slide.title} imageUrl={slide.imageUrl} />
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className=" flex gap-4 justify-end items-center">
        <button
          onClick={handlePrevClick}
          className="rounded-full border-2 bg-gray-100 cursor-pointer hover:bg-yellow-100 border-gray-400 h-10 w-10 flex items-center justify-center"
        >
          <FaChevronLeft className="w-4 h-4 text-gray-700" />
        </button>
        <button
          onClick={handleNextClick}
          className="rounded-full border-2 bg-gray-100 cursor-pointer hover:bg-yellow-100 border-gray-400 h-10 w-10 flex items-center justify-center"
        >
          <FaChevronRight className="w-4 h-4 text-gray-700" />
        </button>
      </div>
    </section>
  );
}

export default Commodity;
