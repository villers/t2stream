'use strict';

let diskAdapter = require('sails-disk');
let mysqlAdapter = require('sails-mysql');
let mongoAdapter = require('sails-mongo');
var nconf = require('nconf').file('./config/config.json');

export const config  = Object.freeze({
    name: nconf.get('name'),
    version: nconf.get('version'),
    token: {
        secret: nconf.get('token:secret'),
        issuer: nconf.get('token:issuer'),
        expiresInSeconds: nconf.get('token:expiresInSeconds') // default 24h
    },
    database: <waterline.ConfigOptions> {
        adapters: <waterline.Adapter> {
            'default': diskAdapter,
            'disk': diskAdapter,
            'mysql': mysqlAdapter,
            'mongo': mongoAdapter
        },
        connections: <waterline.Connection> {
            'disk': {
                adapter: 'disk',
                filePath: nconf.get('database:disk:url')
            }
            //'mongo': {
            //    adapter: 'mongo',
            //    url: nconf.get('database:mongo:url')
            //},
            //'mysql': {
            //    adapter: 'mysql',
            //    url: nconf.get('database:mysql:url')
            //}
        }
    },
    server: {
        port: nconf.get('server:port')
    }
});
