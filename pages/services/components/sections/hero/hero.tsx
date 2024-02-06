import useResponsive from '@/hooks/useResponsive';
import { Box } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

type Props = {};

const HeroSection = (props: Props) => {
	const { lang } = useTranslation();
	const mdUp = useResponsive({ key: 'md', query: 'up' });

	return (
		<Box component={'section'} position={'relative'} width={1} sx={{ aspectRatio: { xs: '3/6', md: '16/8.5' } }}>
			<Image
				src={`/svgs/services_hero/${mdUp ? 'desktop' : 'mobile'}_${lang}.svg`}
				alt="Hero Background"
				placeholder="blur"
				blurDataURL="/images/placeholder-loading.webp"
				quality={100}
				style={{ objectPosition: 'top', objectFit: 'cover' }}
				fill
				priority
			/>
		</Box>
	);
};

export default HeroSection;
