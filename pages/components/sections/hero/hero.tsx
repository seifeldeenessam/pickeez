import { AspectRatio } from '@/enums/aspectRatio';
import useResponsive from '@/hooks/useResponsive';
import { arFont, enSecondaryFont } from '@/theme';
import { ArrowForward, Call, WatchLater, WhatsApp } from '@mui/icons-material';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

type Props = {};

const HeroSection = (props: Props) => {
	const { t, lang } = useTranslation();
	const mdUp = useResponsive({ key: 'md', query: 'up' });
	const lgUp = useResponsive({ key: 'lg', query: 'up' });

	return (
		<Box component={'section'} width={1} position={'relative'}>
			<Image src={'/images/hero-background.jpg'} alt="Hero Background" sizes="100vw" quality={100} style={{ objectFit: 'cover', zIndex: -1 }} fill priority />
			<Box sx={{ position: 'absolute', inset: 0, width: 1, height: 1, background: 'linear-gradient(90deg, rgba(113, 53, 108, 0.80) 47.04%, rgba(241, 132, 232, 0.00) 129.92%)', zIndex: -1 }} />

			<Stack height={1} justifyContent={'center'} color={'background.paper'} px={{ xs: 4, md: 8 }} pb={{ xs: '500px', md: 18 }} useFlexGap>
				<Container maxWidth={'xl'}>
					<Stack spacing={4} sx={{ fontFamily: lang === 'en' ? enSecondaryFont.style.fontFamily : arFont.style.fontFamily }} useFlexGap>
						<Stack direction={'row'} alignItems={'center'} spacing={4} mt={4} useFlexGap>
							<Box position={'relative'} width={{ xs: 300, md: 400 }} sx={{ aspectRatio: AspectRatio.SQUARE }}>
								<Image src={'/svgs/logo-variant.svg'} alt="Logo Signature" fill priority />
							</Box>
							<Stack ml={{ xs: '-100px', md: '-120px' }} mt={{ xs: '150px', sm: '50px', md: '270px' }} spacing={2} useFlexGap>
								<Typography variant={mdUp ? 'h1' : 'h3'} fontWeight={'bold'} fontFamily={'inherit'} lineHeight={1} maxWidth={{ xs: '10ch', sm: '15ch' }}>
									{t('home:hero_header_title')}
								</Typography>
								{mdUp && (
									<Stack spacing={2} useFlexGap>
										<Typography color={'secondary.main'} maxWidth={'38ch'} textAlign={{ xs: 'center', md: 'start' }} alignSelf={{ xs: 'center', md: 'flex-start' }}>
											{t('home:hero_header_description')}
										</Typography>
										<Button
											variant="contained"
											color="secondary"
											size="large"
											endIcon={<ArrowForward sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />}
											sx={{ alignSelf: { xs: 'center', md: 'flex-start' } }}>
											{t('common:discover_more')}
										</Button>
									</Stack>
								)}
							</Stack>
						</Stack>
						{!mdUp && (
							<Stack spacing={2} useFlexGap>
								<Typography color={'secondary.main'} maxWidth={'38ch'} textAlign={{ xs: 'center', md: 'start' }} alignSelf={{ xs: 'center', md: 'flex-start' }}>
									{t('home:hero_header_description')}
								</Typography>
								<Button
									variant="contained"
									color="secondary"
									size="large"
									endIcon={<ArrowForward sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />}
									sx={{ alignSelf: { xs: 'center', md: 'flex-start' } }}>
									{t('common:discover_more')}
								</Button>
							</Stack>
						)}
					</Stack>

					<Stack position={'absolute'} bottom={'0'} left={'50%'} sx={{ transform: 'translate(-50%, 50%)' }}>
						<Stack direction={{ xs: 'column', md: 'row' }}>
							<Stack direction={'row'} alignItems={'center'} px={4} py={2} spacing={2} bgcolor={'#B64FAE'} width={{ xs: 1, lg: 350 }} useFlexGap>
								<WhatsApp sx={{ fontSize: { xs: '24px', md: '32px' }, transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
								<Stack>
									<Typography whiteSpace={'nowrap'}>{t('home:hero_sections_1_title')}</Typography>
									<Typography>{t('home:hero_sections_1_subtitle')}</Typography>
								</Stack>
							</Stack>
							<Stack direction={'row'} alignItems={'center'} px={4} py={2} spacing={2} bgcolor={'#FBB040'} width={{ xs: 1, lg: 350 }} useFlexGap>
								<WatchLater sx={{ fontSize: { xs: '24px', md: '32px' }, transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
								<Stack>
									<Typography whiteSpace={'nowrap'}>{t('home:hero_sections_2_title')}</Typography>
									<Typography>{t('home:hero_sections_2_subtitle')}</Typography>
								</Stack>
							</Stack>
							<Stack direction={'row'} alignItems={'center'} px={4} py={2} spacing={2} bgcolor={'#71356C'} width={{ xs: 1, lg: 350 }} useFlexGap>
								<Call sx={{ fontSize: { xs: '24px', md: '32px' }, transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
								<Stack>
									<Typography whiteSpace={'nowrap'}>{t('home:hero_sections_3_title')}</Typography>
									<Typography>{t('home:hero_sections_3_subtitle')}</Typography>
								</Stack>
							</Stack>
						</Stack>
						<Box position={'absolute'} top={0} right={0} width={300} height={400} sx={{ transform: { xs: 'translate(0%, -90%)', md: 'translate(80%, -60%)' } }}>
							<Image src={'/images/hero-basket.png'} alt="Hero Basket" style={{ objectFit: 'contain' }} fill priority />
						</Box>
					</Stack>
				</Container>
			</Stack>
		</Box>
	);
};

export default HeroSection;
