import { Text } from '@chakra-ui/react';

type GameRulesProps = {
	rule: string;
};

const GameRules = ({ rule }: GameRulesProps) => {
	return <Text padding={3}>{rule}</Text>;
};

export default GameRules;
