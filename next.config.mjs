/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/operationsdemo",
          destination: "https://telos-operations-demo.vercel.app/operationsdemo",
        },
        {
          source: "/operationsdemo/:path*",
          destination: "https://telos-operations-demo.vercel.app/operationsdemo/:path*",
        },
        {
          source: "/guestdemo",
          destination: "https://guest-amber.vercel.app/guestdemo",
        },
        {
          source: "/guestdemo/:path*",
          destination: "https://guest-amber.vercel.app/guestdemo/:path*",
        },
        {
          source: "/rms-api/:path*",
          destination: "https://rms-eng.vercel.app/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
