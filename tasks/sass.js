module.exports = function (gulp, plugins) {
    return function () {
        gulp.src('scss/**/*.scss')
          .pipe(plugins.sass({
            outputStyle: 'expanded',
            errLogToConsole: true,
            sourceComments: true,
            includePaths: ['bower_components/bourbon/dist'],
          }))
          .pipe(plugins.autoprefixer())
          .pipe(plugins.bless())
          .pipe(gulp.dest('./build/css'))
          .pipe(plugins.notify("Updated CSS"));
    };
};