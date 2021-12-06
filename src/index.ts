import { execSync } from 'child_process';

const sectionName = process.argv[2];

console.info(`Running section \`${sectionName}\``);

execSync(`${process.argv[0]} ./src/${sectionName}/index.ts`, {
	stdio: 'inherit',
});
