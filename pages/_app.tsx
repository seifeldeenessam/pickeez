import { theme } from '@/theme';
import { createEmotionCache } from '@/utilities/theme';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import '@styles/app.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'swiper/css/a11y';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export type Props = AppProps & { emotionCache?: EmotionCache };

const App = ({ Component, emotionCache, pageProps, router }: Props) => {
	const clientSideEmotionCache = createEmotionCache(router.locale);
	emotionCache = clientSideEmotionCache;

	const PAGE_URL = typeof window !== 'undefined' ? window.location.href : undefined;

	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme(router.locale)}>
				<Head>
					<title>Pickeez</title>
					<link rel="canonical" href={PAGE_URL} />
					<link rel="icon" href={'/favicon.ico'} sizes="any" />
					<link rel="apple-touch-icon" href={'/apple-touch-icon.png'} />
					<meta name="viewport" content="initial-scale=1, width=device-width" />
					<meta name="description" content={'Pickeez Website Description'} />
					<meta name="theme-color" content={'#71356C'} />
					<meta property="og:description" content={'Pickeez Website Description'} />
					<meta property="og:title" content={'Pickeez'} />
					<meta property="og:url" content={PAGE_URL} />
				</Head>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
};

export default App;
