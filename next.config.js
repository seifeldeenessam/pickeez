const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
	/** @type {import('next').NextConfig} */
	const nextTranslate = require('next-translate-plugin');
	const runtimeCaching = require('next-pwa/cache');
	const withPWA = require('next-pwa')({ dest: 'public', register: true, skipWaiting: true, runtimeCaching, buildExcludes: [/middleware-manifest.json$/] });

	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			output: 'standalone',
			poweredByHeader: false,
			reactStrictMode: true,
			productionBrowserSourceMaps: true,
			optimizeFonts: true,
			swcMinify: true,
			reactStrictMode: true,
			...nextTranslate(),
			images: { domains: ['noot-ae.s3.me-central-1.amazonaws.com'], deviceSizes: [320, 640, 768, 1024, 1600] }
		};
	}

	return withPWA({
		output: 'standalone',
		poweredByHeader: false,
		reactStrictMode: true,
		productionBrowserSourceMaps: true,
		optimizeFonts: true,
		swcMinify: true,
		reactStrictMode: false,
		...nextTranslate(),
		images: { domains: ['noot-ae.s3.me-central-1.amazonaws.com'], deviceSizes: [320, 640, 768, 1024, 1600] }
	});
};
