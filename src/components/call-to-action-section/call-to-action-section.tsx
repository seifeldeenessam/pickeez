import { enSecondaryFont } from '@/theme';
import { Box, Stack, Typography } from '@mui/material';
import ArcTexture from '@svgs/arc-texture';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

type Props = {};

const CallToActionSection = (props: Props) => {
	const { t } = useTranslation();

	return (
		<Box component={'section'} position={'relative'} width={1} fontFamily={enSecondaryFont.style.fontFamily} mb={'-229px'} overflow={'hidden'}>
			<Box position={'relative'} width={1} height={400}>
				<Image src={'/images/call_to_action_background.png'} alt="Call to Action Background" sizes="100vw" style={{ objectFit: 'cover', zIndex: -1 }} fill priority />
				<Stack
					position={'absolute'}
					width={1}
					height={1}
					pt={4}
					pb={12}
					px={4}
					spacing={4}
					sx={{ color: 'background.paper', background: 'linear-gradient(270deg, rgba(129, 28, 146, 0.24) -8.49%, #FBB040 117.06%)' }}
					useFlexGap>
					<Typography variant="h3" fontWeight={'bold'} fontFamily={'inherit'} maxWidth={'12ch'}>
						{t('home:call_to_action_title')}
					</Typography>
					<Typography fontWeight={'bold'} fontFamily={'inherit'} maxWidth={'30ch'} textTransform={'uppercase'}>
						{t('home:call_to_action_description')}
					</Typography>
				</Stack>
			</Box>
			<Box position={'relative'} width={1} height={500} sx={{ transform: 'translate(15%, -15%)' }}>
				<Image src={'/images/call_to_action_figure.png'} alt="Call to Action Figure" fill style={{ objectFit: 'cover' }} />
			</Box>
			<Stack direction={'row'} position={'relative'} width={1} height={163} sx={{ transform: 'translate(0, -140%)' }}>
				<Stack width={1} height={1} p={2} bgcolor={'primary.main'} color={'background.paper'} sx={{ clipPath: 'polygon(0% 0%, 86% 0%, 30% 100%, 0% 100%)' }}>
					<Typography variant="subtitle1" color={'inherit'} fontFamily={'inherit'} fontWeight={'bold'} textTransform={'uppercase'}>
						{t('home:call_to_action_quote_title')}
					</Typography>
					<Typography variant="caption" color={'inherit'} fontFamily={'inherit'} maxWidth={'25ch'}>
						{t('home:call_to_action_quote_description')}
					</Typography>
				</Stack>
				<ArcTexture style={{ position: 'absolute', top: 0, right: '-10%' }} />
			</Stack>
		</Box>
	);
};

export default CallToActionSection;
