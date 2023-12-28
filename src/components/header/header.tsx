import useResponsive from '@/hooks/useResponsive';
import { ArrowDropDown, Menu } from '@mui/icons-material';
import { AppBar, Button, Container, IconButton, Stack, Toolbar } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import links from './data.json';

type Props = {};

const Header = (props: Props) => {
	const { t } = useTranslation();
	const mdUp = useResponsive({ key: 'md', query: 'up' });

	const renderNavigation = () => {
		if (mdUp) {
			return (
				<Stack position={'absolute'} left={'50%'} direction={'row'} alignItems={'center'} spacing={2} sx={{ transform: 'translateX(-50%)' }} useFlexGap>
					{links.map((link) => (
						<Link href={link.path} style={{ fontFamily: 'inherit', color: 'inherit', textDecoration: 'inherit' }} key={link.id}>
							<Button endIcon={<ArrowDropDown />} sx={{ color: '#444444' }}>
								{t(link.label)}
							</Button>
						</Link>
					))}
				</Stack>
			);
		} else {
			return (
				<IconButton>
					<Menu />
				</IconButton>
			);
		}
	};

	return (
		<AppBar position="static" color="transparent" elevation={0}>
			<Toolbar>
				<Container>
					<Stack width={1} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
						<Image src={'/svgs/logo.svg'} alt="Pickeez" width={150} height={50} />
						{renderNavigation()}
					</Stack>
				</Container>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
