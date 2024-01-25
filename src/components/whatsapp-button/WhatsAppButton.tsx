import { FloatingWhatsApp } from 'react-floating-whatsapp';

type Props = {};

const WhatsAppButton = (props: Props) => {
	return <FloatingWhatsApp phoneNumber={'050 1044 566'} accountName={'Pickeez Laundry'} avatar={'/icon-512.png'} messageDelay={1} style={{ zIndex: 100 }} allowEsc allowClickAway />;
};

export default WhatsAppButton;
