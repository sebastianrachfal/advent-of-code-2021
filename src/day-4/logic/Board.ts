import { findPosition } from './helpers';

export class Board {
	board: string[][];
	counters = {
		rows: [0, 0, 0, 0, 0],
		cols: [0, 0, 0, 0, 0],
	};

	constructor(lines: string[]) {
		this.board = lines.map((line) =>
			line.replace(/\s+/g, ' ').trim().split(' ')
		);
	}

	selectValue(value: string) {
		const position = findPosition(this.board, value);

		if (!position) return false;

		const { row, col } = position;

		this.board[row][col] = null;

		if (++this.counters.rows[row] === 5 || ++this.counters.cols[col] === 5)
			return true;

		return false;
	}

	calculateValue() {
		return this.board
			.flatMap((items) => items.filter(Boolean).map(Number))
			.reduce((a, b) => a + b, 0);
	}
}
