'use strict';

var gulp = require('gulp');

gulp.task('typescript-client', ['tslint'], require('./gulp/typescript-client'));
gulp.task('typescript-server', ['tslint'], require('./gulp/typescript-server'));
gulp.task('typescript', ['typescript-client', 'typescript-server']);
gulp.task('tslint', require('./gulp/tslint'));
gulp.task('stylus', require('./gulp/stylus'));
gulp.task('html', require('./gulp/html'));

gulp.task('serve', ['nodemon'], require('./gulp/serve').bsync);
gulp.task('nodemon', ['watch'], require('./gulp/serve').nodemon);
gulp.task('watch', ['build'], require('./gulp/watch'));

gulp.task('bower', require('./gulp/bower'));
gulp.task('clean', require('./gulp/clean'));
gulp.task('build', ['stylus', 'typescript', 'bower', 'html'], require('./gulp/build'));
