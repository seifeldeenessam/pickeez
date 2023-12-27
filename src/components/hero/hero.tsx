import { enSecondaryFont } from '@/theme';
import { ArrowForward, Call, WatchLater } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import LogoSignatureSVG from '@svgs/logo-signature';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

type Props = {};

const Hero = (props: Props) => {
	const { t } = useTranslation();

	return (
		<Box component={'section'} width={1} position={'relative'}>
			<Image src={'/images/hero-background.png'} alt="Hero Background" sizes="100vw" style={{ objectFit: 'cover', zIndex: -1 }} fill priority />
			<Stack
				pt={4}
				pb={12}
				px={4}
				spacing={4}
				sx={{ color: 'background.paper', background: 'linear-gradient(90deg, rgba(113, 53, 108, 0.80) 47.04%, rgba(241, 132, 232, 0.00) 129.92%)' }}
				useFlexGap>
				<Stack direction={'row'} spacing={4} sx={{ fontFamily: enSecondaryFont.style.fontFamily }} useFlexGap>
					<LogoSignatureSVG width={256} />
					<Stack mt={4} spacing={2} useFlexGap>
						<Typography variant="h6" fontWeight={'bold'} fontFamily={'inherit'} textTransform={'uppercase'}>
							{t('home:hero_header_subtitle')}
						</Typography>
						<Typography variant="h3" fontWeight={'bold'} fontFamily={'inherit'} lineHeight={1}>
							{t('home:hero_header_title')}
						</Typography>
					</Stack>
				</Stack>
				<Typography color={'secondary.main'} maxWidth={'38ch'} textAlign={'center'} alignSelf={'center'}>
					{t('home:hero_header_description')}
				</Typography>
				<Button variant="contained" color="secondary" size="large" endIcon={<ArrowForward />} sx={{ alignSelf: 'center' }}>
					{t('common:discover_more')}
				</Button>
				<Image src={'/images/hero-basket.png'} alt="Hero Basket" width={234} height={305} style={{ objectFit: 'contain', alignSelf: 'center', zIndex: 2 }} />
				<Stack direction={{ xs: 'column', sm: 'row' }} position={'absolute'} bottom={0} left={'50%'} sx={{ translate: '-50% 50%' }}>
					<Stack direction={'row'} alignItems={'center'} px={4} py={2} spacing={2} bgcolor={'#B64FAE'} useFlexGap>
						<Call />
						<Stack>
							<Typography whiteSpace={'nowrap'}>{t('home:hero_sections_1_title')}</Typography>
							<Typography>{t('home:hero_sections_1_subtitle')}</Typography>
						</Stack>
					</Stack>
					<Stack direction={'row'} alignItems={'center'} px={4} py={2} spacing={2} bgcolor={'#FBB040'} useFlexGap>
						<WatchLater />
						<Stack>
							<Typography whiteSpace={'nowrap'}>{t('home:hero_sections_2_title')}</Typography>
							<Typography>{t('home:hero_sections_2_subtitle')}</Typography>
						</Stack>
					</Stack>
					<Stack direction={'row'} alignItems={'center'} px={4} py={2} spacing={2} bgcolor={'#71356C'} useFlexGap>
						<Call />
						<Stack>
							<Typography whiteSpace={'nowrap'}>{t('home:hero_sections_3_title')}</Typography>
							<Typography>{t('home:hero_sections_3_subtitle')}</Typography>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Hero;
