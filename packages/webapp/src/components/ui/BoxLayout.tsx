import { Box, BoxProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type BoxLayoutProps = PropsWithChildren<{
	width?: number;
}> &
	BoxProps;

const BoxLayout = ({ width, children }: BoxLayoutProps) => {
	return (
		<Box
			display="flex"
			flexDir="column"
			rounded="2xl"
			bg="primary.navyBlue"
			height={420}
			width={width}
			padding={5}
			alignItems="center"
		>
			{children}
		</Box>
	);
};

export default BoxLayout;
