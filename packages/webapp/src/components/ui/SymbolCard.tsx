import { Box, Text } from '@chakra-ui/react';

type SymbolCardProps = {
	backgroundColor: string;
	borderColor: string;
	color: string;
	symbolName: string;
	icon: React.ReactElement;
};

const SymbolCard = ({
	backgroundColor,
	borderColor,
	color,
	symbolName,
	icon,
}: SymbolCardProps) => {
	return (
		<Box
			width={160}
			height={216}
			bg="tertiary.white"
			rounded="2xl"
			border="4px"
			borderColor={borderColor}
			color={backgroundColor}
			display="flex"
			flexDir="column"
			justifyContent="center"
			alignItems="center"
			padding={2}
			boxShadow={`0 4px 0 0`}
		>
			{icon}
			<Text padding={2} fontWeight={400} color={color}>
				{symbolName}
			</Text>
		</Box>
	);
};

export default SymbolCard;
