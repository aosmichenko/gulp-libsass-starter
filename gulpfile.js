var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('scripts', require('./tasks/scripts')(gulp, plugins));
gulp.task('sass', require('./tasks/sass')(gulp, plugins));

gulp.task('default', ['scripts', 'sass'], function () {
    gulp.watch('js/**/*.js', ['scripts']);
    gulp.watch('scss/**/*.scss', ['sass']);
});