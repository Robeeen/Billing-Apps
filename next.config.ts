import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

//Shams added
module.exports = {
  serverRuntimeConfig: {
    databaseUrl: process.env.XATA_DATABASE_URL,
  },
};