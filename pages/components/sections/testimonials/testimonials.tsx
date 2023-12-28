import { AspectRatio } from '@/enums/aspectRatio';
import useResponsive from '@/hooks/useResponsive';
import { Box, Container, Stack, useTheme } from '@mui/material';
import Image from 'next/image';
import Title from 'pages/components/title';
import { CSSProperties } from 'react';
import { A11y, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {};

const TestimonialsSection = (props: Props) => {
	const theme = useTheme();
	const smUp = useResponsive({ key: 'sm', query: 'up' });

	const swiperStyles: CSSProperties = { '--swiper-theme-color': theme.palette.primary.main, overflowY: 'visible' } as any;

	return (
		<Box component={'section'} width={1} py={5} overflow={'hidden'}>
			<Container>
				<Stack spacing={4} useFlexGap>
					<Title title="home:testimonials_section_title" subtitle="home:testimonials_section_subtitle" />
					<Box width={1}>
						<Swiper
							modules={[Pagination, Autoplay, A11y]}
							spaceBetween={16}
							slidesPerView={1.1}
							centeredSlides={!smUp}
							breakpoints={{ 426: { slidesPerView: 2 }, 769: { slidesPerView: 4 } }}
							pagination={{ clickable: true }}
							style={swiperStyles}
							loop>
							{Array(6)
								.fill('')
								.map((testimonial, index) => (
									<SwiperSlide style={{ aspectRatio: AspectRatio.SQUARE }} key={index}>
										<Image
											src={`/images/testimonials/${index + 1}.jpg`}
											alt={'Client Review'}
											style={{ objectFit: 'contain', boxShadow: '0px 0px 7px 0px rgba(0, 0, 0, 0.15)', borderRadius: '16px' }}
											fill
											quality={100}
										/>
									</SwiperSlide>
								))}
						</Swiper>
					</Box>
				</Stack>
			</Container>
		</Box>
	);
};

export default TestimonialsSection;
