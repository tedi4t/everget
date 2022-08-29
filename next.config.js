/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		deviceSizes: [128, 150, 165, 216, 240, 384, 400, 768],
		imageSizes: [4, 8, 12, 16, 24, 32, 64, 96],
	},
};

module.exports = nextConfig;
