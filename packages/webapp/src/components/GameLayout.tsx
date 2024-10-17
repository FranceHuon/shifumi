import { Box, Flex, Heading } from '@chakra-ui/react';
import GameRules from './gameRules/GameRules';
import GameRulesContainer from './gameRules/GameRulesContainer';
import { Choice, choices, playersChoices } from './ui/AppLayout';
import BoxHeading from './ui/BoxHeading';
import BoxLayout from './ui/BoxLayout';
import SymbolCard from './ui/SymbolCard';
import round from '../lib/utils/GameLogic';
import GameLogic from '../lib/utils/GameLogic';
import ResultScreen from './ui/ResultScreen';
import { useMemo } from 'react';

type GameLayoutProps = {
	isStarted: boolean;
	gamePlay: playersChoices;
};
const GameLayout = ({ isStarted, gamePlay }: GameLayoutProps) => {
	const lastGamePlay = gamePlay[gamePlay.length - 1];
	const userLastGamePlay = lastGamePlay?.userChoice;
	const computerLastGamePlay = lastGamePlay?.computerChoice;

	return (
		<Flex gap={8} justifyContent="center">
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
				{isStarted && !gamePlay && (
					<Heading display="flex" margin={20} color="secondary.lightBlue">
						Jouez !
					</Heading>
				)}
				<Flex width="full" flexGrow={1}>
					{userLastGamePlay && (
						<Box
							display="flex"
							width="50%"
							justifyContent="center"
							alignItems="center"
							borderColor="white"
							border="4px solid"
						>
							<SymbolCard
								borderColor="secondary.electricBlue"
								color="primary.hardBlue"
								backgroundColor="primary.hardBlue"
								symbolName={choices[userLastGamePlay].name}
								illu={choices[userLastGamePlay].blueIllu}
							/>
						</Box>
					)}
					{userLastGamePlay && computerLastGamePlay && (
						<ResultScreen
							userLastGamePlay={userLastGamePlay}
							computerLastGamePlay={computerLastGamePlay}
						></ResultScreen>
					)}

					{computerLastGamePlay && (
						<Box
							width="50%"
							display="flex"
							justifyContent="center"
							alignItems="center"
							borderColor="white"
							border="4px solid"
						>
							<SymbolCard
								borderColor="tertiary.red"
								color="tertiary.red"
								backgroundColor="secondary.darkRed"
								symbolName={choices[computerLastGamePlay].name}
								illu={choices[computerLastGamePlay].redIllu}
							></SymbolCard>
							{/* {win && <ResultScreen result="Gagné !"></ResultScreen>}
							{loose && <ResultScreen result="Perdu"></ResultScreen>} */}
						</Box>
					)}
				</Flex>
			</BoxLayout>

			<BoxLayout>
				<BoxHeading>Historique des coups</BoxHeading>
			</BoxLayout>
		</Flex>
	);
};

export default GameLayout;
