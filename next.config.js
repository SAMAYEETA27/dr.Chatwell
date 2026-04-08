/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // This ensures links to the homepage work correctly
  basePath: '',
  // This ensures assets are properly referenced
  assetPrefix: '',
};

export default nextConfig;
