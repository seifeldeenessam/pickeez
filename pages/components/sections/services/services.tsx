import { AspectRatio } from '@/enums/aspectRatio';
import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';
import services from './data.json';

type Props = {};

const ServicesSection = (props: Props) => {
	const { push } = useRouter();
	const { t, lang } = useTranslation();

	return (
		<Box component={'section'} width={1} py={6} overflow={'hidden'} bgcolor={'background.paper'}>
			<Box position={'relative'} width={1} height={128}>
				<Image src={'/images/laundry_dryer.png'} alt={'Laundry Dryer'} style={{ objectFit: 'cover', opacity: '0.3' }} fill />
			</Box>

			<Container>
				<Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={4} mt={4} useFlexGap>
					<Box position={'relative'} width={{ xs: 0.75, md: 500 }} sx={{ aspectRatio: AspectRatio.SQUARE }}>
						<Image src={'/images/services_hero.png'} alt={'Laundry Dryer'} style={{ objectFit: 'contain' }} quality={100} fill priority />
					</Box>
					<Stack spacing={2} display={{ xs: 'none', md: 'flex' }} useFlexGap>
						<Stack justifyContent={'center'} alignItems={'flex-start'} spacing={1} useFlexGap>
							<Divider flexItem>
								<Typography fontWeight={'bold'} color={'text.secondary'} textAlign={'center'} textTransform={'uppercase'}>
									{t('home:services_section_title')}
								</Typography>
							</Divider>
							<Typography variant="subtitle1" fontWeight={'bold'} textAlign={'center'}>
								{t('home:services_section_subtitle')}
							</Typography>
						</Stack>
						<Typography variant={'body2'} color={'text.secondary'} maxWidth={'60ch'}>
							{t('home:services_section_description')}
						</Typography>
						<Stack direction={'row'} justifyContent={'flex-start'} alignItems={'flex-start'} flexWrap={'wrap'} spacing={1} useFlexGap>
							{services.map((service) => (
								<Stack key={service.id} alignItems={'center'} spacing={1} useFlexGap>
									<Image src={service.icon} alt={service.title} width={64} height={64} style={{ objectFit: 'contain' }} />
									<Divider sx={{ width: '10%', borderBottomWidth: '2px', borderColor: 'secondary.main' }} />
									<Typography fontWeight={'bold'} textAlign={'center'} maxWidth={'10ch'}>
										{t(service.title)}
									</Typography>
								</Stack>
							))}
						</Stack>
						<Button
							variant="contained"
							color="secondary"
							size="large"
							onClick={() => push('/services')}
							endIcon={<ArrowForward sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />}
							sx={{ alignSelf: 'flex-start' }}>
							{t('common:view_all_services')}
						</Button>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export default ServicesSection;
