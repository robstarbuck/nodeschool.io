var HTTP = require('http');

var options = {
	host: 'localhost',
	port: 7000,
	method: 'GET',
	path: '',
};

HTTP.get(options, function(res) {
	// console.log(res);
	res.on('data', function(d) {

		options.path = '/' + Buffer.from(d).toString('utf8');
		options.port = 7001;

		HTTP.get(options, function(res) {

			res.on('data', function(d) {
				console.log(JSON.parse(d));
			});

		});

	});
}).on('error', function(e) {
	console.log(e.message);
});

