import Title from '@/components/title';
import useResponsive from '@/hooks/useResponsive';
import { Box, Container, Stack } from '@mui/material';
import Image from 'next/image';

type Props = {};

const ServicesSection = (props: Props) => {
	const smUp = useResponsive({ key: 'sm', query: 'up' });

	return (
		<Box component={'section'} width={1} py={6} overflow={'hidden'} bgcolor={'background.paper'}>
			<Box position={'relative'} width={1} height={128}>
				<Image src={'/images/laundry_dryer.png'} alt={'Laundry Dryer'} style={{ objectFit: 'cover', opacity: '0.3' }} fill />
			</Box>
			<Container>
				<Stack justifyContent={'center'} alignItems={'center'} spacing={4} mt={4} useFlexGap>
					<Title title="home:services_section_title" subtitle="home:services_section_subtitle" />
					<Box position={'relative'} width={{ xs: 1, md: 700 }} height={{ xs: 300, md: 500 }}>
						<Image src={`/images/services_hero_${smUp ? 'desktop' : 'mobile'}.png`} alt={'Laundry Dryer'} style={{ objectFit: 'contain' }} quality={100} fill priority />
					</Box>
				</Stack>
			</Container>
		</Box>
	);
};

export default ServicesSection;
