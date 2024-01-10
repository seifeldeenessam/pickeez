import useResponsive from '@/hooks/useResponsive';
import { Box } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

type Props = {};

const HeroSection = (props: Props) => {
	const { t, lang } = useTranslation();
	const mdUp = useResponsive({ key: 'md', query: 'up' });

	return (
		<Box component={'section'} position={'relative'} width={1} sx={{ aspectRatio: { xs: '3/6', md: '16/8' } }}>
			<Image
				src={`/svgs/home_hero/${mdUp ? 'desktop' : 'mobile'}_${lang}.svg`}
				alt="Hero Background"
				placeholder="blur"
				blurDataURL="/images/loading_spinner.png"
				sizes="100vw"
				quality={100}
				style={{ objectPosition: 'top', objectFit: 'cover' }}
				fill
				priority
			/>
		</Box>
	);
};

export default HeroSection;
