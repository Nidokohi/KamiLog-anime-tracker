import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ['cdn.myanimelist.net'],
  },
};

export default nextConfig;
