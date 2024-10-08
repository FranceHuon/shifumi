import { Button, Box } from '@chakra-ui/react';

type BasicButtonProps = {
	leftIcon?: React.ReactElement;
	buttonTitle: string;
	width?: number;
};

const BasicButton = ({ leftIcon, buttonTitle, width }: BasicButtonProps) => {
	return (
		<Box bg="primary.hardBlue" height={100} width={width} rounded="2xl">
			<Button
				bg="secondary.electricBlue"
				leftIcon={leftIcon}
				width={width}
				height={90}
				rounded="2xl"
				color="tertiary.white"
				variant="solid"
				textAlign="left"
				fontWeight={400}
				fontSize={24}
				padding={10}
				_hover={{}}
			>
				{buttonTitle}
			</Button>
		</Box>
	);
};

export default BasicButton;
