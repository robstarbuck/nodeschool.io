var through = require('through2');
var split = require('split');
var i = 0;

process.stdin
	.pipe(split())
	.pipe(through(function(line,_,next){

		// ORIGINAL MERELY 
		// console.log(line.toString()[['toLowerCase','toUpperCase'][i++ % 2]]());
		this.push(line.toString()[['toLowerCase','toUpperCase'][i++ % 2]]()+'\n');
		next();
	}))
	.pipe(process.stdout);