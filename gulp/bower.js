'use strict';

var gulp            = require('gulp');
var mainBowerFiles  = require('main-bower-files');
var inject          = require('gulp-inject');

module.exports = function () {
    gulp.src(mainBowerFiles(), { base: 'bower_components' })
        .pipe(gulp.dest('./dist/public/bower_components'));
    
    return gulp.src('src/client/index.html')
        .pipe(inject(gulp.src(mainBowerFiles(), {read: false}), {name: 'bower'}))
        .pipe(gulp.dest('dist/public'));
};