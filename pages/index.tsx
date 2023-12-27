import AdvantagesSection from '@/components/advantages-section';
import Announcements from '@/components/announcements';
import CallToActionSection from '@/components/call-to-action-section';
import CommercialServiceSection from '@/components/commercial-service-section';
import FeaturesSection from '@/components/features-section';
import Footer from '@/components/footer/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import OffersSection from '@/components/offers-section';
import PlansSection from '@/components/plans-section';
import ServicesSection from '@/components/services-section';
import TestimonialsSection from '@/components/testimonials-section';
import WorkflowSection from '@/components/workflow-section';
import { Box } from '@mui/material';
import { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<>
			<Announcements />
			<Header />
			<Box component={'main'} display={'flex'} flexDirection={'column'} flex={1}>
				<Hero />
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
