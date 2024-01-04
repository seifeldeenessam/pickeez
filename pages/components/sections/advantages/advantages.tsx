import Title from '@/components/title';
import { Box, Container, Grid, Stack } from '@mui/material';
import ShowcaseCard from 'pages/components/showcase-card';
import advantages from './data.json';

type Props = {};

const AdvantagesSection = (props: Props) => {
	return (
		<Box component={'section'} width={1} py={6} overflow={'hidden'} bgcolor={'background.paper'}>
			<Container>
				<Stack spacing={4} useFlexGap>
					<Title title="home:advantages_section_title" subtitle="home:advantages_section_subtitle" />
					<Grid container spacing={2} justifyContent={'center'}>
						{advantages.map((advantage) => (
							<Grid item xs={6} sm={3} key={advantage.id}>
								<ShowcaseCard {...advantage} />
							</Grid>
						))}
					</Grid>
				</Stack>
			</Container>
		</Box>
	);
};

export default AdvantagesSection;
