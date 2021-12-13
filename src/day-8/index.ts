import { getInputLines } from '@/shared';
import { getUniqueSevenSegmentCount, translateInputsIntoValue } from './logic';

let { values, error } = getInputLines(__dirname, './input.txt');

if (error) throw error;

console.log('default', getUniqueSevenSegmentCount(values));

console.log('default', translateInputsIntoValue(values));
