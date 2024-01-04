import Title from '@/components/title';
import { Box, Container, Grid, Stack } from '@mui/material';
import Image from 'next/image';
import ShowcaseCard from 'pages/components/showcase-card';
import services from './data.json';

type Props = {};

const CommercialServiceSection = (props: Props) => {
	return (
		<Box component={'section'} width={1} py={6} overflow={'hidden'}>
			<Stack spacing={4} useFlexGap>
				<Container>
					<Title title="home:commercial_service_section_title" subtitle="home:commercial_service_section_subtitle" />
				</Container>
				<Stack position={'relative'} width={1} direction={{ xs: 'column', lg: 'row' }} justifyContent={'flex-start'} alignItems={'center'} spacing={10} useFlexGap>
					<Box position={'relative'} width={{ xs: 1, lg: 0.6 }} sx={{ aspectRatio: '5/3' }}>
						<Image src={'/images/commercial-service-hero.png'} alt={'Laundry Dryer'} style={{ objectFit: 'cover' }} quality={100} fill priority />
					</Box>
					<Stack width={1} position={{ lg: 'absolute' }} top={'50%'} left={'60%'} spacing={4} sx={{ transform: { lg: 'translate(-90px, -50%)' } }} useFlexGap>
						<Stack direction={{ xs: 'column', lg: 'row' }} alignItems={'center'} spacing={2} useFlexGap>
							<Grid container width={{ xs: 1, lg: '200px' }} spacing={2}>
								{services.slice(0, 3).map((service) => (
									<Grid item key={service.id} xs={4} lg={12}>
										<ShowcaseCard {...service} />
									</Grid>
								))}
							</Grid>
							<Grid container width={{ xs: 1, lg: '200px' }} justifyContent={'center'} spacing={2}>
								{services.slice(3).map((service) => (
									<Grid item key={service.id} xs={4} lg={12}>
										<ShowcaseCard {...service} />
									</Grid>
								))}
							</Grid>
						</Stack>
					</Stack>
					<Box position={'absolute'} top={'50%'} right={0} width={550} height={550} zIndex={-1} sx={{ transform: { lg: 'translate(0, -50%)' } }}>
						<Image src={'/svgs/arch-texture.svg'} alt="Logo Signature" style={{ opacity: 0.5 }} fill priority />
					</Box>
				</Stack>
			</Stack>
		</Box>
	);
};

export default CommercialServiceSection;
