import { Call, Facebook, Instagram, Mail, Place, YouTube } from '@mui/icons-material';
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import LogoSVG from '@svgs/logo-white';
import useTranslation from 'next-translate/useTranslation';

type Props = {};

const Footer = (props: Props) => {
	const { t } = useTranslation();

	return (
		<Box component={'footer'} width={1} p={4} bgcolor={'primary.main'} color={'background.paper'}>
			<Stack spacing={4} useFlexGap>
				<LogoSVG />
				<Typography fontWeight={300}>{t('common:footer_description')}</Typography>

				<Stack>
					<Typography variant="subtitle1">{`${t('common:footer_official_info')}:`}</Typography>
					<Divider sx={{ width: '25%', borderBottomWidth: '2px', borderColor: 'secondary.main' }} />
					<Stack spacing={2} mt={4} useFlexGap>
						<Stack direction={'row'} alignItems={'flex-start'} spacing={2} useFlexGap>
							<Call color="secondary" />
							<Typography maxWidth={'13ch'}>050 1044 566 02 6760 068</Typography>
						</Stack>
						<Stack direction={'row'} alignItems={'flex-start'} spacing={2} useFlexGap>
							<Mail color="secondary" />
							<Typography>info@pickeez.com</Typography>
						</Stack>
						<Stack direction={'row'} alignItems={'flex-start'} spacing={2} useFlexGap>
							<Place color="secondary" />
							<Typography>store 8 - Musaffah - MW-4 - Abu Dhabi - United Arab Emirates</Typography>
						</Stack>
					</Stack>
					<Stack direction={'row'} alignItems={'center'} color={'background.paper'} mt={4}>
						<IconButton size="small" color="inherit">
							<Facebook />
						</IconButton>
						<IconButton size="small" color="inherit">
							<Instagram />
						</IconButton>
						<IconButton size="small" color="inherit">
							<YouTube />
						</IconButton>
					</Stack>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Footer;
