'use strict';

var gulp          = require('gulp');
var concat        = require('gulp-concat');
var typescript    = require('gulp-typescript');
var sourcemaps    = require('gulp-sourcemaps');
var ngAnnotate    = require('gulp-ng-annotate');
var argv          = require('yargs').argv;
var gulpif        = require('gulp-if');


module.exports = function () {
    return gulp.src([__dirname + '/../src/client/**/*.ts'])
        .pipe(gulpif(!argv.production, sourcemaps.init()))
        .pipe(typescript({ sortOutput: true }))
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(gulpif(!argv.production, sourcemaps.write()))
        .pipe(gulp.dest(__dirname + '/../dist/public/'));
};
