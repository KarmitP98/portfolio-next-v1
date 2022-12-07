/** @type {import('next').NextConfig} */
var path = require('path');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
	includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
	remotePatterns: [
	  {
		protocol: 'https',
		hostname: 'firebasestorage.googleapis.com'
	  }
	]
  }
};

module.exports = nextConfig;
