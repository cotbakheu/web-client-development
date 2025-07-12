import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

function Agrotourism() {
  return (
    <section id="agrotourism" className="flex px-20">
      <div className="w-1/2 relative" style={{ aspectRatio: "16/9" }}>
        <Image
          src={
            "https://holding-perkebunan.com/wp-content/uploads/2022/12/pabrik-pengolahan-komoditi-unggulan-minyak-kelapa-sawit-biji-kopi-karet-tebu-kakao-teh-holding-ptpn-bumn-indonesia-pt-perkebunan-nusantara-iii-kaligua.jpg"
          }
          alt="Agrotourism Image"
          fill
        />
      </div>
      <div className="w-1/2 px-10 text-right">
        <div>
          <p className="text-main-green">Lorem ipsum dolor sit.</p>
          <br />
          <p className="text-3xl font-semibold">Kawasan Agrowisata</p>
          <p className="mt-2">
            Perseroan tetap fokus pada usaha sawit dan karet sebagai komoditas
            utama. Untuk meningkatkan kinerja, Perseroan memperluas komoditas
            menjadi tujuh produk: kelapa sawit, karet, teh, kopi, tebu,
            tembakau, dan kokoa.
          </p>
        </div>
        <div className="mt-4 flex justify-end">
          <Button>Selengkapnya</Button>
        </div>
      </div>
    </section>
  );
}

export default Agrotourism;
