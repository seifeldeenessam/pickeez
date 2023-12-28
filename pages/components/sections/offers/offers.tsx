import useResponsive from '@/hooks/useResponsive';
import { enSecondaryFont } from '@/theme';
import { Box, Chip, Container, Stack, Typography, useTheme } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Title from 'pages/components/title';
import { CSSProperties } from 'react';
import { A11y, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import offers from './data.json';

type Props = {};

const OffersSection = (props: Props) => {
	const theme = useTheme();
	const { t } = useTranslation();
	const smUp = useResponsive({ key: 'sm', query: 'up' });

	const swiperStyles: CSSProperties = { '--swiper-theme-color': theme.palette.primary.main, overflowY: 'visible' } as any;

	return (
		<Box component={'section'} width={1} py={5} overflow={'hidden'} bgcolor={'background.paper'}>
			<Container>
				<Stack spacing={4} useFlexGap>
					<Title title="home:offers_section_title" subtitle="home:offers_section_subtitle" />
					<Box>
						<Swiper
							modules={[Pagination, Autoplay, A11y]}
							spaceBetween={16}
							slidesPerView={1.1}
							centeredSlides={!smUp}
							breakpoints={{ 426: { slidesPerView: 2 }, 769: { slidesPerView: 4 } }}
							pagination={{ clickable: true }}
							style={swiperStyles}
							loop>
							{offers.map((offer) => {
								const renderOfferDetails = () => {
									if (offer.info) {
										return (
											<>
												<Typography variant="h1" fontFamily={enSecondaryFont.style.fontFamily} fontWeight={'bold'} lineHeight={0.75}>
													{offer.info.price}
												</Typography>
												<Typography variant="h3" fontFamily={enSecondaryFont.style.fontFamily} fontWeight={'bold'} color={'#444444'}>
													{offer.info.quaintly}
												</Typography>
												<Typography variant="subtitle1" fontFamily={enSecondaryFont.style.fontFamily} fontWeight={'bold'} color={'#9A81E0'} textTransform={'uppercase'}>
													{t('common:instead_of', { price: offer.info.original_price })}
												</Typography>
											</>
										);
									} else {
										return (
											<>
												{offer.prices.map((price) => (
													<Stack width={1} direction={'row'} justifyContent={'space-between'} alignItems={'center'} key={price.id}>
														<Typography variant="h3" fontFamily={enSecondaryFont.style.fontFamily} fontWeight={'bold'}>
															{price.price}
														</Typography>
														<Chip label={price.quantity} sx={{ borderRadius: 1, bgcolor: 'background.paper', color: 'text.primary' }} />
													</Stack>
												))}
											</>
										);
									}
								};

								return (
									<SwiperSlide key={offer.id}>
										<Stack justifyContent={'space-between'} alignItems={'center'} bgcolor={offer.background_color} borderRadius={4} p={2} spacing={2} useFlexGap>
											<Typography variant="h3" fontFamily={enSecondaryFont.style.fontFamily} fontWeight={'bold'} color={'background.paper'}>
												{t(offer.title)}
											</Typography>
											<Stack width={1} alignItems={'center'} bgcolor={'background.paper'} borderRadius={4}>
												<Image src={offer.image} alt={offer.title} width={200} height={200} style={{ objectFit: 'contain' }} />
												<Stack width={1} alignItems={'center'} boxSizing={'border-box'} bgcolor={'#D9D4E9'} borderRadius={4} p={2}>
													{renderOfferDetails()}
												</Stack>
											</Stack>
										</Stack>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</Box>
				</Stack>
			</Container>
		</Box>
	);
};

export default OffersSection;
