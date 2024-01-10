import { Box, Container } from '@mui/material';

const mapURL =
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.860076822867!2d54.4631333!3d24.3513663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e413fc0353b79%3A0x51c64e1a54bfa78e!2sPickeez%20Laundry!5e0!3m2!1sen!2sus!4v1704874703997!5m2!1sen!2sus';

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
