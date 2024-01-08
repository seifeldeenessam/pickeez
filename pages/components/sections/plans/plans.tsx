import Title from '@/components/title';
import { AspectRatio } from '@/enums/aspectRatio';
import useResponsive from '@/hooks/useResponsive';
import { ArrowForward, Check } from '@mui/icons-material';
import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import plans from './data.json';

type Props = {};

const PlansSection = (props: Props) => {
	const { t, lang } = useTranslation();
	const smUp = useResponsive({ key: 'sm', query: 'up' });

	return (
		<Box component={'section'} position={'relative'} width={1} minHeight={'100dvh'} py={6} overflow={'hidden'}>
			<Box
				component={motion.div}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				position={'absolute'}
				top={0}
				left={'50%'}
				width={{ xs: 1280, sm: 1 }}
				height={{ xs: 850, sm: 600, md: 750, lg: 900 }}
				zIndex={-1}
				sx={{ transform: 'translate(-50%, 0)' }}>
				<Image src={'/svgs/curve-texture.svg'} alt="Curve Texture" fill />
			</Box>
			<Container>
				<Stack spacing={4} useFlexGap>
					<Title title="home:plans_section_title" subtitle="home:plans_section_subtitle" white />
					<Grid container spacing={2}>
						{plans.map((plan, index, array) => (
							<Grid
								component={motion.div}
								initial={{ opacity: 0, y: '100%' }}
								whileInView={{ opacity: 1, y: '0%' }}
								transition={{ duration: 0.5 }}
								viewport={{ once: true }}
								item
								key={plan.id}
								xs={12}
								sm={4}>
								<Stack
									width={1}
									height={1}
									justifyContent={'space-between'}
									alignItems={'center'}
									bgcolor={'background.paper'}
									mx={'auto'}
									boxShadow={'0px 0px 7px 0px rgba(0, 0, 0, 0.15)'}
									p={4}
									spacing={4}
									sx={{
										aspectRatio: smUp ? 'unset' : AspectRatio.LONG,
										borderTopLeftRadius: index === 0 ? '32px' : '0',
										borderBottomRightRadius: index === array.length - 1 ? '32px' : '0'
									}}
									useFlexGap>
									<Stack justifyContent={'center'} alignItems={'center'} spacing={2} useFlexGap>
										<Image src={plan.icon} alt={plan.title} width={64} height={64} quality={100} style={{ objectFit: 'contain' }} />
										<Stack alignItems={'center'} color={'#444444'}>
											<Typography variant="h6" fontWeight={'bold'} color={'inherit'}>
												{t(plan.title)}
											</Typography>
											<Typography fontWeight={'bold'} color={'inherit'}>
												{t('common:per_month')}
											</Typography>
										</Stack>
										<Typography variant="h4" fontWeight={'bold'} textAlign={'center'}>
											{`${plan.price} AED`}
										</Typography>
										<Divider sx={{ width: '25%', borderBottomWidth: '2px', borderColor: 'secondary.main' }} />
									</Stack>
									<Stack width={1} divider={<Divider flexItem />} spacing={1} flex={1} useFlexGap>
										{plan.features.map((feature) => (
											<Stack direction={'row'} justifyContent={'flex-start'} alignItems={'center'} spacing={2} key={feature.id} useFlexGap>
												<Check sx={{ color: '#39E14A' }} />
												<Typography>{t(feature.title)}</Typography>
											</Stack>
										))}
									</Stack>
									<Button
										component={motion.button}
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										variant="contained"
										color="secondary"
										size="large"
										endIcon={<ArrowForward sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />}
										sx={{ alignSelf: 'center' }}>
										{t('common:buy_now')}
									</Button>
								</Stack>
							</Grid>
						))}
					</Grid>
				</Stack>
			</Container>
		</Box>
	);
};

export default PlansSection;
