var parsePromised = function(json) {

	return new Promise(function(fufill, reject) {

		try {
			fufill(JSON.parse(json));
		} catch (e) {
			reject(e);
		}

	});
};

parsePromised(process.argv[2]).then(null, console.log);

