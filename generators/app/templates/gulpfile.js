var gulp = require('gulp');

gulp.paths = {
    src : 'client',
    public : 'client/public',
    com : 'client/components',
    app : 'app',
    dist : 'dist',
    tmp : '.tmp',
    staticJs : ['client/*.js' , 'client/**/*.js' , 'client/**/**/*.js' , 'client/**/**/**/*.js' , 'client/**/**/**/**/*.js'],
    // staticPath : ['*.{js,html}' , 'client/*.{js,html}' , 'client/**/*.{js,html,css}' , 'client/**/**/*.{js,html}']
    //
    staticPath : ['*.{js,html}' , 'client/*.{js,html}' , 'client/**/*.{js,html,css}' , 'client/**/**/*.{js,html}']
}

require('require-dir')('./gulp');
