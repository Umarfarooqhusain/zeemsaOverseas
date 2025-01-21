import { output } from "framer-motion/client";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["cdn.sanity.io"], // Allow Sanity's CDN for images
    unoptimized: true, // Disable image optimization for static export
  },
};

module.exports = nextConfig;
