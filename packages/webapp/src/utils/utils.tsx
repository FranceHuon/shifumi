enum Choice {
	LEAF = 'LEAF',
	STONE = 'STONE',
	SCISSORS = 'SCISSORS',
}

const choicesMap = {
	[Choice.LEAF]: {
		icon: <LeafIcon />,
		name: 'Papier',
	},
	[Choice.STONE]: {
		icon: <LeafIcon />,
		name: 'Papier',
	},
	[Choice.SCISSORS]: {
		icon: <LeafIcon />,
		name: 'Papier',
	},
};

const currentInfos = choicesMap[choice];
