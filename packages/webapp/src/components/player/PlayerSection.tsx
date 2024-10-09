import { Grid, GridItem } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type PlayerSectionProps = PropsWithChildren<{
	playerAvatar: React.ReactElement;
}>;
const PlayerSection = ({ playerAvatar, children }: PlayerSectionProps) => {
	return (
		<Grid
			// height={60}
			// width={196}
			templateRows="repeat(2, 1fr)"
			templateColumns="1fr 2fr"
			gap={2}
		>
			<GridItem rowSpan={2}>{playerAvatar}</GridItem>
			<GridItem>{children}</GridItem>
		</Grid>
	);
};

export default PlayerSection;
