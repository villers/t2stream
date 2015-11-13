'use strict';

var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');

module.exports = function () {
    return gulp.src([__dirname + '/../src/client/**/*.html', '!'+__dirname + '/../src/client/index.html'])
        .pipe(templateCache())
        .pipe(gulp.dest(__dirname + '/../dist/public/'));
};