import { Board } from './Board';
import { parseInput } from './helpers';

export function getWinningBoardScore(values: string[]) {
	const { numbers, boards } = parseInput(values);

	for (let number of numbers)
		for (let board of boards)
			if (board.selectValue(number))
				return board.calculateValue() * +number;
}

export function getLoosingBoardScore(values: string[]) {
	const { numbers, boards } = parseInput(values);

	let tempBoards = [...boards];

	for (let number of numbers) {
		let leftoverBoards = [] as Board[];

		for (let board of tempBoards)
			if (!board.selectValue(number)) leftoverBoards.push(board);
			else if (tempBoards.length === 1)
				return tempBoards[0].calculateValue() * +number;

		tempBoards = leftoverBoards;
	}
}
