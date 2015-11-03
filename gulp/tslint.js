'use strict';

var gulp = require('gulp');
var tslint = require('gulp-tslint');
var stylish = require('gulp-tslint-stylish');


module.exports = function () {
    return gulp.src(['src/**/*.ts'])
        .pipe(tslint())
        .pipe(tslint.report(stylish, {
            emitError: false,
            sort: true,
            bell: true,
            fullPath: true
        }));
};