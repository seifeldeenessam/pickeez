import { AspectRatio } from '@/enums/aspectRatio';
import useResponsive from '@/hooks/useResponsive';
import { Box, Divider, Stack, Typography, useTheme } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { CSSProperties } from 'react';
import { A11y, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {};

const TestimonialsSection = (props: Props) => {
	const theme = useTheme();
	const { t } = useTranslation();
	const smUp = useResponsive({ key: 'sm', query: 'up' });

	const swiperStyles: CSSProperties = { '--swiper-theme-color': theme.palette.primary.main, overflowY: 'visible' } as any;

	return (
		<Box component={'section'} width={1} py={5} overflow={'hidden'} bgcolor={'background.paper'}>
			<Stack justifyContent={'center'} alignItems={'center'} spacing={2} useFlexGap>
				<Stack justifyContent={'center'} alignItems={'center'} spacing={2} useFlexGap>
					<Divider flexItem>
						<Typography fontWeight={'bold'} color={'text.secondary'} textAlign={'center'} textTransform={'uppercase'}>
							{t('home:testimonials_section_title')}
						</Typography>
					</Divider>
					<Typography variant="subtitle1" fontWeight={'bold'} textAlign={'center'} maxWidth={'20ch'} lineHeight={1}>
						{t('home:testimonials_section_subtitle')}
					</Typography>
				</Stack>
				<Box width={1}>
					<Swiper
						modules={[Pagination, Autoplay, A11y]}
						spaceBetween={16}
						slidesPerView={1.25}
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
		</Box>
	);
};

export default TestimonialsSection;
