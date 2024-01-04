import { AspectRatio } from '@/enums/aspectRatio';
import { Box, Container, Grid } from '@mui/material';
import Image from 'next/image';
import OurGoals from './partials/our-goals';
import OurMission from './partials/our-mission';
import OurVision from './partials/our-vision';

type Props = {};

const LaundrySection = (props: Props) => {
	return (
		<Box component={'section'} width={1} py={6} bgcolor={'background.paper'}>
			<Box position={'relative'} width={0.9} mx={'auto'} sx={{ aspectRatio: AspectRatio.WIDE }}>
				<Image src={'/svgs/laundry_title.svg'} alt="Laundry Title" fill priority />
			</Box>
			<Container>
				<Grid container mt={6} mb={'250px'} spacing={6} justifyContent={'center'}>
					<Grid item xs={12} md={6}>
						<OurVision />
					</Grid>
					<Grid item xs={12} md={6}>
						<OurMission />
					</Grid>
					<Grid item xs={12} md={8}>
						<OurGoals />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default LaundrySection;
