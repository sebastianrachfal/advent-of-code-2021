import { calculateBoard, printBoard } from './helpers';

export function getOverlapCount(values: string[]) {
	const board = calculateBoard(values);

	// printBoard(board);

	return board.reduce(
		(a, b) => a + (b ? b.filter((item) => item > 1).length : 0),
		0
	);
}

export function getOverlapCountWithDiagonals(values: string[]) {
	const board = calculateBoard(values, false);

	// printBoard(board);

	return board.reduce(
		(a, b) => a + (b ? b.filter((item) => item > 1).length : 0),
		0
	);
}
