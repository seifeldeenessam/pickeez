import { Box, Container, Grid, Stack } from '@mui/material';
import ShowcaseCard from 'pages/components/showcase-card';
import services from './data.json';

type Props = {};

const ServicesSection = (props: Props) => {
	return (
		<Box component={'section'} width={1} py={6}>
			<Container>
				<Stack spacing={4} useFlexGap>
					<Grid container spacing={2}>
						{services.map((service) => (
							<Grid item key={service.id} xs={12} sm={4}>
								<ShowcaseCard {...service} />
							</Grid>
						))}
					</Grid>
				</Stack>
			</Container>
		</Box>
	);
};

export default ServicesSection;
