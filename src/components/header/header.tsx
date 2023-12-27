import { Menu } from '@mui/icons-material';
import { AppBar, IconButton, Stack, Toolbar } from '@mui/material';
import LogoSVG from '@svgs/logo';

type Props = {};

const Header = (props: Props) => {
	return (
		<AppBar position="static" color="transparent" elevation={0}>
			<Toolbar>
				<Stack width={1} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
					<LogoSVG />
					<IconButton>
						<Menu />
					</IconButton>
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
