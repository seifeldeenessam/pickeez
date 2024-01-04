import { AspectRatio } from '@/enums/aspectRatio';
import { Box, Container, Stack } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';

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
				</Stack>
			</Container>
		</Box>
	);
};

export default ServicesSection;
