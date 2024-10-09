import { Flex, Text, Wrap } from '@chakra-ui/react';
import BoxLayout from './ui/BoxLayout';
import BoxHeading from './ui/BoxHeading';
import GameRulesContainer from './gameRules/GameRulesContainer';
import GameRules from './gameRules/GameRules';

type GameLayoutProps = {
	isStarted: boolean;
};
const GameLayout = ({ isStarted }: GameLayoutProps) => {
	return (
		<Flex gap={8}>
			<BoxLayout width={224}>
				<BoxHeading>Règles du jeu</BoxHeading>
				<GameRulesContainer>
					<GameRules rule="pierre bat ciseaux"></GameRules>
					<GameRules rule="feuille bat pierre"></GameRules>
					<GameRules rule="ciseaux bat feuille"></GameRules>
					<GameRules rule="Le premier à 5 gagne"></GameRules>
				</GameRulesContainer>
			</BoxLayout>

			<BoxLayout width={710}>
				<BoxHeading>Manche 1</BoxHeading>
				{isStarted && <Text color="white">Jouez !</Text>}
			</BoxLayout>

			<BoxLayout>
				<BoxHeading>Historique des coups</BoxHeading>
			</BoxLayout>
		</Flex>
	);
};

export default GameLayout;
