/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Specify other experimental options here if needed
  },
  images: {
    domains: ['rb.gy', 'image.tmdb.org'],
  },
  // Add the 'export' option to enable static HTML export
  output: {
    export: true,
  },
};

module.exports = nextConfig;
