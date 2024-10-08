import { Box, Flex, Center } from '@chakra-ui/react';
import GameTitle from './GameTitle';
import PlayerSection from '../player/PlayerSection';
import HumanAvatar from '../../assets/images/avatars/HumanAvatar';
import RobotAvatar from '../../assets/images/avatars/RobotAvatar';
import GameLayout from '../GameLayout';
import PlayerName from '../player/PlayerName';

const AppLayout = () => {
	return (
		<Box>
			<Center>
				<GameTitle gameTitle="Shifumi !"></GameTitle>
			</Center>
			<Flex justifyContent="space-around">
				<PlayerSection playerAvatar={<HumanAvatar />}>
					<PlayerName name="Moi"></PlayerName>
				</PlayerSection>
				<PlayerSection playerAvatar={<RobotAvatar />}>
					<PlayerName name="J-ordi"></PlayerName>
				</PlayerSection>
			</Flex>
			<GameLayout></GameLayout>
		</Box>
	);
};
export default AppLayout;

// <ButtonWithIllu width={297} buttonTitle="Commencer la partie" />
