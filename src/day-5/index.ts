import { getInputLines } from '@/shared';
import { getOverlapCount, getOverlapCountWithDiagonals } from './logic';

let { values, error } = getInputLines(__dirname, './input.txt');

if (error) throw error;

console.log('default', getOverlapCount(values));
console.log('diagonals', getOverlapCountWithDiagonals(values));
