import useResponsive from '@/hooks/useResponsive';
import { arFont, enSecondaryFont } from '@/theme';
import { Box, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

type Props = {};

const CallToActionSection = (props: Props) => {
	const { t, lang } = useTranslation();
	const mdUp = useResponsive({ key: 'md', query: 'up' });

	return (
		<Box component={'section'} position={'relative'} width={1} mb={'125px'} fontFamily={lang === 'en' ? enSecondaryFont.style.fontFamily : arFont.style.fontFamily} overflow={'hidden'}>
			<Box position={'relative'} width={1} minHeight={500}>
				<Image src={'/images/call_to_action_background.png'} alt="Call to Action Background" style={{ objectFit: 'cover' }} fill priority />
				<Stack
					position={'absolute'}
					width={1}
					height={1}
					justifyContent={{ xs: 'flex-start', sm: 'center' }}
					py={{ xs: 4 }}
					px={{ xs: 4, md: 12 }}
					spacing={4}
					sx={{ color: 'background.paper' }}
					useFlexGap>
					<Typography variant={mdUp ? 'h1' : 'h3'} fontWeight={'bold'} fontFamily={'inherit'} maxWidth={'12ch'} lineHeight={0.8}>
						{t('home:call_to_action_title')}
					</Typography>
					<Typography fontWeight={'bold'} fontFamily={'inherit'} maxWidth={{ xs: '30ch', sm: '50ch' }} textTransform={'uppercase'}>
						{t('home:call_to_action_description')}
					</Typography>
				</Stack>
			</Box>
		</Box>
	);
};

export default CallToActionSection;
