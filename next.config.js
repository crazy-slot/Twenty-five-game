/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	// TODO: Te be configured
	enabled: false,
});

module.exports = withBundleAnalyzer(nextConfig);
