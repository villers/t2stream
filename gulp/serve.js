'use strict';

var gulp       = require('gulp');
var ripe       = require('ripe');
var nodemon    = require('gulp-nodemon');
var bsync      = require('browser-sync');

var port = process.env.PORT || 4444;
var openOpts = {
    url: 'http://localhost:' + port,
    already: false
};

module.exports = {
    nodemon: function (cb) {
        return nodemon({
            script: 'index.js',
            ext: 'js',
            cwd : 'dist'
        })
        .on('start', function () {
            if (!openOpts.already) {
                openOpts.already = true;
                ripe.wait(cb);
            } else {
                ripe.wait(function () {
                    bsync.reload({ stream: false });
                });
            }
        });
    },
    bsync: function () {
        bsync.init({
            proxy: 'localhost:9000',
            browser: process.env.BROWSER || 'google chrome',
            online: false,
            notify: false,
            watchOptions: {
                interval: 500
            }
        });
    }
};
