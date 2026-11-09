import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  agentRules: false,
  async redirects() {
    return [
      {
        source: "/work",
        destination: "/projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
