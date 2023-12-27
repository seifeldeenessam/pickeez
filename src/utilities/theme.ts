import { Languages } from '@/enums/languages';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

export function createEmotionCache(language: string | undefined) {
	const isBrowser = typeof document !== 'undefined';
	let stylisPlugins = language === Languages.ARABIC ? [prefixer, rtlPlugin] : undefined;
	let insertionPoint;

	if (isBrowser) {
		const emotionInsertionPoint = document.querySelector<HTMLMetaElement>('meta[name="emotion-insertion-point"]');

		insertionPoint = emotionInsertionPoint ?? undefined;
	}

	return createCache({ key: 'mui-style', insertionPoint, stylisPlugins });
}
