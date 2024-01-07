import { Call, Login } from '@mui/icons-material';
import { Box, Button, Container, IconButton, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

type Props = {};

const Announcements = (props: Props) => {
	const { lang } = useTranslation();

	return (
		<Box bgcolor={'primary.main'} color={'background.paper'}>
			<Container>
				<Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
					<Button
						component={motion.button}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						color="inherit"
						startIcon={<Call sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />}>
						050 1044 566 - 02 6760 068
					</Button>
					<IconButton color="inherit">
						<Login sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
					</IconButton>
				</Stack>
			</Container>
		</Box>
	);
};

export default Announcements;
