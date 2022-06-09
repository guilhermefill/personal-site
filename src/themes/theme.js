import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
	global: (props) => ({
		body: {
			bg: mode('#f0e7db', '#202023')(props),
		},
	}),
};

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: true,
	fonts: {
		heading: `'Montserrat', sans-serif`,
		body: `'Montserrat', sans-serif`,
	},
};

const theme = extendTheme({ config, styles });

export default theme;
