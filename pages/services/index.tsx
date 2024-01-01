import Announcements from '@/components/announcements';
import Footer from '@/components/footer/footer';
import Header from '@/components/header';
import { Box } from '@mui/material';
import { NextPage } from 'next';
import HeroSection from './components/sections/hero';
import ServicesSection from './components/sections/services';

const Services: NextPage = () => {
	return (
		<>
			<Announcements />
			<Header />
			<Box component={'main'} display={'flex'} flexDirection={'column'} flex={1}>
				<HeroSection />
				<ServicesSection />
			</Box>
			<Footer />
		</>
	);
};

export default Services;
