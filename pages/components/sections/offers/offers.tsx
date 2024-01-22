import Title from '@/components/title';
import useResponsive from '@/hooks/useResponsive';
import { arFont, enSecondaryFont, offerNumbersFont } from '@/theme';
import { Box, Chip, Container, Divider, Stack, Typography, useTheme } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { CSSProperties } from 'react';
import { A11y, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import offers from './data.json';

type Props = {};

const OffersSection = (props: Props) => {
	const theme = useTheme();
	const { t, lang } = useTranslation();
	const smUp = useResponsive({ key: 'sm', query: 'up' });

	const swiperStyles: CSSProperties = { '--swiper-theme-color': theme.palette.primary.main, overflowY: 'visible' } as any;

	return (
		<Box component={'section'} width={1} py={6} overflow={'hidden'} bgcolor={'background.paper'} id="offers">
			<Container>
				<Stack spacing={4} useFlexGap>
					<Title title="home:offers_section_title" subtitle="home:offers_section_subtitle" />
					<Box>
						<Swiper
							modules={[Pagination, Autoplay, A11y]}
							spaceBetween={16}
							slidesPerView={1.1}
							centeredSlides={!smUp}
							breakpoints={{ 500: { slidesPerView: 2 }, 769: { slidesPerView: 4 } }}
							pagination={{ clickable: true }}
							style={swiperStyles}
							loop>
							{offers.map((offer) => {
								const renderOfferDetails = () => {
									if (offer.info) {
										return (
											<>
												<Typography variant="h1" fontFamily={offerNumbersFont.style.fontFamily} lineHeight={0.75}>
													{offer.info.price}
												</Typography>
												<Chip
													label={`${offer.info.quaintly} ${t(`common:${offer.info.key}`)}`}
													sx={{
														bgcolor: '#9A81E0',
														color: 'common.white',
														fontSize: '2rem',
														fontWeight: '600',
														height: '40px',
														px: 2,
														mb: 2,
														borderRadius: '100px',
														fontFamily: lang === 'en' ? enSecondaryFont.style.fontFamily : arFont.style.fontFamily
													}}
												/>
												<Typography
													variant="subtitle1"
													fontFamily={lang === 'en' ? enSecondaryFont.style.fontFamily : arFont.style.fontFamily}
													fontWeight={'bold'}
													color={'#9A81E0'}
													textTransform={'uppercase'}>
													{t('common:instead_of', { price: offer.info.original_price })}
												</Typography>
											</>
										);
									} else {
										return (
											<>
												{offer.prices.map((price) => (
													<Stack direction={'row'} width={1} justifyContent={'space-between'} alignItems={'center'} spacing={1} useFlexGap key={price.id}>
														<Typography variant="h1" fontFamily={offerNumbersFont.style.fontFamily} lineHeight={0.7} width={'3ch'}>
															{price.price}
														</Typography>
														<Divider variant="middle" orientation="vertical" sx={{ borderColor: '#9A81E0' }} flexItem />
														<Typography
															variant={price.key === 'seats' ? 'h5' : 'subtitle2'}
															fontFamily={lang === 'en' ? enSecondaryFont.style.fontFamily : arFont.style.fontFamily}
															fontWeight={'bold'}
															color={'#9A81E0'}>
															{price.quantity} {t(`common:${price.key}`)}
														</Typography>
													</Stack>
												))}
											</>
										);
									}
								};

								return (
									<SwiperSlide key={offer.id}>
										<Stack justifyContent={'space-between'} alignItems={'center'} bgcolor={offer.background_color} borderRadius={4} p={1} spacing={2} useFlexGap>
											<Typography
												variant="h3"
												fontFamily={lang === 'en' ? enSecondaryFont.style.fontFamily : arFont.style.fontFamily}
												fontWeight={'bold'}
												color={'background.paper'}>
												{t(offer.title)}
											</Typography>
											<Stack width={1} justifyContent={'space-between'} alignItems={'center'} bgcolor={'background.paper'} borderRadius={4}>
												<Image src={offer.image} alt={offer.title} width={250} height={250} style={{ objectFit: 'contain' }} />
												<Stack width={1} justifyContent={'center'} alignItems={'center'} boxSizing={'border-box'} bgcolor={'#D9D4E9'} borderRadius={4} p={2} height={250}>
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
