import { Tag, Text } from '@chakra-ui/react';

type HitsHistoryTagProps = {
	hitHistory: string;
};

const HitsHistoryTag = ({ hitHistory }: HitsHistoryTagProps) => {
	return (
		<Tag>
			<Text>{hitHistory}</Text>
		</Tag>
	);
};

export default HitsHistoryTag;
