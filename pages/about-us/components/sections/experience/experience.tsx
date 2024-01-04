import Title from '@/components/title';
import useResponsive from '@/hooks/useResponsive';
import { Check } from '@mui/icons-material';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import benefits from './data.json';

type Props = {};

const ExperienceSection = (props: Props) => {
	const { t } = useTranslation();
	const mdUp = useResponsive({ key: 'md', query: 'up' });

	return (
		<Box component={'section'} width={1} py={6}>
			<Container>
				<Stack spacing={4} useFlexGap>
					<Title title="about-us:experience_section_title" subtitle="about-us:experience_section_subtitle" />
					<Stack spacing={2} useFlexGap>
						<Stack direction={'row'} alignItems={{ xs: 'flex-start', md: 'center' }} spacing={{ xs: 2, md: 4 }} useFlexGap>
							<Image src={'/svgs/quote.svg'} alt={'Quote icon'} quality={100} width={mdUp ? 150 : 48} height={mdUp ? 150 : 48} />
							<Typography color={'text.secondary'} variant={mdUp ? 'h4' : 'body1'}>
								{t('about-us:experience_section_description')}
							</Typography>
						</Stack>
						<Divider flexItem />
						<Stack spacing={2} useFlexGap>
							{benefits.map((benefit) => (
								<Stack direction={'row'} alignItems={'center'} spacing={2} key={benefit.id} useFlexGap>
									<Check sx={{ color: '#FFC802', fontSize: { xs: 24, md: 48 } }} />
									<Typography color={'text.secondary'} variant={mdUp ? 'h5' : 'body1'}>
										{t(benefit.title)}
									</Typography>
								</Stack>
							))}
						</Stack>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export default ExperienceSection;
