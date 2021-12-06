import { freqsToDecimal, getFrequencies, valuesToRate } from './helpers';

export function getDiagnosticData(values: string[]) {
	const frequencies = getFrequencies(values);

	const valLen = values.length / 2;

	const gamma = freqsToDecimal(frequencies, valLen);
	const epsilon = freqsToDecimal(frequencies, valLen, false);

	return { gamma, epsilon, frequencies, valLen };
}

export function getCompleteDiagnosticData(values: string[]) {
	const oxygen = valuesToRate(values);
	const co2 = valuesToRate(values, false);

	return {
		oxygen,
		co2,
	};
}
