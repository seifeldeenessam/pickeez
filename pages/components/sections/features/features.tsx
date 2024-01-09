import Title from '@/components/title';
import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Container, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ShowcaseCard from 'pages/components/showcase-card';
import features from './data.json';

type Props = {};

const FeaturesSection = (props: Props) => {
	const { push } = useRouter();
	const { t, lang } = useTranslation();

	return (
		<Box component={'section'} width={1} py={6}>
			<Container>
				<Stack spacing={4} useFlexGap>
					<Title title="home:features_section_title" subtitle="home:features_section_subtitle" />
					<Grid container spacing={2}>
						{features.map((feature, index) => (
							<Grid
								component={motion.div}
								initial={index >= 3 ? { opacity: 0, y: '100%' } : undefined}
								whileInView={index >= 3 ? { opacity: 1, y: '0%' } : undefined}
								transition={{ duration: 0.5 }}
								viewport={{ once: true }}
								item
								key={feature.id}
								xs={12}
								sm={4}>
								<Link href={`/services#${feature.name}`} style={{ textDecoration: 'unset', color: 'unset' }}>
									<ShowcaseCard {...feature} />
								</Link>
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
