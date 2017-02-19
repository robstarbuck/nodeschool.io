var parsePromised = function(json) {

	return new Promise(function(fufill, reject) {

		try {
			fufill(JSON.parse(json));
		} catch (e) {
			reject(e);
		}

	});
};

parsePromised(process.argv[2]).catch(console.log);


// Also valid
// new Promise(function(fufill, reject) {

// 	try {
// 		fufill(JSON.parse(process.argv[2]));
// 	} catch (e) {
// 		reject(e);
// 	}

// }).then(null, console.log);

