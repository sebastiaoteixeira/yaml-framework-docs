import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: "export",
  basePath: "/yaml-framework-docs",
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
