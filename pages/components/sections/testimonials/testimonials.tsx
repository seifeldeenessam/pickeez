import Title from '@/components/title';
import { arFont } from '@/theme';
import { Avatar, Box, Card, CardContent, Container, Divider, Rating, Stack, Typography, useTheme } from '@mui/material';
import { CSSProperties } from 'react';
import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import testimonials from './data.json';

type Props = {};

const TestimonialsSection = (props: Props) => {
	const theme = useTheme();

	const swiperStyles: CSSProperties = { '--swiper-theme-color': theme.palette.primary.main, overflowY: 'visible' } as any;

	return (
		<Box component={'section'} width={1} py={6} overflow={'hidden'}>
			<Stack spacing={4} useFlexGap>
				<Container>
					<Title title="home:testimonials_section_title" subtitle="home:testimonials_section_subtitle" />
				</Container>
				<Box width={1} p={2}>
					<Swiper modules={[Autoplay, A11y]} spaceBetween={16} slidesPerView={1.1} breakpoints={{ 769: { slidesPerView: 'auto' } }} style={swiperStyles}>
						{testimonials.map((testimonial, index) => (
							<SwiperSlide key={index} style={{ maxWidth: 300, aspectRatio: '3/4' }}>
								<Card sx={{ height: 1 }}>
									<CardContent sx={{ height: 1 }}>
										<Stack height={1} justifyContent={'space-between'} alignItems={'center'} spacing={4} useFlexGap>
											<Stack p={2}>
												{testimonial.messages.map((message, index) => (
													<Typography key={index} textAlign={'center'} color={'text.secondary'} fontFamily={arFont.style.fontFamily}>
														{message}
													</Typography>
												))}
											</Stack>
											<Stack spacing={1} alignItems={'center'} useFlexGap>
												<Divider sx={{ width: '50%', borderBottomWidth: '1px', borderColor: 'secondary.main', mb: 2 }} />
												<Avatar src={`/images/avatars/${index + 1}.jpg`} alt={testimonial.name} />
												<Stack alignItems={'center'}>
													<Typography textAlign={'center'} fontWeight={'bold'}>
														{testimonial.name}
													</Typography>
													<Typography variant="body2" textAlign={'center'} gutterBottom>
														Customer
													</Typography>
													<Rating size="small" value={5} readOnly />
												</Stack>
											</Stack>
										</Stack>
									</CardContent>
								</Card>
							</SwiperSlide>
						))}
					</Swiper>
				</Box>
			</Stack>
		</Box>
	);
};

export default TestimonialsSection;
