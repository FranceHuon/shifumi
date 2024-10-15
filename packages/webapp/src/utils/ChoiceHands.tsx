import BlueLeafIllu from '../../assets/images/illus/blue/BlueLeafIllu';
import BlueScissorsIllu from '../../assets/images/illus/blue/BlueScissorsIllu';
import BlueStoneIllu from '../../assets/images/illus/blue/BlueStoneIllu';
import SymbolCard from '../../components/ui/SymbolCard';

type ChoiceHandsProps = {
	choiceCard: boolean;
};

const ChoiceHands = ({ choiceCard }: ChoiceHandsProps) => {
	return (
		<div>
			{choiceCard && (
				<div>
					<SymbolCard
						backgroundColor="primary.hardBlue"
						borderColor="secondary.electricBlue"
						color="primary.hardBlue"
						illu={<BlueStoneIllu />}
						symbolName="Pierre"
					/>
					<SymbolCard
						backgroundColor="primary.hardBlue"
						borderColor="secondary.electricBlue"
						color="primary.hardBlue"
						illu={<BlueLeafIllu />}
						symbolName="Feuille"
					/>
					<SymbolCard
						backgroundColor="primary.hardBlue"
						borderColor="secondary.electricBlue"
						color="primary.hardBlue"
						illu={<BlueScissorsIllu />}
						symbolName="Ciseaux"
					/>
				</div>
			)}
		</div>
	);
};

export default ChoiceHands;
