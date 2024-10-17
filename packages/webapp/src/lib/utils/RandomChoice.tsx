import { Choice, choices } from '../../components/ui/AppLayout';

const getRandomChoice = (): Choice => {
	const values = Object.keys(choices);
	const randomIndex = Math.floor(Math.random() * values.length);
	const randomComputerChoice = values[randomIndex];
	return randomComputerChoice as Choice;
};

export default getRandomChoice;
