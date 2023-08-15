/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		APP_API: 'http://localhost:4200',
	},
	images: { domains: ['localhost'] },
};

module.exports = nextConfig;
