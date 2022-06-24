/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	// TODO: Te be configured
	enabled: true,
});

module.exports = withBundleAnalyzer(nextConfig);
