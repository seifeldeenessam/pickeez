import { Call, Facebook, Instagram, Mail, Place } from '@mui/icons-material';
import { Box, Container, Divider, IconButton, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

type Props = {};

const Footer = (props: Props) => {
	const { t, lang } = useTranslation();

	return (
		<Box component={'footer'} width={1} bgcolor={'primary.main'} color={'background.paper'}>
			<Stack p={4}>
				<Container>
					<Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} spacing={8} useFlexGap>
						<Stack width={1} spacing={2} useFlexGap>
							<Image src={'/svgs/logo-white.svg'} alt="Pickeez" width={200} height={75} />
							<Typography fontWeight={300} maxWidth={'60ch'}>
								{t('common:footer_description')}
							</Typography>
							<Stack direction={'row'} alignItems={'center'} color={'background.paper'} mt={4}>
								<IconButton size="small" color="inherit">
									<Facebook />
								</IconButton>
								<IconButton size="small" color="inherit">
									<Instagram />
								</IconButton>
							</Stack>
						</Stack>
						<Stack width={1}>
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
						</Stack>
						<Stack width={1}>
							<Typography variant="subtitle1">{`${t('common:footer_open_hours')}:`}</Typography>
							<Divider sx={{ width: '25%', borderBottomWidth: '2px', borderColor: 'secondary.main' }} />
							<Stack mt={4}>
								<Typography>{t('common:footer_mon_sat')}</Typography>
								<Typography>{t('common:footer_sun')}</Typography>
							</Stack>
						</Stack>
					</Stack>
				</Container>
			</Stack>
			<Stack p={2} bgcolor={'secondary.main'}>
				<Container>
					<Typography>{t('common:footer_copyrights', { year: new Date().getFullYear() })}</Typography>
				</Container>
			</Stack>
		</Box>
	);
};

export default Footer;
