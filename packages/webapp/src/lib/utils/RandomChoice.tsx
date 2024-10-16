import { Choice, choices } from '../../components/ui/AppLayout';

// Définition de la fonction GetRandomChoice qui prend une énumération en paramètre et retourne une valeur de type Choice
const getRandomChoice = (): Choice => {
	const values = Object.keys(choices);
	const randomIndex = Math.floor(Math.random() * values.length);
	const randomComputerChoice = values[randomIndex];
	return randomComputerChoice as Choice;
};

export default getRandomChoice;
