var gulp = require('gulp');

gulp.task('watch', [], function() {
    gulp.watch('./app/scss/**/*.scss', ['sass']);
});
