var gulp = require('gulp');
var $ = require('gulp-load-plugins')({pattern : ['gulp-*' , 'del']});
var paths = gulp.paths;

gulp.task('cache' , function(){
  gulp.src([paths.app + '/*.html' ,paths.public + '/**/*.html' , paths.com + '/**/*.html'])
  .pipe($.angularTemplatecache())
  .pipe($.minifyHtml({
    empty : true,
    spare : true,
    quotes : true
  }))
  .pipe(gulp.dest(paths.tmp + '/cache/'))
})

gulp.task('html' , ['cache' , 'inject'] , function(){
    var cacheFile = gulp.src(paths.tmp + '/cache/templates.js');
    var cacheOptions  = {
        starttag: '<!-- inject:cache -->',
        ignorePath: paths.tmp + '/cache',
        addRootSlash: false
    }

    var htmlFilter = $.filter('*.html');
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');
    var assets;

    gulp.src(paths.tmp + '/index.html')
    .pipe($.inject(cacheFile , cacheOptions))
    .pipe(assets = $.useref.assets( {}))
    .pipe($.rev())
    .pipe(jsFilter)
    .pipe($.ngAnnotate())
    .pipe($.uglify({preserveComments: $.uglifySaveLicense}))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.csso())
    .pipe(cssFilter.restore())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace())
    .pipe(htmlFilter)
    .pipe($.minifyHtml({
        empty : true,
        spare : true,
        quotes : true
    }))
    .pipe(htmlFilter.restore())
    .pipe($.print())
    .pipe(gulp.dest('./dist/'))
})

gulp.task('clean' , function(){
    $.del([gulp.paths.dist + '/' , gulp.paths.tmp + '/']).then(function(paths){
    })
})


