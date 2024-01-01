import useResponsive from '@/hooks/useResponsive';
import { arFont, enSecondaryFont } from '@/theme';
import { Box, Breadcrumbs, Container, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

type Props = {};

const HeroSection = (props: Props) => {
	const { t, lang } = useTranslation();
	const mdUp = useResponsive({ key: 'md', query: 'up' });

	return (
		<Box component={'section'} width={1} position={'relative'}>
			<Image src={'/images/hero-background.jpg'} alt="Hero Background" sizes="100vw" quality={100} style={{ objectFit: 'cover', zIndex: -1 }} fill priority />
			<Box sx={{ position: 'absolute', inset: 0, width: 1, height: 1, background: 'linear-gradient(90deg, rgba(113, 53, 108, 0.80) 47.04%, rgba(241, 132, 232, 0.00) 129.92%)', zIndex: -1 }} />
			<Container>
				<Stack height={1} direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} alignItems={'center'} color={'background.paper'} spacing={4} py={8} useFlexGap>
					<Stack spacing={4} sx={{ fontFamily: lang === 'en' ? enSecondaryFont.style.fontFamily : arFont.style.fontFamily }} useFlexGap>
						<Stack direction={'row'} alignItems={'center'} spacing={4} useFlexGap>
							<Box position={'relative'} width={150} height={{ xs: 150, lg: 500 }}>
								<Image src={'/svgs/arc-texture.svg'} alt="Logo Signature" fill priority />
							</Box>
							<Stack spacing={2} useFlexGap>
								<Typography variant={mdUp ? 'h1' : 'h3'} fontWeight={'bold'} fontFamily={'inherit'} lineHeight={1} maxWidth={'15ch'}>
									{t('services:hero_header_subtitle')}
								</Typography>
								<Breadcrumbs>
									<Typography variant={mdUp ? 'subtitle1' : 'body1'} fontWeight={'normal'} color={'secondary.main'}>
										{t('common:home')}
									</Typography>
									<Typography variant={mdUp ? 'subtitle1' : 'body1'} fontWeight={'normal'} color={'background.paper'}>
										{t('common:services')}
									</Typography>
								</Breadcrumbs>
							</Stack>
						</Stack>
					</Stack>
					<Image
						src={'/images/hero-basket.png'}
						alt="Hero Basket"
						width={375}
						height={505}
						quality={100}
						style={{ objectFit: 'contain', transform: lang === 'ar' ? 'scaleX(-1)' : 'none', marginBottom: mdUp ? '0' : '-100px' }}
					/>
				</Stack>
			</Container>
		</Box>
	);
};

export default HeroSection;
