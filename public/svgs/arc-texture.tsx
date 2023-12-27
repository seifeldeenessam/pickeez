import React from 'react';
type Props = {
	height?: number;
	width?: number;
	style?: React.CSSProperties;
};

function ArcTexture({ width, height, style }: Props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={width || '342'} height={height || '164'} fill="none" viewBox="0 0 342 164" style={style}>
			<path
				fill="#FBB040"
				d="M.193 156.19c-.025-2.378 1.144-4.705 3.266-6.042L234.243 1.134c2.622-1.655 5.954-1.503 8.362.412 2.408 1.914 3.259 5.159 2.222 8.049l-46.874 124.343c-1.406 3.707-5.534 5.566-9.193 4.166-3.722-1.4-5.588-5.511-4.182-9.155l39.235-104.112L31.909 148.782l555.601-.765c3.958-.042 7.196 3.116 7.238 7.058.042 3.942-3.128 7.167-7.086 7.209L7.432 163.31c-3.204.034-5.99-2.002-6.903-5.058a7.028 7.028 0 01-.335-1.999v-.063z"></path>
		</svg>
	);
}

export default React.memo(ArcTexture);
