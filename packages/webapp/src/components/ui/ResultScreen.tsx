import { Heading } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Choice } from './AppLayout';

enum Result {
	DRAW = 'Égalité !',
	WIN = 'Gagné !',
	LOOSE = 'Perdu !',
}

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
			return Result.DRAW;
		} else if (
			(userLastGamePlay === Choice.LEAF &&
				computerLastGamePlay === Choice.SCISSORS) ||
			(userLastGamePlay === Choice.STONE &&
				computerLastGamePlay === Choice.LEAF) ||
			(userLastGamePlay === Choice.SCISSORS &&
				computerLastGamePlay === Choice.STONE)
		) {
			return Result.LOOSE;
		} else {
			// const history = `${userLastGamePlay} bat ${computerLastGamePlay}`;
			return Result.WIN;
		}
	}, [userLastGamePlay, computerLastGamePlay]);

	return (
		<div>
			<Heading
				fontWeight={900}
				fontSize={36}
				color="secondary.lightBlue"
				margin={10}
			>
				{roundResult}
			</Heading>
		</div>
	);
};

export default ResultSCreen;
