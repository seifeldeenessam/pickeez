import { Call, Login } from '@mui/icons-material';
import { Button, IconButton, Stack } from '@mui/material';

type Props = {};

const Announcements = (props: Props) => {
	return (
		<Stack width={1} direction={'row'} justifyContent={'space-between'} alignItems={'center'} bgcolor={'primary.main'} px={2} py={1} sx={{ color: 'background.paper' }}>
			<Button size="small" color="inherit" startIcon={<Call />}>
				050 1044 566 - 02 6760 068
			</Button>
			<IconButton size="small" color="inherit">
				<Login fontSize="small" />
			</IconButton>
		</Stack>
	);
};

export default Announcements;
