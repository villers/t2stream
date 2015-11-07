'use strict';

var gulp        = require('gulp');
var typescript  = require('gulp-typescript');
var sourcemaps  = require('gulp-sourcemaps');
var argv        = require('yargs').argv;
var gulpif      = require('gulp-if');

module.exports = function () {
    return gulp.src([__dirname + '/../src/server/**/*.ts'])
        .pipe(gulpif(!argv.production, sourcemaps.init()))
        .pipe(typescript({ module: 'commonjs' }))
        .pipe(gulpif(!argv.production, sourcemaps.write({includeContent: false, sourceRoot: "../src/server"})))
        .pipe(gulp.dest(__dirname + '/../dist/'));
};
