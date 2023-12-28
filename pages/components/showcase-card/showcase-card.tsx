import { AspectRatio } from '@/enums/aspectRatio';
import { Divider, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

type Props = {
	icon: string;
	title: string;
	description?: string;
};

const ShowcaseCard = ({ icon, title, description }: Props) => {
	const { t } = useTranslation();

	return (
		<Stack
			width={1}
			height={1}
			justifyContent={'center'}
			alignItems={'center'}
			bgcolor={'background.paper'}
			boxShadow={'0px 0px 7px 0px rgba(0, 0, 0, 0.15)'}
			sx={{ aspectRatio: AspectRatio.SQUARE }}
			spacing={2}
			p={2}
			useFlexGap>
			<Image src={icon} alt={title} width={64} height={64} style={{ objectFit: 'contain' }} />
			<Typography fontWeight={'bold'} textAlign={'center'}>
				{t(title)}
			</Typography>
			{description && (
				<Typography variant="body2" color={'text.secondary'} textAlign={'center'} maxWidth={'35ch'}>
					{t(description)}
				</Typography>
			)}
			<Divider sx={{ width: '25%', borderBottomWidth: '2px', borderColor: 'secondary.main' }} />
		</Stack>
	);
};

export default ShowcaseCard;
