import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/dy-wedding-website" : "",
  assetPrefix: isProd ? "/dy-wedding-website/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
