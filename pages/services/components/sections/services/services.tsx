import useResponsive from '@/hooks/useResponsive';
import { arFont, enSecondaryFont } from '@/theme';
import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

type Props = {};

type ServiceCardProps = {
	name: string;
	minWidth?: number | string;
	borderRadius?: number;
};

const ServiceCard = ({ name, minWidth, borderRadius = 4 }: ServiceCardProps) => {
	const { t, lang } = useTranslation();

	return (
		<Stack minWidth={minWidth} bgcolor={'#F5F5F5'} borderRadius={borderRadius} px={4} py={2} spacing={2} useFlexGap>
			<Stack direction={'row'} alignItems={'center'} spacing={2} useFlexGap>
				<Image src={`/svgs/services/${name}.svg`} alt={name} width={64} height={64} />
				<Typography variant="h4" fontWeight={'bold'} fontFamily={lang === 'en' ? enSecondaryFont.style.fontFamily : arFont.style.fontFamily}>
					{t(`services:service_${name}_title`)}
				</Typography>
			</Stack>
			<Typography color={'#484848'} fontWeight={600} textAlign={'justify'} maxWidth={'57ch'}>
				{t(`services:service_${name}_description`)}
			</Typography>
		</Stack>
	);
};

const ServicesSection = (props: Props) => {
	const { t, lang } = useTranslation();
	const mdUp = useResponsive({ key: 'md', query: 'up' });

	return (
		<Box component={'section'} width={1} pt={6} pb={{ xs: '200px', md: '400px' }} bgcolor={'background.paper'}>
			<Container>
				<Grid container spacing={4}>
					<Grid item xs={12} md={6}>
						<Stack>
							<Typography
								variant="h1"
								fontWeight={'bold'}
								fontFamily={lang === 'en' ? enSecondaryFont.style.fontFamily : arFont.style.fontFamily}
								textAlign={{ xs: 'center', md: 'start' }}
								maxWidth={'15ch'}>
								{t('services:title')}
							</Typography>
							<Box position={'relative'} width={0.7} sx={{ aspectRatio: '2/3', mx: 'auto' }}>
								<Image src={'/images/figure_5.jpg'} alt="Figure 5" fill priority />
							</Box>
							<Divider flexItem />
						</Stack>
					</Grid>
					<Grid item xs={12} md={6}>
						<Stack spacing={2} useFlexGap>
							<ServiceCard name="dry_cleaning" />
							<Divider flexItem />
							<Stack bgcolor={'#F5F5F5'} borderRadius={4} px={4} py={2}>
								<Box position={'relative'} width={1} sx={{ aspectRatio: '1/1' }}>
									<Image src={'/images/wardrobe.png'} alt="Wardrobe" fill priority />
								</Box>
							</Stack>
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} spacing={4} useFlexGap>
							<ServiceCard name="washing" />
							<Box position={'relative'} width={1} maxWidth={500} sx={{ aspectRatio: '16/10' }}>
								<Image src={'/images/basket_2.png'} alt="Wardrobe" fill priority />
								<Box
									position={'absolute'}
									bottom={0}
									left={'50%'}
									width={0.8}
									height={10}
									sx={{ transform: 'translateX(-50%)', background: 'rgba(13, 10, 25, 0.43)', mixBlendMode: 'multiply', filter: 'blur(9.149999618530273px)', borderRadius: '460.9px' }}
								/>
							</Box>
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<Stack spacing={4} useFlexGap>
							<Stack direction={{ xs: 'column', md: 'row' }} borderRadius={4} overflow={'hidden'}>
								<Box position={'relative'} width={1} sx={{ aspectRatio: { xs: '16/9', md: '16/4.5' } }}>
									<Image src={'/images/services/ironing.jpg'} alt="ironing" style={{ objectFit: 'cover' }} fill priority />
									<Box
										sx={{
											position: 'absolute',
											inset: 0,
											width: 1,
											height: 1,
											background: `linear-gradient(${mdUp ? '270deg' : '0deg'}, #F5F5F5 5%, rgba(245, 245, 245, 0.00) 100%)`
										}}
									/>
								</Box>
								<ServiceCard name="ironing" minWidth={0.5} borderRadius={0} />
							</Stack>
							<Divider flexItem />
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} spacing={4} useFlexGap>
							<ServiceCard name="shoes_cleaning" />
							<Box position={'relative'} width={1} maxWidth={500} sx={{ aspectRatio: '16/10' }}>
								<Image src={'/images/shoes.png'} alt="Wardrobe" fill priority />
							</Box>
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<Stack spacing={4} useFlexGap>
							<Stack direction={{ xs: 'column', md: 'row' }} borderRadius={4} overflow={'hidden'}>
								<Box position={'relative'} width={1} sx={{ aspectRatio: { xs: '16/9', md: '16/4.5' } }}>
									<Image src={'/images/services/carpet_cleaning.jpg'} alt="carpet_cleaning" style={{ objectFit: 'cover' }} fill priority />
									<Box
										sx={{
											position: 'absolute',
											inset: 0,
											width: 1,
											height: 1,
											background: `linear-gradient(${mdUp ? '270deg' : '0deg'}, #F5F5F5 5%, rgba(245, 245, 245, 0.00) 100%)`
										}}
									/>
								</Box>
								<ServiceCard name="carpet_cleaning" minWidth={0.5} borderRadius={0} />
							</Stack>
							<Divider flexItem />
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} spacing={4} useFlexGap>
							<ServiceCard name="furniture_cleaning" />
							<Box position={'relative'} width={1} maxWidth={500} sx={{ aspectRatio: '16/9' }}>
								<Image src={'/images/furniture.png'} alt="Furniture" fill priority />
							</Box>
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<Stack spacing={4} useFlexGap>
							<Stack direction={{ xs: 'column', md: 'row' }} borderRadius={4} overflow={'hidden'}>
								<Box position={'relative'} width={1} sx={{ aspectRatio: { xs: '16/9', md: '16/4.5' } }}>
									<Image src={'/images/services/curtains_cleaning.jpg'} alt="curtains_cleaning" style={{ objectFit: 'cover' }} fill priority />
									<Box
										sx={{
											position: 'absolute',
											inset: 0,
											width: 1,
											height: 1,
											background: `linear-gradient(${mdUp ? '270deg' : '0deg'}, #F5F5F5 5%, rgba(245, 245, 245, 0.00) 100%)`
										}}
									/>
								</Box>
								<ServiceCard name="curtains_cleaning" minWidth={0.5} borderRadius={0} />
							</Stack>
							<Divider flexItem />
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} spacing={4} useFlexGap>
							<ServiceCard name="laundry_bags" />
							<Box position={'relative'} width={1} maxWidth={500} sx={{ aspectRatio: { xs: '2/1.5', md: '2/1' } }}>
								<Image src={'/images/bags.png'} alt="Bags" fill priority />
							</Box>
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ServicesSection;
