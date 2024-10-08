import { Global } from '@emotion/react';

const Fonts = () => (
	<Global
		styles={`
      @font-face {
        font-family: 'Chivo';
        src: url('./assets/fonts/Chivo/Chivo-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
      }

      @font-face {
        font-family: 'Overpass';
        src: url('./assets/fonts/Overpass/Overpass-Regular.woff2') format('woff2');
        font-weight: 900;
        font-style: normal;
        font-stretch: normal;
      }
   `}
	/>
);

export default Fonts;
