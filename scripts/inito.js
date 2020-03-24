'use strict';

const npm = require('npm');
const fs = require('fs');
const fileName = '../package.json';
const fileNameLock = '../package-lock.json';
const file = require(fileName);
const fileLock = require(fileNameLock);
const readline = require('readline');

const close = () => {
	process.exit(0);
};

npm.load(() => {
	console.log('\n🤟 PACKAGES INSTALLED!\n');

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	rl.question("🏷️  What's the name of your project? ", function(name) {
		file.name = name;
		fileLock.name = name;

		const data = JSON.stringify(file);
		const dataLock = JSON.stringify(fileLock);

		fs.writeFile('package.json', data, err => {
			if (err) throw err;
			console.log(`\n🤟 PROJECT NAME SUCCESSFULLY UPDATED TO [${name}]!`);

			fs.writeFile('package-lock.json', dataLock, err => {
				if (err) throw err;
				console.log(
					`\n🤟 PACKAGE-LOCK.JSON PROJECT NAME SUCCESSFULLY UPDATED TO [${name}]!`
				);

				npm.run('git:remove', err => {
					console.log('⛔ GIT REMOVED!');
					npm.run('git:init', () => {
						console.log('\n🤟 GIT INITIALIZED!');

						close();
					});
				});
			});
		});

		rl.on('close', function() {
			close();
		});
	});
});
