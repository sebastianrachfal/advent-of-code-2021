import { getInputLines } from '@/shared';
import {
	getLowestPossibleCorrectedFuelUsage,
	getLowestPossibleFuelUsage,
} from './logic';

let { values, error } = getInputLines(__dirname, './input.txt');

if (error) throw error;

console.log('default', getLowestPossibleFuelUsage(values[0]));

console.log('corrected', getLowestPossibleCorrectedFuelUsage(values[0]));
