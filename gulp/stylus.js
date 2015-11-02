'use strict';

var gulp    = require('gulp');
var bsync      = require('browser-sync');
var plumber = require('gulp-plumber');
var stylus    = require('gulp-stylus');

module.exports = function () {
    return gulp.src('src/client/**/*.styl')
        .pipe(plumber())
        .pipe(stylus())
        .pipe(gulp.dest('dist/public'))
        .pipe(bsync.reload({ stream: true }));
};
