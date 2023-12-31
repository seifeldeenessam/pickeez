import Title from '@/components/title';
import useResponsive from '@/hooks/useResponsive';
import { Check, FormatQuote } from '@mui/icons-material';
import { Box, Container, Divider, Stack, SvgIcon, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
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
					<Stack direction={{ xs: 'column', md: 'row' }} spacing={2} useFlexGap>
						<Stack direction={'row'} spacing={2} useFlexGap>
							<SvgIcon fontSize="large">
								<FormatQuote sx={{ color: '#9A81E0' }} />
							</SvgIcon>
							<Typography color={'text.secondary'} maxWidth={'57ch'}>
								{t('about-us:experience_section_description')}
							</Typography>
						</Stack>
						<Divider orientation={mdUp ? 'vertical' : 'horizontal'} flexItem />
						<Stack spacing={2} useFlexGap>
							{benefits.map((benefit) => (
								<Stack direction={'row'} alignItems={'center'} spacing={2} key={benefit.id} useFlexGap>
									<SvgIcon>
										<Check sx={{ color: '#FFC802' }} />
									</SvgIcon>
									<Typography color={'text.secondary'} maxWidth={'57ch'}>
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
