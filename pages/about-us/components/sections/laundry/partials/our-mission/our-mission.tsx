import { Box, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

type Props = {};

const OurMission = (props: Props) => {
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
				<Image src={'/svgs/mission.svg'} alt="Vision Icon" width={32} height={32} />
				<Typography color={'background.paper'}>{t('about-us:our_mission_title')}</Typography>
			</Stack>
			<Stack alignItems={'center'} height={1}>
				<Stack>
					<Typography textAlign={'center'} textTransform={'uppercase'} maxWidth={'57ch'}>
						{t('about-us:our_mission_description')}
					</Typography>
				</Stack>
				<Box position={'relative'} width={187 * 1.75} height={191 * 1.75} mb={-2} mt={'auto'} mx={'auto'}>
					<Image src={'/images/our_mission_figure.png'} alt="Vision Figure" fill />
				</Box>
			</Stack>
		</Box>
	);
};

export default OurMission;
