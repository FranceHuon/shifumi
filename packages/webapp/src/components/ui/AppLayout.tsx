import { Box, Flex, Center, Wrap, WrapItem } from '@chakra-ui/react';
import GameTitle from './GameTitle';
import GameLayout from '../GameLayout';
import PlayerSection from '../player/PlayerSection';
import PlayerName from '../player/PlayerName';
import RobotAvatar from '../../assets/images/avatars/RobotAvatar';
import HumanAvatar from '../../assets/images/avatars/HumanAvatar';
import BasicButton from './BasicButton';

const AppLayout = () => {
	return (
		<Wrap spacing="30px" justify="center" padding="30px">
			<WrapItem>
				<GameTitle gameTitle="Shifumi !"></GameTitle>
			</WrapItem>
			<PlayerSection playerAvatar={<HumanAvatar />}>
				<PlayerName name="Moi"></PlayerName>
			</PlayerSection>
			<PlayerSection playerAvatar={<RobotAvatar />}>
				<PlayerName name="J-ordi"></PlayerName>
			</PlayerSection>
			<GameLayout></GameLayout>
			<BasicButton buttonTitle="Commencer la partie" />
		</Wrap>
	);
};
export default AppLayout;

// <ButtonWithIllu width={297} buttonTitle="Commencer la partie" />
