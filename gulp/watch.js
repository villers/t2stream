'use strict';

var gulp       = require('gulp');
var bsync      = require('browser-sync');
var watch      = require('gulp-watch');
var inject     = require('gulp-inject');
var plumber    = require('gulp-plumber');
var stylus       = require('gulp-stylus');

module.exports = function () {
    watch(['src/client/**/*.styl'], function () {
        gulp.run('typescript-client');
    });

    watch(['src/client/**/*.ts'], function () {
        gulp.run('typescript-client');
    });

    watch(['src/server/**/*.ts'], function () {
        gulp.run('typescript-server');
    });

    watch(['dist/public/index.html', 'dist/public/app.js'], bsync.reload);
};
