import { Button, Text } from '@chakra-ui/react';

type BasicButtonProps = {
	onClick: () => void;
	leftIcon?: React.ReactElement;
	buttonTitle: string;
	width?: number;
};

const BasicButton = ({
	leftIcon,
	buttonTitle,
	width,
	onClick,
}: BasicButtonProps) => {
	return (
		<Button
			bg="secondary.electricBlue"
			leftIcon={leftIcon}
			width={width}
			height={90}
			rounded="2xl"
			variant="solid"
			textAlign="left"
			fontWeight={400}
			fontSize={24}
			padding={10}
			boxShadow={`0 4px 0 0`}
			color="primary.hardBlue"
			_hover={{}}
			onClick={onClick}
		>
			<Text color="tertiary.white">{buttonTitle}</Text>
		</Button>
	);
};

export default BasicButton;
