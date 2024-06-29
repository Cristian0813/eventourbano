/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '2-tuticket-com-co.my-uploads.ticketplus.global',
        pathname: '/images/promotions/**',
      },
      {
        protocol: 'https',
        hostname: 'tuboleta.com',
        pathname: '/imagenes/**',
      },
    ],
  },
};

export default nextConfig;