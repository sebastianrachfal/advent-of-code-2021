import {
	calculateBoard,
	getBoardOverlaps,
	// printBoard
} from './helpers';

export function getOverlapCount(values: string[]) {
	const board = calculateBoard(values);

	// printBoard(board);

	return getBoardOverlaps(board);
}

export function getOverlapCountWithDiagonals(values: string[]) {
	const board = calculateBoard(values, false);

	// printBoard(board);

	return getBoardOverlaps(board);
}
