var Gulp = require('gulp');
var ts = require('gulp-typescript');
var RimRaf = require('gulp-rimraf');
var NoDaemon = require('gulp-nodemon');

Gulp.task('cleanBuiltDir', function(){
  return Gulp.src('dist').pipe(RimRaf());
}); 

Gulp.task('Script', ['cleanBuiltDir'], function () {
  var tsResult = Gulp.src('app/**/*.ts')
    .pipe(ts({
        module: 'CommonJS'
      }));
  return tsResult.js.pipe(Gulp.dest('dist/'));
});

Gulp.task('nodaemon', ['Script', 'watch'], function(){
    NoDaemon({
        script: './dist/app/app.js'
    }).on('restart', function(){
        console.log('nodemon restarted server.js');
    })
})

Gulp.task('watch', function (){
 Gulp.watch("app/**/*.tsc", ['Script']);    
});

/*
** Definition of the default task
*/
Gulp.task('default', ['Script']);