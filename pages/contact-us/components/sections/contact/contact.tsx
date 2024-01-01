import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { attributes } from '../../../static';

type Props = {};

const ContactSection = (props: Props) => {
	const { t } = useTranslation();

	return (
		<Container sx={{ mb: 4 }}>
			<Grid container spacing={2} sx={{ mt: 2 }}>
				<Grid item xs={12} sm={5}>
					<Stack spacing={2} alignItems={{ xs: 'center', sm: 'flex-start' }} pt={{ sm: 2, md: 3 }}>
						<Typography variant="h4" component={'p'} color={'secondary.main'}>
							{t('contact-us:get_in_touch')}
						</Typography>
						<Typography color={'text.secondary'}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto error vel ratione molestias nemo. Eius repellendus maxime dolorem laboriosam iusto.
						</Typography>
						<Stack spacing={2} useFlexGap>
							{attributes.map((attribute, index) => (
								<Stack direction={'row'} spacing={1} alignItems={'center'} key={index}>
									<Stack justifyContent={'center'} alignItems={'center'} sx={{ bgcolor: 'primary.main', borderRadius: 10, p: 1 }}>
										{attribute.icon}
									</Stack>
									<Typography sx={{ minWidth: '7ch', display: { xs: 'none', md: 'block' } }}>{t(attribute.title)}:</Typography>
									<Typography fontSize={{ xs: 12, md: 16 }}>{attribute.value}</Typography>
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
							<Button variant="contained" size="large" sx={{ alignSelf: 'center' }} type="submit">
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
