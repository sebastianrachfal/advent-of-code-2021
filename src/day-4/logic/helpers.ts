import { Board } from './Board';

export function parseInput(values: string[]) {
	const tempValues = [...values];
	const boards = [] as Board[];

	const numbers = tempValues.shift().split(',');

	while (tempValues.indexOf('') !== -1) {
		tempValues.shift();
		boards.push(new Board(tempValues.splice(0, 5)));
	}

	return { numbers, boards };
}

export function findPosition(board: string[][], value: string) {
	for (let i = 0; i < board.length; i++)
		for (let j = 0; j < board[i].length; j++)
			if (board[i][j] === value) return { row: i, col: j };

	return null;
}
