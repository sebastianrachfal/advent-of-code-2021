import { execSync } from 'child_process';

const sectionName = process.argv[2];

console.info(`Running section \`${sectionName}\``);

execSync(`npx nodemon ./src/${sectionName}/index.ts`, {
	stdio: 'inherit',
});
