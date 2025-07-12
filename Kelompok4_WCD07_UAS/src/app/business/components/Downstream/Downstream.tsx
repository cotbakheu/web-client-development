"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import style from "./DownStreamStyle.module.css";
import classNames from "classnames";
import { motion } from "motion/react";
import Button from "@/components/Button";
import Image from "next/image";

type SlideCardProps = {
  title: string;
  imageUrl: string;
};

function SlideCard({ title, imageUrl }: SlideCardProps) {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <motion.div initial="rest" whileHover="hover">
        <div
          className={classNames(
            "w-[200px] h-[250px] p-4 flex flex-col items-center justify-between"
          )}
        >
          <div className="w-[120%] relative" style={{ aspectRatio: "16/9" }}>
            <Image
              src={imageUrl}
              alt={title}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="w-full">
            <p className="text-gray-600 font-semibold text-lg text-center">
              {title}
            </p>
          </div>
          <div className="w-full">
            <Button className="mt-2 w-full">
              <span className="text-sm">Rincian</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Downstream() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
  });

  const slides = [
    {
      title: "Minyak Goreng Nusakita",
      imageUrl:
        "https://holding-perkebunan.com/wp-content/uploads/2023/03/pabrik-pengolahan-komoditi-unggulan-minyak-kelapa-sawit-biji-kopi-karet-tebu-kakao-teh-holding-ptpn-bumn-indonesia-pt-perkebunan-nusantara-iii-Minyak-Goreng-Nusakita.jpg",
    },
    {
      title: "Gula Nusakita",
      imageUrl:
        "https://holding-perkebunan.com/wp-content/uploads/2023/03/pabrik-pengolahan-komoditi-unggulan-minyak-kelapa-sawit-biji-kopi-karet-tebu-kakao-teh-holding-ptpn-bumn-indonesia-pt-perkebunan-nusantara-gula-9.jpg",
    },
    {
      title: "Kopi Rollaas",
      imageUrl:
        "https://holding-perkebunan.com/wp-content/uploads/2022/12/pabrik-pengolahan-komoditi-unggulan-minyak-kelapa-sawit-biji-kopi-karet-tebu-kakao-teh-holding-ptpn-bumn-indonesia-pt-perkebunan-nusantara-iii-kopo-rollaas.jpg",
    },
    {
      title: "Teh Tobasari",
      imageUrl:
        "https://holding-perkebunan.com/wp-content/uploads/2022/12/pabrik-pengolahan-komoditi-unggulan-minyak-kelapa-sawit-biji-kopi-karet-tebu-kakao-teh-holding-ptpn-bumn-indonesia-pt-perkebunan-nusantara-iii-teh-tobasari.jpg",
    },
    {
      title: "Teh Semugih",
      imageUrl:
        "https://holding-perkebunan.com/wp-content/uploads/2022/12/pabrik-pengolahan-komoditi-unggulan-minyak-kelapa-sawit-biji-kopi-karet-tebu-kakao-teh-holding-ptpn-bumn-indonesia-pt-perkebunan-nusantara-iii-teh-semugih.jpg",
    },
    {
      title: "Cerutu Golden Jawa",
      imageUrl:
        "https://holding-perkebunan.com/wp-content/uploads/2023/03/cerutu.jpg",
    },
    {
      title: "Sirup Pala",
      imageUrl:
        "https://holding-perkebunan.com/wp-content/uploads/2022/12/pabrik-pengolahan-komoditi-unggulan-minyak-kelapa-sawit-biji-kopi-karet-tebu-kakao-teh-holding-ptpn-bumn-indonesia-pt-perkebunan-nusantara-iii-sirup-pala.jpg",
    },
  ];

  const handlePrevClick = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const handleNextClick = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <section id="downstream" className="px-20 flex">
      <div className="w-1/3">
        <div>
          <p className="text-main-green">Lorem ipsum dolor sit.</p>
          <br />
          <p className="text-3xl font-semibold">Produk Hilir</p>
          <p className="max-w-2/3 mt-2">
            Perseroan tetap fokus pada usaha sawit dan karet sebagai komoditas
            utama. Untuk meningkatkan kinerja, Perseroan memperluas komoditas
            menjadi tujuh produk: kelapa sawit, karet, teh, kopi, tebu,
            tembakau, dan kokoa.
          </p>
        </div>
        <div className="mt-4">
          <Button>Lihat lebih banyak</Button>
        </div>
      </div>
      <div className="w-2/3">
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
      </div>
    </section>
  );
}

export default Downstream;
