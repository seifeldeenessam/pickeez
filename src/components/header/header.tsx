import useResponsive from '@/hooks/useResponsive';
import { ArrowDropDown, Menu } from '@mui/icons-material';
import { AppBar, Button, Container, IconButton, Stack, Toolbar } from '@mui/material';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import links from './data.json';

const LanguageSwitcher = dynamic(() => import('./partials/language-switcher'));
const MenuDrawer = dynamic(() => import('./partials/drawer'));

type Props = {};

const Header = (props: Props) => {
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
	const { t } = useTranslation();
	const mdUp = useResponsive({ key: 'md', query: 'up' });

	const renderNavigation = () => {
		if (mdUp) {
			return (
				<Stack position={'absolute'} left={'50%'} direction={'row'} alignItems={'center'} spacing={2} sx={{ transform: 'translateX(-50%)' }} useFlexGap>
					{links.map((link) => (
						<Link href={link.path} style={{ fontFamily: 'inherit', color: 'inherit', textDecoration: 'inherit' }} key={link.id}>
							<Button component={motion.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} endIcon={<ArrowDropDown />} sx={{ color: '#444444' }}>
								{t(link.label)}
							</Button>
						</Link>
					))}
				</Stack>
			);
		} else {
			return (
				<IconButton onClick={() => setDrawerOpen(true)}>
					<Menu />
				</IconButton>
			);
		}
	};

	return (
		<>
			<AppBar position="static" color="transparent" elevation={0}>
				<Toolbar>
					<Container>
						<Stack width={1} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
							<Link href={'/'} style={{ color: 'inherit', textDecoration: 'inherit', position: 'relative', width: 150, height: 50 }}>
								<Image src={'/svgs/logo.svg'} alt="Pickeez" fill priority />
							</Link>
							{renderNavigation()}
							{mdUp && <LanguageSwitcher />}
						</Stack>
					</Container>
				</Toolbar>
			</AppBar>
			{!mdUp && drawerOpen && <MenuDrawer handleDrawerClose={() => setDrawerOpen(false)} />}
		</>
	);
};

export default Header;
