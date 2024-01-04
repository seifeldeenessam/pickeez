import useResponsive from '@/hooks/useResponsive';
import { ArrowForward, Call, Facebook, Instagram, Mail, Place } from '@mui/icons-material';
import { Box, Button, Container, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {};

const Footer = (props: Props) => {
	const { push, asPath } = useRouter();
	const { t, lang } = useTranslation();
	const mdUp = useResponsive({ key: 'md', query: 'up' });
	const showExtraELement: boolean = asPath === '/' || asPath === '/about-us';

	return (
		<Box component={'footer'} width={1} zIndex={1}>
			{showExtraELement && (
				<Box position={'relative'} bgcolor={'primary.main'} color={'background.paper'}>
					<Box
						position={'absolute'}
						bottom={0}
						right={asPath === '/about-us' ? { xs: 0, md: 200 } : 0}
						width={{ xs: 450, sm: 500, md: 600, lg: 700 }}
						height={{ xs: 400, sm: 450, md: 500, lg: 650 }}
						zIndex={-1}
						sx={{ transform: { xs: 'translate(20%, -60%)', sm: 'translate(20%, -50%)', md: 'translate(20%, -35%)', lg: 'translateY(-25%)' } }}>
						<Image
							src={`/images/${asPath === '/about-us' ? 'about-us-footer-figure.png' : 'call_to_action_figure.png'}`}
							alt="Call to Action Figure"
							fill
							style={{ objectFit: 'contain' }}
						/>
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
								<Typography variant={mdUp ? 'h3' : 'subtitle1'} color={'#FFD66B'} fontFamily={'inherit'} fontWeight={'bold'} textTransform={'uppercase'}>
									{t('common:footer_quote_title')}
								</Typography>
								<Typography variant={mdUp ? 'h4' : 'subtitle1'} color={'#FBB040'} fontFamily={'inherit'} fontWeight={'bold'}>
									{t('common:footer_quote_subtitle')}
								</Typography>
								<Typography variant={mdUp ? 'h6' : 'body2'} color={'inherit'} fontFamily={'inherit'} fontWeight={'bold'}>
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
							<Typography variant="subtitle1" color={'secondary.main'}>{`${t('common:footer_official_info')}:`}</Typography>
							<Divider sx={{ width: '15%', borderBottomWidth: '2px', borderColor: 'secondary.main' }} />
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
							<Typography variant="subtitle1" color={'secondary.main'}>{`${t('common:footer_information')}:`}</Typography>
							<Divider sx={{ width: '15%', borderBottomWidth: '2px', borderColor: 'secondary.main' }} />
							<Grid container mt={4} spacing={1}>
								<Grid item xs={6}>
									<Link href={'/about-us'} style={{ fontFamily: 'inherit', color: 'inherit', textDecoration: 'inherit' }}>
										<Typography color={'background.paper'} fontWeight={300} sx={{ ':hover': { textDecoration: 'underline' } }}>
											{t('common:about')}
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={6}>
									<Link href={'/offers'} style={{ fontFamily: 'inherit', color: 'inherit', textDecoration: 'inherit' }}>
										<Typography color={'background.paper'} fontWeight={300} sx={{ ':hover': { textDecoration: 'underline' } }}>
											{t('common:offers')}
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={6}>
									<Link href={'/services'} style={{ fontFamily: 'inherit', color: 'inherit', textDecoration: 'inherit' }}>
										<Typography color={'background.paper'} fontWeight={300} sx={{ ':hover': { textDecoration: 'underline' } }}>
											{t('common:services')}
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={6}>
									<Link href={'/contact-us'} style={{ fontFamily: 'inherit', color: 'inherit', textDecoration: 'inherit' }}>
										<Typography color={'background.paper'} fontWeight={300} sx={{ ':hover': { textDecoration: 'underline' } }}>
											{t('common:contact')}
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={6}>
									<Link href={'/privacy-policy'} style={{ fontFamily: 'inherit', color: 'inherit', textDecoration: 'inherit' }}>
										<Typography color={'background.paper'} fontWeight={300} sx={{ ':hover': { textDecoration: 'underline' } }}>
											{t('common:privacy-policy')}
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={6}>
									<Link href={'/return-policy'} style={{ fontFamily: 'inherit', color: 'inherit', textDecoration: 'inherit' }}>
										<Typography color={'background.paper'} fontWeight={300} sx={{ ':hover': { textDecoration: 'underline' } }}>
											{t('common:return-policy')}
										</Typography>
									</Link>
								</Grid>
							</Grid>
						</Stack>
					</Stack>
				</Container>
			</Stack>
			<Box py={2} bgcolor={'secondary.main'}>
				<Container>
					<Stack direction={{ xs: 'column-reverse', md: 'row' }} justifyContent={'center'} alignItems={'center'} color={'background.paper'} spacing={2} useFlexGap>
						<Typography>{t('common:footer_copyrights', { year: new Date().getFullYear() })}</Typography>
					</Stack>
				</Container>
			</Box>
		</Box>
	);
};

export default Footer;
