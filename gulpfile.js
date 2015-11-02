'use strict';

var gulp = require('gulp');

gulp.task('typescript-client',        require('./gulp/typescript-client'));
gulp.task('typescript-server',        require('./gulp/typescript-server'));
gulp.task('typescript', ['typescript-client', 'typescript-server']);
