var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;

gulp.task('inject' , function(){

    var styleInject = gulp.src([gulp.paths.src + '/**/*.css']);
    // var scriptInject = gulp.src(['client/*.js' , 'client/**/*.js' , 'client/**/**/*.js' , 'client/**/**/**/*.js' , 'client/**/**/**/**/*.js'])

    var scriptInject = gulp.src(['client/**/*.js','client/*.js','client/**/**/.js'])
    // .pipe($.angularFilesort());

    gulp.src(gulp.paths.app + '/.tmp/index.html')
    .pipe($.inject(styleInject))
    .pipe($.inject(scriptInject))
    .pipe(wiredep({
        optional: 'configuration',
        goes: 'here'
    }))
    .pipe(gulp.dest(gulp.paths.app));
})
