import { Box, Container, Stack } from '@mui/material';
import Image from 'next/image';
import OurGoals from './partials/our-goals';
import OurMission from './partials/our-mission';
import OurVision from './partials/our-vision';

type Props = {};

const LaundrySection = (props: Props) => {
	return (
		<Box component={'section'} width={1} py={6} bgcolor={'background.paper'}>
			<Container>
				<Stack spacing={4} useFlexGap>
					<Box position={'relative'} width={1} height={200}>
						<Image src={'/svgs/laundry_title.svg'} alt="Laundry Title" fill priority />
					</Box>
					<Stack mt={6} spacing={6} useFlexGap>
						<OurVision />
						<OurMission />
						<OurGoals />
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export default LaundrySection;
