var express = require('express');
var fs = require('fs');
var k = fs.readFileSync('index.html','utf8');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
//  response.send( k );
  response.end( k.toString() );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
