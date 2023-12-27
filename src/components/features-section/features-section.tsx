import { AspectRatio } from '@/enums/aspectRatio';
import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import features from './data.json';

type Props = {};

const FeaturesSection = (props: Props) => {
	const { t } = useTranslation();

	return (
		<Box component={'section'} width={1} py={5} mt={15}>
			<Container>
				<Stack spacing={4} useFlexGap>
					<Stack justifyContent={'center'} alignItems={'center'} spacing={1} useFlexGap>
						<Divider flexItem>
							<Typography color={'text.secondary'} fontWeight={'bold'} textAlign={'center'} textTransform={'uppercase'}>
								{t('home:features_section_title')}
							</Typography>
						</Divider>
						<Typography variant="subtitle1" fontWeight={'bold'} textAlign={'center'}>
							{t('home:features_section_subtitle')}
						</Typography>
					</Stack>
					<Grid container spacing={2}>
						{features.map((feature) => (
							<Grid item key={feature.id} xs={12} sm={4}>
								<Stack
									position={'relative'}
									width={{ xs: 0.7, sm: 1 }}
									justifyContent={'center'}
									alignItems={'center'}
									bgcolor={'background.paper'}
									mx={'auto'}
									boxShadow={'0px 0px 8px 0px rgba(0, 0, 0, 0.15)'}
									p={2}
									spacing={1}
									sx={{ aspectRatio: AspectRatio.SQUARE }}
									useFlexGap>
									<Image src={feature.icon} alt={feature.title} width={64} height={64} style={{ objectFit: 'contain' }} />
									<Typography fontWeight={'bold'} textTransform={'uppercase'}>
										{t(feature.title)}
									</Typography>
									<Typography variant="body2" color={'text.secondary'} textAlign={'center'} maxWidth={'35ch'}>
										{t(feature.description)}
									</Typography>
									<Divider sx={{ position: 'absolute', bottom: '10%', width: '25%', borderBottomWidth: '2px', borderColor: 'secondary.main' }} />
								</Stack>
							</Grid>
						))}
					</Grid>
					<Button variant="contained" color="secondary" size="large" endIcon={<ArrowForward />} sx={{ alignSelf: 'center' }}>
						{t('common:view_all_services')}
					</Button>
				</Stack>
			</Container>
		</Box>
	);
};

export default FeaturesSection;
