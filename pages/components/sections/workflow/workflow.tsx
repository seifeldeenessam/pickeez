import Title from '@/components/title';
import useResponsive from '@/hooks/useResponsive';
import { Box, Container, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

type Props = {};

const WorkflowSection = (props: Props) => {
	const { lang } = useTranslation();
	const smUp = useResponsive({ key: 'sm', query: 'up' });

	return (
		<Box
			component={motion.section}
			initial={{ opacity: 0, scale: 0 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			width={1}
			py={6}
			overflow={'hidden'}
			bgcolor={'background.paper'}>
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
						<Image src={`/svgs/workflow/${smUp ? 'desktop' : 'mobile'}_${lang}.svg`} alt="Workflow" placeholder="blur" blurDataURL="/images/loading_spinner.png" fill priority />
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export default WorkflowSection;
