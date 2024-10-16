import { useState } from 'react';

const initialsSymbols = [
	{ id: null, name: 'stone' },
	{ id: 2, name: 'leaf' },
];

type MyArray = {
	id: number;
	name: string;
}[];

export default function ChangeArray() {
	const [symbols, setSymbols] = useState<MyArray>(initialsSymbols);

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
