'use strict';

var gulp    = require('gulp');
var bsync      = require('browser-sync');
var plumber = require('gulp-plumber');
var stylus    = require('gulp-stylus');
var sourcemaps  = require('gulp-sourcemaps');
var argv        = require('yargs').argv;
var gulpif      = require('gulp-if');
var concat = require('gulp-concat');


module.exports = function () {
    return gulp.src(__dirname + '/../src/client/**/*.styl')
        .pipe(gulpif(!argv.production, sourcemaps.init()))
        .pipe(plumber())
        .pipe(stylus())
        .pipe(concat('css/app.css'))
        .pipe(gulpif(!argv.production, sourcemaps.write()))
        .pipe(gulp.dest(__dirname + '/../dist/public'))
        .pipe(bsync.reload({ stream: true }));
};
