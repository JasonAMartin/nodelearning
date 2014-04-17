/**
 * Created by JAM on 4/15/2014.
 */

//next server attempt
    //NOTES: process.exit() shuts node server down ( 0 = no error, 1 = error). req is an object and req.url shows requested URL like '/this'

var http = require('http');

function request_handler(req,res) {
    var body="You've requested something from me: " + req.url;
    if(req.url==='/goodies') body += ' --- BONUS! --- ';
    if(req.url==='/shutdown') {
        body += ' **SHUTDOWN** ';
    }
    var content_length = body.length;

    res.writeHead(200, {
       'Content-Type': 'text/plain',
       'Content-Length': content_length
    });

    res.end(body);

    if(req.url==='/shutdown') process.exit(0);
}

var server = http.createServer(request_handler);
server.listen(8080);