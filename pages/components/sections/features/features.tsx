import Title from '@/components/title';
import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Container, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import ShowcaseCard from 'pages/components/showcase-card';
import features from './data.json';

type Props = {};

const FeaturesSection = (props: Props) => {
	const { push } = useRouter();
	const { t, lang } = useTranslation();

	return (
		<Box component={motion.section} initial={{ opacity: 0, scaleY: 0 }} whileInView={{ opacity: 1, scaleY: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} width={1} py={6} mt={15}>
			<Container>
				<Stack spacing={4} useFlexGap>
					<Title title="home:features_section_title" subtitle="home:features_section_subtitle" />
					<Grid container spacing={2}>
						{features.map((feature) => (
							<Grid item key={feature.id} xs={12} sm={4}>
								<ShowcaseCard {...feature} />
							</Grid>
						))}
					</Grid>
					<Button
						component={motion.button}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						variant="contained"
						color="secondary"
						size="large"
						onClick={() => push('/services')}
						endIcon={<ArrowForward sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />}
						sx={{ alignSelf: 'center' }}>
						{t('common:view_all_services')}
					</Button>
				</Stack>
			</Container>
		</Box>
	);
};

export default FeaturesSection;
