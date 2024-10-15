import BasicButton from '../../components/ui/BasicButton';

type StartGameProps = {
	onClick: () => void;
	isStarted: boolean;
};
const StartGame = ({ onClick, isStarted }: StartGameProps) => {
	return (
		<div>
			{!isStarted && (
				<BasicButton onClick={onClick} buttonTitle="Commencer la partie" />
			)}
		</div>
	);
};

export default StartGame;
