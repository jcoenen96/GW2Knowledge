var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {

});
server.listen(1337, function() { });

wsServer = new WebSocketServer({
    httpServer: server
});

wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);

    connection.on('open', function(e){

    });

    connection.on('message', function(message) {

    });

    connection.on('close', function(e) {

    });
});