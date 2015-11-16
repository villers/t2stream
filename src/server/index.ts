/// <reference path="./server.d.ts" />

import express = require('express');
import path = require('path');
import bootable = require('bootable');
import http = require('http');
import IoC = require('electrolyte');

var port: number = process.env.PORT || 4444;

var appBootable: express.Express & Bootable.bootable<express.Express> = bootable(express());

appBootable.phase(bootable.initializers('init/'));

appBootable.phase(bootable.routes('route.js'));

appBootable.phase(() => {
    var DB = IoC.create('database');
    DB.sync().then(() => {
        console.log('DB is synced');
        var server: http.Server = appBootable.listen(port, () => {
            var listenPort: number = server.address().port;
            console.log('The server is listening on port: ' + listenPort);
        });
    });
});

appBootable.boot((err) => {
    if (err) {
        console.log('Something went wrong ' + JSON.stringify(err));
    } else {
        console.log('Application Started');
    }
});