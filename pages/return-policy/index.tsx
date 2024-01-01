import Announcements from '@/components/announcements';
import Footer from '@/components/footer/footer';
import Header from '@/components/header';
import { Box, Container, Typography } from '@mui/material';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ReturnPolicy: NextPage = () => {
	const [content, setContent] = useState<string | null>(null);
	const { locale } = useRouter();

	useEffect(() => {
		const path = `/markdown/return-policy/${locale}.md`;

		fetch(path)
			.then((response) => response.text())
			.then((text) => setContent(text));
	}, [locale]);

	return (
		<>
			<Announcements />
			<Header />
			<Box component={'main'} display={'flex'} flexDirection={'column'} flex={1}>
				<Box component={'section'} py={4}>
					<Container>
						<Typography component={'div'} p={2} borderRadius={2} bgcolor={'background.paper'}>
							<Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
						</Typography>
					</Container>
				</Box>
			</Box>
			<Footer />
		</>
	);
};

export default ReturnPolicy;
