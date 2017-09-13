var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            open: 'external',
            baseDir: '../'
        },
        startPath: 'site'
    });

    gulp.watch([
        'app/**/*.html',
        'app/**/*.js',
        'app/**/*.css'
    ]).on('change', browserSync.reload);
});
