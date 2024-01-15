import Title from '@/components/title';
import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Container, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ShowcaseCard from 'pages/components/showcase-card';
import services from './data.json';

type Props = {};

const CommercialServiceSection = (props: Props) => {
	const { push } = useRouter();
	const { t, lang } = useTranslation();

	return (
		<Box
			component={motion.section}
			initial={{ opacity: 0, scaleX: 0 }}
			whileInView={{ opacity: 1, scaleX: 1 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			width={1}
			py={6}
			overflow={'hidden'}>
			<Container>
				<Stack spacing={6} useFlexGap>
					<Title title="home:commercial_service_section_title" subtitle="home:commercial_service_section_subtitle" />
					<Stack position={'relative'} width={1} direction={{ xs: 'column', lg: 'row' }} justifyContent={'flex-start'} alignItems={'center'} spacing={{ xs: 4, md: 10 }} useFlexGap>
						<Box position={'relative'} width={{ xs: 1, lg: 0.6 }} sx={{ aspectRatio: '5/3' }}>
							<Image
								src={'/images/commercial-service-hero.png'}
								alt={'Laundry Dryer'}
								style={{ objectFit: 'cover', transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }}
								quality={100}
								fill
								priority
							/>
							<Button
								variant="contained"
								color="secondary"
								size="large"
								onClick={() => push('/commercial-services')}
								endIcon={<ArrowForward sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />}
								sx={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, 50%)', alignSelf: 'center' }}>
								{t('common:view_all_commercial_services')}
							</Button>
						</Box>
						<Stack width={1} position={{ lg: 'absolute' }} top={'50%'} left={'60%'} spacing={4} sx={{ transform: { lg: 'translate(-90px, -50%)' } }} useFlexGap>
							<Stack direction={{ xs: 'column', lg: 'row' }} alignItems={'center'} spacing={1} useFlexGap>
								<Grid container width={{ xs: 1, lg: '150px' }} spacing={1}>
									{services.slice(0, 3).map((service) => (
										<Grid item key={service.id} xs={4} lg={12}>
											<ShowcaseCard {...service} />
										</Grid>
									))}
								</Grid>
								<Grid container width={{ xs: 1, lg: '150px' }} justifyContent={'center'} spacing={1}>
									{services.slice(3).map((service) => (
										<Grid item key={service.id} xs={4} lg={12}>
											<ShowcaseCard {...service} />
										</Grid>
									))}
								</Grid>
							</Stack>
						</Stack>
						<Box position={'absolute'} top={'50%'} right={0} width={550} height={550} zIndex={-1} sx={{ transform: { lg: 'translate(0, -50%)' } }}>
							<Image src={'/svgs/arch-texture.svg'} alt="Logo Signature" style={{ opacity: 0.5, transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} fill priority />
						</Box>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export default CommercialServiceSection;
