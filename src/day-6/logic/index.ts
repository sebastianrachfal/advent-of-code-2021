const offspringScoreAtDay = {};

function calculatePopulation(item: number, days: number) {
	if (item > days) return 1;

	const daysLeftAfterFirstOffspring = days - item - 1;
	const newOffspringAt = [];

	for (let i = daysLeftAfterFirstOffspring; i >= 0; i -= 7)
		newOffspringAt.push(i);

	for (let item of new Set(newOffspringAt))
		if (!offspringScoreAtDay[item])
			offspringScoreAtDay[item] = calculatePopulation(8, item);

	return 1 + newOffspringAt.reduce((a, b) => a + offspringScoreAtDay[b], 0);
}

export function getPopulationByDay(initialState: string, days: number) {
	const popMap = {};
	let population = initialState.split(',');

	for (let item of new Set(population))
		popMap[item] = calculatePopulation(+item, days);

	return population.reduce((a, b) => a + popMap[b], 0);
}
