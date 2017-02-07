var http = require('http');

var server = http.createServer(function (req, res) {

    if (req.method === 'POST') {
        req.on('data', function (data) {
            this.queue(data.toString());
        }).pipe(res);
    }

});
server.listen(process.argv[2]);

