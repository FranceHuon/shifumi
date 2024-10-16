import { Choice } from '../../components/ui/AppLayout';

const round = (userChoice, computerChoice) => {
	if (userChoice === computerChoice) {
		return console.log('nobody wins');
	} else if (
		(userChoice === Choice.LEAF && computerChoice === Choice.SCISSORS) ||
		(userChoice === Choice.STONE && computerChoice === Choice.LEAF) ||
		(userChoice === Choice.SCISSORS && computerChoice === Choice.STONE)
	) {
		return console.log('computer win');
	} else {
		return console.log('user win');
	}
};

export default round;

// const gamePlay = () => {

// const handleTurns = () => {
// 	setCount(count - 1);
// 	return console.log('you already played 5 times');
// };
// }
