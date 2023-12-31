import { Box, Divider, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import goals from './data.json';

type Props = {};

const OurGoals = (props: Props) => {
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
				<Image src={'/svgs/goals.svg'} alt="Vision Icon" width={32} height={32} />
				<Typography color={'background.paper'}>{t('about-us:our_goals_title')}</Typography>
			</Stack>
			<Stack direction={{ xs: 'column', md: 'row' }} flexWrap={'wrap'} spacing={4} useFlexGap>
				{goals.map((goal) => (
					<Stack key={goal.id} spacing={2} useFlexGap>
						<Stack direction={'row'} alignItems={'center'} spacing={1} useFlexGap>
							<Image src={`/svgs/goals/${goal.label}.svg`} alt={goal.label} width={24} height={24} />
							<Divider orientation="vertical" flexItem />
							<Typography color={'secondary.main'} textTransform={'uppercase'}>
								{t(`about-us:goals_${goal.label}_title`)}
							</Typography>
						</Stack>
						<Typography textTransform={'uppercase'} maxWidth={'57ch'}>
							{t(`about-us:goals_${goal.label}_description`)}
						</Typography>
					</Stack>
				))}
			</Stack>
		</Box>
	);
};

export default OurGoals;
