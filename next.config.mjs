/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'deltaboxstore.com',
          },
        ],
        destination: 'https://rhythmnexus.org/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
