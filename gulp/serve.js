'use strict';

var gulp       = require('gulp');
var ripe       = require('ripe');
var nodemon    = require('gulp-nodemon');
var bsync      = require('browser-sync');

var port = process.env.PORT || 4444;

module.exports = {
    nodemon: function (cb) {
        var started = false;

        return nodemon({
            script: 'index.js',
            watch: ['dist/index.js']
        })
        .once('start', cb)
        .on('restart', function onRestart() {
          setTimeout(function reload() {
            bsync.reload({
              stream: false
            });
          }, 500);
        });
    },
    bsync: function () {
        bsync.init(null, {
            proxy: 'http://localhost:' + port,
            browser: "google chrome",
            port: 7000
        });
    }
};
