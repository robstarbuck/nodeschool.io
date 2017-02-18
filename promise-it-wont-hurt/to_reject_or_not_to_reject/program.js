'use strict';

var promise = new Promise(function (fulfill, reject) {

	fulfill('I FIRED');

	reject(new Error('I DID NOT FIRE'));

});

var onRejected = function (error) {
	return console.log(error.message);
};

promise.then(console.log, onRejected);

