import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

const attributes = [
	{
		icon: <LocationOnOutlinedIcon fontSize="small" sx={{ fill: '#ffffff' }} />,
		title: 'common:address',
		value: 'Store 8 - Musaffah - MW-4 - Abu Dhabi - UAE'
	},
	{
		icon: <LocalPhoneOutlinedIcon fontSize="small" sx={{ fill: '#ffffff' }} />,
		title: 'common:phone',
		value: '050 1044 566 / 02 6760 068'
	},
	{
		icon: <MailOutlineOutlinedIcon fontSize="small" sx={{ fill: '#ffffff' }} />,
		title: 'common:email',
		value: 'info@pickeez.com'
	}
];

type Props = {};

const ContactSection = (props: Props) => {
	const { t, lang } = useTranslation();

	return (
		<Container sx={{ mb: 4 }}>
			<Grid container spacing={2} sx={{ mt: 2 }}>
				<Grid item xs={12} sm={5}>
					<Stack spacing={2} alignItems={{ xs: 'center', sm: 'flex-start' }} pt={{ sm: 2, md: 3 }}>
						<Typography variant="h4" component={'p'} color={'secondary.main'}>
							{t('contact-us:get_in_touch')}
						</Typography>
						<Typography color={'text.secondary'}>{t('contact-us:for_more_info')}</Typography>
						<Stack spacing={2} useFlexGap>
							{attributes.map((attribute, index) => (
								<Stack direction={'row'} spacing={1} alignItems={'center'} key={index}>
									<Stack justifyContent={'center'} alignItems={'center'} sx={{ bgcolor: 'primary.main', borderRadius: 10, p: 1 }}>
										{attribute.icon}
									</Stack>
									<Typography sx={{ minWidth: '7ch', display: { xs: 'none', md: 'block' } }}>{t(attribute.title)}:</Typography>
									<Typography fontSize={{ xs: 12, md: 16 }} sx={{ direction: attribute.title.includes('phone') && lang === 'ar' ? 'rtl' : 'ltr' }}>
										{attribute.value}
									</Typography>
								</Stack>
							))}
						</Stack>
					</Stack>
				</Grid>
				<Grid item xs={12} sm={7}>
					<Stack p={{ xs: 2, md: 4 }} bgcolor={'background.paper'} borderRadius={2} spacing={{ xs: 2, sm: 4 }} alignItems={{ xs: 'center', sm: 'flex-start' }} width={1}>
						<Typography variant="h4" component={'p'} color={'secondary.main'}>
							{t('contact-us:contact_us')}
						</Typography>
						<Box width={1} component="form" display={'flex'} flexDirection={'column'} gap={2} onSubmit={() => {}}>
							<TextField placeholder={t('common:full_name')} name="full_name" />
							<TextField placeholder={t('common:email')} name="email" />
							<TextField placeholder={t('common:subject')} name="subject" />
							<TextField placeholder={t('common:message')} name="message" />
							<Button component={motion.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} variant="contained" size="large" sx={{ alignSelf: 'center' }} type="submit">
								{t('common:send')}
							</Button>
						</Box>
					</Stack>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ContactSection;
