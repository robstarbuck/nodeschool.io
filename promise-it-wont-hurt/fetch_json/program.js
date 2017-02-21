var HTTP = require('http');

var options = {
	host: 'localhost',
	port: 1337,
	method: 'GET'
};

HTTP.get(options, function(res) {
	res.on('data', function(d) {
		console.log(JSON.parse(d));
	});
}).on('error', function(e) {
	console.log(e.message);
});

