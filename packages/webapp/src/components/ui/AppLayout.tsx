import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import HumanAvatar from '../../assets/images/avatars/HumanAvatar';
import RobotAvatar from '../../assets/images/avatars/RobotAvatar';
import BlueLeafIllu from '../../assets/images/illus/blue/BlueLeafIllu';
import BlueScissorsIllu from '../../assets/images/illus/blue/BlueScissorsIllu';
import BlueStoneIllu from '../../assets/images/illus/blue/BlueStoneIllu';
import RedLeafIllu from '../../assets/images/illus/red/RedLeafIllu';
import RedScissorsIllu from '../../assets/images/illus/red/RedScissorsIllu';
import RedStoneIllu from '../../assets/images/illus/red/RedStoneIllu';
import Buttons from '../../game/Buttons';
import getRandomChoice from '../../lib/utils/RandomChoice';
import round from '../../lib/utils/GameLogic';
import GameTitle from './GameTitle';
import PlayerSection from '../player/PlayerSection';
import PlayerName from '../player/PlayerName';
import GameLayout from '../GameLayout';
import StartGame from '../../lib/utils/StartGame';

export enum Choice {
	LEAF = 'LEAF',
	STONE = 'STONE',
	SCISSORS = 'SCISSORS',
}

export const choices = {
	[Choice.LEAF]: {
		blueIllu: <BlueLeafIllu />,
		redIllu: <RedLeafIllu />,
		name: 'Feuille',
	},
	[Choice.STONE]: {
		blueIllu: <BlueStoneIllu />,
		redIllu: <RedStoneIllu />,
		name: 'Pierre',
	},
	[Choice.SCISSORS]: {
		blueIllu: <BlueScissorsIllu />,
		redIllu: <RedScissorsIllu />,
		name: 'Ciseaux',
	},
};

export type playersChoices = {
	userChoice: Choice | null;
	computerChoice: Choice | null;
}[];

const AppLayout = () => {
	const [isStarted, setIsStarted] = useState(false);
	const [gamePlay, setGamePlay] = useState<playersChoices>([]);

	// const [userChoice, setUserChoice] = useState
	// const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
	const handleChoice = (choice: Choice) => {
		setGamePlay([
			...gamePlay,
			{
				userChoice: choice,
				computerChoice: getRandomChoice(),
			},
		]);
	};

	return (
		<Flex
			gap={8}
			justifyContent="center"
			flexDirection="column"
			alignItems="center"
		>
			<GameTitle gameTitle="Shifumi !"></GameTitle>

			<Flex justifyContent="center" gap={360}>
				<PlayerSection playerAvatar={<HumanAvatar />}>
					<PlayerName name="Moi"></PlayerName>
				</PlayerSection>
				<PlayerSection playerAvatar={<RobotAvatar />}>
					<PlayerName name="J-ordi"></PlayerName>
				</PlayerSection>
			</Flex>

			<GameLayout isStarted={isStarted} gamePlay={gamePlay} />

			<StartGame onClick={() => setIsStarted(true)} isStarted={isStarted} />
			{isStarted}

			{isStarted && (
				<Buttons handleUserChoice={(choice) => handleChoice(choice)} />
			)}
		</Flex>
	);
};
export default AppLayout;
