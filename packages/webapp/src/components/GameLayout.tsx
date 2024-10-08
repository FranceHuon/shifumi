import { Flex } from '@chakra-ui/react';
import BoxLayout from './ui/BoxLayout';
import BoxHeading from './ui/BoxHeading';
import GameRulesContainer from './gameRules/GameRulesContainer';
import GameRules from './gameRules/GameRules';

const GameLayout = () => {
	return (
		<Flex gap={8}>
			<BoxLayout>
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
			</BoxLayout>
			<BoxLayout>
				<BoxHeading>Historique des coups</BoxHeading>
			</BoxLayout>
		</Flex>
	);
};

export default GameLayout;
