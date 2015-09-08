var gulp = require('gulp');

gulp.paths = {
    src : 'client',
    app : 'app',
    staticJs : ['client/*.js' , 'client/**/*.js' , 'client/**/**/*.js' , 'client/**/**/**/*.js' , 'client/**/**/**/**/*.js'],
    // staticPath : ['*.{js,html}' , 'client/*.{js,html}' , 'client/**/*.{js,html,css}' , 'client/**/**/*.{js,html}']
    //
    staticPath : ['*.{js,html}' , 'client/*.{js,html}' , 'client/**/*.{js,html}' , 'client/**/**/*.{js,html}']
}

require('require-dir')('./gulp');
