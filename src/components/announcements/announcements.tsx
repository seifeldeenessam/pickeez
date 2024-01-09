import { Call, Login } from '@mui/icons-material';
import { Box, Button, Container, IconButton, Stack } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';

type Props = {};

const Announcements = (props: Props) => {
	const { lang } = useTranslation();

	return (
		<Box bgcolor={'primary.main'} color={'background.paper'}>
			<Container>
				<Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
					<Button color="inherit" startIcon={<Call sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />}>
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
