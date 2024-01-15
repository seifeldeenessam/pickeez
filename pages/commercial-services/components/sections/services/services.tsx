import useResponsive from '@/hooks/useResponsive';
import { arFont, enSecondaryFont } from '@/theme';
import { Box, Container, Divider, Grid, List, ListItem, Stack, Typography } from '@mui/material';
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
			<Stack>
				<Typography variant="h4" fontWeight={'bold'} fontFamily={lang === 'en' ? enSecondaryFont.style.fontFamily : arFont.style.fontFamily} textTransform={'uppercase'}>
					{t(`commercial-services:service_${name}_title`)}
				</Typography>
				<Typography fontWeight={'bold'} color={'#000000'} textTransform={'uppercase'}>
					{t(`commercial-services:service_${name}_subtitle_1`)}
				</Typography>
				<Typography color={'#484848'} textTransform={'uppercase'}>
					{t(`commercial-services:service_${name}_subtitle_2`)}
				</Typography>
			</Stack>
			<Typography color={'#484848'} fontWeight={600} maxWidth={'57ch'}>
				{t(`commercial-services:service_${name}_description`)}
			</Typography>
		</Stack>
	);
};

const ServicesSection = (props: Props) => {
	const { t, lang } = useTranslation();
	const mdUp = useResponsive({ key: 'md', query: 'up' });

	return (
		<Box component={'section'} width={1} pt={6} pb={{ xs: '250px', md: '400px' }} bgcolor={'background.paper'}>
			<Container>
				<Grid container spacing={4}>
					<Grid item xs={12}>
						<Stack justifyContent={'center'} alignItems={'center'}>
							<Typography variant={mdUp ? 'h1' : 'h2'} fontWeight={'bold'} fontFamily={lang === 'en' ? enSecondaryFont.style.fontFamily : arFont.style.fontFamily} textAlign={'center'}>
								{t('commercial-services:title')}
							</Typography>
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} bgcolor={'#F5F5F5'} borderRadius={4} px={4} py={2} spacing={4} useFlexGap>
							<Stack width={{ xs: 1, md: 0.6 }} spacing={2} useFlexGap>
								<Typography variant="h4" fontWeight={'bold'} fontFamily={lang === 'en' ? enSecondaryFont.style.fontFamily : arFont.style.fontFamily}>
									{t('commercial-services:intro_title')}
								</Typography>
								<Typography>{t('commercial-services:intro_description_1')}</Typography>
								<Typography>{t('commercial-services:intro_description_2')}</Typography>
								<Stack bgcolor={'#D9D9D9'} p={2} borderRadius={2}>
									<Typography color={'#000000'}>{t('commercial-services:intro_notice')}</Typography>
								</Stack>
							</Stack>
							<Box position={'relative'} width={{ xs: 1, md: 0.4 }} mb={-6} sx={{ aspectRatio: '1/1.25' }}>
								<Image src={'/images/commercial_services/intro.png'} alt="Clothes" fill priority />
							</Box>
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<Stack spacing={4} mt={6} useFlexGap>
							<Stack direction={{ xs: 'column', md: 'row' }} spacing={2} useFlexGap>
								<Stack spacing={2} useFlexGap>
									<Stack>
										<Typography
											variant="h4"
											fontWeight={'bold'}
											fontFamily={lang === 'en' ? enSecondaryFont.style.fontFamily : arFont.style.fontFamily}
											textTransform={'uppercase'}>
											{t('commercial-services:service_gyms_1_title')}
										</Typography>
										<Typography fontWeight={'bold'} color={'#000000'} textTransform={'uppercase'}>
											{t('commercial-services:service_gyms_1_subtitle')}
										</Typography>
									</Stack>
									<Typography color={'#484848'} fontWeight={600}>
										{t('commercial-services:service_gyms_1_description')}
									</Typography>
								</Stack>
								<Box position={'relative'} width={1} minWidth={400} borderRadius={3} overflow={'hidden'} sx={{ aspectRatio: '16/9' }}>
									<Image src={'/images/commercial_services/spa.jpg'} alt="Spa" fill priority />
								</Box>
							</Stack>
							<Stack direction={{ xs: 'column', md: 'row' }} spacing={2} useFlexGap>
								<Box position={'relative'} width={1} minWidth={400} sx={{ aspectRatio: '16/10' }}>
									<Image src={'/images/commercial_services/towel.png'} alt="Towel" fill priority />
								</Box>
								<Stack spacing={2} useFlexGap>
									<Stack>
										<Typography
											variant="h6"
											fontWeight={'bold'}
											fontFamily={lang === 'en' ? enSecondaryFont.style.fontFamily : arFont.style.fontFamily}
											textTransform={'uppercase'}>
											{t('commercial-services:service_gyms_2_title')}
										</Typography>
									</Stack>
									<List sx={{ listStyleType: 'disc' }} dense disablePadding>
										<ListItem sx={{ display: 'list-item', pl: 0, ml: 2 }}>
											<Typography color={'#484848'} fontWeight={600}>
												{t('commercial-services:service_gyms_2_description_1')}
											</Typography>
										</ListItem>
										<ListItem sx={{ display: 'list-item', pl: 0, ml: 2 }}>
											<Typography color={'#484848'} fontWeight={600}>
												{t('commercial-services:service_gyms_2_description_2')}
											</Typography>
										</ListItem>
										<ListItem sx={{ display: 'list-item', pl: 0, ml: 2 }}>
											<Typography color={'#484848'} fontWeight={600}>
												{t('commercial-services:service_gyms_2_description_3')}
											</Typography>
										</ListItem>
										<ListItem sx={{ display: 'list-item', pl: 0, ml: 2 }}>
											<Typography color={'#484848'} fontWeight={600}>
												{t('commercial-services:service_gyms_2_description_4')}
											</Typography>
										</ListItem>
									</List>
								</Stack>
							</Stack>
							<Stack justifyContent={'center'} alignItems={'center'} spacing={2} useFlexGap>
								<Typography variant="h4" fontWeight={'bold'} textAlign={'center'} fontFamily={lang === 'en' ? enSecondaryFont.style.fontFamily : arFont.style.fontFamily}>
									{t('commercial-services:contact_title')}
								</Typography>
								<Stack bgcolor={'#D9D9D9'} px={2} py={1} borderRadius={3}>
									<Typography variant="h6" fontWeight={'bold'} textAlign={'center'}>
										{t('commercial-services:contact_number')}
									</Typography>
								</Stack>
							</Stack>
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<Divider />
					</Grid>
					<Grid item xs={12}>
						<Stack direction={{ xs: 'column', md: 'row' }} minHeight={350} borderRadius={4} overflow={'hidden'}>
							<ServiceCard name="uniforms" minWidth={0.5} borderRadius={0} />
							<Box position={'relative'} width={1} sx={{ aspectRatio: { xs: '16/9', md: '16/4.5' } }}>
								<Image src={'/images/commercial_services/uniforms.jpg'} alt="ironing" style={{ objectFit: 'cover' }} fill priority />
								<Box
									sx={{
										position: 'absolute',
										inset: 0,
										width: 1,
										height: 1,
										background: `linear-gradient(${mdUp ? (lang === 'ar' ? '270deg' : '90deg') : '0deg'}, #F5F5F5 ${lang === 'ar' ? '100%' : '5%'}, rgba(245, 245, 245, 0.00) 100%)`
									}}
								/>
							</Box>
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<Stack direction={{ xs: 'column', md: 'row' }} minHeight={350} borderRadius={4} overflow={'hidden'}>
							<Box position={'relative'} width={1} sx={{ aspectRatio: { xs: '16/9', md: '16/4.5' } }}>
								<Image src={'/images/commercial_services/restaurants.jpg'} alt="ironing" style={{ objectFit: 'cover' }} fill priority />
								<Box
									sx={{
										position: 'absolute',
										inset: 0,
										width: 1,
										height: 1,
										background: `linear-gradient(${mdUp ? (lang === 'ar' ? '90deg' : '270deg') : '0deg'}, #F5F5F5 ${lang === 'ar' ? '100%' : '5%'}, rgba(245, 245, 245, 0.00) 100%)`
									}}
								/>
							</Box>
							<ServiceCard name="restaurants" minWidth={0.5} borderRadius={0} />
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ServicesSection;
