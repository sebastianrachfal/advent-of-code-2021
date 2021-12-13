import {
	getTranslationTable,
	mapValuesToSignalValuePairs,
	signalCompare,
} from './helpers';

export function getUniqueSevenSegmentCount(values: string[]) {
	const pairs = mapValuesToSignalValuePairs(values);

	return pairs.reduce(
		(a, b) =>
			a +
			b.values.filter((value) => [2, 3, 4, 7].includes(value.length))
				.length,
		0
	);
}

export function translateInputsIntoValue(values: string[]) {
	const pairs = mapValuesToSignalValuePairs(values);

	return pairs.reduce((a, b) => {
		const translationTable = getTranslationTable(b.signals);
		return (
			a +
			+b.values
				.map((signal) =>
					translationTable.findIndex((translationEntry) =>
						signalCompare(translationEntry, signal)
					)
				)
				.join('')
		);
	}, 0);
}
