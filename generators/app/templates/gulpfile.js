var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');
var wiredep = require('wiredep').stream;
var build = require('gulp-build');
var $ = require('gulp-load-plugins')();
gulp.paths = {
  demo : 'demo',
  public : 'app',
  src : ['app/client/modules']
}

gulp.task('browser-sync', function() {

  browserSync.init({
    proxy: 'localhost:5008',
    files : [gulp.paths.demo + "/*.*" , gulp.paths.public + "/*.*"],
    notify: true,
 });

});

gulp.task('watch' , function(){

  gulp.watch( [gulp.paths.demo + "/*.*" , gulp.paths.public + "/*.*"]).on('change', function(){
     browserSync.reload();
  });

})

gulp.task('nodemon', function(cb) {

  var start = false ;
  nodemon({
    script : 'server.js'
  })
  .on('restrat' , function(){
    if(!start){
      cb();
      start = true;
    }
  })
});

gulp.task('inject', function () {
var injectStyle = gulp.src(['client/**/*.js','client/*.js','client/**/**/.js'
    ]);
var injectJs = gulp.src(['client/styles/*.css'
    ]);
gulp.src(gulp.paths.public + '/.tmp/index.html')
.pipe($.inject(injectJs))
.pipe($.inject(injectStyle))
.pipe(wiredep({
        optional: 'configuration',
        goes: 'here'
    }))
.pipe(gulp.dest('./app'));
});

var options = {
  helpers: [{
      name: 'addition',
      fn: function(a, b) { return a + b; }
    }]
};

gulp.task('build' , function(){
   gulp.src(gulp.paths.demo + "/*.js")
      .pipe(build({ GA_ID: '123456' } , options))
      .pipe(gulp.dest('dist'))
})


gulp.task('serve' , [ 'nodemon','browser-sync' , 'watch' , 'inject'  ]);


