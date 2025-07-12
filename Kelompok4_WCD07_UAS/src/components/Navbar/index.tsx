"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { DropdownButton } from "@/components/Button";
import style from "./NavbarStyle.module.css";
import classNames from "classnames";
function Footer() {
  const [altHeaderOpacity, setAltHeaderOpacity] = React.useState(0);

  const aboutSubMenu = [
    {
      title: "Dewan Komisaris",
      link: "#",
    },
    {
      title: "Direksi",
      link: "#",
    },
  ];

  const ppidSubMenu = [
    {
      title: "Profil PPID",
      link: "#",
    },
    {
      title: "Regulasi",
      link: "#",
    },
    {
      title: "Informasi Publik",
      link: "#",
    },
    {
      title: "Prosedur",
      link: "#",
    },
    {
      title: "Laporan Layanan",
      link: "#",
    },
    {
      title: "FAQ",
      link: "#",
    },
    {
      title: "Kontak PPID",
      link: "#",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setAltHeaderOpacity(
          window.scrollY > 300 ? 1 : ((window.scrollY - 200) * 3) / 300
        );
      } else {
        setAltHeaderOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className="flex py-4 px-36 items-center fixed z-50 top-0 left-0 w-full bg-white"
        style={{ opacity: altHeaderOpacity }}
      >
        <div className="w-1/6">
          <Link href={"/"}>
            <Image
              alt="logo"
              src={
                "https://ptpn1.co.id/wp-content/themes/logistic_new/asset_apn/logo/membern1.png"
              }
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className="flex flex-col items-end justify-end gap-6 flex-1 text-sm text-black">
          <ul className="flex gap-20 font-semibold text-lg">
            <li>
              <Link href={"/business"}>Bisnis Kami</Link>
            </li>
            <li>
              <DropdownButton
                list={aboutSubMenu.map((item, index) => (
                  <div key={index} className={classNames(style["submenu"])}>
                    <div
                      className={classNames(
                        "h-full w-1 bg-main-yellow absolute left-0 top-0",
                        style["indicator"]
                      )}
                    ></div>
                    <Link
                      href={item.link}
                      className="text-base px-6 font-normal hover:font-semibold block w-[200px] mb-4 text-black"
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              >
                Tentang
              </DropdownButton>
            </li>
            <li>
              <Link href={"#"}>Laporan</Link>
            </li>
            <li>
              <Link href={"#"}>GCG</Link>
            </li>
            <li>
              <DropdownButton
                list={ppidSubMenu.map((item, index) => (
                  <div key={index} className={classNames(style["submenu"])}>
                    <div
                      className={classNames(
                        "h-full w-1 bg-main-yellow absolute left-0 top-0",
                        style["indicator"]
                      )}
                    ></div>
                    <Link
                      href={item.link}
                      className="text-base px-6 font-normal hover:font-semibold block w-[200px] mb-4 text-black"
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              >
                PPID
              </DropdownButton>
            </li>
          </ul>
        </div>
      </header>
      <header className="flex py-4 px-36 items-center absolute z-50 top-0 left-0 w-full">
        <div className="w-1/6">
          <Link href={"/"}>
            <Image
              alt="logo"
              src={
                "https://ptpn1.co.id/wp-content/themes/logistic_new/asset_apn/logo/membern1.png"
              }
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="flex flex-col items-end justify-end gap-6 flex-1 text-sm text-white">
          <ul className="flex gap-10">
            <li>
              <Link href={"/#business-area"}>Wilayah Kerja</Link>
            </li>
            <li>
              <Link href={"/#press-release"}>Siaran Pers</Link>
            </li>
            <li>
              <Link href={"/#contact"}>Kontak</Link>
            </li>
          </ul>
          <ul className="flex gap-20 font-semibold text-lg">
            <li>
              <Link href={"/business"}>Bisnis Kami</Link>
            </li>
            <li>
              <DropdownButton
                list={aboutSubMenu.map((item, index) => (
                  <div key={index} className={classNames(style["submenu"])}>
                    <div
                      className={classNames(
                        "h-full w-1 bg-main-yellow absolute left-0 top-0",
                        style["indicator"]
                      )}
                    ></div>
                    <Link
                      href={item.link}
                      className="text-base px-6 font-normal hover:font-semibold block w-[200px] mb-4 text-black"
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              >
                Tentang
              </DropdownButton>
            </li>
            <li>
              <Link href={"#"}>Laporan</Link>
            </li>
            <li>
              <Link href={"#"}>GCG</Link>
            </li>
            <li>
              <DropdownButton
                list={ppidSubMenu.map((item, index) => (
                  <div key={index} className={classNames(style["submenu"])}>
                    <div
                      className={classNames(
                        "h-full w-1 bg-main-yellow absolute left-0 top-0",
                        style["indicator"]
                      )}
                    ></div>
                    <Link
                      href={item.link}
                      className="text-base px-6 font-normal hover:font-semibold block w-[200px] mb-4 text-black"
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              >
                PPID
              </DropdownButton>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Footer;
