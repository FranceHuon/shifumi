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
import StartGame from '../../lib/utils/StartGame';
import GameLayout from '../GameLayout';
import PlayerName from '../player/PlayerName';
import PlayerSection from '../player/PlayerSection';
import GameTitle from './GameTitle';
import getRandomChoice from '../../lib/utils/RandomChoice';

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

const AppLayout = () => {
	const [isStarted, setIsStarted] = useState(false);
	const [handsChoice, setHandsChoice] = useState<Choice | null>(null);
	const [computerChoice, setComputerChoice] = useState<Choice | null>(null);

	const handleChoice = (choice: Choice) => {
		setHandsChoice(choice);
		setTimeout(() => {
			const random = getRandomChoice();
			setComputerChoice(random);
		}, 2000);
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

			<GameLayout
				isStarted={isStarted}
				handsChoice={handsChoice}
				computerChoice={computerChoice}
			/>

			<StartGame onClick={() => setIsStarted(true)} isStarted={isStarted} />
			{isStarted}

			{isStarted && (
				<Buttons handleUserChoice={(choice) => handleChoice(choice)} />
			)}
		</Flex>
	);
};
export default AppLayout;
