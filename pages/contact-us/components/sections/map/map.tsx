import { Box, Container } from '@mui/material';

const mapURL =
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d552.7418205166034!2d54.46427482071701!3d24.352997926118157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e41af3fe86caf%3A0x674f35140f50fd7c!2sM%20Store%205!5e0!3m2!1sen!2seg!4v1704107937604!5m2!1sen!2seg';

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
