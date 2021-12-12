export function calculateBoard(values: string[], filterDiagonal = true) {
	const board = [];

	const mappedLines = values
		.map((value) => {
			const [pos1, pos2] = value
				.split(' -> ')
				.map((positionString) => positionString.split(',').map(Number));

			if (filterDiagonal && pos1[0] !== pos2[0] && pos1[1] !== pos2[1])
				return null;

			return [pos1, pos2];
		})
		.filter(Boolean);

	for (const line of mappedLines) {
		let [curY, endY] = [line[0][1], line[1][1]];
		let [curX, endX] = [line[0][0], line[1][0]];

		const shouldYIncrement = curY <= endY;
		const shouldXIncrement = curX <= endX;

		curY += shouldYIncrement ? -1 : 1;
		curX += shouldXIncrement ? -1 : 1;

		while (curY !== endY || curX !== endX) {
			if (shouldYIncrement ? curY < endY : curY > endY)
				curY += shouldYIncrement ? 1 : -1;
			if (shouldXIncrement ? curX < endX : curX > endX)
				curX += shouldXIncrement ? 1 : -1;

			if (!board[curY]) board[curY] = [];

			board[curY][curX] = (board[curY][curX] || 0) + 1;
		}
	}

	return board;
}

export function printBoard(board: number[][]) {
	const width = Math.max(
		...board.map((line) => (line ? line?.length : 0)).filter(Boolean)
	);

	let filledBoard = [];

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < width; j++) {
			if (!filledBoard[i]) filledBoard[i] = [];
			filledBoard[i][j] = board[i]?.[j] || '.';
		}
	}
	console.log('\n');
	console.log(filledBoard.map((line) => line.join('')).join('\n'));
}
