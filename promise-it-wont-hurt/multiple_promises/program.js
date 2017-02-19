'use strict';

function all(p1, p2) {

	var counter = 0;
	var sumArr = [];

	function checkcount(val, res) {

		counter++;
		sumArr.push(val);

		if (counter > 1) {
			res(sumArr);
		}

	}

	// console.log(p1());

	return new Promise(function(res) {

		p1().then(function(val) {
			return checkcount(val, res);
		});

		p2().then(function(val) {
			return checkcount(val, res);
		});

	});

}

all(getPromise1, getPromise2).then(console.log);

