var gulp = require('gulp'),
    sass = require('gulp-sass'),
    config = require('../../config.json');

// Get one .styl file and render 
gulp.task('sass', function () {
    gulp.src(config.paths.dev.css.pages + '*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.paths.prod.css.root));
});
