import { getInputLines } from '@/shared';
import { getCorrectedSubmarineDepths, getSubmarineDepths } from './logic';

let { values, error } = getInputLines(__dirname, './input.txt');

if (error) throw error;

const { horizontal, depth } = getSubmarineDepths(values);
console.log('standard', {
	values: { horizontal, depth },
	product: horizontal * depth,
});

const { horizontal: corrected_horizontal, depth: corrected_depth } =
	getCorrectedSubmarineDepths(values);
console.log('corrected', {
	values: { corrected_horizontal, corrected_depth },
	product: corrected_horizontal * corrected_depth,
});
