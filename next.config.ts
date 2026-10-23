import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Hide the "N" badge in development; build and runtime errors still show.
  devIndicators: false,
};

export default nextConfig;
