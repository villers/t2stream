'use strict';

var gulp = require('gulp');
var flatten = require('gulp-flatten');

module.exports = function () {
    gulp.src([__dirname + '/../src/server/**/*', '!'+__dirname + '/../src/server/**/*.ts'])
    .pipe(flatten())
    .pipe(gulp.dest(__dirname + '/../dist/'));

    return gulp.src([__dirname + '/../src/client/**/*', '!'+__dirname + '/../src/client/**/*.ts', '!'+__dirname + '/../src/client/**/*.styl', '!'+__dirname + '/../src/client/index.html'])
    .pipe(flatten())
    .pipe(gulp.dest(__dirname + '/../dist/public'));
};