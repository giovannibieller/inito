'use strict';

const fs = require('fs');
const fileName = '../package.json';
const fileNameLock = '../package-lock.json';
const file = require(fileName);
const fileLock = require(fileNameLock);
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const close = () => {
	process.exit(0);
};

rl.question("\n💫 What's the level of version? (1|2|3) ", function(level) {
	if (level !== '1' && level !== '2' && level !== '3') {
		console.log(`\n❌ ERROR: ACCEPTED VALUES ARE 1, 2, 3!\n`);
		close();
	}

	const levelArray = file.version.split('.');
	levelArray[level - 1] = parseInt(levelArray[level - 1], 10) + 1;

	file.version = levelArray.join('.');
	fileLock.version = levelArray.join('.');

	const data = JSON.stringify(file);
	const dataLock = JSON.stringify(fileLock);

	fs.writeFile('package.json', data, err => {
		if (err) throw err;
		console.log(`\n🤟 VERSION UPDATED TO [${file.version}]!\n`);

		fs.writeFile('package-lock.json', dataLock, err => {
			if (err) throw err;
			console.log(`🤟 PACKAGE-LOCK.JSON VERSION UPDATED TO [${file.version}]!\n`);

			close();
		});
	});
});

rl.on('close', function() {
	close();
});
