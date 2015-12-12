/// <reference path="index.d.ts" />
'use strict';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as Waterline from 'waterline';

import {config} from './config/config';
import {User} from './models/user';

import {unauthorized, forbidden, badRequest, genericError, pageNotFound} from './middlewares/error';
import {isAuthenticated} from './middlewares/isAuthenticated';

import {anonymousRoutes} from './routes/anonymous';
import {authenticatedRoutes} from './routes/authenticated';

// Init express app
let app: any = express();
let port: number = config.server.port;

// Set token in app object.
app.set('token-secret', config.token.secret);
app.set('token-issuer', config.token.issuer);
app.set('token-expires-in-seconds', config.token.expiresInSeconds);

// Init database
let orm: waterline.Waterline = new Waterline();

// Load models
orm.loadCollection(User);

// Use body-parser to get info from request.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Load static file folder
app.use(express.static(__dirname + '/public/'));

// Add anonymous routes in app
app.use('/', [
    anonymousRoutes()
]);

// Add authenticated routes in app
app.use('/api', [
    isAuthenticated,
    authenticatedRoutes()
]);

// Add error handler
app.use([
    unauthorized,
    forbidden,
    badRequest,
    genericError,
    pageNotFound
]);

// Initialize orm with database config and start server.
orm.initialize(config.database, function (err: waterline.WLError, models: any) {
    if (err) {
        throw err;
    }

    // Add orm connections and models
    app.models = models.collections;
    app.connections = models.connections;

    // Start the server.
    app.listen(port);

    console.log(`Server started at port ${port}`);
});
