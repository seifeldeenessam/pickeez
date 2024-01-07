import Title from '@/components/title';
import { AspectRatio } from '@/enums/aspectRatio';
import useResponsive from '@/hooks/useResponsive';
import { Box, Container, Divider, Rating, Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { CSSProperties } from 'react';
import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {};

const TestimonialsSection = (props: Props) => {
	const theme = useTheme();
	const smUp = useResponsive({ key: 'sm', query: 'up' });

	const swiperStyles: CSSProperties = { '--swiper-theme-color': theme.palette.primary.main, overflowY: 'visible' } as any;

	return (
		<Box component={'section'} width={1} py={6} overflow={'hidden'}>
			<Stack spacing={4} useFlexGap>
				<Container>
					<Title title="home:testimonials_section_title" subtitle="home:testimonials_section_subtitle" />
				</Container>
				<Box width={1} p={2}>
					<Swiper modules={[Autoplay, A11y]} spaceBetween={16} slidesPerView={1.1} breakpoints={{ 426: { slidesPerView: 2.1 }, 769: { slidesPerView: 'auto' } }} style={swiperStyles}>
						{Array(6)
							.fill('')
							.map((testimonial, index) => (
								<SwiperSlide key={index} style={{ maxWidth: 300 }}>
									<Stack justifyContent={'center'} alignItems={'center'} bgcolor={'background.paper'} boxShadow={'0px 0px 7px 0px rgba(0, 0, 0, 0.15)'} p={2} spacing={2} useFlexGap>
										<Box position={'relative'} width={1} sx={{ aspectRatio: AspectRatio.SQUARE }}>
											<Image src={`/images/testimonials/${index + 1}.png`} alt={'Client Review'} style={{ objectPosition: 'top', objectFit: 'contain' }} fill quality={100} />
										</Box>
										<Divider sx={{ width: '15%', borderBottomWidth: '2px', borderColor: 'secondary.main' }} />
										<Stack pt={0}>
											<Typography textAlign={'center'}>Customer</Typography>
											<Rating size="small" value={5} readOnly />
										</Stack>
									</Stack>
								</SwiperSlide>
							))}
					</Swiper>
				</Box>
			</Stack>
		</Box>
	);
};

export default TestimonialsSection;
