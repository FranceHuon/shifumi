import { Heading } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { Choice } from './AppLayout';

export enum Result {
	DRAW = 'Égalité !',
	WIN = 'Gagné !',
	LOOSE = 'Perdu !',
}

type ResultScreenProps = {
	userLastGamePlay: Choice;
	computerLastGamePlay: Choice;
};

export type gameScores = {
	userScore: number;
	computerScore: number;
}[];

const ResultSCreen = ({
	userLastGamePlay,
	computerLastGamePlay,
}: ResultScreenProps) => {
	const [scores, setScores] = useState<gameScores>([]);

	const handleScore = (score: number) => {
		setScores([
			...scores,
			{
				userScore: score,
				computerScore: score,
			},
		]);
	};

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
