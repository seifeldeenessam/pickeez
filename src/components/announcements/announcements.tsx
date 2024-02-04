import { Call } from '@mui/icons-material';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';

type Props = {};

const Announcements = (props: Props) => {
	const { lang } = useTranslation();

	return (
		<Box bgcolor={'primary.main'} color={'background.paper'}>
			<Container>
				<Stack direction={'row'} justifyContent={'flex-end'} alignItems={'center'}>
					<Button color="inherit" startIcon={<Call sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />}>
						<Typography variant="button" sx={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
							050 1044 566 - 02 6760 068
						</Typography>
					</Button>
				</Stack>
			</Container>
		</Box>
	);
};

export default Announcements;
