'use strict';

var gulp        = require('gulp');
var bsync       = require('browser-sync');

module.exports = function () {
    gulp.watch(['src/client/**/*.styl'], function () {
        gulp.start('stylus');
    });

    gulp.watch(['src/client/**/*.ts'], function () {
        gulp.start('typescript-client');
    });

    gulp.watch(['src/server/**/*.ts'], function () {
        gulp.start('typescript-server');
    });

    gulp.watch(['src/client/index.html'], function(){
        gulp.start('bower');
    });

    gulp.watch(['dist/public/**/*']).on('change', bsync.reload);
};
