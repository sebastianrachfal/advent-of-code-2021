import { getInputLines } from '@/shared';
import { getLoosingBoardScore, getWinningBoardScore } from './logic';

let { values, error } = getInputLines(__dirname, './input.txt');

if (error) throw error;

console.log({
	winningScore: getWinningBoardScore(values),
	loosingScore: getLoosingBoardScore(values),
});
