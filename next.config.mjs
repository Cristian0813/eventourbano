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
        hostname: '2-tuticket-com-co.my-uploads.ticketplus.global',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'tuboleta.com',
        pathname: '/imagenes/**',
      },
      {
        protocol: 'https',
        hostname: 'www.tuboleta.com',
        pathname: '/imagenes/**',
      },
      {
        protocol: 'https',
        hostname: 'www.tuboleta.com',
        pathname: '/eventos/**',
      },
    ],
  },
};

export default nextConfig;
