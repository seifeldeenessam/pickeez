import Title from '@/components/title';
import { AspectRatio } from '@/enums/aspectRatio';
import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Container, Grid, Stack } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import ShowcaseCard from 'pages/components/showcase-card';
import services from './data.json';

type Props = {};

const CommercialServiceSection = (props: Props) => {
	const { t, lang } = useTranslation();

	return (
		<Box component={'section'} width={1} py={6} overflow={'hidden'}>
			<Container>
				<Stack spacing={4} useFlexGap>
					<Title title="home:commercial_service_section_title" subtitle="home:commercial_service_section_subtitle" />
					<Stack width={1} direction={{ xs: 'column', md: 'row' }} justifyContent={'center'} alignItems={'center'} spacing={10} useFlexGap>
						<Box position={'relative'} width={{ xs: 0.75, md: 500 }} sx={{ aspectRatio: AspectRatio.SQUARE }}>
							<Image src={'/images/commercial-service-hero.png'} alt={'Laundry Dryer'} style={{ objectFit: 'contain' }} quality={100} fill priority />
						</Box>
						<Stack spacing={4} useFlexGap>
							<Grid container spacing={2}>
								{services.map((service) => (
									<Grid item key={service.id} xs={6}>
										<ShowcaseCard {...service} />
									</Grid>
								))}
							</Grid>
							<Button
								variant="contained"
								color="secondary"
								size="large"
								endIcon={<ArrowForward sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />}
								sx={{ alignSelf: 'center' }}>
								{t('common:contact_us_for_more_info')}
							</Button>
						</Stack>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export default CommercialServiceSection;
