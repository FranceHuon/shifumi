import { extendTheme } from '@chakra-ui/react';
import colors from './colors';

const theme = extendTheme({
	colors,
	styles: {
		global: {
			body: {
				bg: colors.primary.darkBlue,
				// color: colors.secondary.lightBlue,
			},
			// h1: {
			// 	fontFamily: 'Overpass',
			// 	fontSize: '72px',
			// 	fontWeight: '900',
			// 	fontStretch: 'normal',
			// 	fontStyle: 'normal',
			// 	lineHeight: 'normal',
			// 	letterSpacing: 'normal',
			// 	textAlign: 'center',
			// },

			// h2: {
			// 	fontFamily: 'Overpass',
			// 	fontSize: '36px',
			// 	fontWeight: '900',
			// 	fontStretch: 'normal',
			// 	fontStyle: 'normal',
			// 	lineHeight: 'normal',
			// 	letterSpacing: 'normal',
			// 	textAlign: 'center',
			// },

			// h3: {
			// 	fontFamily: 'Overpass',
			// 	fontSize: '24px',
			// 	fontWeight: '900',
			// 	fontStretch: 'normal',
			// 	fontStyle: 'normal',
			// 	lineHeight: 'normal',
			// 	letterSpacing: 'normal',
			// 	textAlign: 'right',
			// },

			// h4: {
			// 	fontFamily: 'Chivo',
			// 	fontSize: '24px',
			// 	fontWeight: 'normal',
			// 	fontStretch: 'normal',
			// 	fontStyle: 'normal',
			// 	lineHeight: 'normal',
			// 	letterSpacing: 'normal',
			// 	textAlign: 'center',
			// },

			// h5: {
			// 	fontFamily: 'Overpass',
			// 	fontSize: '16px',
			// 	fontWeight: '900',
			// 	fontStretch: 'normal',
			// 	fontStyle: 'normal',
			// 	lineHeight: 'normal',
			// 	letterSpacing: 'normal',
			// 	textAlign: 'center',
			// },
		},
	},
	fonts: {
		heading: `'Overpass', sans-serif`,
		body: `'Chivo', sans-serif`,
	},
});

export default theme;
