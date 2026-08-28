import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root: this project lives inside `projectx`, a folder
  // that also holds unrelated sibling projects with their own lockfiles,
  // which otherwise confuses Next.js's root auto-detection.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
