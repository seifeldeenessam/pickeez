import { ArrowForward, Call, Facebook, Instagram, Mail, Place } from '@mui/icons-material';
import { Box, Button, Container, Divider, IconButton, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';

type Props = {};

const Footer = (props: Props) => {
	const { push, asPath } = useRouter();
	const { t, lang } = useTranslation();

	return (
		<Box component={'footer'} width={1} zIndex={1}>
			{asPath === '/' && (
				<Box position={'relative'} bgcolor={'primary.main'} color={'background.paper'}>
					<Box
						position={'absolute'}
						bottom={0}
						right={0}
						width={{ xs: 350, sm: 400, md: 500, lg: 600 }}
						height={{ xs: 300, sm: 350, md: 400, lg: 600 }}
						zIndex={-1}
						sx={{ transform: { xs: 'translateY(-70%)', sm: 'translateY(-50%)', md: 'translateY(-45%)', lg: 'translateY(-25%)' } }}>
						<Image src={'/images/call_to_action_figure.png'} alt="Call to Action Figure" fill style={{ objectFit: 'contain' }} />
					</Box>
					<Container>
						<Stack
							direction={{ xs: 'column', md: 'row' }}
							bgcolor={'primary.main'}
							justifyContent={'space-between'}
							alignItems={{ xs: 'flex-start', md: 'center' }}
							color={'background.paper'}
							py={4}
							spacing={4}
							useFlexGap>
							<Stack spacing={1} useFlexGap>
								<Typography variant="subtitle1" color={'inherit'} fontFamily={'inherit'} fontWeight={'bold'} textTransform={'uppercase'}>
									{t('common:footer_quote_title')}
								</Typography>
								<Typography variant="caption" color={'inherit'} fontFamily={'inherit'} maxWidth={{ md: '25ch' }}>
									{t('common:footer_quote_description')}
								</Typography>
							</Stack>
							<Button
								variant="contained"
								color="secondary"
								size={'large'}
								onClick={() => push('/services')}
								endIcon={<ArrowForward sx={{ transform: lang === 'ar' ? 'scaleX(-1)' : 'none' }} />}>
								{t('common:view_all_services')}
							</Button>
						</Stack>
					</Container>
				</Box>
			)}
			<Stack py={4} bgcolor={'primary.main'} color={'background.paper'}>
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
									<Typography>Store 8 - Musaffah - MW-4 - Abu Dhabi - United Arab Emirates</Typography>
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
			<Box py={2} bgcolor={'secondary.main'}>
				<Container>
					<Stack direction={{ xs: 'column-reverse', md: 'row' }} justifyContent={'space-between'} alignItems={'center'} color={'background.paper'} spacing={2} useFlexGap>
						<Typography>{t('common:footer_copyrights', { year: new Date().getFullYear() })}</Typography>
						<Stack direction={'row'} spacing={2} useFlexGap>
							<Button color="inherit" onClick={() => push('/privacy-policy')}>
								{t('common:privacy_policy')}
							</Button>
							<Button color="inherit" onClick={() => push('/return-policy')}>
								{t('common:return_policy')}
							</Button>
						</Stack>
					</Stack>
				</Container>
			</Box>
		</Box>
	);
};

export default Footer;
