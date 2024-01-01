module.exports = {
	locales: ['en', 'ar'],
	defaultLocale: 'en',
	localeDetection: false,
	pages: {
		'*': ['common'],
		'/': ['home'],
		'/about-us': ['about-us'],
		'/contact-us': ['contact-us'],
		'/services': ['services']
	}
};
