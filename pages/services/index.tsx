import Announcements from '@/components/announcements';
import Footer from '@/components/footer/footer';
import Header from '@/components/header';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import HeroSection from './components/sections/hero';
import ServicesSection from './components/sections/services';

const Services: NextPage = () => {
	return (
		<>
			<Announcements />
			<Header />
			<Box
				component={motion.main}
				initial={{ opacity: 0, x: -200, y: 0 }}
				animate={{ opacity: 1, x: 0, y: 0 }}
				transition={{ type: 'linear' }}
				display={'flex'}
				flexDirection={'column'}
				flex={1}>
				<HeroSection />
				<ServicesSection />
			</Box>
			<Footer />
		</>
	);
};

export default Services;
