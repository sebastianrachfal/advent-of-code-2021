import { getInputLines } from '@/shared';
import { getPopulationByDay } from './logic';

let { values, error } = getInputLines(__dirname, './input.txt');

if (error) throw error;

console.time('execution');

console.log('default', getPopulationByDay(values[0], 256));
console.log('entire ocean', getPopulationByDay(values[1], 256));

console.timeEnd('execution');
