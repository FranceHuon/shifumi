import BasicButton from '../components/ui/BasicButton';
import LeafCard from '../assets/images/cards/LeafCard';
type StartGamingProps = {
	onClick: () => void;
	isStarted: boolean;
};
const StartGaming = ({ onClick, isStarted }: StartGamingProps) => {
	return (
		<div>
			{!isStarted && (
				<BasicButton onClick={onClick} buttonTitle="Commencer la partie" />
			)}
		</div>
	);
};

export default StartGaming;
