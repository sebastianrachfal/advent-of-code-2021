import { getInputLines } from '@/shared';
import { calculateChanges, calculateSlidingChanges } from './logic';

let { values, error } = getInputLines(__dirname, './input.txt');

if (error) throw error;

console.log({
	normal: calculateChanges(values),
	sliding: calculateSlidingChanges(values),
});
