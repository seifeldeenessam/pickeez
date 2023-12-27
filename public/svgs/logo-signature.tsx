import React from 'react';

type Props = {
	width?: number;
	height?: number;
};

function LogoSignatureSVG({ width, height }: Props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={width || '117'} height={height || '179'} fill="none" viewBox="0 0 117 179">
			<g clipPath="url(#clip0_1450_14880)">
				<path
					fill="#FBB040"
					d="M111.81 179c-1.73 0-3.414-.866-4.37-2.416L.82 7.979c-1.23-1.915-1.047-4.377.364-6.11A5.202 5.202 0 017.057.365l90.094 34.97c2.686 1.049 4.006 4.058 2.959 6.702-1.047 2.69-4.052 4.012-6.692 2.964L17.983 15.73l88.683 140.2v-51.977a5.192 5.192 0 015.19-5.198 5.192 5.192 0 015.19 5.198v69.849c0 2.326-1.503 4.332-3.733 4.97a5.12 5.12 0 01-1.457.228h-.046z"></path>
			</g>
			<defs>
				<clipPath id="clip0_1450_14880">
					<path fill="#fff" d="M0 0H117V179H0z"></path>
				</clipPath>
			</defs>
		</svg>
	);
}

export default React.memo(LogoSignatureSVG);
