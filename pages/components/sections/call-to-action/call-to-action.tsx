import useResponsive from '@/hooks/useResponsive';
import { arFont, enSecondaryFont } from '@/theme';
import { Box, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';

type Props = {};

const CallToActionSection = (props: Props) => {
	const { t, lang } = useTranslation();
	const { push } = useRouter();
	const smUp = useResponsive({ key: 'sm', query: 'up' });

	return (
		<Box component={'section'} position={'relative'} width={1} fontFamily={lang === 'en' ? enSecondaryFont.style.fontFamily : arFont.style.fontFamily} overflow={'hidden'}>
			<Box position={'relative'} width={1} minHeight={550}>
				<Image src={'/images/call_to_action_background.png'} alt="Call to Action Background" sizes="100vw" style={{ objectFit: 'cover' }} fill priority />
				<Stack
					position={'absolute'}
					width={1}
					height={1}
					justifyContent={{ xs: 'flex-start', sm: 'center' }}
					py={{ xs: 4 }}
					px={{ xs: 4, md: 12 }}
					spacing={4}
					sx={{ color: 'background.paper', background: 'linear-gradient(270deg, rgba(129, 28, 146, 0.24) -8.49%, #FBB040 117.06%)' }}
					useFlexGap>
					<Typography variant={smUp ? 'h2' : 'h3'} fontWeight={'bold'} fontFamily={'inherit'} maxWidth={'12ch'} lineHeight={1}>
						{t('home:call_to_action_title')}
					</Typography>
					<Typography fontWeight={'bold'} fontFamily={'inherit'} maxWidth={{ xs: '30ch', sm: '50ch' }} textTransform={'uppercase'}>
						{t('home:call_to_action_description')}
					</Typography>
				</Stack>
			</Box>
			{/* <Box position={'relative'} bgcolor={'primary.main'} color={'background.paper'}>
				<Container>
					<Stack direction={'row'} bgcolor={'primary.main'} justifyContent={'space-between'} alignItems={'center'} color={'background.paper'} py={4} spacing={2} useFlexGap>
						<Stack>
							<Typography variant="subtitle1" color={'inherit'} fontFamily={'inherit'} fontWeight={'bold'} textTransform={'uppercase'}>
								{t('home:call_to_action_quote_title')}
							</Typography>
							<Typography variant="caption" color={'inherit'} fontFamily={'inherit'} maxWidth={'25ch'}>
								{t('home:call_to_action_quote_description')}
							</Typography>
						</Stack>
						<Button
							variant="contained"
							color="secondary"
							size="large"
							onClick={() => push('/services')}
							endIcon={<ArrowForward sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />}>
							{t('common:view_all_services')}
						</Button>
					</Stack>
				</Container>
			</Box> */}
		</Box>
	);
};

export default CallToActionSection;
