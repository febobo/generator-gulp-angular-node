var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var $ = require('gulp-load-plugins')();


gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: 'localhost:5008',
        files : [gulp.paths.demo + "/*.*" , gulp.paths.app + "/*.*"],
        notify: true,
    });
});

gulp.task('watch' ,function(){
    gulp.watch(gulp.paths.staticPath).on('change', function(){
        browserSync.reload();
    });
})

gulp.task('nodemon', function(cb) {

    var start = false ;
    $.nodemon({
        script : 'server.js'
    })
    .on('restrat' , function(){
        if(!start){
            cb();
            start = true;
        }
    })
});

gulp.task('serve' , ['inject' , 'nodemon' , 'browser-sync' , 'watch'])
