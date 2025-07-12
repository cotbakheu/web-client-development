import React from "react";
import { IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-main-green text-white py-4">
      <div className="px-10 text-center flex justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} PT Perkebunan Nusantara I - All
          Rights Reserved
        </p>
        <div className="flex gap-4">
          <a
            href="https://ptpn1.co.id/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMdMail className="text-2xl hover:text-yellow-500 transition-colors" />
          </a>
          <a
            href="https://ptpn1.co.id/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="text-2xl hover:text-yellow-500 transition-colors" />
          </a>
          <a
            href="https://ptpn1.co.id/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-2xl hover:text-yellow-500 transition-colors" />
          </a>
          <a
            href="https://ptpn1.co.id/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl hover:text-yellow-500 transition-colors" />
          </a>
          <a
            href="https://ptpn1.co.id/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl hover:text-yellow-500 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
