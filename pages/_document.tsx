import { Directions } from '@/enums/directions';
import { Languages } from '@/enums/languages';
import { createEmotionCache } from '@/utilities/theme';
import createEmotionServer from '@emotion/server/create-instance';
import { AppType } from 'next/app';
import NextDocument, { DocumentContext, DocumentProps, Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import * as React from 'react';
import { Props as AppProps } from './_app';

type Props = DocumentProps & { emotionStyleTags: JSX.Element[] };

export default function Document({ emotionStyleTags, ...props }: Props) {
	return (
		<Html lang={props.locale} dir={props.locale === Languages.ARABIC ? Directions.RTL : Directions.LTR}>
			<Head>
				<Script id="google-tag-manager-id" async strategy="beforeInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-K93WXYMJ3M" />
				<Script id="google-tag-manager" strategy="beforeInteractive">{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-K93WXYMJ3M');
				`}</Script>
				<Script id="meta-pixel" strategy="beforeInteractive">{`
					!function(f,b,e,v,n,t,s)
					{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
					n.callMethod.apply(n,arguments):n.queue.push(arguments)};
					if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
					n.queue=[];t=b.createElement(e);t.async=!0;
					t.src=v;s=b.getElementsByTagName(e)[0];
					s.parentNode.insertBefore(t,s)}(window, document,'script',
					'https://connect.facebook.net/en_US/fbevents.js');
					fbq('init', '659317889432179');
					fbq('track', 'PageView');
				`}</Script>
				<link rel="manifest" href="/manifest.json" />
				<meta name="emotion-insertion-point" content="" />
				{emotionStyleTags}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

Document.getInitialProps = async (context: DocumentContext) => {
	const originalRenderPage = context.renderPage;
	const cache = createEmotionCache(context.locale);
	const { extractCriticalToChunks } = createEmotionServer(cache);

	context.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App: React.ComponentType<React.ComponentProps<AppType> & AppProps>) =>
				function EnhanceApp(props) {
					return <App emotionCache={cache} {...props} />;
				}
		});

	const initialProps = await NextDocument.getInitialProps(context);
	const emotionStyles = extractCriticalToChunks(initialProps.html);
	const emotionStyleTags = emotionStyles.styles.map((style) => <style data-emotion={`${style.key} ${style.ids.join(' ')}`} key={style.key} dangerouslySetInnerHTML={{ __html: style.css }} />);

	return { ...initialProps, emotionStyleTags };
};
