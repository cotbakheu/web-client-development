import Hero from "@/components/Hero";
import Link from "next/link";
import React from "react";
import Commodity from "./components/Commodity";
import Downstream from "./components/Downstream";
import Agrotourism from "./components/Agrotourism";

type SubMenuItemProps = {
  title: string;
  link: string;
};

function SubMenuItem({ title, link }: SubMenuItemProps) {
  return (
    <Link
      href={link}
      className="border bg-gray-100 w-1/3 border-gray-300 hover:bg-yellow-100 py-4 text-center text-gray-700 font-semibold"
    >
      {title}
    </Link>
  );
}

function Business({}) {
  const subMenuItem = [
    { title: "Produk Komoditas", link: "#commodity" },
    { title: "Produk Hilir", link: "#downstream" },
    { title: "Kawan Agrowisata", link: "#agrotourism" },
    // { title: "Kawasan Ekonomi Khusus", link: "#" },
  ];
  return (
    <div>
      <Hero
        imageUrl="https://holding-perkebunan.com/wp-content/uploads/2022/12/pabrik-pengolahan-komoditi-unggulan-minyak-kelapa-sawit-biji-kopi-karet-tebu-kakao-teh-holding-ptpn-bumn-indonesia-pt-perkebunan-nusantara-iii-foto-3.jpg"
        title="Bisnis Kami"
        description="Kami memiliki berbagai macam bisnis yang berfokus pada pengolahan komoditi unggulan seperti minyak kelapa sawit, biji kopi, karet, tebu, kakao, dan teh. Bisnis kami didukung oleh teknologi modern dan sumber daya manusia yang berkualitas untuk memastikan produk yang dihasilkan memenuhi standar tertinggi."
      />
      <div className="flex flex-wrap justify-center">
        {subMenuItem.map((item, index) => (
          <SubMenuItem key={index} title={item.title} link={item.link} />
        ))}
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <Commodity />
        <br />
        <br />
        <br />
        <br />
        <Downstream />
        <br />
        <br />
        <br />
        <br />
        <Agrotourism />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Business;
