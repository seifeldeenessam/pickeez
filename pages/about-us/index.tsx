import Announcements from '@/components/announcements';
import Footer from '@/components/footer/footer';
import Header from '@/components/header';
import { Box } from '@mui/material';
import { NextPage } from 'next';
import ExperienceSection from './components/sections/experience';
import HeroSection from './components/sections/hero';
import LaundrySection from './components/sections/laundry';

const Home: NextPage = () => {
	return (
		<>
			<Announcements />
			<Header />
			<Box component={'main'} display={'flex'} flexDirection={'column'} flex={1}>
				<HeroSection />
				<ExperienceSection />
				<LaundrySection />
			</Box>
			<Footer />
		</>
	);
};

export default Home;
