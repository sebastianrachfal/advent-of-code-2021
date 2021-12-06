export function calculateChanges(values: (string | number)[]) {
	let lastValue: number = null;
	let increased = 0,
		decreased = 0;

	for (let value of values) {
		if (lastValue) {
			increased += +(+value > lastValue);
			decreased += +(+value < lastValue);
		}

		lastValue = +value;
	}

	return { increased, decreased };
}

export function calculateSlidingChanges(values: string[]) {
	const newValues = values
		.map((_, index, arr) => {
			if (index >= arr.length - 2) return undefined;
			return arr
				.slice(index, index + 3)
				.map(Number)
				.reduce((a, b) => +a + +b);
		})
		.filter((value) => typeof value !== 'undefined');

	return calculateChanges(newValues);
}
