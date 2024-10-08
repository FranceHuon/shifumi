import { Heading } from '@chakra-ui/react';

type GameTitleProps = {
	gameTitle: string;
};

const GameTitle = ({ gameTitle }: GameTitleProps) => {
	return (
		<Heading
			fontWeight={900}
			fontSize={36}
			color="secondary.lightBlue"
			margin={10}
		>
			{gameTitle}
		</Heading>
	);
};

export default GameTitle;
