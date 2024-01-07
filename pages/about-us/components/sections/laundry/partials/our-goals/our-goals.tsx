import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import goals from './data.json';

type Props = {};

const OurGoals = (props: Props) => {
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
				<Image src={'/svgs/goals.svg'} alt="Vision Icon" width={32} height={32} />
				<Typography color={'background.paper'}>{t('about-us:our_goals_title')}</Typography>
			</Stack>
			<Grid container spacing={4}>
				{goals.map((goal) => (
					<Grid item key={goal.id} xs={12} sm={6}>
						<Stack spacing={2} useFlexGap>
							<Stack direction={'row'} alignItems={'center'} spacing={1} useFlexGap>
								<Image src={`/svgs/goals/${goal.label}.svg`} alt={goal.label} width={32} height={32} />
								<Divider orientation="vertical" flexItem />
								<Typography color={'secondary.main'} textTransform={'uppercase'} fontWeight={'bold'}>
									{t(`about-us:goals_${goal.label}_title`)}
								</Typography>
							</Stack>
							<Typography textTransform={'uppercase'}>{t(`about-us:goals_${goal.label}_description`)}</Typography>
						</Stack>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default OurGoals;
