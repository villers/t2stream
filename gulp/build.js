'use strict';

var gulp = require('gulp');
var flatten = require('gulp-flatten');

module.exports = function () {
    gulp.src(['src/server/**/*', '!src/server/**/*.ts'])
    .pipe(flatten())
    .pipe(gulp.dest('dist/'));

    return gulp.src(['src/client/**/*', '!src/client/**/*.ts', '!src/client/**/*.styl'])
    .pipe(flatten())
    .pipe(gulp.dest('dist/public'));
};