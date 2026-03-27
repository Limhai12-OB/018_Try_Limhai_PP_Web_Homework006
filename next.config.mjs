/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: [
      "global.discourse-cdn.com",
      "png.pngtree.com",
      "clipart.info",
      "lowendmac.com",
      "images.unsplash.com",
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
