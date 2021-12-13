const calculatePathCost = (num: number) => {
	if (num === 0) return 0;

	let value = 1;

	for (let i = 2; i <= num; i++) value += i;

	return value;
};

const getFuelUsageByDestination = (
	positions: number[],
	value: number,
	factorial = false
) =>
	positions
		.map((position) => {
			const pathLen = Math.abs(position - value);

			return factorial ? calculatePathCost(pathLen) : pathLen;
		})
		.reduce((a, b) => a + b);

export function getLowestPossibleFuelUsage(positions: string) {
	const splitPositions = positions.split(',').map(Number);
	const medianValue = splitPositions.sort((a, b) => a - b)[
		Math.round(splitPositions.length / 2)
	];

	return getFuelUsageByDestination(splitPositions, medianValue);
}

export function getLowestPossibleCorrectedFuelUsage(positions: string) {
	const splitPositions = positions.split(',').map(Number);
	const avgValue = Math.floor(
		splitPositions.reduce((a, b) => a + b) / splitPositions.length
	);

	return getFuelUsageByDestination(splitPositions, avgValue, true);
}
