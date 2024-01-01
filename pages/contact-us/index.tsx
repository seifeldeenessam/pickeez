import Announcements from '@/components/announcements';
import Footer from '@/components/footer/footer';
import Header from '@/components/header';
import { Box } from '@mui/material';
import { NextPage } from 'next';
import ContactSection from './components/sections/contact/contact';
import HeroSection from './components/sections/hero';
import MapSection from './components/sections/map/map';

const ContactUs: NextPage = () => {
	return (
		<>
			<Announcements />
			<Header />
			<Box component={'main'} display={'flex'} flexDirection={'column'} flex={1}>
				<HeroSection />
				<MapSection />
				<ContactSection />
			</Box>
			<Footer />
		</>
	);
};

export default ContactUs;
