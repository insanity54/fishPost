var path = require('path');
var server = require(path.join(__dirname, 'server'));
var Worker = require(path.join(__dirname, 'worker'));
var url = require('url');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });



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

