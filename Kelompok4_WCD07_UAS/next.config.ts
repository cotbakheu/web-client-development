import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://ptpn1.co.id/**"),
      new URL("https://via.placeholder.com/**"),
      new URL("https://holding-perkebunan.com/**"),
    ],
  },
};

export default nextConfig;
