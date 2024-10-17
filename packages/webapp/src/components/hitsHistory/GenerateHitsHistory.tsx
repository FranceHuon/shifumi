import { Tag, Text } from '@chakra-ui/react';
import { Choice, choices } from '../ui/AppLayout';

type GeneratetHitsHistoryProps = {
	userLastGamePlay: Choice;
	computerLastGamePlay: Choice;
};

const GeneratetHitsHistory = ({
	userLastGamePlay,
	computerLastGamePlay,
}: GeneratetHitsHistoryProps) => {
	const getHistory = () => {
		if (
			(userLastGamePlay === Choice.LEAF &&
				computerLastGamePlay === Choice.STONE) ||
			(userLastGamePlay === Choice.STONE &&
				computerLastGamePlay === Choice.SCISSORS) ||
			(userLastGamePlay === Choice.SCISSORS &&
				computerLastGamePlay === Choice.LEAF)
		) {
			const hitHistory =
				`${choices[userLastGamePlay].name}` +
				' bat ' +
				`${choices[computerLastGamePlay].name}`;
			console.log(hitHistory);
			return hitHistory;
		} else {
			const hitHistory =
				`${choices[computerLastGamePlay].name}` +
				' bat ' +
				`${choices[userLastGamePlay].name}`;
			console.log(hitHistory);
			return hitHistory;
		}
	};

	return (
		<Tag>
			<Text>{getHistory()}</Text>
		</Tag>
	);
};

export default GeneratetHitsHistory;
