'use strict';

var gulp        = require('gulp');
var bsync       = require('browser-sync');

module.exports = function () {
    gulp.watch([__dirname + '/../src/client/**/*.styl'], function () {
        gulp.start('stylus');
    });

    gulp.watch([__dirname + '/../src/client/**/*.ts'], function () {
        gulp.start('typescript-client');
    });

    gulp.watch([__dirname + '/../src/server/**/*.ts'], function () {
        gulp.start('typescript-server');
    });

    gulp.watch([__dirname + '/../src/client/index.html'], function(){
        gulp.start('bower');
    });

    gulp.watch([__dirname + '/../src/client/**/*.html'], function(){
        gulp.start('html');
    });

    gulp.watch([__dirname + '/../dist/public/**/*']).on('change', bsync.reload);
};
