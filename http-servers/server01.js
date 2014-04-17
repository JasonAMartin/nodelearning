/**
 * Created by JAM on 4/15/2014.
 */

//my first vanilla server in Node

var http = require('http');

var server = http.createServer(function(request,response){
        console.log("Request incoming ...");
        response.end('I\'m done with this request');
});

server.listen(8080);