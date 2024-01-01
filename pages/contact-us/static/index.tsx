import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

export const mapURL =
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d552.7418205166034!2d54.46427482071701!3d24.352997926118157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e41af3fe86caf%3A0x674f35140f50fd7c!2sM%20Store%205!5e0!3m2!1sen!2seg!4v1704107937604!5m2!1sen!2seg';

export const attributes = [
	{
		icon: <LocationOnOutlinedIcon fontSize="small" sx={{ fill: '#ffffff' }} />,
		title: 'common:address',
		value: 'Store 8 - Musaffah - MW-4 - Abu Dhabi - UAE'
	},
	{
		icon: <LocalPhoneOutlinedIcon fontSize="small" sx={{ fill: '#ffffff' }} />,
		title: 'common:phone',
		value: '050 1044 566 / 02 6760 068'
	},
	{
		icon: <MailOutlineOutlinedIcon fontSize="small" sx={{ fill: '#ffffff' }} />,
		title: 'common:email',
		value: 'info@pickeez.com'
	}
];
