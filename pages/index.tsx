import Announcements from '@/components/announcements';
import Footer from '@/components/footer/footer';
import Header from '@/components/header';
import { Box } from '@mui/material';
import { NextPage } from 'next';
import AdvantagesSection from './components/sections/advantages';
import CallToActionSection from './components/sections/call-to-action';
import CommercialServiceSection from './components/sections/commercial-service';
import FeaturesSection from './components/sections/features';
import HeroSection from './components/sections/hero';
import OffersSection from './components/sections/offers';
import PlansSection from './components/sections/plans';
import ServicesSection from './components/sections/services';
import TestimonialsSection from './components/sections/testimonials';
import WorkflowSection from './components/sections/workflow';

const Home: NextPage = () => {
	return (
		<>
			<Announcements />
			<Header />
			<Box component={'main'} display={'flex'} flexDirection={'column'} flex={1} sx={{ overflowX: 'hidden' }}>
				<HeroSection />
				<FeaturesSection />
				<PlansSection />
				<ServicesSection />
				<CommercialServiceSection />
				<OffersSection />
				<WorkflowSection />
				<TestimonialsSection />
				<AdvantagesSection />
				<CallToActionSection />
			</Box>
			<Footer />
		</>
	);
};

export default Home;
