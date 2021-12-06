import { getInputLines } from '@/shared';
import { getCompleteDiagnosticData, getDiagnosticData } from './logic';

let { values, error } = getInputLines(__dirname, './input.txt');

if (error) throw error;

const { gamma, epsilon } = getDiagnosticData(values);
console.log('default', { gamma, epsilon, product: gamma * epsilon });

const { oxygen, co2 } = getCompleteDiagnosticData(values);
console.log('complete', { oxygen, co2, product: oxygen * co2 });
