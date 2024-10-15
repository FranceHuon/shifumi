import { Choice } from '../../components/ui/AppLayout';

const GetRandomChoice = (enumeration: typeof Choice): Choice => {
	const values = Object.values(enumeration);
	const randomIndex = Math.floor(Math.random() * values.length);
	const randomComputerChoice = values[randomIndex];
	setComputerChoice(randomComputerChoice);
	return randomComputerChoice;
};

console.log(GetRandomChoice(Choice));

export default GetRandomChoice;
