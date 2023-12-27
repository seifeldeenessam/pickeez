import React from 'react';

type Props = {
	height?: number;
	width?: number;
	style?: React.CSSProperties;
};

function CurveTextureSVG({ width, height, style }: Props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={width || '1314'} height={height || '892'} fill="none" viewBox="0 0 1314 892" style={style}>
			<path
				fill="#FBB040"
				d="M.816 63.478C.816 28.837 28.974.794 63.756.794h802.218c263.356 0 447.206 183.104 447.206 445.388 0 245.788-200.41 445.388-447.206 445.387-185.509 0-353.903-116.57-419.052-289.227-12.146-32.441 4.417-68.182 36.991-80.279 32.575-12.097 68.462 4.398 81.161 36.84 46.929 124.269 167.842 208.398 301.453 208.398 177.223 0 321.883-143.514 321.883-320.569 0-159.46-99.38-320.57-321.883-320.57H64.309c-34.783 0-62.94-28.043-62.94-62.684H.815z"></path>
		</svg>
	);
}

export default React.memo(CurveTextureSVG);
