import Title from '@/components/title';
import useResponsive from '@/hooks/useResponsive';
import { Box, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

type Props = {};

const ServicesSection = (props: Props) => {
	const { t } = useTranslation();
	const smUp = useResponsive({ key: 'sm', query: 'up' });

	return (
		<Box
			component={motion.section}
			initial={{ opacity: 0, scaleX: 0 }}
			whileInView={{ opacity: 1, scaleX: 1 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			width={1}
			py={6}
			overflow={'hidden'}
			bgcolor={'background.paper'}>
			<Box position={'relative'} width={1} height={128}>
				<Image src={'/images/laundry_dryer.png'} alt={'Laundry Dryer'} style={{ objectFit: 'cover', opacity: '0.3' }} fill />
			</Box>
			<Container>
				<Stack justifyContent={'center'} alignItems={'center'} spacing={4} mt={4} useFlexGap>
					<Title title="home:services_section_title" subtitle="home:services_section_subtitle" />
					<Box position={'relative'} width={{ xs: 1, md: 700 }} height={{ xs: 300, md: 500 }}>
						<Image src={`/images/services_hero.png`} alt={'Laundry Dryer'} style={{ objectFit: 'contain' }} quality={100} fill priority />
						<Stack
							position={'absolute'}
							bottom={'20%'}
							left={{ xs: '0%', sm: '75%' }}
							direction={'row'}
							alignItems={'center'}
							bgcolor={'primary.main'}
							p={{ xs: 1, sm: 4 }}
							borderRadius={4}
							spacing={2}
							sx={{ transform: { xs: 'translate(0%, 10%)', sm: 'translate(0%, -20%)' } }}
							useFlexGap>
							<Image src={'/svgs/services_badge.svg'} alt={'Laundry Dryer'} width={48} height={48} quality={100} />
							<Stack color={'common.white'}>
								<Typography variant={smUp ? 'h5' : 'body1'} fontWeight={'bold'}>
									12,753 +
								</Typography>
								<Typography variant={smUp ? 'body1' : 'body2'} maxWidth={{ xs: '10ch', sm: '20ch' }} whiteSpace={{ sm: 'nowrap' }}>
									{t('home:service_section_customer_trusted')}
								</Typography>
							</Stack>
						</Stack>
					</Box>
				</Stack>
			</Container>
		</Box>
	);
};

export default ServicesSection;
