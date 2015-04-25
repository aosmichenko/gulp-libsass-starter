module.exports = function (gulp, plugins) {
    return function () {
        gulp.src('js/**/*.js')
	        .pipe(plugins.uglify())
	        .pipe(plugins.concat('app.min.js'))
	        .pipe(gulp.dest('./build/js'))
	        .pipe(plugins.notify("Updated JS"));
    };
};