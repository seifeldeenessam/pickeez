import React, { CSSProperties } from 'react';

type Props = {
	color: string;
	width?: number;
	height?: number;
	style?: CSSProperties;
};

function OffersCard({ color, width, height, style }: Props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" style={style} width={width} height={height} fill="none" viewBox="0 0 211 87">
			<path fill={color} d="M193.062 74.204L13.705 61.936V8.364L198.955 0l-5.893 74.204z"></path>
			<path
				fill={color}
				d="M0 37.753c.477 2.412.936 4.826 1.37 7.244.447 2.417.856 4.839 1.283 7.258l1.212 7.268 1.162 7.275-.37-.497c3.357 1.594 6.722 3.17 10.064 4.793l5.018 2.425 5.004 2.454a902.797 902.797 0 019.967 4.994 488.903 488.903 0 019.89 5.15 494.388 494.388 0 01-10.227-4.461 916.13 916.13 0 01-10.15-4.618l-5.055-2.35-5.04-2.382c-3.363-1.58-6.703-3.207-10.052-4.817l-.322-.154-.048-.343-1.021-7.296-.971-7.303c-.302-2.437-.62-4.873-.901-7.313a413.329 413.329 0 01-.814-7.326v-.001z"></path>
			<g clipPath="url(#clip0_1834_150)">
				<path
					fill={color}
					d="M194.295-26.157l3.902-.143 3.902-.109c2.601-.064 5.202-.116 7.803-.15l.652-.009-.074.66c-.683 6.148-1.452 12.282-2.244 18.415-.815 6.13-1.651 12.256-2.55 18.374-.889 6.12-1.837 12.232-2.83 18.337-1.014 6.104-2.053 12.203-3.248 18.282.52-6.168 1.194-12.316 1.895-18.46.722-6.143 1.487-12.279 2.314-18.406.814-6.13 1.694-12.25 2.592-18.37.923-6.114 1.868-12.226 2.899-18.327l.579.652c-2.599-.091-5.199-.2-7.798-.322l-3.897-.195-3.897-.23z"></path>
			</g>
			<path fill="url(#paint0_linear_1834_150)" d="M13.705 61.935l36.95 24.842V63.763l-36.95-1.828z"></path>
			<defs>
				<linearGradient id="paint0_linear_1834_150" x1="13.705" x2="50.654" y1="74.356" y2="74.356" gradientUnits="userSpaceOnUse">
					<stop></stop>
					<stop offset="1" stopColor={color}></stop>
				</linearGradient>
				<clipPath id="clip0_1834_150">
					<path fill="#fff" d="M0 0H16.259V74.068H0z" transform="translate(194.295 -26.568)"></path>
				</clipPath>
			</defs>
		</svg>
	);
}

export default React.memo(OffersCard);
