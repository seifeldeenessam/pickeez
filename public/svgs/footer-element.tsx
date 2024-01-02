import { CSSProperties, memo } from 'react';

type Props = {
	width: number;
	height: number;
	style: CSSProperties;
};

function FooterElement({ width, height, style }: Partial<Props>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 1920 282" style={style}>
			<path fill="#71356C" fillRule="evenodd" d="M1330.91 15H0v247h1903v-3.844H954.474L1330.91 15z" clipRule="evenodd"></path>
			<path
				fill="#FBB040"
				d="M949.71 260.943c-.041-3.878 1.866-7.676 5.328-9.856L1331.5 8.013c4.27-2.7 9.71-2.451 13.64.671 3.92 3.123 5.31 8.417 3.62 13.13l-76.46 202.832c-2.29 6.047-9.03 9.079-15 6.794-6.07-2.283-9.11-8.988-6.82-14.933l64-169.829-313.03 202.18 906.3-1.246c6.46-.069 11.74 5.081 11.81 11.512.07 6.43-5.1 11.691-11.56 11.76l-946.481 1.673c-5.227.056-9.772-3.265-11.26-8.251-.319-1.017-.536-2.138-.547-3.261l-.002-.102z"></path>
		</svg>
	);
}

export default memo(FooterElement);
