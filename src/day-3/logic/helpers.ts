export const getFrequencies = (values: string[]) =>
	values.reduce<number[]>((a, b) => {
		const numMap = b.split('').map(Number);

		if (!a.length) return numMap;

		return numMap.map((val, index) => val + +a[index]);
	}, []);

export const freqsToDecimal = (
	freqs: number[],
	valLen: number,
	majority = true
) =>
	parseInt(
		freqs.map((val) => +(majority ? val >= valLen : val < valLen)).join(''),
		2
	);

export const valuesToRate = (values: string[], oxygen = true) => {
	let rateValues = [...values];
	let filterIndex = 0;

	do {
		const freq = getFrequencies(rateValues);

		rateValues = rateValues.filter((value) => {
			const f = freq[filterIndex];
			const l = rateValues.length / 2;

			const gam = (oxygen ? f > l : f < l)
				? 1
				: (oxygen ? f < l : f > l)
				? 0
				: +oxygen;

			return +value[filterIndex] === gam;
		});

		filterIndex++;
	} while (rateValues.length !== 1);

	return parseInt(rateValues[0], 2);
};
