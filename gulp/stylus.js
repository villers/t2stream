'use strict';

var gulp    = require('gulp');
var bsync      = require('browser-sync');
var plumber = require('gulp-plumber');
var stylus    = require('gulp-stylus');
var sourcemaps  = require('gulp-sourcemaps');
var argv        = require('yargs').argv;
var gulpif      = require('gulp-if');

module.exports = function () {
    return gulp.src('src/client/**/*.styl')
        .pipe(gulpif(!argv.production, sourcemaps.init()))
        .pipe(plumber())
        .pipe(stylus())
        .pipe(gulpif(!argv.production, sourcemaps.write()))
        .pipe(gulp.dest('dist/public'))
        .pipe(bsync.reload({ stream: true }));
};
