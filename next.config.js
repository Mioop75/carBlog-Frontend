/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		APP_API: process.env.APP_API,
	},
	images: { domains: ['localhost'] },
};

module.exports = nextConfig;
