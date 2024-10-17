import { Heading } from '@chakra-ui/react';
import { Choice } from './AppLayout';
import { useMemo } from 'react';

type ResultScreenProps = {
	userLastGamePlay: Choice;
	computerLastGamePlay: Choice;
};
const ResultSCreen = ({
	userLastGamePlay,
	computerLastGamePlay,
}: ResultScreenProps) => {
	const roundResult = useMemo(() => {
		if (userLastGamePlay === computerLastGamePlay) {
			return 'Égalité !';
		} else if (
			(userLastGamePlay === Choice.LEAF &&
				computerLastGamePlay === Choice.SCISSORS) ||
			(userLastGamePlay === Choice.STONE &&
				computerLastGamePlay === Choice.LEAF) ||
			(userLastGamePlay === Choice.SCISSORS &&
				computerLastGamePlay === Choice.STONE)
		) {
			return 'Perdu !';
		} else {
			return 'Gagné !';
		}
	}, [userLastGamePlay, computerLastGamePlay]);

	return (
		<Heading
			fontWeight={900}
			fontSize={36}
			color="secondary.lightBlue"
			margin={10}
		>
			{roundResult}
		</Heading>
	);
};

export default ResultSCreen;
