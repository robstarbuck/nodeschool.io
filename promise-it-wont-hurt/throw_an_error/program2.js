new Promise(function(fufill, reject) {

	try {
		fufill(JSON.parse(process.argv[2]));
	} catch (e) {
		reject(e);
	}

}).then(null, console.log);

