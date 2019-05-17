//This is index.js File

function add(a, b){
	return a+b;
}

console.log(add(10, 12))

var shell = require('shelljs');

if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
  shell.echo('Error: Git commit failed');
  shell.exit(1);
}