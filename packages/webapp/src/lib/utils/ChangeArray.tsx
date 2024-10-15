import { useState } from 'react';

const initialsSymbols = [
	{ id: 1, name: 'stone' },
	{ id: 2, name: 'leaf' },
];

export default function ChangeArray() {
	const [symbols, setSymbols] = useState(initialsSymbols);

	function addSymbols() {
		setSymbols([...symbols, { id: 3, name: 'scissors' }]);
	}

	return (
		<div>
			<button onClick={addSymbols}>Ajouter ciseaux</button>
			{symbols.map((symbol) => (
				<li key={symbol.id}>{symbol.name}</li>
			))}
		</div>
	);
}
