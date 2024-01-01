import { Box, Container } from '@mui/material';
import { mapURL } from '../../../static';

type Props = {};

const MapSection = (props: Props) => {
	return (
		<Container sx={{ mt: 4 }}>
			<Box
				component={'iframe'}
				src={mapURL}
				title="location"
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				sx={{ width: 1, height: 'auto', aspectRatio: { xs: '4/3', md: '4/1.5' }, border: '2px solid', borderColor: 'divider', borderRadius: 2 }}
			/>
		</Container>
	);
};

export default MapSection;
