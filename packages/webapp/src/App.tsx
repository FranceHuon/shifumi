import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import Fonts from './theme/Fonts';
import AppLayout from './components/ui/AppLayout';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			<AppLayout />
		</ChakraProvider>
	);
}

export default App;
