import { PaletteOptions } from '@mui/material';

export const lightenColor = (hexColor: string, amount: number): string => {
	// Remove the '#' symbol if present
	const color = hexColor.replace('#', '');

	// Convert the color to RGB
	const red = parseInt(color.slice(0, 2), 16);
	const green = parseInt(color.slice(2, 4), 16);
	const blue = parseInt(color.slice(4, 6), 16);

	// Calculate the lightened color
	const lightenedRed = Math.round(red + (255 - red) * amount);
	const lightenedGreen = Math.round(green + (255 - green) * amount);
	const lightenedBlue = Math.round(blue + (255 - blue) * amount);

	// Convert the lightened color back to hex
	const lightenedHex = `#${((lightenedRed << 16) | (lightenedGreen << 8) | lightenedBlue).toString(16).padStart(6, '0')}`;

	return lightenedHex;
};

export const darkenColor = (hexColor: string, amount: number): string => {
	// Remove the '#' symbol if present
	const color = hexColor.replace('#', '');

	// Convert the color to RGB
	const red = parseInt(color.slice(0, 2), 16);
	const green = parseInt(color.slice(2, 4), 16);
	const blue = parseInt(color.slice(4, 6), 16);

	// Calculate the darkened color
	const darkenedRed = Math.round(red * (1 - amount));
	const darkenedGreen = Math.round(green * (1 - amount));
	const darkenedBlue = Math.round(blue * (1 - amount));

	// Convert the darkened color back to hex
	const darkenedHex = `#${((darkenedRed << 16) | (darkenedGreen << 8) | darkenedBlue).toString(16).padStart(6, '0')}`;

	return darkenedHex;
};

export const convertToRGBA = (rgb: string, alpha: string): string => {
	const rgbValues = rgb
		.substring(rgb.indexOf('(') + 1, rgb.lastIndexOf(')'))
		.split(',')
		.map((value) => parseInt(value.trim(), 10));

	const alphaValue = parseFloat(alpha.trim()) / 100;

	return `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${alphaValue})`;
};

export function linearGradient(color: string, colorState: string, angle: number = 195): string {
	return `linear-gradient(${angle}deg, ${color}, ${colorState})`;
}

export const getColorPalette = (): PaletteOptions => {
	return {
		primary: { main: '#71356C', light: lightenColor('#71356C', 0.25), dark: darkenColor('#71356C', 0.25) },
		secondary: { main: '#FBB040', light: lightenColor('#FBB040', 0.25), dark: darkenColor('#FBB040', 0.25) },
		background: { default: '#F9FAFE', paper: '#FFFFFF' },
		text: { primary: '#71356C', secondary: '#787878' }
	};
};
