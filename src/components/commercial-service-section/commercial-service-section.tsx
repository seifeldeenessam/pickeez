import { AspectRatio } from '@/enums/aspectRatio';
import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import services from './data.json';

type Props = {};

const CommercialServiceSection = (props: Props) => {
	const { t } = useTranslation();

	return (
		<Box component={'section'} width={1} py={5} overflow={'hidden'}>
			<Stack justifyContent={'center'} alignItems={'center'} spacing={2} useFlexGap>
				<Stack justifyContent={'center'} alignItems={'center'} spacing={1} useFlexGap>
					<Divider flexItem>
						<Typography fontWeight={'bold'} color={'text.secondary'} textAlign={'center'} textTransform={'uppercase'}>
							{t('home:commercial_service_section_title')}
						</Typography>
					</Divider>
					<Typography variant="subtitle1" fontWeight={'bold'} textAlign={'center'}>
						{t('home:commercial_service_section_subtitle')}
					</Typography>
				</Stack>
				<Stack width={1} direction={{ xs: 'column', md: 'row' }} justifyContent={'center'} alignItems={'center'} spacing={10} mt={4} useFlexGap>
					<Box position={'relative'} width={{ xs: 0.75, md: 500 }} sx={{ aspectRatio: AspectRatio.SQUARE }}>
						<Image src={'/images/commercial-service-hero.png'} alt={'Laundry Dryer'} style={{ objectFit: 'contain' }} quality={100} fill priority />
					</Box>
					<Stack spacing={4} useFlexGap>
						<Grid container spacing={2}>
							{services.map((service) => (
								<Grid item key={service.id} xs={6}>
									<Stack
										width={1}
										justifyContent={'center'}
										alignItems={'center'}
										bgcolor={'background.paper'}
										boxShadow={'0px 0px 7px 0px rgba(0, 0, 0, 0.15)'}
										sx={{ aspectRatio: AspectRatio.SQUARE }}
										spacing={2}
										useFlexGap>
										<Image src={service.icon} alt={service.title} width={64} height={64} style={{ objectFit: 'contain' }} />
										<Typography fontWeight={'bold'} textAlign={'center'}>
											{t(service.title)}
										</Typography>
										<Divider sx={{ width: '25%', borderBottomWidth: '2px', borderColor: 'secondary.main' }} />
									</Stack>
								</Grid>
							))}
						</Grid>
						<Button variant="contained" color="secondary" size="large" endIcon={<ArrowForward />} sx={{ alignSelf: { xs: 'center', md: 'flex-start' } }}>
							{t('common:contact_us_for_more_info')}
						</Button>
					</Stack>
				</Stack>
			</Stack>
		</Box>
	);
};

export default CommercialServiceSection;
