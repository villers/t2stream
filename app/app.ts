/// <reference path="../typings/tsd.d.ts" />

import express = require('express');
import path = require('path');

var app : express.Express = express();

app.get("/", (request, Result) => {
	Result.send('hello world');
});


var port: number = process.env.PORT || 3000;
var server = app.listen(port, () => {
	var listeningPort: number = server.address().port;
	console.log('The server is listening on port: ' + listeningPort);
});
