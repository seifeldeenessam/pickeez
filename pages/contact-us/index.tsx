import Announcements from '@/components/announcements';
import Footer from '@/components/footer/footer';
import Header from '@/components/header';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import ContactSection from './components/sections/contact/contact';
import HeroSection from './components/sections/hero';
import MapSection from './components/sections/map/map';

const ContactUs: NextPage = () => {
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
				<MapSection />
				<ContactSection />
			</Box>
			<Footer />
		</>
	);
};

export default ContactUs;
