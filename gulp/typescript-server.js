'use strict';

var gulp = require('gulp');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var argv = require('yargs').argv;
var gulpif = require('gulp-if');
var path = require('path');
var merge = require('merge2');
var concat = require('gulp-concat');
var removeLines = require('gulp-delete-lines');

function SourceRoot(file) {
    return path.join(path.relative(file.dirname, file.base), '../src/server');
}

module.exports = function () {
    var JSCompile = gulp.src([__dirname + '/../src/server/**/*.ts'])
        .pipe(gulpif(!argv.production, sourcemaps.init()))
        .pipe(typescript({ module: 'commonjs', declaration: true }))
        .pipe(gulpif(!argv.production, sourcemaps.write({ includeContent: false, sourceRoot: SourceRoot })))
        .pipe(gulp.dest(__dirname + '/../dist/'));

    var DTSCompile = gulp.src([__dirname + '/../src/server/Models/**/*.ts'])
        .pipe(typescript({ module: 'commonjs', declaration: true, removeComments : true }))
        .dts
        .pipe(concat('Models.d.ts'))
        .pipe(removeLines({'filters': [
            /import .*/
            ]}))
        .pipe(gulp.dest(__dirname + '/../dist/'));
        
    /*var DTSCompile = tsResult.dts
    .pipe(concat('app.d.ts'))
    .pipe(gulp.dest(__dirname + '/../dist/'));*/
    return merge([
        JSCompile,
        DTSCompile
    ]);
};
