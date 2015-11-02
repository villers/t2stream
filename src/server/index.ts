/// <reference path="./server.d.ts" />

import express = require("express");
import path = require("path");

var app : express.Express = express();

app.get("/", (req, res) => {
   res.send("Hello World"); 
});

var port: number = process.env.PORT || 4444;
var server = app.listen(port, () => {
    var listenPort : number = server.address().port;
    console.log("The server is listening on port " + listenPort);
});