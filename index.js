//This is index.js File

function add(a, b){
	return a+b;
}

console.log(add(10, 12))

var shell = require('shelljs');

if (shell.exec('git add index.js').code !== 0) {
  shell.echo('Error: Git commit failed');
  shell.exit(1);
}

if(shell.exec('git config --global user.email "allahbuksh241@gmail.com"')) {
	if(shell.exec('git config --global user.name "AllahBuksh"')){
		shell.exec('git commit -m "Auto-commit"');
		shell.exec('git remote add origin https://github.com/AllahBuksh/Pub1');
		shell.exec('git push origin master');
		
		shell.echo('User Configured');
	}
}/**/

/*if (shell.exec('git commit -m "Auto-commit"').code !== 0) {
  shell.echo('Error: Git commit failed');
  shell.exit(1);
}


if (shell.exec('git remote add origin https://github.com/AllahBuksh/Pub1').code !== 0) {
  shell.echo('Error: Git commit failed');
  shell.exit(1);
}*/

/*
if (shell.exec('git remote -v').code !== 0) {
  shell.echo('Error: Git commit failed');
  shell.exit(1);
}

if (shell.exec('git push origin master')) {
  shell.echo('Error: Git commit failed');
  shell.exit(1);
}*/