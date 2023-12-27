import { Directions } from '@/enums/directions';
import { Languages } from '@/enums/languages';
import { createEmotionCache } from '@/utilities/theme';
import createEmotionServer from '@emotion/server/create-instance';
import { AppType } from 'next/app';
import NextDocument, { DocumentContext, DocumentProps, Head, Html, Main, NextScript } from 'next/document';
import * as React from 'react';
import { Props as AppProps } from './_app';

type Props = DocumentProps & { emotionStyleTags: JSX.Element[] };

export default function Document({ emotionStyleTags, ...props }: Props) {
	return (
		<Html lang={props.locale} dir={props.locale === Languages.ARABIC ? Directions.RTL : Directions.LTR}>
			<Head>
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
