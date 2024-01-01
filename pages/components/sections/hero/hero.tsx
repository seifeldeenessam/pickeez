import useResponsive from '@/hooks/useResponsive';
import { arFont, enSecondaryFont } from '@/theme';
import { ArrowForward, Call, WatchLater } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

type Props = {};

const HeroSection = (props: Props) => {
	const { t, lang } = useTranslation();
	const lgUp = useResponsive({ key: 'lg', query: 'up' });

	return (
		<Box component={'section'} width={1} position={'relative'}>
			<Image src={'/images/hero-background.jpg'} alt="Hero Background" sizes="100vw" quality={100} style={{ objectFit: 'cover', zIndex: -1 }} fill priority />
			<Box sx={{ position: 'absolute', inset: 0, width: 1, height: 1, background: 'linear-gradient(90deg, rgba(113, 53, 108, 0.80) 47.04%, rgba(241, 132, 232, 0.00) 129.92%)', zIndex: -1 }} />
			<Stack height={1} justifyContent={'center'} color={'background.paper'} px={{ xs: 4, lg: 8 }} pt={{ xs: 4, lg: 12 }} pb={{ xs: '500px', lg: 12 }} useFlexGap>
				<Stack spacing={4} sx={{ fontFamily: lang === 'en' ? enSecondaryFont.style.fontFamily : arFont.style.fontFamily }} useFlexGap>
					<Stack direction={'row'} alignItems={'center'} spacing={4} useFlexGap>
						<Box position={'relative'} width={300} height={{ xs: 300, lg: 500 }}>
							<Image src={'/svgs/arc-texture.svg'} alt="Logo Signature" fill priority />
						</Box>
						<Stack spacing={2} useFlexGap>
							<Typography variant={lgUp ? 'body1' : 'h6'} fontWeight={'bold'} fontFamily={'inherit'} textTransform={'uppercase'}>
								{t('home:hero_header_subtitle')}
							</Typography>
							<Typography variant={lgUp ? 'h1' : 'h3'} fontWeight={'bold'} fontFamily={'inherit'} lineHeight={1} maxWidth={'15ch'}>
								{t('home:hero_header_title')}
							</Typography>
							{lgUp && (
								<Stack spacing={2} useFlexGap>
									<Typography color={'secondary.main'} maxWidth={'38ch'} textAlign={{ xs: 'center', lg: 'start' }} alignSelf={{ xs: 'center', lg: 'flex-start' }}>
										{t('home:hero_header_description')}
									</Typography>
									<Button
										variant="contained"
										color="secondary"
										size="large"
										endIcon={<ArrowForward sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />}
										sx={{ alignSelf: { xs: 'center', lg: 'flex-start' } }}>
										{t('common:discover_more')}
									</Button>
								</Stack>
							)}
						</Stack>
					</Stack>
					{!lgUp && (
						<Stack spacing={2} useFlexGap>
							<Typography color={'secondary.main'} maxWidth={'38ch'} textAlign={{ xs: 'center', lg: 'start' }} alignSelf={{ xs: 'center', lg: 'flex-start' }}>
								{t('home:hero_header_description')}
							</Typography>
							<Button
								variant="contained"
								color="secondary"
								size="large"
								endIcon={<ArrowForward sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />}
								sx={{ alignSelf: { xs: 'center', lg: 'flex-start' } }}>
								{t('common:discover_more')}
							</Button>
						</Stack>
					)}
				</Stack>
				<Stack position={'absolute'} bottom={'0'} left={'50%'} sx={{ transform: 'translate(-50%, 50%)' }}>
					<Stack direction={{ xs: 'column', lg: 'row' }}>
						<Stack direction={'row'} alignItems={'center'} px={4} py={2} spacing={2} bgcolor={'#B64FAE'} width={{ xs: 1, lg: 350 }} useFlexGap>
							<Call sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
							<Stack>
								<Typography whiteSpace={'nowrap'}>{t('home:hero_sections_1_title')}</Typography>
								<Typography>{t('home:hero_sections_1_subtitle')}</Typography>
							</Stack>
						</Stack>
						<Stack direction={'row'} alignItems={'center'} px={4} py={2} spacing={2} bgcolor={'#FBB040'} width={{ xs: 1, lg: 350 }} useFlexGap>
							<WatchLater sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
							<Stack>
								<Typography whiteSpace={'nowrap'}>{t('home:hero_sections_2_title')}</Typography>
								<Typography>{t('home:hero_sections_2_subtitle')}</Typography>
							</Stack>
						</Stack>
						<Stack direction={'row'} alignItems={'center'} px={4} py={2} spacing={2} bgcolor={'#71356C'} width={{ xs: 1, lg: 350 }} useFlexGap>
							<Call sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
							<Stack>
								<Typography whiteSpace={'nowrap'}>{t('home:hero_sections_3_title')}</Typography>
								<Typography>{t('home:hero_sections_3_subtitle')}</Typography>
							</Stack>
						</Stack>
					</Stack>
					<Image
						src={'/images/hero-basket.png'}
						alt="Hero Basket"
						width={300}
						height={400}
						style={{ position: 'absolute', top: '0', right: '0', transform: lgUp ? 'translate(60%, -50%)' : 'translate(0%, -90%)', objectFit: 'contain', alignSelf: 'center' }}
					/>
				</Stack>
			</Stack>
		</Box>
	);
};

export default HeroSection;
