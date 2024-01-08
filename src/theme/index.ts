import { Directions } from '@/enums/directions';
import { Languages } from '@/enums/languages';
import { darkenColor, lightenColor } from '@/utilities/colors';
import { createTheme } from '@mui/material/styles';
import { Almarai, Jaldi, Open_Sans } from 'next/font/google';

export const enFont = Open_Sans({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
	fallback: ['Helvetica', 'Arial', 'sans-serif'],
	preload: true
});

export const enSecondaryFont = Jaldi({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
	fallback: ['Helvetica', 'Arial', 'sans-serif'],
	preload: true
});

export const arFont = Almarai({
	weight: ['300', '400', '700', '800'],
	subsets: ['arabic'],
	display: 'swap',
	fallback: ['Helvetica', 'Arial', 'sans-serif'],
	preload: true
});

export const theme = (locale: string | undefined) => {
	const direction = locale === Languages.ARABIC ? Directions.RTL : Directions.LTR;
	const fontFamily = direction === Directions.LTR ? enFont.style.fontFamily : arFont.style.fontFamily;

	return createTheme({
		palette: {
			primary: { main: '#63345B', light: lightenColor('#63345B', 0.25), dark: darkenColor('#63345B', 0.25) },
			secondary: { main: '#FBB040', light: lightenColor('#FBB040', 0.25), dark: darkenColor('#FBB040', 0.25) },
			background: { default: '#F9FAFE', paper: '#FFFFFF' },
			text: { primary: '#71356C', secondary: '#787878' }
		},
		direction,
		typography: {
			fontFamily,
			fontWeightBold: 700,
			fontWeightMedium: 500,
			fontWeightRegular: 400,
			fontWeightLight: 300,
			allVariants: { fontWeight: 500 },
			subtitle1: { fontSize: '1.25rem', fontWeight: '700' },
			subtitle2: { fontSize: '1rem', fontWeight: '700' },
			body1: { fontSize: '1rem' },
			body2: { fontSize: '0.8rem' },
			button: { textTransform: 'none' }
		},
		components: {
			MuiButton: {
				defaultProps: { disableElevation: true },
				styleOverrides: {
					root: { borderRadius: 100, fontWeight: 600, whiteSpace: 'nowrap' },
					containedSecondary: {
						color: '#FFFFFF'
					}
				}
			},
			MuiOutlinedInput: {
				styleOverrides: {
					root: { borderRadius: 8 }
				}
			}
		}
	});
};
