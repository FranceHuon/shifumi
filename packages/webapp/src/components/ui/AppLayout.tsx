import { Wrap, WrapItem } from '@chakra-ui/react';
import GameTitle from './GameTitle';
import GameLayout from '../GameLayout';
import PlayerSection from '../player/PlayerSection';
import PlayerName from '../player/PlayerName';
import RobotAvatar from '../../assets/images/avatars/RobotAvatar';
import HumanAvatar from '../../assets/images/avatars/HumanAvatar';

import { useState } from 'react';
import StartGaming from '../../views/StartGame';

const AppLayout = () => {
	const [isStarted, setIsStarted] = useState(false);
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
			<GameLayout isStarted={isStarted} />
			{/* <BasicButton {handleClick} buttonTitle="Commencer la partie" /> */}
			<StartGaming onClick={() => setIsStarted(true)} isStarted={isStarted} />
		</Wrap>
	);
};
export default AppLayout;
