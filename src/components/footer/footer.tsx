import { Call, Facebook, Instagram, Mail, Place, YouTube } from '@mui/icons-material';
import { Box, Container, Divider, IconButton, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

type Props = {};

const Footer = (props: Props) => {
	const { t, lang } = useTranslation();

	return (
		<Box component={'footer'} width={1} p={4} bgcolor={'primary.main'} color={'background.paper'}>
			<Container>
				<Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} spacing={8} useFlexGap>
					<Stack spacing={2} useFlexGap>
						<Image src={'/svgs/logo-white.svg'} alt="Pickeez" width={200} height={75} />
						<Typography fontWeight={300} maxWidth={'60ch'}>
							{t('common:footer_description')}
						</Typography>
					</Stack>
					<Stack>
						<Typography variant="subtitle1">{`${t('common:footer_official_info')}:`}</Typography>
						<Divider sx={{ width: '25%', borderBottomWidth: '2px', borderColor: 'secondary.main' }} />
						<Stack spacing={2} mt={4} useFlexGap>
							<Stack direction={'row'} alignItems={'flex-start'} spacing={2} useFlexGap>
								<Call color="secondary" sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
								<Typography maxWidth={'13ch'}>050 1044 566 02 6760 068</Typography>
							</Stack>
							<Stack direction={'row'} alignItems={'flex-start'} spacing={2} useFlexGap>
								<Mail color="secondary" sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
								<Typography>info@pickeez.com</Typography>
							</Stack>
							<Stack direction={'row'} alignItems={'flex-start'} spacing={2} useFlexGap>
								<Place color="secondary" sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />
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
			</Container>
		</Box>
	);
};

export default Footer;
