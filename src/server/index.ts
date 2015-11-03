/// <reference path="./server.d.ts" />

import express = require('express');
import path = require('path');

var app : express.Express = express();

app.use(express.static('public'));

var port: number = process.env.PORT || 4444;
var server: any = app.listen(port, () => {
    var listenPort : number = server.address().port;
    console.log('The server is listening on port ' + listenPort);
});