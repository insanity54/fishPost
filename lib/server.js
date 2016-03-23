var WebSocket = require('ws');

var port = process.env.PORT || 18466;
var host = process.env.HOST || 'localhost';

var ws = new WebSocket('ws://'+host+':'+port, {protocolVersion: 8});



ws.on('open', function open() {
    console.log('connect');
    ws.send('something', function ack(err) {
	console.error(err)
    });
});

ws.on('message', function(data, flags) {
    console.log(data);
    console.logs(flags);
  // flags.binary will be set if a binary data is received.
  // flags.masked will be set if the data was masked.
});

ws.on('close', function close() {
    console.log('disco');
});

