/// <reference path="./server.d.ts" />

import express = require('express');
import path = require('path');
import bootable = require('bootable');
import http = require('http');

var port: number = process.env.PORT || 4444;

var appBootable : express.Express & Bootable.bootable<express.Express> = bootable(express());
appBootable.phase(bootable.routes('route.js'));

appBootable.phase(() => {
    var server: http.Server  = appBootable.listen(port, () => {
        var listenPort : number = server.address().port;
        console.log('The server is listening on port: ' + listenPort);
    });
});

appBootable.boot((err) => {
    if (err) {
        console.log('Something went wrong');
    } else {
        console.log('Application Started');
    }
});