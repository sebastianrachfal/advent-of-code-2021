import { readFileSync } from 'fs';
import { join } from 'path/posix';

export function getInputLines(dir: string, inputName: string) {
	let values = [];
	let error: Error = null;

	try {
		const file = readFileSync(join(dir, inputName), {
			encoding: 'utf-8',
			flag: 'r',
		});

		values = file.split('\n');

		if (!values.length)
			error = new Error('Input file is missing lines of input');
	} catch (e) {
		error = new Error(`Problem with reading file \`input.txt\`[${e}]`);
	}

	return { values, error };
}
