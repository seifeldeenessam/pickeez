import { arFont } from '@/theme';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
type Props = {};

const LanguageSwitcher = (props: Props) => {
	const { asPath, locale } = useRouter();
	const { t } = useTranslation();

	return (
		<Select id="language-selector" value={locale} color="secondary" variant="outlined" size="small">
			<MenuItem value="en">
				<a href={`/en${asPath}`} style={{ fontFamily: 'inherit', color: '#787878', textDecoration: 'inherit' }}>
					{t('common:english')}
				</a>
			</MenuItem>
			<MenuItem value="ar">
				<a href={`/ar${asPath}`} style={{ fontFamily: arFont.style.fontFamily, color: '#787878', textDecoration: 'inherit' }}>
					{t('common:arabic')}
				</a>
			</MenuItem>
		</Select>
	);
};

export default LanguageSwitcher;
