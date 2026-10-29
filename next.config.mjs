/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.21st.dev",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/who-we-serve",
        destination: "/industries",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
