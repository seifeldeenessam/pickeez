import { Box, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

type Props = {};

const OurMission = (props: Props) => {
	const { t } = useTranslation();

	return (
		<Box position={'relative'} bgcolor={'background.default'} height={1} p={2} pt={8} borderRadius={2} border={'3px solid white'} boxShadow={'0px 0px 7px 0px rgba(0, 0, 0, 0.15)'}>
			<Stack
				position={'absolute'}
				top={0}
				left={'50%'}
				direction={'row'}
				alignItems={'center'}
				p={1}
				borderRadius={2}
				spacing={1}
				bgcolor={'primary.main'}
				sx={{ transform: 'translate(-50%, -50%)' }}
				useFlexGap>
				<Image src={'/svgs/mission.svg'} alt="Vision Icon" width={32} height={32} />
				<Typography color={'background.paper'}>{t('about-us:our_mission_title')}</Typography>
			</Stack>
			<Stack alignItems={'center'} height={1}>
				<Stack>
					<Typography textAlign={'center'} textTransform={'uppercase'} maxWidth={'57ch'}>
						{t('about-us:our_mission_description')}
					</Typography>
				</Stack>
				<Box position={'relative'} width={3318 * 0.125} height={3432 * 0.125} mb={-2} mt={2} mx={'auto'}>
					<Image src={'/images/figure_4.png'} alt="Vision Figure" style={{ objectFit: 'cover' }} fill />
				</Box>
			</Stack>
		</Box>
	);
};

export default OurMission;
