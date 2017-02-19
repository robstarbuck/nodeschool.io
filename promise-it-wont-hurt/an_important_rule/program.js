var Q = require('q');

function alwaysThrows() {
	return new Error('OH NOES');
}

function iterate(i) {
	console.log(i);
	return i + 1;
}

Q.fcall(function() {
	'use strict';
	for (let i = 1; i < 11; i++) {
		if (iterate(i) > 5) {
			throw alwaysThrows();
		};
	}
}).catch(console.log);

