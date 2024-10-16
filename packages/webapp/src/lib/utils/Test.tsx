import { useState, useEffect } from 'react';

const GamePlay = () => {
	const [count, setCount] = useState(0);

	const clickOnButton = () => {
		setCount(count + 1);
	};
	useEffect(() => {
		if (count === 5) {
			console.log('vous avez cliqué cinq fois');
		}
	});

	return (
		<div>
			<button onClick={clickOnButton}>Clique</button>
		</div>
	);
};

export default GamePlay;
