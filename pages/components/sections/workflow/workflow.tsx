import useResponsive from '@/hooks/useResponsive';
import { Box, Container, Stack } from '@mui/material';
import Image from 'next/image';
import Title from 'pages/components/title';

type Props = {};

const WorkflowSection = (props: Props) => {
	const smUp = useResponsive({ key: 'sm', query: 'up' });

	return (
		<Box component={'section'} width={1} py={5} overflow={'hidden'} bgcolor={'background.paper'}>
			<Container>
				<Stack spacing={4} useFlexGap>
					<Title title="home:workflow_section_title" subtitle="home:workflow_section_subtitle" />
					<Stack
						width={1}
						height={{ xs: 350, sm: 500 }}
						direction={{ xs: 'column', md: 'row' }}
						position={'relative'}
						justifyContent={'center'}
						alignItems={'center'}
						spacing={10}
						mt={4}
						useFlexGap>
						<Image src={`/svgs/workflow-${smUp ? 'desktop' : 'mobile'}.svg`} alt="Workflow" fill priority />
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export default WorkflowSection;
