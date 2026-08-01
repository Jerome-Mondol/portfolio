import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The /lab photo dump and build sheets accept image URLs straight from
    // the data files (src/data/lab.js, src/data/lab-projects.js). Keep them
    // unrestricted so any https image the user pastes "just works"; the
    // sources are static and user-edited, never runtime input.
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
