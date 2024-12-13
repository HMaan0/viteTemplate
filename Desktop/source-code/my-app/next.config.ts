import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        hostname: "i.pinimg.com",
      },
      {
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        hostname: "static.wikia.nocookie.net",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "cdn.simpleicons.org",
      },
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
