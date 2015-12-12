'use strict';

var gulp = require('gulp');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var argv = require('yargs').argv;
var gulpif = require('gulp-if');
var path = require('path');
var concat = require('gulp-concat');

function SourceRoot(file) {
    return path.join(path.relative(file.dirname, file.base), '../src/server');
}

module.exports = function () {
    return  gulp.src([__dirname + '/../src/server/**/*.ts'])
        .pipe(gulpif(!argv.production, sourcemaps.init()))
        .pipe(typescript({ module: 'commonjs', declaration: true }))
        .pipe(gulpif(!argv.production, sourcemaps.write({ includeContent: false, sourceRoot: SourceRoot })))
        .pipe(gulp.dest(__dirname + '/../dist/'));
};
