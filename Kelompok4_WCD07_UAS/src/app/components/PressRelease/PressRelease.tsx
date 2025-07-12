"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

function PressRelease() {
  const [displayShowMore, setDisplayShowMore] = useState(true);
  const [newsData, setNewsData] = useState([
    {
      title:
        "PTPN I Berhasil Meraih Sertifikasi ISO 27001:2022 untuk Sistem Manajemen Keamanan Informasi",
      desc: "PTPN I berhasil meraih sertifikasi ISO 27001:2022 Sistem Manajemen Keamanan Informasi akhir tahun 2024 ini. Setelah melalui audit eksternal stage 1 dan 2, akhirnya pada",
      image:
        "https://holding-perkebunan.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-24-at-20.09.55_11zon-400x250.jpeg",
    },
    {
      title: "PTPN I Implementasikan Dfarm untuk Komoditas Teh",
      desc: "Bandung, 17 Desember 2024 – Menyusul implementasi digitalisasi pada proses on farm (kebun) komoditas karet yang sudah berjalan, PTPN I mengimplementasikan Dfarm untuk komoditas teh. ",
      image:
        "https://holding-perkebunan.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-23-at-19.08.07_11zon-400x250.jpeg",
    },
    {
      title:
        "PENANDATANGANAN MoU ANTARA PTPN I, GKSI, DAN PT RNI UNTUK PENGEMBANGAN PETERNAKAN SAPI PERAH DAN INDUSTRI SUSU NASIONAL",
      desc: "Pasuruan, 19 Desember 2024 – PT Perkebunan Nusantara I (PTPN I), Gabungan Koperasi Susu Indonesia (GKSI), dan PT Rajawali Nusantara Indonesia (PT RNI) resmi menandatangani",
      image:
        "https://holding-perkebunan.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-18-at-19.26.35-400x250.jpeg",
    },
    {
      title:
        "PTPN I Mewakili PTPN Group Menandatangani MoU dengan Wirausaha Sosial dalam Program Pikiran Terbaik Negeri 2024",
      desc: "Jakarta, 11 Desember 2024 – PTPN Group melaksanakan penandatanganan  Memorandum of Understanding (MoU) dengan beberapa wirausaha sosial terpilih dalam Program Pikiran Terbaik Negeri 2024, ",
      image:
        "https://holding-perkebunan.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-01-at-19.43.31_11zon-400x250.jpeg",
    },
  ]);

  const loadMoreNews = () => {
    // Simulate loading more news data
    setNewsData((prevData) => [
      ...prevData,
      prevData[0], // Just reusing the first item for demonstration
      prevData[1], // Just reusing the second item for demonstration
      prevData[2], // Just reusing the third item for demonstration
      prevData[3], // Just reusing the fourth item for
    ]);
    setDisplayShowMore(false);
  };

  const loadLessNews = () => {
    // Simulate loading less news data
    setNewsData((prevData) => prevData.slice(0, 4));
    setDisplayShowMore(true);
  };

  return (
    <section>
      <h2
        className="text-2xl uppercase font-semibold text-center"
        id="press-release"
      >
        Siaran Pers
      </h2>
      <div className="px-20 pt-10 pb-4 flex justify-between flex-wrap">
        {newsData.map((item, index) => (
          <div
            key={index}
            className="w-1/4 p-4 flex flex-col justify-between gap-4"
          >
            <div>
              <div className="relative w-full h-[200px]">
                <Image
                  src={item.image || "https://via.placeholder.com/200"}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <h4 className="font-semibold text-lg line-clamp-2">
                {item.title}
              </h4>
              <p className="text-sm line-clamp-3">{item.desc}</p>
            </div>
            <Button color="primary">Baca Selengkapnya</Button>
          </div>
        ))}
      </div>
      {displayShowMore ? (
        <div className="flex justify-center py-10">
          <Button color="primary" variant="ghost" onClick={loadMoreNews}>
            <div className="flex justify-between items-center gap-2">
              <p>Muat Lebih Banyak</p>
              <IoChevronDown className="text-main-green" />
            </div>
          </Button>
        </div>
      ) : (
        <div className="flex justify-center py-10">
          <Button color="primary" variant="ghost" onClick={loadLessNews}>
            <div className="flex justify-between items-center gap-2">
              <p>Muat Lebih Sedikit</p>
              <IoChevronUp className="text-main-green" />
            </div>
          </Button>
        </div>
      )}
    </section>
  );
}

export default PressRelease;
