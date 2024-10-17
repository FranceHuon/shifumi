import { Box, Flex, Heading } from '@chakra-ui/react';
import GameRules from './gameRules/GameRules';
import GameRulesContainer from './gameRules/GameRulesContainer';
import { choices, playersChoices } from './ui/AppLayout';
import BoxHeading from './ui/BoxHeading';
import BoxLayout from './ui/BoxLayout';
import ResultScreen from './ui/ResultScreen';
import SymbolCard from './ui/SymbolCard';
import HitsHistoryTag from './hitsHistory/HitsHistoryTag';
import getHitsHistory from './hitsHistory/GenerateHitsHistory';
import GenerateHitsHistory from './hitsHistory/GenerateHitsHistory';

type GameLayoutProps = {
	isStarted: boolean;
	gamePlay: playersChoices;
};
const GameLayout = ({ isStarted, gamePlay }: GameLayoutProps) => {
	const lastGamePlay = gamePlay[gamePlay.length - 1];
	const userLastGamePlay = lastGamePlay?.userChoice;
	const computerLastGamePlay = lastGamePlay?.computerChoice;
	console.log(computerLastGamePlay);

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
				{isStarted && !gamePlay && (
					<Box>
						<BoxHeading>Manche 1</BoxHeading>
						<Heading display="flex" margin={20} color="secondary.lightBlue">
							Jouez !
						</Heading>
					</Box>
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
						</Box>
					)}
				</Flex>
			</BoxLayout>

			<BoxLayout>
				<BoxHeading>Historique des coups</BoxHeading>
				{userLastGamePlay && computerLastGamePlay && (
					<GenerateHitsHistory
						userLastGamePlay={userLastGamePlay}
						computerLastGamePlay={computerLastGamePlay}
					></GenerateHitsHistory>
				)}
			</BoxLayout>
		</Flex>
	);
};

export default GameLayout;
