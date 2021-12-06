export function getSubmarineDepths(values: string[]) {
	let horizontal = 0,
		depth = 0;

	for (const value of values) {
		const [direction, amount] = value.split(' ');

		switch (direction.length) {
			case 7:
				horizontal += +amount;
				break;
			case 4:
				depth += +amount;
				break;
			case 2:
				depth -= +amount;
				break;
		}
	}

	return { horizontal, depth };
}
export function getCorrectedSubmarineDepths(values: string[]) {
	let horizontal = 0,
		depth = 0,
		aim = 0;

	for (const value of values) {
		const [direction, amount] = value.split(' ');

		switch (direction.length) {
			case 7:
				horizontal += +amount;
				depth += aim * +amount;
				break;
			case 4:
				aim += +amount;
				break;
			case 2:
				aim -= +amount;
				break;
		}
	}

	return { horizontal, depth };
}
