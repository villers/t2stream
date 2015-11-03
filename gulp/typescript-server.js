'use strict';

var gulp        = require('gulp');
var typescript  = require('gulp-typescript');
var sourcemaps  = require('gulp-sourcemaps');
var path = require("path");

module.exports = function () {
    return gulp.src(['src/server/**/*.ts'])
    .pipe(sourcemaps.init())
    .pipe(typescript({ module: 'commonjs' }))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: "../src/server"}))
    .pipe(gulp.dest('dist/'));
};
