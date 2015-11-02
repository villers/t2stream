'use strict';

var gulp = require('gulp');

gulp.task('typescript-client', ['tslint'], require('./gulp/typescript-client'));
gulp.task('typescript-server', ['tslint'], require('./gulp/typescript-server'));
gulp.task('typescript', ['typescript-client', 'typescript-server']);
gulp.task('tslint', require('./gulp/tslint'));

gulp.task('serve', ['nodemon'], require('./gulp/serve').bsync);
gulp.task('nodemon', ['watch'], require('./gulp/serve').nodemon);
gulp.task('watch', ['stylus', 'typescript'], require('./gulp/watch'));
gulp.task('stylus', require('./gulp/stylus'));
