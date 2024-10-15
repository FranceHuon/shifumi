import BlueLeafIllu from '../assets/images/illus/blue/BlueLeafIllu';
import BlueScissorsIllu from '../assets/images/illus/blue/BlueScissorsIllu';
import BlueStoneIllu from '../assets/images/illus/blue/BlueStoneIllu';
import BasicButton from '../components/ui/BasicButton';
import { Box } from '@chakra-ui/react';
import { Choice } from '../components/ui/AppLayout';

type ButtonsProps = {
	handleUserChoice: (choice: Choice) => void;
};

const Buttons = ({ handleUserChoice }: ButtonsProps) => {
	return (
		<Box width="full" display="flex" justifyContent="center">
			<BasicButton
				onClick={() => handleUserChoice(Choice.STONE)}
				leftIcon={<BlueStoneIllu />}
				buttonTitle="Pierre !"
			/>
			<BasicButton
				onClick={() => handleUserChoice(Choice.LEAF)}
				leftIcon={<BlueLeafIllu />}
				buttonTitle="Feuille !"
			/>
			<BasicButton
				onClick={() => handleUserChoice(Choice.SCISSORS)}
				leftIcon={<BlueScissorsIllu />}
				buttonTitle="Ciseaux !"
			/>
		</Box>
	);
};

export default Buttons;
