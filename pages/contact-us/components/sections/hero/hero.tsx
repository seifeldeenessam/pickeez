import { AspectRatio } from '@/enums/aspectRatio';
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

			<Container maxWidth={'xl'}>
				<Stack
					height={1}
					direction={{ xs: 'column', md: 'row' }}
					justifyContent={'space-between'}
					alignItems={'center'}
					color={'background.paper'}
					spacing={4}
					pl={{ xs: 4, lg: 8 }}
					py={{ xs: 4, lg: 8 }}
					useFlexGap>
					<Stack spacing={4} sx={{ fontFamily: lang === 'en' ? enSecondaryFont.style.fontFamily : arFont.style.fontFamily }} useFlexGap>
						<Stack direction={'row'} alignItems={'center'} spacing={4} useFlexGap>
							<Box position={'relative'} width={{ xs: 300, lg: 400 }} sx={{ aspectRatio: AspectRatio.SQUARE }}>
								<Image src={'/svgs/logo-variant.svg'} alt="Logo Signature" style={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} fill priority />{' '}
							</Box>
							<Stack ml={{ xs: '-100px', md: '-120px' }} mt={{ xs: '100px', sm: '50px', md: '150px' }} spacing={2} useFlexGap>
								<Typography variant={mdUp ? 'h1' : 'h3'} fontWeight={'bold'} fontFamily={'inherit'} lineHeight={1} maxWidth={'15ch'}>
									{t('contact-us:hero_header_subtitle')}
								</Typography>
								<Breadcrumbs>
									<Typography variant={mdUp ? 'subtitle1' : 'body1'} fontWeight={'normal'} color={'secondary.main'}>
										{t('common:home')}
									</Typography>
									<Typography variant={mdUp ? 'subtitle1' : 'body1'} fontWeight={'normal'} color={'background.paper'}>
										{t('common:contact')}
									</Typography>
								</Breadcrumbs>
							</Stack>
						</Stack>
					</Stack>

					<Box position={'relative'} width={375} height={505} mb={{ xs: '-100px', md: '-150px' }} sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }}>
						<Image src={'/images/about_us_hero_figure.png'} alt="Hero Basket" quality={100} style={{ objectFit: 'contain' }} fill priority />
					</Box>
				</Stack>
			</Container>
		</Box>
	);
};

export default HeroSection;
