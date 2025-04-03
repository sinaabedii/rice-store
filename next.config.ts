/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['fa', 'en'],
    defaultLocale: 'fa',
  },
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;