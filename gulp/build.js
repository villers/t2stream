'use strict';

var gulp = require('gulp');
var flatten = require('gulp-flatten');
var templateCache = require('gulp-angular-templatecache');

module.exports = function () {
    gulp.src([__dirname + '/../src/client/**/*.html', '!'+__dirname + '/../src/client/index.html'])
        .pipe(templateCache())
        .pipe(gulp.dest(__dirname + '/../dist/public/'));

    gulp.src([__dirname + '/../src/server/**/', '!'+__dirname + '/../src/server/**/*.ts'])
        .pipe(gulp.dest(__dirname + '/../dist/'));

    return gulp.src([__dirname + '/../src/client/**', '!'+__dirname + '/../src/client/**/*.ts', '!'+__dirname + '/../src/client/**/*.styl', '!'+__dirname + '/../src/client/**/*.html'])
        .pipe(gulp.dest(__dirname + '/../dist/public/'));
};