import Announcements from '@/components/announcements';
import Footer from '@/components/footer/footer';
import Header from '@/components/header';
import { Box, Container, Typography } from '@mui/material';
import { NextPage } from 'next';

const PrivacyPolicy: NextPage = () => {
	return (
		<>
			<Announcements />
			<Header />
			<Box component={'main'} display={'flex'} flexDirection={'column'} flex={1}>
				<Box component={'section'} py={4}>
					<Container>
						<Typography component={'div'} p={2} borderRadius={2} bgcolor={'background.paper'}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique deleniti laboriosam itaque veritatis? Sit totam delectus labore fuga corrupti architecto
							necessitatibus accusamus natus quidem optio obcaecati dolore, atque perferendis repellendus suscipit expedita, itaque numquam, sunt culpa. Ipsa ullam, unde distinctio
							repellat, reiciendis sint animi, minus fugiat eligendi aspernatur consequatur!
						</Typography>
					</Container>
				</Box>
			</Box>
			<Footer />
		</>
	);
};

export default PrivacyPolicy;
