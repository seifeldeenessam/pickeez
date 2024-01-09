import useResponsive from '@/hooks/useResponsive';
import { Box } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

type Props = {};

const HeroSection = (props: Props) => {
	const { lang } = useTranslation();
	const mdUp = useResponsive({ key: 'md', query: 'up' });

	return (
		<Box component={'section'} width={1} minHeight={{ xs: '745px', md: '920px' }} mb={{ xs: '-10%', md: '-5%' }} position={'relative'}>
			<Image
				src={`/svgs/about-us-hero/${mdUp ? 'desktop' : 'mobile'}_${lang}.svg`}
				alt="Hero Background"
				sizes="100vw"
				quality={100}
				style={{ objectPosition: 'top', objectFit: 'contain' }}
				fill
				priority
			/>
		</Box>
	);
};

export default HeroSection;
