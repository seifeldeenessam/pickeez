import { Divider, Stack, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';

type Props = {
	title: string;
	subtitle: string;
	white?: boolean;
};

const Title = ({ title, subtitle, white }: Props) => {
	const { t } = useTranslation();

	return (
		<Stack width={1} justifyContent={'center'} alignItems={'center'} spacing={1} useFlexGap>
			<Divider sx={{ ':before': { borderTopColor: white ? 'transparent' : 'initial' }, ':after': { borderTopColor: white ? 'transparent' : 'initial' } }} flexItem>
				<Typography fontWeight={'bold'} color={white ? 'background.paper' : 'text.secondary'} textAlign={'center'} textTransform={'uppercase'}>
					{t(title)}
				</Typography>
			</Divider>
			<Typography variant="subtitle1" fontWeight={'bold'} color={white ? 'background.paper' : 'text.primary'} textAlign={'center'}>
				{t(subtitle)}
			</Typography>
		</Stack>
	);
};

export default Title;
