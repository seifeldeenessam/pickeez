import { Box, Divider, Stack, Typography } from '@mui/material';
import WorkflowSVG from '@svgs/workflow';
import useTranslation from 'next-translate/useTranslation';

type Props = {};

const WorkflowSection = (props: Props) => {
	const { t } = useTranslation();

	return (
		<Box component={'section'} width={1} py={5} overflow={'hidden'} bgcolor={'background.paper'}>
			<Stack justifyContent={'center'} alignItems={'center'} spacing={2} useFlexGap>
				<Stack justifyContent={'center'} alignItems={'center'} spacing={1} useFlexGap>
					<Divider flexItem>
						<Typography fontWeight={'bold'} color={'text.secondary'} textAlign={'center'} textTransform={'uppercase'}>
							{t('home:workflow_section_title')}
						</Typography>
					</Divider>
					<Typography variant="subtitle1" fontWeight={'bold'} textAlign={'center'}>
						{t('home:workflow_section_subtitle')}
					</Typography>
				</Stack>
				<Stack width={1} direction={{ xs: 'column', md: 'row' }} justifyContent={'center'} alignItems={'center'} spacing={10} mt={4} useFlexGap>
					<WorkflowSVG />
				</Stack>
			</Stack>
		</Box>
	);
};

export default WorkflowSection;
