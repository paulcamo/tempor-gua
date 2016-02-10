var gulp = require('gulp');

gulp.task('default', ['browser-sync', 'sass', 'jade', 'fonts', 'thirdpartyJs', 'thirdpartyCss', 'data', 'root', 'images', 'scripts', 'watch']);

gulp.task('build', [ 'jade-min', 'fonts', 'thirdpartyJs', 'thirdpartyCss', 'data', 'root', 'images', 'scripts-min']);
