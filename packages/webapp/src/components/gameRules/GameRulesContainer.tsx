import { Container, Text } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type GameRulesContainerProps = PropsWithChildren;

const GameRulesContainer = ({ children }: GameRulesContainerProps) => {
	return (
		<Container>
			<Text
				fontWeight={400}
				fontSize={12}
				color="secondary.lightBlue"
				textAlign="center"
			>
				{children}
			</Text>
		</Container>
	);
};

export default GameRulesContainer;
