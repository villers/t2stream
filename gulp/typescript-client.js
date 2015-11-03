'use strict';

var gulp        = require('gulp');
var concat      = require('gulp-concat');
var typescript  = require('gulp-typescript');
var sourcemaps  = require('gulp-sourcemaps');

module.exports = function () {
    return gulp.src(['src/client/**/*.ts'])
    .pipe(sourcemaps.init())
    .pipe(typescript({ sortOutput: true }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/public/'));
};
