import { AspectRatio } from '@/enums/aspectRatio';
import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import advantages from './data.json';

type Props = {};

const AdvantagesSection = (props: Props) => {
	const { t } = useTranslation();

	return (
		<Box component={'section'} width={1} py={5} overflow={'hidden'} bgcolor={'background.paper'}>
			<Container>
				<Stack justifyContent={'center'} alignItems={'center'} spacing={6} useFlexGap>
					<Stack justifyContent={'center'} alignItems={'center'} spacing={2} useFlexGap>
						<Divider flexItem>
							<Typography fontWeight={'bold'} color={'text.secondary'} textAlign={'center'} textTransform={'uppercase'}>
								{t('home:advantages_section_title')}
							</Typography>
						</Divider>
						<Typography variant="subtitle1" fontWeight={'bold'} textAlign={'center'} maxWidth={'20ch'} lineHeight={1}>
							{t('home:advantages_section_subtitle')}
						</Typography>
					</Stack>
					<Grid container spacing={2}>
						{advantages.map((advantage) => (
							<Grid item xs={6} sm={3} key={advantage.id}>
								<Stack
									width={1}
									height={1}
									justifyContent={'center'}
									alignItems={'center'}
									bgcolor={'background.paper'}
									boxShadow={'0px 0px 7px 0px rgba(0, 0, 0, 0.15)'}
									sx={{ aspectRatio: AspectRatio.SQUARE }}
									spacing={2}
									p={2}
									useFlexGap>
									<Image src={advantage.icon} alt={advantage.title} width={64} height={64} style={{ objectFit: 'contain' }} />
									<Typography fontWeight={'bold'} textAlign={'center'}>
										{t(advantage.title)}
									</Typography>
									<Divider sx={{ width: '25%', borderBottomWidth: '2px', borderColor: 'secondary.main' }} />
								</Stack>
							</Grid>
						))}
					</Grid>
				</Stack>
			</Container>
		</Box>
	);
};

export default AdvantagesSection;
