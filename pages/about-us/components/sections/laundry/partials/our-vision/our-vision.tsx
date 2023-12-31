import { Box, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

type Props = {};

const OurVision = (props: Props) => {
	const { t } = useTranslation();

	return (
		<Box position={'relative'} bgcolor={'background.default'} height={1} p={2} pt={8} borderRadius={2}>
			<Stack
				position={'absolute'}
				top={0}
				left={'50%'}
				direction={'row'}
				alignItems={'center'}
				p={1}
				borderRadius={2}
				spacing={2}
				bgcolor={'primary.main'}
				sx={{ transform: 'translate(-50%, -50%)' }}
				useFlexGap>
				<Image src={'/svgs/vision.svg'} alt="Vision Icon" width={32} height={32} />
				<Typography color={'background.paper'}>{t('about-us:our_vision_title')}</Typography>
			</Stack>
			<Stack direction={{ xs: 'column', md: 'row' }} alignItems={'center'} height={1}>
				<Stack>
					<Typography textAlign={'center'} textTransform={'uppercase'} maxWidth={'57ch'}>
						{t('about-us:our_vision_description_1')}
					</Typography>
					<br />
					<Typography textAlign={'center'} textTransform={'uppercase'} maxWidth={'57ch'}>
						{t('about-us:our_vision_description_2')}
					</Typography>
				</Stack>
				<Box position={'relative'} width={379} height={253} mb={{ xs: -2, md: 0 }} mt={'auto'} mx={'auto'}>
					<Image src={'/images/our_vision_figure.png'} alt="Vision Figure" fill />
				</Box>
			</Stack>
		</Box>
	);
};

export default OurVision;
