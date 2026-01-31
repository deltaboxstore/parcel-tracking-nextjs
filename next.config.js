module.exports = {
  reactStrictMode: true,
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
