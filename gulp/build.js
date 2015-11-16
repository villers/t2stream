'use strict';

var gulp = require('gulp');

module.exports = function () {
    gulp.src(__dirname + '/../data.sqlite3')
        .pipe(gulp.dest(__dirname + '/../dist/'));

    gulp.src([__dirname + '/../src/server/**/', '!'+__dirname + '/../src/server/**/*.ts'])
        .pipe(gulp.dest(__dirname + '/../dist/'));

    return gulp.src([__dirname + '/../src/client/**', '!'+__dirname + '/../src/client/**/*.ts', '!'+__dirname + '/../src/client/**/*.styl', '!'+__dirname + '/../src/client/**/*.html'])
        .pipe(gulp.dest(__dirname + '/../dist/public/'));
};