'use strict';

var gulp            = require('gulp');
var mainBowerFiles  = require('main-bower-files');
var inject          = require('gulp-inject');
var del             = require('del');

module.exports = function () {
    var path = { paths: __dirname + '/..' };
    gulp.src(mainBowerFiles(path), { base: 'bower_components' })
        .pipe(gulp.dest(__dirname + '/../dist/public/bower_components'));

    del([__dirname + '/../dist/bower_components']);
    
    return gulp.src(__dirname + '/../src/client/index.html')
        .pipe(inject(gulp.src(mainBowerFiles(path), {read: false}), {name: 'bower'}))
        .pipe(gulp.dest(__dirname + '/../dist/public'));
};