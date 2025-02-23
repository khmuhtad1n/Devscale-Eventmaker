/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-7f2bbc06dc9149ea8dbfa51c713c10a5.r2.dev",
        pathname: "/eventmakers/**",
      },
    ],
  },
};

export default nextConfig;
