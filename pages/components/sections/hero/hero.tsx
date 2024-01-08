import useResponsive from '@/hooks/useResponsive';
import { Box } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

type Props = {};

const HeroSection = (props: Props) => {
	const { t, lang } = useTranslation();
	const mdUp = useResponsive({ key: 'md', query: 'up' });

	return (
		<Box component={'section'} width={1} minHeight={'845px'} position={'relative'}>
			<Image src={`/svgs/hero-banner-${mdUp ? 'desktop' : 'mobile'}-${lang}.svg`} alt="Hero Background" sizes="100vw" quality={100} style={{ objectPosition: 'top' }} fill priority />
		</Box>
	);
};

export default HeroSection;
