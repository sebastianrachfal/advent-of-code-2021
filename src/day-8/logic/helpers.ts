const LEN_CHAR_MAP = {
	7: 8,
	4: 4,
	3: 7,
	2: 1,
};

export const signalDiff = (s1: string, s2: string) =>
	s1
		.split('')
		.filter((char) => !s2.includes(char))
		.join('');

export const signalContain = (s1: string, s2: string) =>
	signalDiff(s1, s2).length === s1.length - s2.length;

export const signalCompare = (s1: string, s2: string) =>
	s1.length === s2.length && signalContain(s1, s2);

export const mapValuesToSignalValuePairs = (values: string[]) =>
	values.map((entry) => {
		const [signals, values] = entry
			.split(' | ')
			.map((element) => element.split(' '));
		return { signals, values };
	});

export function getTranslationTable(signals: string[]) {
	const sixSegmentLefovers = [];
	const fiveSegmentLefovers = [];
	const table = [];

	for (const signal of signals) {
		if ([2, 3, 4, 7].includes(signal.length))
			table[LEN_CHAR_MAP[signal.length]] = signal;
		else if (signal.length === 6) sixSegmentLefovers.push(signal);
		else fiveSegmentLefovers.push(signal);
	}

	const bdSegment = signalDiff(table[4], table[1]);

	table[9] = sixSegmentLefovers.find(
		(signal) =>
			signalContain(signal, bdSegment) && signalContain(signal, table[1])
	);
	table[6] = sixSegmentLefovers.find(
		(signal) => signalContain(signal, bdSegment) && signal !== table[9]
	);
	table[0] = sixSegmentLefovers.filter(
		(signal) => ![table[9], table[6]].includes(signal)
	)[0];

	table[3] = fiveSegmentLefovers.find((signal) =>
		signalContain(signal, table[1])
	);
	table[5] = fiveSegmentLefovers.find((signal) =>
		signalContain(signal, bdSegment)
	);
	table[2] = fiveSegmentLefovers.filter(
		(signal) => ![table[5], table[3]].includes(signal)
	)[0];

	return table as string[];
}
