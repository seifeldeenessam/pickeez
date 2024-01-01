import { ArrowDropDown } from '@mui/icons-material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Button, Drawer, IconButton, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import links from '../../data.json';
import LanguageSwitcher from '../language-switcher';

type Props = {
	handleDrawerClose: () => void;
};

const MenuDrawer = ({ handleDrawerClose }: Props) => {
	const { push } = useRouter();
	const { t, lang } = useTranslation();

	const handleNavigate = (path: string) => {
		push(path);
		handleDrawerClose();
	};

	return (
		<Drawer
			anchor={lang === 'ar' ? 'left' : 'right'}
			PaperProps={{ sx: { width: 1, height: '100dvh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default', gap: 2 } }}
			onClose={handleDrawerClose}
			open>
			<Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} p={2}>
				<Typography variant="h6" fontWeight={'bold'}>
					{t('common:menu')}
				</Typography>
				<IconButton size="small" color="inherit" onClick={handleDrawerClose}>
					<CloseOutlinedIcon />
				</IconButton>
			</Stack>
			<Stack px={2} spacing={2} useFlexGap>
				{links.map((link) => (
					<Button size="large" endIcon={<ArrowDropDown />} onClick={() => handleNavigate(link.path)} key={link.id} sx={{ justifyContent: 'space-between', color: '#444444' }}>
						{t(link.label)}
					</Button>
				))}
				<Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} px={'11px'}>
					<Typography variant="button" fontSize={'15px'} color={'#444444'}>
						{t('common:language')}
					</Typography>
					<LanguageSwitcher />
				</Stack>
			</Stack>
		</Drawer>
	);
};

export default MenuDrawer;
